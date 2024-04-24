import React from 'react';
import '../../src/App.css';

const ContactUs = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>We'd love to hear from you! Reach out to us with any questions or feedback.</p>
      <form>
        <label htmlFor="name">Your Name:</label>
        <input type="text" id="name" name="name" placeholder="Your name..." />

        <label htmlFor="email">Your Email:</label>
        <input type="email" id="email" name="email" placeholder="Your email..." />

        <label htmlFor="message">Your Message:</label>
        <textarea id="message" name="message" placeholder="Your message..."></textarea>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactUs;