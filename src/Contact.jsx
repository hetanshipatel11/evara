import React from "react";

const Contact = () => {
    return (
        <>
    <div className="contact-us">
      {/* Contact Form Section */}
      <section className="contact-form">
        <h2>Contact Us</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" placeholder="Your Message" required></textarea>
          </div>
          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </section>

      {/* Contact Information Section */}
      <section className="contact-info">
        <h2>Get in Touch</h2>
        <p>Feel free to contact us through the details below:</p>
        <ul>
          <li><strong>Email:</strong> support@example.com</li>
          <li><strong>Phone:</strong> +1 (123) 456-7890</li>
          <li><strong>Address:</strong> 1234 Street Name, City, State, ZIP</li>
        </ul>
        <div className="map">
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093747!2d144.95373631531583!3d-37.816279442021095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5774b56715d0!2sExample%20Location!5e0!3m2!1sen!2sus!4v1682415322824!5m2!1sen!2sus"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </div>
        </>
    )
}
export default Contact;