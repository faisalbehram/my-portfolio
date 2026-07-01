import { useState } from 'react'
import { FaEnvelope, FaPhone, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Placeholder for form submission
    alert('Contact form submission - Integrate with your backend/email service')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="section">
      <h2 className="section-title">Contact</h2>
      
      <div className="contact-container">
        <div className="contact-info">
          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <div>
              <h3 className="contact-label">Email</h3>
              <a href="mailto:faisalbehram66@gmail.com" className="contact-link">
                faisalbehram66@gmail.com
              </a>
            </div>
          </div>

          <div className="contact-item">
            <FaPhone className="contact-icon" />
            <div>
              <h3 className="contact-label">Phone</h3>
              <a href="tel:+971564625336" className="contact-link">
                +971 56 462 5336
              </a>
            </div>
          </div>

          <div className="contact-item">
            <FaLinkedin className="contact-icon" />
            <div>
              <h3 className="contact-label">LinkedIn</h3>
              <a 
                href="https://linkedin.com/in/faisalbehram" 
                target="_blank" 
                rel="noopener noreferrer"
                className="contact-link"
              >
                linkedin.com/in/faisalbehram
              </a>
            </div>
          </div>

          <div className="contact-item">
            <FaMapMarkerAlt className="contact-icon" />
            <div>
              <h3 className="contact-label">Location</h3>
              <p className="contact-text">Abu Dhabi, United Arab Emirates</p>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="form-textarea"
              rows="6"
              required
            ></textarea>
          </div>

          <button type="submit" className="btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact

