import React from "react";
import { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


function Login({isLoggedIn}) {
  
  
  return (
    <div className='mt-4'>
      <h3>{isLoggedIn ? 'Welcome back!' : 'Log in'}</h3>
      {!isLoggedIn && (<Form>
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