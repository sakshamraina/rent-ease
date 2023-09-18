import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function App() {
  return (
    <Container className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
      <h2>Login</h2>
      <div className="w-50 mt-4">
        <Form>
          <Form.Group className="mb-4" controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" size="lg" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-4" controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" size="lg" placeholder="Password" />
          </Form.Group>

          <Row className="mb-4">
            <Col>
              <Form.Check type="checkbox" label="Remember me" />
            </Col>
            <Col className="text-end">
              <a href="!#">Forgot password?</a>
            </Col>
          </Row>

          <Button className="mb-4" size="lg" variant="primary" type="submit">
            Sign in
          </Button>

          <div className="text-center">
            <p>Not a member? <a href="#!">Register</a></p>
            <p>or sign up with:</p>

            <div className='d-flex justify-content-center'>
              <Button href="#!" variant="light" className='m-1' style={{ color: '#1266f1' }}>
                <i className="fab fa-facebook-f" />
              </Button>

              <Button href="#!" variant="light" className='m-1' style={{ color: '#1266f1' }}>
                <i className="fab fa-twitter" />
              </Button>

              <Button href="#!" variant="light" className='m-1' style={{ color: '#1266f1' }}>
                <i className="fab fa-google" />
              </Button>

              <Button href="#!" variant="light" className='m-1' style={{ color: '#1266f1' }}>
                <i className="fab fa-github" />
              </Button>
            </div>
          </div>
          </Form>
      </div>
    </Container>
  );
}

export default App;