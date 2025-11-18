import React from "react";
import { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


function Login({isLoggedIn, setIsLoggedIn}) {
  
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

        setMessage("You're logged in! You're now getting redirected.");
        setMessageVariant('success');
        setIsLoggedIn(true);

        setTimeout(() => {
          navigate('/dashboard');
        }, 2000);
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
        <Form.Group className='mb-2'>
          <Form.Label>Username</Form.Label>
          <Form.Control type='text' name='username' placeholder='maximuster' required />
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Label>Password</Form.Label>
          <Form.Control type='password' name='password' placeholder='yourpassword123' required/>
        </Form.Group>
        <Button variant='primary' type='submit'>Log in</Button>

      </Form>)}
    </div>
  );
}

export default Login;


// todos 
// 1.  success message 