# Faisal Behram - Portfolio Website

A modern, sleek Swiss-design portfolio website showcasing the work and expertise of Faisal Behram, Senior Software Engineer.

## Features

- **Swiss Design Aesthetic**: Minimal, clean, high-contrast layout inspired by Apple's design language
- **Responsive Design**: Fully responsive for mobile, tablet, and desktop
- **Dark/Light Mode**: Toggle between light and dark themes
- **Smooth Animations**: Subtle micro-interactions and transitions
- **Sticky Navigation**: Fixed navigation bar with smooth scrolling
- **Sections**:
  - Hero section with profile and call-to-action
  - About section with bio and education
  - Skills section with categorized expertise
  - Experience timeline
  - Services offered
  - Projects portfolio
  - Contact form and information

## Tech Stack

- React 18
- Vite
- React Icons
- CSS3 with CSS Variables
- Inter Font (Google Fonts)

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Customization

### Update Resume Download Link

Edit `src/components/Hero.jsx` and update the `handleDownloadResume` function to point to your resume PDF.

### Update Contact Form

Edit `src/components/Contact.jsx` and integrate with your preferred backend service or email service (e.g., Formspree, EmailJS, or your own API).

### Add Profile Picture

Replace the placeholder in `src/components/Hero.jsx` with an actual profile image:

```jsx
<img src="/path/to/profile.jpg" alt="Faisal Behram" className="profile-image" />
```

## Project Structure

```
├── src/
│   ├── components/
│   │   ├── Navigation.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   ├── Services.jsx
│   │   ├── Projects.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

## Design Principles

- **Minimalism**: Clean, uncluttered interface
- **Typography**: Inter font for modern, readable text
- **Whitespace**: Generous spacing for visual breathing room
- **High Contrast**: Black/white/gray palette
- **Grid Alignment**: Precise, structured layouts
- **Micro-interactions**: Subtle hover effects and transitions

## Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions and custom domain setup.

### Quick Deploy to Vercel

1. Push code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Deploy automatically
4. Add custom domain in Vercel settings

## License

This project is open source and available for personal use.

