import React from "react";
import { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


function Register() {
  return (
    <div className='mt-4'>
      <h1>Register</h1>
      <Form>
        <Form.Group className='mb-3'>
          <Form.Label>Name</Form.Label>
          <Form.Control type='text' name='name' placeholder="Maxine" required />
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label>Username</Form.Label>
          <Form.Control type='text' name='username' placeholder="maxine126ch" required />
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label>Email</Form.Label>
          <Form.Control type='email' name='email' placeholder="maxine@mail.com" required />
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label>Password</Form.Label>
          <Form.Control type='password' name='password' placeholder="Choose password (min. 8 characters)" required minLength={8} />
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label>Repeat password</Form.Label>
          <Form.Control type='password' name='confirmPassword' placeholder="Re-enter password" required />
        </Form.Group>

        <Button variant='primary' type='submit'>Register</Button>
      </Form>
    
    </div>
  );
}

export default Register;