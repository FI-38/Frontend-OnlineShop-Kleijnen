import React from "react";
import { useState } from 'react';
import { Form, Button, Alert, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../styles/Form.css';



function Register() {
  return (
    <div className='mt-4'>
      <h1 className="mb-4">Register</h1>
      <Form>
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
    

        <Button variant='primary' type='submit'>Register</Button>
      </Form>
    
    </div>
  );
}

export default Register;