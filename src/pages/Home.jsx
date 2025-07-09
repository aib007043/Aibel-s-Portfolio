import React, { useState, useEffect } from 'react';
import { Container, Button, Row, Col, Card, Image,  Collapse , Form , Modal ,Accordion} from 'react-bootstrap';
import { motion } from 'framer-motion';


const projectList = [
  {
    title: "Cookpedia",
    image: "https://t4.ftcdn.net/jpg/03/32/75/39/360_F_332753934_tBacXEgxnVplFBRyKbCif49jh0Wz89ns.jpg",
    description: "A recipe-sharing platform with admin controls.",
    techList: ["Angular", "Node.js", "Express", "MongoDB"],
    functionality: "Users can upload and explore recipes. Admin manages categories and featured posts."
  },
    
  {
    title: "Project Fair",
    image: "https://st2.depositphotos.com/1813786/12508/v/950/depositphotos_125087888-stock-illustration-project-icons-and-elements.jpg",
    description: "A full-stack web app to manage and showcase student projects.",
    techList: ["React", "Express", "MongoDB", "JWT"],
    functionality: "Authenticated users can submit and manage projects. Admins can approve and highlight projects."
  },
  {
    title: "FitBuddy – Personal Fitness & Trainer Management App",
    image: "https://fitnessvolt.com/wp-content/uploads/2023/10/Fitness-Myths-Debunked.jpg",
    description: "A full-featured fitness tracking app that lets users manage health goals and interact with trainers.",
    techList: ["MongoDB", "Express.js", "React.js", "Node.js", "Bootstrap", "Chart.js"],
    functionality: "Users can set goals, log meals/workouts, track metrics (BMI, weight, body fat), and message trainers. Includes JWT auth, file uploads, and real-time charts."
  },
  {
    title: "Ekart",
    image: "https://play-lh.googleusercontent.com/wWocoITWStlookcVuOLx4eveHRM-a9t6jiQd0GkLT4pfSCIzjCLPwLt-Akw7eU0yJw", 
    description: "A modern e-commerce app with user-friendly shopping experience.",
    techList: ["React", "Node.js", "MongoDB", "Bootstrap"],
    functionality: "Users can browse products, manage cart."
  
  },
  
  {
    title: "React Media Player – Audio/Video Playback App",
    image: "https://cdn-icons-png.flaticon.com/512/888/888881.png",
    description: "A sleek, minimal media player built with React for playing both audio and video.",
    techList: ["React.js"],
    functionality: "Supports play, pause, and seek for media. Handles both audio and video formats with responsive layout."
  },
  {
    title: "Restaurant Explorer – Food Listing UI",
    image: "https://plus.unsplash.com/premium_photo-1661883237884-263e8de8869b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D",
    description: "A React-based UI app to browse restaurants and view their dynamic menus.",
    techList: ["React.js"],
    functionality: "Uses reusable components with data passed via props or JSON. Features a clean card-based layout for restaurant and menu listings."
  },
];


function Home() {
  const [typedText, setTypedText] = useState('');
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const fullText = "A  MERN Stack Developer passionate about fitness and building modern web apps.";

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setTypedText((prev) => prev + fullText.charAt(index));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 40);
    return () => clearInterval(typingInterval);
  }, []);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProject(null);
  };


 

  return (
    <>
      {/* Hero Section */}
       <div className="bg-dark text-white">
      <section id="home" className="text-center py-5 section bg-hero dark-mode">
        <Container data-aos="fade-up">
          
          <h1 className="mb-3">Hi, I'm Aibel 👋</h1>
          <p className="lead mb-4 typewriter-text">{typedText}</p>
          <Row className="justify-content-center mb-4">
            <Col xs={6} md={3} className="feature-box">
              <i className="bi bi-code-slash fs-2 text-primary animated-icon"></i>
              <p>Full-Stack Development</p>
            </Col>
            <Col xs={6} md={3} className="feature-box">
              <i className="bi bi-lightning-charge-fill fs-2 text-warning animated-icon"></i>
              <p>Fast & Responsive UI</p>
            </Col>
            <Col xs={6} md={3} className="feature-box">
              <i className="bi bi-heart-pulse-fill fs-2 text-danger animated-icon"></i>
              <p>Fitness Focused Projects</p>
            </Col>
          </Row>
          <Button href="#projects" variant="primary" className="m-2">View Projects</Button>
          <Button href="#resume" variant="outline-light">Download Resume</Button>
          <div className="scroll-down mt-4">
            <i className="bi bi-chevron-double-down text-white fs-2"></i>
          </div>
        </Container>
      </section>


      

      {/* About Section */}
      <section id="about" className="py-5 section about-section">
        <Container data-aos="fade-up">
          <h2>About Me</h2>
          <p>I’m a full-stack web developer with a passion for fitness and modern technology. I specialize in building scalable apps using the MERN stack. My projects reflect a strong interest in health, productivity, and clean UI.</p>

          <Row className="gy-4 mt-4">
            <Col xs={12} md={4}>
              <Card className="h-100 interest-card gradient-border">
                <div className="image-container" onClick={() => showModal('/images/fitness.jpg')}>
                  <Card.Img variant="top" src="/fitness image.jpg" className="interest-image" />
                </div>
                <Card.Body className="text-center">
                  <h5 className="icon-animated"><i className="bi bi-heart-pulse-fill text-danger me-2"></i>Fitness</h5>
                  <p>Former athlete, now dedicated to strength & endurance training.</p>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={4}>
              <Card className="h-100 interest-card gradient-border">
                <div className="image-container" onClick={() => showModal('/images/reading.jpg')}>
                  <Card.Img variant="top" src="/reading .jpg" className="interest-image" />
                </div>
                <Card.Body className="text-center">
                  <h5 className="icon-animated"><i className="bi bi-book-fill text-primary me-2"></i>Reading</h5>
                  <p>Especially fantasy,  Romance, and self-growth books.</p>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={4}>
              <Card className="h-100 interest-card gradient-border">
                <div className="image-container" onClick={() => showModal('/images/anchoring.jpg')}>
                  <Card.Img variant="top" src="/anchoring image.jpg" className="interest-image" />
                </div>
                <Card.Body className="text-center">
                  <h5 className="icon-animated"><i className="bi bi-mic-fill text-warning me-2"></i>Anchoring</h5>
                  <p>Passionate speaker and experienced in event hosting.</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <div className="text-center">
            <Button
  onClick={() => setOpen(!open)}
  aria-controls="more-about"
  aria-expanded={open}
  variant="outline-light"
  className="mt-4 px-4 py-2 border-0 fw-semibold rounded-pill more-about-btn"
>
  {open ? 'Show Less' : 'More About Me'}
</Button>
          </div>
   <Collapse in={open}>
  <div id="more-about">
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card
        className="p-4 mt-3 rounded-4 shadow-lg border-0"
        style={{
          background: 'linear-gradient(135deg, #0f2027, #203a43, #2c5364)',
          color: '#ffffff',
        }}
      >
        <Card.Body>
          <p>
            Beyond web development, I’ve always been someone who enjoys <strong>expressing ideas</strong> and
            <strong> pushing limits</strong> — both mentally and physically. Having grown up as an <strong>athlete</strong>,
            I’ve carried the mindset of <strong>discipline and consistency</strong> into everything I do.
          </p>
          <p className="mt-2">
            Whether I’m on stage anchoring an event, diving into a new book, or coding late into the night, I’m driven
            by curiosity and a desire to grow. I genuinely love <strong>connecting with people</strong>, sharing
            stories, and building things that make a difference — whether it's through a clean UI or an inspiring conversation.
          </p>
          <p className="mt-2 mb-0">
            For me, <strong>fitness, tech, and creativity</strong> aren’t separate passions — they’re all part of the same journey.
          </p>
        </Card.Body>
      </Card>
    </motion.div>
  </div>
</Collapse>



          <section id="techstack" className="py-5 section bg-dark text-white">
        <Container data-aos="fade-up">
          <h2 className="text-center mb-5">🔧 My Tech Stack</h2>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header><i className="bi bi-terminal-dash me-2 text-info"></i>Programming Languages</Accordion.Header>
              <Accordion.Body>
                JavaScript (ES6+), TypeScript, HTML5, CSS3
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header><i className="bi bi-window-sidebar me-2 text-warning"></i>Frontend Frameworks</Accordion.Header>
              <Accordion.Body>
                React.js (Hooks, Router, Axios,), Angular (Components,Routing, Forms,Hooks), Bootstrap (Responsive UI)
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header><i className="bi bi-cpu-fill me-2 text-success"></i>Backend</Accordion.Header>
              <Accordion.Body>
                Node.js, Express.js, REST APIs, JWT Authentication, Multer (File Uploads)
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header><i className="bi bi-database-fill-gear me-2 text-primary"></i>Database</Accordion.Header>
              <Accordion.Body>
                MongoDB, Mongoose
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header><i className="bi bi-tools me-2 text-danger"></i>Dev Tools</Accordion.Header>
              <Accordion.Body>
                Git & GitHub, VS Code, Postman, Nodemon, dotenv
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
              <Accordion.Header><i className="bi bi-puzzle-fill me-2 text-info"></i>Other Libraries</Accordion.Header>
              <Accordion.Body>
                Redux, Chart.js, Recharts, React Router
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="6">
              <Accordion.Header><i className="bi bi-stars me-2 text-warning"></i>Soft Skills</Accordion.Header>
              <Accordion.Body>
                Leadership, Event Management, Public Speaking, Time Management
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Container>
      </section>

        </Container>
      </section>


      
      

      <section id="projects" className="py-5 section bg-light">
        <Container>
          <h2 className="mb-5 text-center text-dark fw-bold" data-aos="fade-up">Projects</h2>
          <Row>
            {projectList.map((project, idx) => (
              <Col md={6} lg={4} key={idx} className="mb-4" data-aos="zoom-in">
                <Card className="h-100 shadow border-0 hover-zoom" onClick={() => handleOpenModal(project)}>
                  <Card.Img
                    variant="top"
                    src={project.image}
                    alt={project.title}
                    style={{ height: "200px", objectFit: "cover", cursor: "pointer" }}
                  />
                  <Card.Body className="bg-light">
                    <Card.Title className="fw-bold text-primary mb-3">{project.title}</Card.Title>
                    <Card.Text className="text-dark mb-2">{project.description}</Card.Text>
                    <div className="text-secondary">
                      <strong>Tech Stack:</strong>
                      <ul className="mb-2 ps-3">
                        {project.techList.map((tech, i) => (
                          <li key={i}>{tech}</li>
                        ))}
                      </ul>
                    </div>
                    <Card.Text className="text-muted">
                      <strong>Functionality:</strong> {project.functionality}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <Modal show={showModal} onHide={handleCloseModal} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{selectedProject?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Image src={selectedProject?.image} fluid className="mb-3 rounded" />
          <h5>Description</h5>
          <p>{selectedProject?.description}</p>
          <h6>Tech Stack</h6>
          <ul>
            {selectedProject?.techList.map((tech, idx) => (
              <li key={idx}>{tech}</li>
            ))}
          </ul>
          <h6>Functionality</h6>
          <p>{selectedProject?.functionality}</p>
        </Modal.Body>
      </Modal>
    
  



      {/* Resume Section */}
      <section id="resume" className="py-5 text-center section">
        <Container data-aos="fade-up">
          <h2>Resume</h2>
          <p>Download my latest resume here:</p>
          <Button href="/Aibel's Resume fr.pdf" target="_blank" variant="primary">Download PDF</Button>
        </Container>
      </section>

      {/* Contact Section */}
<section id="contact" className="py-5 contact-section text-white">
  <Container data-aos="fade-left">
    <h2 className="text-center mb-5 fw-bold">Contact Me</h2>
    <Row className="justify-content-center">
      <Col md={8}>
        <Card className="p-4 border-0 rounded-4 shadow-lg bg-gradient-card">
          <Card.Body className="text-center">
            <div className="contact-item mb-4">
              <i className="bi bi-geo-alt-fill text-primary fs-4 me-2"></i>
              <span className="text-white fs-5"><strong>Thrissur, Kerala, India</strong></span>
            </div>
            <div className="contact-item mb-3">
              <i className="bi bi-telephone-fill text-success fs-4 me-2"></i>
              <a href="tel:+919633071062" className="text-white text-decoration-underline fs-5">+91 96330 71062</a>
            </div>
            <div className="contact-item d-flex align-items-center mb-3">
  <i className="bi bi-envelope-fill text-danger fs-4 me-3"></i>
  <a
    href="mailto:aibelmaliyekkal@gmail.com"
    className="text-white text-decoration-underline fs-5"
    style={{ wordBreak: "break-all" }}
  >
    aibelmaliyekkal@gmail.com
  </a>
</div>
            <div className="contact-item mb-3">
              <i className="bi bi-github text-light fs-4 me-2"></i>
              <a href="https://github.com/aib007043" target="_blank" rel="noreferrer" className="text-white text-decoration-underline fs-5">github.com/aib007043</a>
            </div>
            <div className="contact-item mb-3">
              <i className="bi bi-linkedin text-primary fs-4 me-2"></i>
              <a href="https://www.linkedin.com/in/aibel-maliyekkal7/" target="_blank" rel="noreferrer" className="text-white text-decoration-underline fs-5">linkedin.com</a>
            </div>
            <div className="contact-item mb-3">
              <i className="bi bi-instagram text-pink fs-4 me-2"></i>
              <a href="https://www.instagram.com/_aibel_maliyekkal_" target="_blank" rel="noreferrer" className="text-white text-decoration-underline fs-5">_aibel_maliyekkal_</a>
            </div>
            <div className="contact-item">
              <i className="bi bi-whatsapp text-success fs-4 me-2"></i>
              <a href="https://wa.me/919633071062" target="_blank" rel="noreferrer" className="text-white text-decoration-underline fs-5">Chat on WhatsApp</a>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
</section>

</div>


    </>
  );
}

export default Home;