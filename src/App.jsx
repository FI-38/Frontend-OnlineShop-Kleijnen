import { useEffect, useState } from 'react';
import { Route, Routes} from 'react-router-dom';
import Container from 'react-bootstrap/Container';

import Navi from './components/Navi';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Contact from './components/Contact';
import Dashboard from './components/Dashboard';
import Products from './components/Products';
import Cart from './components/Cart';
import Profile from './components/Profile';
import ProtectedRoute from './components/ProtectedRoute';
import PageNotFound from './components/PageNotFound';
import ProductDetail from './components/ProductDetail';

import LogoutModal from './components/LogoutModal';

import './App.css'

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState();
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [username, setUsername] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    const storedUserId = localStorage.getItem('userID');
    const storedUsername = localStorage.getItem('username');

    if (token && storedUserId) {
      setIsLoggedIn(true);
      setUserId(storedUserId);
      setUsername(storedUsername);
    }
  }, []); 

  useEffect(() => {
    console.log("isLoggedIn is now: ", isLoggedIn);
  }, [isLoggedIn]);

  const handleLogout = () => {
    setShowLogoutModal(true);
  }

  const confirmLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('token');
    localStorage.removeItem('userID');
    localStorage.removeItem('username');
    setShowLogoutModal(false);
  }

  const cancelLogout = () => {
    setShowLogoutModal(false);
  }


  return (
    <>
    <Navi 
      isLoggedIn={isLoggedIn} 
      setIsLoggedIn={setIsLoggedIn}
      setUsername={setUsername}
      username={username}
      handleLogout={handleLogout} /> 
    <LogoutModal 
      show={showLogoutModal}
      onConfirm={confirmLogout}
      onCancel={cancelLogout}
      />
    <main>
      <Container className='pt-5'>
        <Routes>
          <Route path='/' element={<Home isLoggedIn={ isLoggedIn }  />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} setUsername={setUsername}/>} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/dashboard' element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path='/products' element={<ProtectedRoute><Products /></ProtectedRoute>} />
          <Route path='/cart' element={<ProtectedRoute><Cart /></ProtectedRoute>} />
          <Route path='/profile' element={<ProtectedRoute><Profile isLoggedIn={isLoggedIn} userId={userId} /></ProtectedRoute>} />
          <Route path='/products/:id' element={<ProtectedRoute><ProductDetail /></ProtectedRoute>} />

          <Route path='*' element={ <PageNotFound /> } /> 
        </Routes>
      </Container>
    </main>

    </>
  )
}

export default App

