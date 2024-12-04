import React, { useState,createContext} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import SignIn from './pages/SignIn';
;

export const CartContext = createContext();

const App = () => {
  // State to manage the cart
  const [cart, setCart] = useState([]);

  // Function to add items to the cart
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]); // Add product to the existing cart
    alert(`${product.name} added to the cart!`);
  };

  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signin" element={<SignIn />} />
    
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;