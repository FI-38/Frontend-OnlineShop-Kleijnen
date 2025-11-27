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

  const [cart, setCart] = useState([]);

  // LOGIN
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

  // LOGOUT
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

  // CART
  const addToCart = (newProduct) => {
    setCart(currentCart => {
      const alreadyInCart = currentCart.find(p => p.productID === newProduct.productID);
      if (alreadyInCart) {
        return currentCart.map(p => 
          p.productID === newProduct.productID ? {...p, quantity: p.quantity + 1} : p
        );
      } else {
        return [...currentCart, {...newProduct, quantity: 1}];
      }
    });
  };



  useEffect(() => {
    console.log('Cart now has: ', cart)
    cart.forEach(item => {
      console.log(`${item.product_name} - Quantity: ${item.quantity}`);
    });
  }, [cart])



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
          <Route path='/cart' element={<ProtectedRoute><Cart cart={cart}/></ProtectedRoute>} />
          <Route path='/profile' element={<ProtectedRoute><Profile isLoggedIn={isLoggedIn} userId={userId} /></ProtectedRoute>} />
          <Route path='/products/:id' element={<ProtectedRoute><ProductDetail addToCart={addToCart} /></ProtectedRoute>} />

          <Route path='*' element={ <PageNotFound /> } /> 
        </Routes>
      </Container>
    </main>

    </>
  )
}

export default App

