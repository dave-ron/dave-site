import React from 'react';

const testimonials = [
  {
    name: "John Doe",
    feedback: "This developer did an amazing job on my website! Highly recommend.",
    position: "CEO, Example Corp"
  },
  {
    name: "Jane Smith",
    feedback: "Professional and efficient. The project was completed ahead of schedule.",
    position: "Marketing Director, Another Co."
  },
  {
    name: "Alice Johnson",
    feedback: "Fantastic experience! The team understood my vision and delivered perfectly.",
    position: "Freelancer"
  }
];

const Testimonials = () => {
  return (
    <section className="py-10">
      <h2 className="text-2xl font-bold text-center mb-6">What Our Clients Say</h2>
      <div className="max-w-3xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6 mb-4">
            <p className="text-gray-700 italic">"{testimonial.feedback}"</p>
            <p className="mt-4 font-semibold">{testimonial.name}</p>
            <p className="text-gray-500">{testimonial.position}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;