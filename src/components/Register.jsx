import React from "react";
import { useState, useEffect} from 'react';
import { Form, Button, Alert, Row, Col, ProgressBar } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../styles/Form.css';


function Register() {
  const [message, setMessage] = useState('');

  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [progress, setProgress] = useState(0);

  const navigate = useNavigate();

  if (name.trim() !== 0){
    console.log('not empty')
  }

  // SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();

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

    useEffect(() => {
      const filled = [name, username, email, password, confirmPassword]
      .filter(v => v.trim() !== '').length;

      setProgress(filled * 20);
    }, [name, username, email, password, confirmPassword]);


  return (
    <div className='mt-4'>
      <ProgressBar now={progress} className='mb-3'></ProgressBar>
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
              <Form.Control type='text' name='name' value={name} placeholder="Maxine"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                required />
            </Col>
          </Form.Group>
       
        <Form.Group as={Row} className="mb-3"controlId="formGridUsername">
          <Form.Label column sm={4}>Username</Form.Label>
          <Col sm={8}>
            <Form.Control type='text' name='username' value={username} placeholder="maxine126ch" required
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </Col>
        </Form.Group>
      

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={4}>Email</Form.Label>
          <Col sm={8}>
            <Form.Control type='email' name='email' value={email} placeholder="maxine@mail.com" required
              onChange={(e) => {
                setEmail(e.target.value);
              }}            
            />
          </Col>
        </Form.Group>


          <Form.Group as={Row} className="mb-3" controlId="formGridPassword">
            <Form.Label column sm={4}>Password</Form.Label>
            <Col sm={8}>
              <Form.Control type='password' name='password' value={password} placeholder="Min. 8 characters" required minLength={8} 
              onChange={(e) => {
                setPassword(e.target.value);
              }}              
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formGridPasswordRepeat">
            <Form.Label column sm={4}>Repeat password</Form.Label>
            <Col sm={8}>
              <Form.Control type='password' name='confirmPassword' value={confirmPassword} placeholder="Re-enter password" required 
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
              />
            </Col>
          </Form.Group>
    

        <Button variant='primary' type='submit'>Confirm registration</Button>
      </Form>
    
    </div>
  );
}

export default Register;