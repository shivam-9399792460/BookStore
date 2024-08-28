import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/Contact.css';

const Contact = () => {
    return (
        <div className="contact-container">
            <h1>Contact Us</h1>
            <p>We'd love to hear from you! Whether you have a question, a suggestion, or just want to say hello, feel free to reach out to us.</p>

            <h2>Get in Touch</h2>
            <ul>
                <li><strong>Email:</strong> support@bookhaven.com</li>
                <li><strong>Phone:</strong> +1 (555) 123-4567</li>
                <li><strong>Address:</strong> 123 Book Haven Lane, Novel City, Fictionland 98765</li>
            </ul>

            <h2>Follow Us</h2>
            <p>Stay connected with us on social media:</p>
            <ul className="social-media-list">
                <li><Link href="https://facebook.com/bookhaven" target="_blank" rel="noopener noreferrer">Facebook</Link></li>
                <li><Link href="https://twitter.com/bookhaven" target="_blank" rel="noopener noreferrer">Twitter</Link></li>
                <li><Link href="https://instagram.com/bookhaven" target="_blank" rel="noopener noreferrer">Instagram</Link></li>
            </ul>

            <h2>Business Hours</h2>
            <p>Our customer service team is available:</p>
            <ul>
                <li>Monday - Friday: 9:00 AM - 6:00 PM</li>
                <li>Saturday: 10:00 AM - 4:00 PM</li>
                <li>Sunday: Closed</li>
            </ul>
        </div>
    );
};

export default Contact;
