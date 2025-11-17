import { useEffect, useState } from 'react';
import { Route, Routes, useNavigate} from 'react-router-dom';
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

import './App.css'

function App() {

  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const storedUserId = localStorage.getItem('userId');

    if (token && storedUserId) {
      setIsLoggedIn(true);
      setUserId(storedUserId);
    }
  }, []);

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    navigate('/');
  }


  return (
    <>
    <Navi isLoggedIn={false} handleLogout={handleLogout} /> 
    
    <main>
      <Container className='pt-5'>
        <Routes>
          <Route path='/' element={<Home isLoggedIn={ false } />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login isLoggedIn={false} setIsLoggedIn={setIsLoggedIn} />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/products' element={<Products />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/profile' element={<Profile />} />
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