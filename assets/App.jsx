const styles = {
  // General
  body: {
    fontFamily: "'Inter', sans-serif",
    backgroundColor: "#121212",
    color: "#E0E0E0",
    lineHeight: PHI,
  }, // Layout & Spacing (Golden Ratio Applied)
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "2rem",
  },
  section: {
    padding: `calc(2rem * ${PHI}) 0`,
    borderBottom: "1px solid #222",
  }, // Typography (Golden Ratio Applied)
  h1: {
    fontSize: `calc(1.8rem * ${PHI})`, // ~74px
    fontWeight: "700",
    color: "#FFFFFF",
    marginBottom: "1rem",
    lineHeight: 1.2,
  },
  h2: {
    fontSize: `calc(1.5rem * ${PHI})`, // ~39px
    fontWeight: "600",
    color: "#FFFFFF",
    marginBottom: `calc(1.5rem * ${PHI})`,
    textAlign: "center",
    position: "relative",
  },
  h3: {
    fontSize: "1.5rem", // ~24px
    color: "#F5D0A9",
    fontWeight: "600",
  },
  p: {
    fontSize: "1rem", // Base size
    marginBottom: "1rem",
    maxWidth: "75ch", // Optimal line length for readability
  }, // Components
  header: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    padding: "1rem 2rem",
    backgroundColor: "rgba(18, 18, 18, 0.8)",
    backdropFilter: "blur(10px)",
    zIndex: 1000,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid #222",
  },
  navLink: {
    color: "#E0E0E0",
    textDecoration: "none",
    margin: "0 1rem",
    fontWeight: "500",
    transition: "color 0.3s ease",
  },
  hero: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  heroLayout: {
    display: "grid",
    gridTemplateColumns: `1fr ${1 / PHI}fr`, // Golden Ratio split
    gap: `calc(2rem * ${PHI})`,
    alignItems: "center",
  },
  ctaButton: {
    backgroundColor: "#F5D0A9",
    color: "#121212",
    border: "none",
    padding: "0.8rem 2rem",
    borderRadius: "50px",
    fontWeight: "bold",
    textDecoration: "none",
    transition:
      "transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease",
    display: "inline-block",
    marginTop: "1rem",
  },
  projectCard: {
    backgroundColor: "#1E1E1E",
    borderRadius: "15px",
    overflow: "hidden",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    border: "1px solid #282828",
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
  projectCardBody: {
    padding: "1.5rem",
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
  },
  projectLinks: {
    marginTop: "auto",
  },
  skillIcon: {
    fontSize: "3rem",
    color: "#F5D0A9",
    transition: "transform 0.3s ease",
    display: "inline-block", // For SVG sizing
    width: "3rem", // For SVG sizing
    height: "3rem", // For SVG sizing
  },
  skillCard: {
    background: "transparent",
    border: "none",
    textAlign: "center",
  },
  contactForm: {
    maxWidth: "700px",
    margin: "0 auto",
    backgroundColor: "#1E1E1E",
    padding: `calc(1.5rem * ${PHI})`,
    borderRadius: "15px",
    border: "1px solid #282828",
  },
  formControl: {
    backgroundColor: "#282828",
    border: "1px solid #333",
    color: "#E0E0E0",
  },
  footer: {
    textAlign: "center",
    padding: "2rem 0",
    marginTop: `calc(2rem * ${PHI})`,
    fontSize: "0.9rem",
    color: "#888",
  },
  socialIcon: {
    fontSize: "1.5rem",
    color: "#E0E0E0",
    margin: "0 0.75rem",
    transition: "color 0.3s ease",
  },
};

// --- DUMMY DATA ---
const developerInfo = {
  name: "Alex Doe",
  title: "Full-Stack Developer",
  bio: "A passionate and creative full-stack developer with a knack for building elegant, efficient, and scalable web applications. I thrive on turning complex problems into beautiful, intuitive digital experiences. My approach is rooted in clean code, user-centric design, and a constant drive to learn and adapt to new technologies.",
  contactEmail: "alex.doe@email.com",
  linkedin: "https://linkedin.com/in/alex-doe",
  github: "https://github.com/alex-doe",
};

const projects = [
  {
    title: "Project Phoenix",
    description:
      "A comprehensive project management tool designed for agile teams. Features real-time collaboration, task tracking, and insightful analytics.",
    tech: ["React", "Node.js", "MongoDB", "Socket.IO"],
    liveUrl: "#",
    repoUrl: "#",
    image: "https://placehold.co/600x400/1E1E1E/F5D0A9?text=Project+Phoenix",
  },
  {
    title: "QuantumLeap E-commerce",
    description:
      "A modern e-commerce platform with a focus on user experience and performance. Integrated with Stripe for payments and built with a scalable microservices architecture.",
    tech: ["React", "Express", "PostgreSQL", "Docker"],
    liveUrl: "#",
    repoUrl: "#",
    image: "https://placehold.co/600x400/282828/F5D0A9?text=QuantumLeap",
  },
  {
    title: "DataViz Dashboard",
    description:
      "An interactive data visualization dashboard for analyzing large datasets. Utilizes D3.js for dynamic charts and provides powerful filtering capabilities.",
    tech: ["React", "Python (Flask)", "D3.js", "AWS"],
    liveUrl: "#",
    repoUrl: "#",
    image: "https://placehold.co/600x400/1A1A1A/F5D0A9?text=DataViz",
  },
];

// --- CUSTOM SVG ICONS ---
const MongoDbIcon = ({ style }) => (
  <svg
    style={style}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
           {" "}
    <path d="M16.13,15.34c-1.39,2.26-4.13,3.16-6.39,1.77c-2.26-1.39-3.16-4.13-1.77-6.39c1.39-2.26,4.13-3.16,6.39-1.77 C16.62,10.34,17.52,13.08,16.13,15.34z M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M12,20 c-4.41,0-8-3.59-8-8s3.59-8,8-8s8,3.59,8,8S16.41,20,12,20z" />
       {" "}
  </svg>
);

const PostgreSqlIcon = ({ style }) => (
  <svg
    style={style}
    viewBox="0 0 128 128"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
           {" "}
    <path d="M64 128C28.7 128 0 99.3 0 64S28.7 0 64 0s64 28.7 64 64-28.7 64-64 64zM40.2 40.2h10.1v47.6H40.2V40.2zm18.8 0h10.1v47.6H59V40.2zm18.8 0h10.1v34.4h-10.1V40.2zm0 37.9c0 2.8-2.3 5.1-5.1 5.1s-5.1-2.3-5.1-5.1 2.3-5.1 5.1-5.1 5.1 2.3 5.1 5.1z" />
       {" "}
  </svg>
);

const skills = [
  {
    name: "JavaScript (ES6+)",
    icon: <i className="fab fa-js-square" style={styles.skillIcon}></i>,
  },
  {
    name: "React",
    icon: <i className="fab fa-react" style={styles.skillIcon}></i>,
  },
  {
    name: "Node.js",
    icon: <i className="fab fa-node-js" style={styles.skillIcon}></i>,
  },
  {
    name: "HTML5 & CSS3",
    icon: (
      <span>
        <i className="fab fa-html5" style={styles.skillIcon}></i>{" "}
        <i className="fab fa-css3-alt" style={styles.skillIcon}></i>
      </span>
    ),
  },
  { name: "MongoDB", icon: <MongoDbIcon style={styles.skillIcon} /> },
  { name: "PostgreSQL", icon: <PostgreSqlIcon style={styles.skillIcon} /> },
  {
    name: "AWS",
    icon: <i className="fab fa-aws" style={styles.skillIcon}></i>,
  },
  {
    name: "Docker",
    icon: <i className="fab fa-docker" style={styles.skillIcon}></i>,
  },
];

// --- COMPONENTS ---

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkHoverStyle = (e) => {
    e.target.style.color = "#F5D0A9";
  };
  const linkUnhoverStyle = (e) => {
    e.target.style.color = "#E0E0E0";
  };

  return (
    <header
      style={{
        ...styles.header,
        boxShadow: scrolled ? "0 2px 10px rgba(0,0,0,0.3)" : "none",
      }}
    >
           {" "}
      <div style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#FFFFFF" }}>
                {developerInfo.name.split(" ")[0][0]}.
        {developerInfo.name.split(" ")[1][0]}.      {" "}
      </div>
           {" "}
      <nav>
               {" "}
        <a
          href="#about"
          style={styles.navLink}
          onMouseEnter={linkHoverStyle}
          onMouseLeave={linkUnhoverStyle}
        >
          About
        </a>
               {" "}
        <a
          href="#projects"
          style={styles.navLink}
          onMouseEnter={linkHoverStyle}
          onMouseLeave={linkUnhoverStyle}
        >
          Projects
        </a>
               {" "}
        <a
          href="#skills"
          style={styles.navLink}
          onMouseEnter={linkHoverStyle}
          onMouseLeave={linkUnhoverStyle}
        >
          Skills
        </a>
               {" "}
        <a
          href="#contact"
          style={styles.navLink}
          onMouseEnter={linkHoverStyle}
          onMouseLeave={linkUnhoverStyle}
        >
          Contact
        </a>
             {" "}
      </nav>
         {" "}
    </header>
  );
};

const Hero = () => {
  const ctaHoverStyle = (e) => {
    e.target.style.transform = "translateY(-3px)";
    e.target.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.2)";
  };
  const ctaUnhoverStyle = (e) => {
    e.target.style.transform = "translateY(0)";
    e.target.style.boxShadow = "none";
  };
  return (
    <section style={{ ...styles.section, ...styles.hero }}>
           {" "}
      <div style={styles.container}>
               {" "}
        <div className="row align-items-center">
                     {" "}
          <div className="col-lg-8">
                             
            <h1 style={styles.h1}>
                                  Crafting Digital Excellence.                  
                <br />                    Code, Design, and Logic.              
               {" "}
            </h1>
                           {" "}
            <p style={styles.p}>
                                  Hi, I'm {developerInfo.name}. I am a{" "}
              {developerInfo.title} specializing in building exceptional,
              high-quality websites and applications.                {" "}
            </p>
                           {" "}
            <a
              href="#contact"
              style={styles.ctaButton}
              onMouseEnter={ctaHoverStyle}
              onMouseLeave={ctaUnhoverStyle}
            >
                                  Get In Touch                {" "}
            </a>
                       {" "}
          </div>
                     {" "}
          <div className="col-lg-4 d-none d-lg-block text-center">
                             
            <div
              style={{
                background: "linear-gradient(145deg, #F5D0A9, #c4a383)",
                width: "300px",
                height: "300px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#121212",
                fontSize: "10rem",
                fontWeight: "bold",
                boxShadow: "0 10px 40px rgba(245, 208, 169, 0.2)",
              }}
            >
                                  {developerInfo.name.split(" ")[0][0]}         
                     
            </div>
                       {" "}
          </div>
                 {" "}
        </div>
             {" "}
      </div>
         {" "}
    </section>
  );
};

const About = () => (
  <section id="about" style={styles.section}>
       {" "}
    <div style={styles.container}>
            <h2 style={styles.h2}>About Me</h2>     {" "}
      <div className="row">
               {" "}
        <div className="col-md-10 mx-auto text-center">
                    <p style={styles.p}>{developerInfo.bio}</p>       {" "}
        </div>
             {" "}
      </div>
         {" "}
    </div>
     {" "}
  </section>
);

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardStyle = {
    ...styles.projectCard,
    transform: isHovered ? "translateY(-10px)" : "translateY(0)",
    boxShadow: isHovered
      ? "0 20px 40px rgba(0,0,0,0.3)"
      : "0 5px 15px rgba(0,0,0,0.2)",
  };
  return (
    <div className="col-md-6 col-lg-4 mb-4 d-flex align-items-stretch">
           {" "}
      <div
        style={cardStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
               {" "}
        <img src={project.image} alt={project.title} className="card-img-top" />
               {" "}
        <div style={styles.projectCardBody}>
                    <h3 style={styles.h3}>{project.title}</h3>         {" "}
          <p style={{ ...styles.p, flexGrow: 1 }}>{project.description}</p>     
             {" "}
          <div style={{ marginBottom: "1rem" }}>
                       {" "}
            {project.tech.map((t) => (
              <span key={t} className="badge bg-secondary me-2 mb-2">
                {t}
              </span>
            ))}
                     {" "}
          </div>
                   {" "}
          <div style={styles.projectLinks}>
                       {" "}
            <a
              href={project.liveUrl}
              className="btn btn-outline-light btn-sm me-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
                       {" "}
            <a
              href={project.repoUrl}
              className="btn btn-outline-light btn-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Repo
            </a>
                     {" "}
          </div>
                 {" "}
        </div>
             {" "}
      </div>
         {" "}
    </div>
  );
};

const Projects = () => (
  <section id="projects" style={styles.section}>
       {" "}
    <div style={styles.container}>
            <h2 style={styles.h2}>My Work</h2>     {" "}
      <div className="row">
               {" "}
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
             {" "}
      </div>
         {" "}
    </div>
     {" "}
  </section>
);

const Skills = () => (
  <section id="skills" style={styles.section}>
           {" "}
    <div style={styles.container}>
                  <h2 style={styles.h2}>Technical Skills</h2>           {" "}
      <div className="row g-5">
                       {" "}
        {skills.map((skill, index) => (
          <div key={index} className="col-6 col-md-4 col-lg-3">
                                   {" "}
            <div style={styles.skillCard}>
                                         {" "}
              <div className="mb-2">{skill.icon}</div>                         
                <h5 style={{ color: "#E0E0E0" }}>{skill.name}</h5>             
                       {" "}
            </div>
                               {" "}
          </div>
        ))}
                   {" "}
      </div>
             {" "}
    </div>
       {" "}
  </section>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Thank you! Your message has been sent.");
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setStatus(""), 5000);
  };
  const ctaHoverStyle = (e) => {
    e.target.style.backgroundColor = "#fff";
  };
  const ctaUnhoverStyle = (e) => {
    e.target.style.backgroundColor = "#F5D0A9";
  };

  return (
    <section id="contact" style={styles.section}>
                 {" "}
      <div style={styles.container}>
                        <h2 style={styles.h2}>Get In Touch</h2>               {" "}
        <div style={styles.contactForm}>
                             {" "}
          <p className="text-center mb-4">
            Have a project in mind or just want to say hi? Feel free to reach
            out.
          </p>
                             {" "}
          <form onSubmit={handleSubmit}>
                                   {" "}
            <div className="mb-3">
                                         {" "}
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                style={styles.formControl}
              />
                                     {" "}
            </div>
                                   {" "}
            <div className="mb-3">
                                         {" "}
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                style={styles.formControl}
              />
                                     {" "}
            </div>
                                   {" "}
            <div className="mb-3">
                                         {" "}
              <textarea
                name="message"
                rows="5"
                className="form-control"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                style={styles.formControl}
              ></textarea>
                                     {" "}
            </div>
                                   {" "}
            <div className="text-center">
                                         {" "}
              <button
                type="submit"
                style={styles.ctaButton}
                onMouseEnter={ctaHoverStyle}
                onMouseLeave={ctaUnhoverStyle}
              >
                Send Message
              </button>
                                     {" "}
            </div>
                               {" "}
          </form>
                             {" "}
          {status && <p className="text-center mt-4 text-success">{status}</p>} 
                       {" "}
        </div>
                   {" "}
      </div>
             {" "}
    </section>
  );
};

const Footer = () => {
  const socialHover = (e) => {
    e.target.style.color = "#F5D0A9";
  };
  const socialUnhover = (e) => {
    e.target.style.color = "#E0E0E0";
  };

  return (
    <footer style={styles.footer}>
                 {" "}
      <div style={styles.container}>
                       {" "}
        <div className="mb-3">
                               
          <a
            href={developerInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={socialHover}
            onMouseLeave={socialUnhover}
          >
            <i className="fab fa-github" style={styles.socialIcon}></i>
          </a>
                               
          <a
            href={developerInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={socialHover}
            onMouseLeave={socialUnhover}
          >
            <i className="fab fa-linkedin" style={styles.socialIcon}></i>
          </a>
                               
          <a
            href={`mailto:${developerInfo.contactEmail}`}
            onMouseEnter={socialHover}
            onMouseLeave={socialUnhover}
          >
            <i className="fas fa-envelope" style={styles.socialIcon}></i>
          </a>
                         {" "}
        </div>
                        <p>Designed & Built by {developerInfo.name}</p>         
              <p>&copy; {new Date().getFullYear()}</p>           {" "}
      </div>
             {" "}
    </footer>
  );
};

// --- MAIN APP ---
export default function App() {
  return (
    <div style={styles.body}>
              {/* CDN Imports to fix build errors */}
             {" "}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css"
      />
             {" "}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
      />
              <link rel="preconnect" href="https://fonts.googleapis.com" />
             {" "}
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
             {" "}
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
                  <Header />     {" "}
      <main>
                <Hero />
                <About />
                <Projects />
                <Skills />
                <Contact />     {" "}
      </main>
            <Footer />   {" "}
    </div>
  );
}
