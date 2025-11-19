import React from "react";
import { useState } from 'react';
import { Form, Button, Alert, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../styles/Form.css';



function Register() {
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.elements.name.value;
    const username = e.target.elements.username.value;
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    const confirmPassword = e.target.elements.confirmPassword.value;

    if (password !== confirmPassword) {
      setMessage("Passwords don't match.");
      console.log("Pw dont match");
      return;
    }

    if (password.length < 8) {
      setMessage("Password should be at least 8 characters.");
      console.log("too short")
      return;
    }

    // if code passed 2 checks above, make post request
    try { // CHECK REGISTER in backend
      const response = await fetch(`${import.meta.env.VITE_API_SERVER_URL}/api/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, name, email, password})
      });
      console.log(response);

      const data = await response.json();

      if (response.ok) {
        setMessage("Registration successfull! You're now redirected...");
        setTimeout(() => navigate('/login'), 2000);
      } else {
        setMessage(data.error || "Registration failed.");
      }

    } catch (error) {
      console.log("An error occurred during registration:", error);
      setMessage("Registration failed. Please try again.");
    }
    e.target.reset();
  }; // end handleSubmit

  return (
    <div className='mt-4'>
      <h1 className="mb-4">Register</h1>

      {message && (
        <Alert variant={message.includes('success') ? 'success' : 'danger'} >
          {message}
          </Alert>
      )}

      <Form noValidate onSubmit={handleSubmit}>
          <Form.Group as={Row} className="mb-3" controlId="formGridName">
            <Form.Label column sm={4} >Name</Form.Label>
            <Col sm={8}>
              <Form.Control type='text' name='name' placeholder="Maxine" required />
            </Col>
          </Form.Group>
       
        <Form.Group as={Row} className="mb-3"controlId="formGridUsername">
          <Form.Label column sm={4}>Username</Form.Label>
          <Col sm={8}>
            <Form.Control type='text' name='username' placeholder="maxine126ch" required />
          </Col>
        </Form.Group>
      

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={4}>Email</Form.Label>
          <Col sm={8}>
            <Form.Control type='email' name='email' placeholder="maxine@mail.com" required />
          </Col>
        </Form.Group>


          <Form.Group as={Row} className="mb-3" controlId="formGridPassword">
            <Form.Label column sm={4}>Password</Form.Label>
            <Col sm={8}>
              <Form.Control type='password' name='password' placeholder="Min. 8 characters" required minLength={8} />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formGridPasswordRepeat">
            <Form.Label column sm={4}>Repeat password</Form.Label>
            <Col sm={8}>
              <Form.Control type='password' name='confirmPassword' placeholder="Re-enter password" required />
            </Col>
          </Form.Group>
    

        <Button variant='primary' type='submit'>Confirm registration</Button>
      </Form>
    
    </div>
  );
}

export default Register;