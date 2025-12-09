import { FaJava, FaCloud, FaDatabase, FaCode, FaShieldAlt, FaServer } from 'react-icons/fa'
import './Skills.css'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Backend',
      icon: <FaCode />,
      skills: ['Java', 'J2EE', 'Spring Boot', 'Microservices', 'REST APIs', 'Hibernate/JPA']
    },
    {
      title: 'Cloud & DevOps',
      icon: <FaCloud />,
      skills: ['AWS (Lambda, EKS, EC2, S3, SNS, Secret Manager, Elasticache)', 'Docker', 'Kubernetes', 'GitHub Actions', 'GitLab', 'Jenkins', 'JBOSS']
    },
    {
      title: 'Messaging/Integration',
      icon: <FaServer />,
      skills: ['Kafka', 'JMS', 'API Gateway', 'Cosmo']
    },
    {
      title: 'Security',
      icon: <FaShieldAlt />,
      skills: ['Application Security', 'PCI DSS', 'PA-DSS']
    },
    {
      title: 'Databases',
      icon: <FaDatabase />,
      skills: ['Oracle', 'PostgreSQL', 'MySQL', 'MS SQL']
    },
    {
      title: 'Frontend',
      icon: <FaCode />,
      skills: ['ReactJS', 'Redux', 'Angular', 'JavaScript', 'Material UI']
    }
  ]

  return (
    <section id="skills" className="section">
      <h2 className="section-title">Skills</h2>
      
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category">
            <div className="skill-icon">{category.icon}</div>
            <h3 className="skill-category-title">{category.title}</h3>
            <div className="skill-tags">
              {category.skills.map((skill, skillIndex) => (
                <span key={skillIndex} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills

