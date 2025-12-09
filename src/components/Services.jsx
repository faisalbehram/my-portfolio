import './Services.css'

const Services = () => {
  const services = [
    {
      title: 'Java Backend Engineering',
      description: 'Expert development of robust, scalable Java applications and enterprise solutions.'
    },
    {
      title: 'Spring Boot Microservices Development',
      description: 'Building distributed microservices architectures with Spring Boot for high-performance systems.'
    },
    {
      title: 'Cloud Solutions on AWS',
      description: 'Designing and implementing cloud-native solutions leveraging AWS services for scalability and reliability.'
    },
    {
      title: 'FinTech & Payment Systems Development',
      description: 'Specialized in developing secure, compliant payment processing systems and financial technology solutions.'
    },
    {
      title: 'PCI-DSS Compliant Systems',
      description: 'Ensuring payment systems meet PCI-DSS and PA-DSS compliance standards for secure transactions.'
    },
    {
      title: 'API & Integration Services',
      description: 'Creating RESTful APIs and seamless integrations for enterprise applications and third-party services.'
    },
    {
      title: 'DevOps CI/CD Automation',
      description: 'Setting up automated CI/CD pipelines using GitHub Actions, GitLab, Jenkins for streamlined deployments.'
    },
    {
      title: 'Kafka-based Messaging Architectures',
      description: 'Designing and implementing event-driven architectures using Apache Kafka for real-time data processing.'
    }
  ]

  return (
    <section id="services" className="section">
      <h2 className="section-title">Services</h2>
      
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services

