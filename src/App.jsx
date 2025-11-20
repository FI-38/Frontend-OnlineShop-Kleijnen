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

import LogoutModal from './components/LogoutModal';

import './App.css'

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState();
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  useEffect(() => {
    console.log("RESTORING STATE");
    const token = localStorage.getItem('token');
    console.log("THE TOKEN:", token);
    const storedUserId = localStorage.getItem('userID');
    console.log("THE USER ID", storedUserId);

    if (token && storedUserId) {
      setIsLoggedIn(true);
      setUserId(storedUserId);
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
    setShowLogoutModal(false);
  }

  const cancelLogout = () => {
    setShowLogoutModal(false);
  }



  return (
    <>
    <Navi isLoggedIn={isLoggedIn} handleLogout={handleLogout} /> 
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
          <Route path='/login' element={<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/dashboard' element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path='/products' element={<ProtectedRoute><Products /></ProtectedRoute>} />
          <Route path='/cart' element={<ProtectedRoute><Cart /></ProtectedRoute>} />
          <Route path='/profile' element={<ProtectedRoute><Profile /></ProtectedRoute>} />
          <Route path='*' element={ <PageNotFound /> } /> 
        </Routes>
      </Container>
    </main>

    </>
  )
}

export default App


// Todos
// 1. Display user.name instead of Open me
// 2. CHANGE props back again!! test with true false, and when all works, isLoggedIn!!!


  //  {message && <Alert>{ message }</Alert>}
//