import React from 'react';
import ContactForm from '@/components/ContactForm';

const ContactPage = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
            <p className="mb-4">We would love to hear from you! Please fill out the form below to get in touch.</p>
            <ContactForm />
        </div>
    );
};

export default ContactPage;