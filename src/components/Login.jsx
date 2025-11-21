import React from "react";
import { useState } from 'react';
import { Form, Button, Alert , Row, Col} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


function Login({isLoggedIn, setIsLoggedIn, setUsername}) {
  
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  const [messageVariant, setMessageVariant] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const username = e.target.elements.username.value;
    const password = e.target.elements.password.value;
    console.log({username, password});

    try {
      const response = await fetch(`${import.meta.env.VITE_API_SERVER_URL}/api/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({username, password}),
      });
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('userID', data.userID);
        localStorage.setItem('username', data.username )

        setMessage("Success! Just a sec, logging you in.");
        setMessageVariant('success');

        setIsLoggedIn(true);
        setUsername(data.username);

        navigate('/dashboard');

      } else {

        setMessage("Login failed.");
        setMessageVariant('warning');
      }
    } catch(error) {
      console.log("Oh no, an error", error);
      setMessage("Something went wrong. Please debug.");
      setMessageVariant('warning');
      
    }
  };
  
  
  return (
    <div className='mt-4'>
      <h2 className='mb-5'>{isLoggedIn ? 'Welcome back!' : 'Log in'}</h2>

      {message && <Alert variant={ messageVariant }>{ message }</Alert>}

      {!isLoggedIn && (<Form onSubmit={handleSubmit}>

        <Form.Group as={Row} className='mb-2'>
          <Form.Label column sm={3}>Username</Form.Label>
          <Col sm={9}>
            <Form.Control type='text' name='username' placeholder='maximuster' required />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className='mb-2'>
          <Form.Label column sm={3}>Password</Form.Label>
          <Col sm={9}>
            <Form.Control type='password' name='password' placeholder='yourpassword123' required/>
          </Col>
        </Form.Group>
        <Button variant='primary' type='submit' className="mt-4">Log in</Button>

      </Form>)}
    </div>
  );
}

export default Login;

