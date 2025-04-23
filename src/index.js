import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Header';
import Home from './Home';
import Login from './Login';
import Shop from './Shop';
import Wishlist from './Wishlist';
import Details from './Details';
import Compare from './Compare';
import Checkout from './Checkout';
import Cart from './Cart';
import Accounts from './Accounts';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from './About';
import Contact from './Contact';
import Footer from './Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/details" element={<Details />} />
        <Route path="/compare" element={<Compare />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/accounts" element={<Accounts />}/>
        <Route path="/about" element={<About />}/>
        <Route path='/contact' element={<Contact/>}/>
      
      </Routes>
    <Footer/>
    </BrowserRouter>


  </>
);

