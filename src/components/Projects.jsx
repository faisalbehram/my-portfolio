import './Projects.css'

const Projects = () => {
  const projects = [
    {
      title: 'SoftPOS',
      description: 'Android POS integrated with ISO 8583 EFT Switch for secure payment processing.',
      tech: ['Android', 'ISO 8583', 'Java', 'Spring Boot']
    },
    {
      title: 'Nano-Switch',
      description: 'Migrated monolithic architecture to Spring Boot microservices for improved scalability.',
      tech: ['Spring Boot', 'Microservices', 'Java', 'Docker']
    },
    {
      title: 'Nano-Pay',
      description: 'Real-time payment processing system with high throughput and low latency.',
      tech: ['Java', 'Kafka', 'AWS', 'Microservices']
    },
    {
      title: 'Payment Gateway',
      description: 'PCI-compliant microservices platform built with Java, AWS, and Docker for secure transactions.',
      tech: ['Java', 'AWS', 'Docker', 'PCI-DSS', 'Kubernetes']
    },
    {
      title: 'Rentaga',
      description: 'E-commerce and B2B rental platform with modern user interface and payment integration.',
      tech: ['Spring Boot', 'Angular', 'PostgreSQL', 'AWS']
    },
    {
      title: 'Ghanem Links',
      description: 'E-commerce platform with B2B capabilities, featuring comprehensive rental management system.',
      tech: ['Spring Boot', 'React', 'MySQL', 'Docker']
    }
  ]

  return (
    <section id="projects" className="section">
      <h2 className="section-title">Projects</h2>
      
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-tech">
              {project.tech.map((tech, techIndex) => (
                <span key={techIndex} className="tech-badge">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects

