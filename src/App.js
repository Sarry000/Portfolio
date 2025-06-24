import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Sample projects data
  const projects = [
    {
      id: 1,
      title: "Rocket Boster ",
      category: "Unity Game",
      description: "A thrilling space exploration game built with Unity 3D featuring realistic physics and stunning visuals.",
      image: "🚀",
      technologies: ["Unity", "C#", "Blender"],
      status: "Completed"
    },
    {
      id: 2,
      title: "Pixel Adventure",
      category: "Mobile Game",
      description: "2D platformer game with retro pixel art style, developed for Android and iOS platforms.",
      image: "🎮",
      technologies: ["Unity", "C#", "Mobile"],
      status: "In Development"
    },
    {
      id: 3,
      title: "Web Game Engine",
      category: "Web Development",
      description: "Custom JavaScript game engine for browser-based games with physics simulation.",
      image: "⚡",
      technologies: ["JavaScript", "HTML5", "Canvas"],
      status: "Completed"
    },
    {
      id: 4,
      title: "VR Experience",
      category: "Virtual Reality",
      description: "Immersive VR experience showcasing interactive environments and gameplay mechanics.",
      image: "🥽",
      technologies: ["Unity", "VR", "C#"],
      status: "Prototype"
    }
  ];

  // Sample certificates data
  const certificates = [
    {
      id: 1,
      title: "Unity Certified Developer",
      issuer: "Unity Technologies",
      date: "2024",
      image: "🏆"
    },
    {
      id: 2,
      title: "C# Programming Certificate",
      issuer: "Microsoft",
      date: "2024",
      image: "💻"
    },
    {
      id: 3,
      title: "Game Design Fundamentals",
      issuer: "University",
      date: "2023",
      image: "🎯"
    }
  ];

  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Unity Game', 'Mobile Game', 'Web Development', 'Virtual Reality'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  // Smooth scrolling function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  // Handle scroll events for active section highlighting
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'certificates', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <span className="logo-text">Sarthak</span>
            <span className="logo-accent">.</span>
          </div>
          
          <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            {['home', 'about', 'projects', 'certificates', 'contact'].map((section) => (
              <button
                key={section}
                className={`nav-link ${activeSection === section ? 'active' : ''}`}
                onClick={() => scrollToSection(section)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>

          <button
            className="nav-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-background"></div>
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="name-highlight">Sarthak Bukane</span>
            </h1>
            <h2 className="hero-subtitle">Game Developer & Software Engineer</h2>
            <p className="hero-description">
              Fresh graduate passionate about creating immersive gaming experiences 
              and innovative software solutions. Let's build the future of interactive entertainment!
            </p>
            <div className="hero-buttons">
              <button 
                className="btn-primary"
                onClick={() => scrollToSection('projects')}
              >
                View My Work
              </button>
              <button 
                className="btn-secondary"
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
        <div className="hero-decoration">
          <div className="floating-icon">🎮</div>
          <div className="floating-icon">⚡</div>
          <div className="floating-icon">🚀</div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p className="about-intro">
                I'm a recent graduate with a passion for game development and software engineering. 
                My journey began with curiosity about how games work, and it has evolved into a 
                dedicated pursuit of creating engaging interactive experiences.
              </p>
              <div className="skills-grid">
                <div className="skill-category">
                  <h4>Game Development</h4>
                  <div className="skills">
                    <span className="skill-tag">Unity</span>
                    <span className="skill-tag">C#</span>
                    <span className="skill-tag">Unreal Engine</span>
                    <span className="skill-tag">Game Design</span>
                  </div>
                </div>
                <div className="skill-category">
                  <h4>Programming</h4>
                  <div className="skills">
                    <span className="skill-tag">JavaScript</span>
                    <span className="skill-tag">Python</span>
                    <span className="skill-tag">Java</span>
                    <span className="skill-tag">React</span>
                  </div>
                </div>
                <div className="skill-category">
                  <h4>Tools & Others</h4>
                  <div className="skills">
                    <span className="skill-tag">Git</span>
                    <span className="skill-tag">Blender</span>
                    <span className="skill-tag">Photoshop</span>
                    <span className="skill-tag">Node.js</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="about-image">
              <div className="profile-card">
                <div className="profile-avatar">
                  <span className="avatar-text">SB</span>
                </div>
                <h3>Sarthak Bukane</h3>
                <p>Game Developer</p>
                <div className="social-links">
                  <a href="https://linkedin.com" className="social-link">
                    <span>LinkedIn</span>
                  </a>
                  <a href="https://github.com" className="social-link">
                    <span>GitHub</span>
                  </a>
                  <a href="https://twitter.com" className="social-link">
                    <span>Twitter</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle">Showcasing my journey in game development and software engineering</p>
          
          <div className="filter-buttons">
            {categories.map((category) => (
              <button
                key={category}
                className={`filter-btn ${filter === category ? 'active' : ''}`}
                onClick={() => setFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-image">
                  <span className="project-icon">{project.image}</span>
                  <div className="project-overlay">
                    <button className="overlay-btn">View Details</button>
                    <button className="overlay-btn">Live Demo</button>
                  </div>
                </div>
                <div className="project-content">
                  <div className="project-header">
                    <h3 className="project-title">{project.title}</h3>
                    <span className={`project-status ${project.status.toLowerCase().replace(' ', '-')}`}>
                      {project.status}
                    </span>
                  </div>
                  <p className="project-category">{project.category}</p>
                  <p className="project-description">{project.description}</p>
                  <div className="project-technologies">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="certificates">
        <div className="container">
          <h2 className="section-title">Certificates & Achievements</h2>
          <p className="section-subtitle">Recognition of my learning journey and achievements</p>
          
          <div className="certificates-grid">
            {certificates.map((cert) => (
              <div key={cert.id} className="certificate-card">
                <div className="certificate-icon">
                  <span>{cert.image}</span>
                </div>
                <div className="certificate-content">
                  <h3 className="certificate-title">{cert.title}</h3>
                  <p className="certificate-issuer">{cert.issuer}</p>
                  <p className="certificate-date">{cert.date}</p>
                  <button className="certificate-btn">View Certificate</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Let's Connect</h2>
          <p className="section-subtitle">Ready to collaborate on your next project or discuss opportunities</p>
          
          <div className="contact-content">
            <div className="contact-info">
              <h3>Get In Touch</h3>
              <p>I'm always excited to discuss new opportunities, collaborate on projects, or just chat about game development!</p>
              
              <div className="contact-methods">
                <div className="contact-method">
                  <span className="contact-icon">📧</span>
                  <div>
                    <h4>Email</h4>
                    <p>sarry2539@gmail.com</p>
                  </div>
                </div>
                <div className="contact-method">
                  <span className="contact-icon">💼</span>
                  <div>
                    <h4>LinkedIn</h4>
                    <p>Connect with me professionally</p>
                  </div>
                </div>
                <div className="contact-method">
                  <span className="contact-icon">💻</span>
                  <div>
                    <h4>GitHub</h4>
                    <p>Check out my code</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form">
              <form className="form">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input type="text" id="subject" name="subject" required />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows="5" required></textarea>
                </div>
                <button type="submit" className="submit-btn">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <p>&copy; 2024 Sarthak Bukane. Built with passion for gaming and technology.</p>
            <div className="footer-links">
              <a href="#home" onClick={() => scrollToSection('home')}>Back to Top</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;