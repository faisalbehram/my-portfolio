import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">
          © {currentYear} Faisal Behram. All rights reserved.
        </p>
        <p className="footer-text-secondary">
          Built with React & Vite
        </p>
      </div>
    </footer>
  )
}

export default Footer

