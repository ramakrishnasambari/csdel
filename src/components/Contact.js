import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'YOUR_WEB3FORMS_ACCESS_KEY', // Replace with your Web3Forms access key
          to_email: 'csdelindia@gmail.com',
          subject: `New Contact Form Submission from ${formData.firstName} ${formData.lastName}`,
          from_name: `${formData.firstName} ${formData.lastName}`,
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact-section" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/b2.jpg)` }}>
      <div className="contact-overlay">
        <div className="contact-container">
          <div className="contact-left">
            <h2 className="join-title">Join us</h2>
            <p className="join-subtitle">
              in shaping a sustainable future together, we can turn aspirations into lasting realities.
            </p>
            
            <div className="get-in-touch">Get In Touch</div>
            
            <div className="contact-details">
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <div className="contact-text">
                  507, 3rd Floor, Sector E, Pocket 2,<br />
                  Vasant Kunj, New Delhi, India
                </div>
              </div>
              
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <div className="contact-text">
                  <a href="tel:+919891921959">(+91) 9891921959</a>,{' '}
                  <a href="tel:+919910849280">9910849280</a>,<br />
                  <a href="tel:+917011025490">7011025490</a>
                </div>
              </div>
              
              <div className="contact-item">
                <span className="contact-icon">✉️</span>
                <div className="contact-text">
                  <a href="mailto:csdelindia@gmail.com">csdelindia@gmail.com</a>
                </div>
              </div>
            </div>

            <div className="find-us-section">
              <div className="find-us-title">Find Us</div>
              <a 
                href="https://www.google.com/maps/place/Ambience+Mall,+Vasant+Kunj/@28.5414101,77.1551359,17z" 
                target="_blank" 
                rel="noopener noreferrer"
                className="map-container"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.7!2d77.1551359!3d28.5414101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1dbecef239fd%3A0xae39b6e3adbb268b!2sAmbience%20Mall%2C%20Vasant%20Kunj!5e0!3m2!1sen!2sin!4v1707500000000!5m2!1sen!2sin"
                  width="100%"
                  height="250"
                  style={{ border: 0, borderRadius: '10px', pointerEvents: 'none' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="CSDEL Location"
                ></iframe>
              </a>
            </div>
          </div>

          <div className="contact-right">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">
                    Name<span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    className="form-input"
                    placeholder="Ex. john"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                  <div className="form-sublabel">First</div>
                </div>
                
                <div className="form-group">
                  <label className="form-label" style={{ opacity: 0 }}>Last</label>
                  <input
                    type="text"
                    name="lastName"
                    className="form-input"
                    placeholder="Marcus"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                  <div className="form-sublabel">Last</div>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">
                  Email<span className="required">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  className="form-input"
                  placeholder="xyz@abc.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">
                  Phone No.<span className="required">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  className="form-input"
                  placeholder="Ex., 7856948532"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Enter Your Message Here</label>
                <textarea
                  name="message"
                  className="form-textarea"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              {submitStatus === 'success' && (
                <div className="submit-success">
                  Thank you for your message! We will get back to you soon.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="submit-error">
                  Something went wrong. Please try again later.
                </div>
              )}

              <button type="submit" className="submit-button" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
