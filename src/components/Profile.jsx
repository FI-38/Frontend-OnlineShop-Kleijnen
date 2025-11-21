import React, { useState, useEffect } from "react";
import { Nav, Form, Button, Alert, Container} from "react-bootstrap";
import {  Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';


function Profile({ isLoggedIn, userId }) {
  const [message, setMessage] = useState('');
  const [profileData, setProfileData] = useState({ first_name: '', username: '', email: ''});

  useEffect(() => {
    const token = localStorage.getItem('token');
    const fetchProfile = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_SERVER_URL}/api/profile`, {
          method: 'GET',
          headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
        });
        const profile = await response.json();
        if (response.ok) {
          console.log(profile)
          setProfileData({ first_name: profile.first_name || '', username: profile.username || '', email: profile.email });
        } else setMessage(profile.error || "We couldn't load your profile right now.");
      } catch (error) {
        console.log(error);
        setMessage('Error fetching your profile.');
      }
    };
    fetchProfile();
  }, [userId]);

 return (
  <>
    <h1>{isLoggedIn ? "Your Profile" : <Nav.Link as={Link} to='/login'>Please login</Nav.Link>}</h1>
      <Table striped bordered hover size="sm mt-4">
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{profileData.first_name}</td>
            <td>{profileData.username}</td>
            <td>{profileData.email}</td>

          </tr>
        
        </tbody>
      </Table>
    </>
  );
}

export default Profile;