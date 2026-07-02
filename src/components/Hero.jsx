import { FaDownload } from 'react-icons/fa'
import profileImage from '../assets/56580297.jpeg'
import './Hero.css'

const Hero = () => {
  const handleDownloadResume = () => {
    // Placeholder for resume download
    alert('Resume download functionality - Add your resume PDF link here')
  }

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-image-placeholder">
            <img
              src={profileImage}
              alt="Faisal Behram"
              className="profile-image"
            />
          </div>
          
          <h1 className="hero-name">Faisal Behram</h1>
          <p className="hero-title">Senior Software Engineer</p>
          <p className="hero-tagline">
            Building scalable, secure, and high-performance microservices and cloud-native systems
          </p>
          
          <div className="hero-actions">
            <button className="btn-primary" onClick={handleDownloadResume}>
              <FaDownload /> Download Resume
            </button>
            <a href="#contact" className="btn-secondary">
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

