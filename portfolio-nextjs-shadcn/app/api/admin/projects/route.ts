import { NextResponse } from "next/server";
import { prisma } from "../../../../lib/db";
import { requireServerSession } from "../../../../lib/requireSession";

function isAdminEmail(email?: string | null) {
  const env = process.env.ADMIN_EMAILS ?? process.env.ADMIN_EMAIL ?? "";
  const allowed = env.split(",").map((s) => s.trim()).filter(Boolean);
  return email ? allowed.includes(email) : false;
}

export async function POST(request: Request) {
  try {
    const token = await requireServerSession(request).catch((err) => {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    });

    // token may be NextAuth JWT payload; typical field: email
    const email = (token as any)?.email ?? (token as any)?.user?.email;
    if (!isAdminEmail(email)) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const payload = await request.json();
    const { slug, title, description, url, tags } = payload;

    if (!slug || !title || !description) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const project = await prisma.project.create({
      data: {
        slug,
        title,
        description,
        url,
        tags: Array.isArray(tags) ? tags.join(",") : tags ?? null,
      },
    });

    return NextResponse.json(project, { status: 201 });
  } catch (err: any) {
    if (err?.status) return NextResponse.json({ error: err.message }, { status: err.status });
    console.error(err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}