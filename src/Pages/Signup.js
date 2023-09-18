import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

function Signup() {
  return (
    <Container className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
      <h1>RentEase</h1>
      <div className="w-50 mt-4">
        <Form>
          <Form.Group className="mb-4" controlId="formName">
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="text" size="lg" placeholder="Enter your full name" />
          </Form.Group>

          <Form.Group className="mb-4" controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" size="lg" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-4" controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" size="lg" placeholder="Password" />
          </Form.Group>

          <Form.Group className="mb-4" controlId="formConfirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" size="lg" placeholder="Confirm password" />
          </Form.Group>

          <Button className="mb-4" size="lg" variant="primary" type="submit">
            Register
          </Button>
        </Form>
      </div>
    </Container>
  );
}

export default Signup;
