import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { gsap } from "gsap";

import Header from './components/header/Header';
import About from './pages/about/About';
import Auth from './pages/auth/Auth';
import Bag from './pages/bag/Bag';
import Involvement from './pages/involvement/Involvement';
import Market from './pages/market/Market';
import Footer from './components/footer/Footer';
import Home from "./pages/home/Home";

import AppProvider from "./providers/AppProviders";


export default function App() {
  const [count, setCount] = useState(0);

  return (
    <AppProvider>
    <div className='viewport'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/auth" element={<Auth/>} />
          <Route path="/bag" element={<Bag/>} />
          <Route path="/involvement" element={<Involvement/>} />
          <Route path="/market" element={<Market/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
    </AppProvider>
  )
}