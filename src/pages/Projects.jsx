import React from 'react';
import { Container, Card, Row, Col, Button } from 'react-bootstrap';

const projectList = [
  {
    title: 'FitBuddy',
    description: 'A full-stack fitness tracker and trainer management system.',
    tech: 'MERN, Bootstrap',
    github: 'https://github.com/aib007043/fitbuddy',
    live: '#'
  },
  {
    title: 'CookPedia',
    description: 'Recipe management app with admin dashboard.',
    tech: 'Angular, MongoDB, Node',
    github: 'https://github.com/aib007043/cookpedia',
    live: '#'
  },
  {
    title: 'Project Fair',
    description: 'React webapp to manage and share projects.',
    tech: 'React, Express, MongoDB',
    github: '#',
    live: '#'
  },
  // Add more as needed
];

function Projects() {
  return (
    <Container className="py-5">
      <h2 className="mb-4">Projects</h2>
      <Row>
        {projectList.map((project, idx) => (
          <Col md={4} key={idx} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <Card.Text><strong>Tech:</strong> {project.tech}</Card.Text>
                <Button variant="primary" href={project.live} target="_blank" className="me-2">Live</Button>
                <Button variant="dark" href={project.github} target="_blank">GitHub</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Projects;