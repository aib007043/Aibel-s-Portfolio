import React from 'react';
import { Container, Button } from 'react-bootstrap';

function Resume() {
  return (
    <Container className="py-5 text-center">
      <h2>Resume</h2>
      <p>Download my latest resume here:</p>
      <Button href="/Aibel_Maliyekkal_Resume.pdf" target="_blank" variant="primary">Download PDF</Button>
    </Container>
  );
}

export default Resume;