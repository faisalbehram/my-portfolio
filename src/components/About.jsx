import './About.css'

const About = () => {
  return (
    <section id="about" className="section">
      <h2 className="section-title">About</h2>
      
      <div className="about-content">
        <div className="about-bio">
          <p className="bio-text">
            A highly skilled Senior Software Engineer with 6+ years of experience specializing in scalable, secure, and high-performance microservices and cloud-native systems. Expertise in Java, Spring Boot, AWS, Kafka, PCI-DSS compliant fintech systems, and modern CI/CD DevOps workflows. Experienced in building enterprise-grade payment solutions, distributed systems, and API-driven platforms.
          </p>
        </div>

        <div className="about-details">
          <div className="detail-card">
            <h3 className="detail-title">Education</h3>
            <div className="detail-content">
              <p className="detail-item">
                <strong>Bachelor of Software Engineering</strong>
              </p>
              <p className="detail-item-secondary">UET Peshawar, Pakistan — 2019</p>
            </div>
          </div>

          <div className="detail-card">
            <h3 className="detail-title">Location</h3>
            <div className="detail-content">
              <p className="detail-item">Abu Dhabi, United Arab Emirates</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

