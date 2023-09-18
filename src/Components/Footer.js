import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    // Footer component
    <footer className="bg-light text-black mt-5" style={{ backgroundColor: '#f4f4f4' }}>
      <Container>
        <Row>
          <Col md={12}>
            <p className="text-center">
              Created by Saksham Raina
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
