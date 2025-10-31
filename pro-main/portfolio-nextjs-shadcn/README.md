# Portfolio Next.js with Shadcn UI

This project is a professional portfolio website built using Next.js and Shadcn UI. It showcases the work of a web developer and includes various sections such as About, Projects, Blog, and Contact.

## Project Structure

The project is organized into the following main directories and files:

- **app/**: Contains the main application pages and layout.
  - **layout.tsx**: Main layout for the application, including header and footer.
  - **globals.css**: Global CSS styles for the application.
  - **page.tsx**: Landing/Home page.
  - **about/**: Contains the About page.
  - **projects/**: Contains the Projects index and dynamic project detail pages.
  - **blog/**: Contains the Blog page.
  - **contact/**: Contains the Contact page.
  - **dashboard/**: Contains the Dashboard page.

- **components/**: Contains reusable UI components.
  - **ui/**: Contains UI components like Button, Card, Input, and Dropdown.
  - **Navbar.tsx**: Navigation bar component.
  - **Footer.tsx**: Footer component.
  - **Hero.tsx**: Hero section for the landing page.
  - **ProjectCard.tsx**: Component for displaying individual projects.
  - **Testimonials.tsx**: Component for showcasing client feedback.
  - **ContactForm.tsx**: Component for user inquiries.

- **lib/**: Contains utility functions and API interactions.
  - **api.ts**: Functions for API interactions.
  - **client.ts**: Client instance for making requests.
  - **markdown.ts**: Functions for parsing markdown content.

- **hooks/**: Contains custom hooks.
  - **use-theme.ts**: Custom hook for managing theme state.

- **data/**: Contains project data and site configuration.
  - **projects.ts**: Array of project data.
  - **site.config.ts**: Configuration settings for the site.

- **styles/**: Contains CSS styles.
  - **tailwind.css**: Tailwind CSS styles.
  - **shadcn.css**: Styles specific to Shadcn UI components.

- **scripts/**: Contains scripts for project setup.
  - **setup.sh**: Shell script for setting up the project environment.

- **public/**: Contains public assets.
  - **robots.txt**: Instructions for web crawlers.
  - **site.webmanifest**: Metadata for the web application.

## Getting Started

1. Clone the repository:
   ```
   git clone <repository-url>
   cd portfolio-nextjs-shadcn
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Run the development server:
   ```
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000`.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or features.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.