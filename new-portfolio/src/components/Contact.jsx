
import React, { useState } from 'react'
import '../../src/Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent!');
   
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name" 
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
        />
        <input 
          type="email" 
          name="email" 
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
        />
        <textarea 
          name="message" 
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          required
        />
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact
