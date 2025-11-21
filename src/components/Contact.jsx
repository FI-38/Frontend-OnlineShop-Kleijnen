import React from "react";
import { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

function Contact() {

  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage('Message sent!');
    setTimeout(function() {
      setMessage('');
    }, 3000);
   
    e.target.reset(); 

    
  }


  return (
    <>
    {message && <Alert variant='success'>{ message }</Alert>}
      <h1 className='mb-4'>Contact us</h1>
      <Form className='form-inline' onSubmit={handleSubmit}>

        <Form.Group className='d-flex justify-content-center mb-3'>
          <Form.Label className='me-3'>Name</Form.Label>
          <Form.Control type='text' placeholder='Your name' name='name'/>
        </Form.Group>

        <Form.Group className='d-flex justify-content-center mb-3'>
          <Form.Label className='me-3 text-nowrap'>E-mail</Form.Label>
          <Form.Control type='email' placeholder='Your email' name='email'></Form.Control>
        </Form.Group>

        <Form.Group className='d-flex justify-content-center mb-3'>
          <Form.Label className='me-3'>Message</Form.Label>
          <Form.Control as='textarea' rows={3} placeholder='Your message' name='message'></Form.Control>
        </Form.Group>

        <Button type='submit'>Submit</Button>
      </Form>
    </>
  );
}

export default Contact;