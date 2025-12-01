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

import LogoutModal from './components/modals/LogoutModal';

import './App.css'

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState();
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [username, setUsername] = useState('');

  const [cart, setCart] = useState([]);
  const [totalCartValue, setTotalCartValue] = useState(0);
  const [totalCartItems, setTotalCartItems] = useState(0);
  const [deliveryCosts, setDeliveryCosts] = useState(5.95);

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

  // CART Add Product
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

    const totalVal = cart.reduce((acc, item) => {
      return acc + item.quantity * parseFloat(item.product_price);
    }, 0);

    setTotalCartValue(totalVal);

    if (totalVal < 120) {
      setDeliveryCosts(5.95); 
    } else {
      setDeliveryCosts(0);
    }

    const cartItemCount = cart.reduce((acc, item) => {
      return acc + item.quantity;
    }, 0);
    setTotalCartItems(cartItemCount);

  }, [cart])



  // CART In- or decrement quantity ON cart items, or Delete

  const increaseQty = (id) => {
    setCart(cart => cart.map(p => p.productID === id ? 
      { ...p, quantity: p.quantity + 1 } : p
      )
    );
  };

  const decreaseQty = (id) => {
    setCart(cart => cart.map(p =>p.productID === id ? 
          { ...p, quantity: Math.max(1, p.quantity - 1) } : p
      )
    );
};

  const deleteProductFromCart = (id) => {
    setCart(cart => cart.filter(p => p.productID !== id )
    )
  }



  return (
    <>
    <Navi 
      isLoggedIn={isLoggedIn} 
      setIsLoggedIn={setIsLoggedIn}
      setUsername={setUsername}
      username={username}
      handleLogout={handleLogout} 
      totalCartItems={totalCartItems}
      /> 
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
          <Route path='/cart' element={<ProtectedRoute>
                                                      <Cart 
                                                          cart={cart} 
                                                          totalCartValue={totalCartValue} 
                                                          deliveryCosts={deliveryCosts}
                                                          increaseQty={increaseQty}
                                                          decreaseQty={decreaseQty}
                                                          deleteProductFromCart={deleteProductFromCart}
                                                          setTotalCartItems={setTotalCartItems}
                                                          setCart={setCart}
                                                          setTotalCartValue={setTotalCartValue}
                                                          setDeliveryCosts={setDeliveryCosts}
                                                          />
                                        </ProtectedRoute>} />
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

