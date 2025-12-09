import './Experience.css'

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Software Developer',
      company: 'OMA Emirates',
      location: 'Sharjah, UAE',
      period: 'Jan 2022 – Present',
      description: [
        'Built payment gateway & EFT Switch (ISO 8583) using Java 17 & Spring Boot',
        'Developed REST APIs, integrated AWS services (Lambda, EKS, SNS, EC2, S3, Secret Manager)',
        'Implemented microservices, messaging systems (JMS, Kafka), CI/CD pipelines, Docker, K8s',
        'Ensured PCI-DSS/PA-DSS compliance and enhanced observability with AppDynamics & Splunk'
      ]
    },
    {
      title: 'Software Developer',
      company: 'Hive-Worx',
      location: 'Islamabad, Pakistan',
      period: 'Jan 2021 – Nov 2021',
      description: [
        'Developed J2EE/Spring Boot services with JWT authentication',
        'Built unit tests using JUnit (TDD)',
        'Agile development, enterprise collaboration with Apache Cosmo'
      ]
    },
    {
      title: 'Software Developer',
      company: 'Xorlogics',
      location: 'Islamabad, Pakistan',
      period: 'Aug 2019 – Dec 2020',
      description: [
        'Full-stack development (Spring Boot + Angular)',
        'JBOSS deployment + Jenkins automation'
      ]
    },
    {
      title: 'Java Developer (Academic Project)',
      company: 'UET Peshawar',
      location: 'Peshawar, Pakistan',
      period: 'Sep 2018 – Jun 2019',
      description: [
        'Android ML-based SMS spam detection system'
      ]
    }
  ]

  return (
    <section id="experience" className="section">
      <h2 className="section-title">Experience</h2>
      
      <div className="experience-timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-item">
            <div className="experience-marker"></div>
            <div className="experience-content">
              <div className="experience-header">
                <h3 className="experience-title">{exp.title}</h3>
                <span className="experience-period">{exp.period}</span>
              </div>
              <p className="experience-company">{exp.company} • {exp.location}</p>
              <ul className="experience-description">
                {exp.description.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience

