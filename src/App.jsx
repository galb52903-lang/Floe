import React, { useState, useEffect } from 'react';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="floe-app">
      {/* Navigation */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="logo">FLOE</div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#catalog">Catalog</a></li>
          <li><a href="#wholesale">Wholesale</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="cart-wrapper">
          <motion.div 
            className="cart-icon"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ShoppingCart size={24} />
            <span className="cart-count">{cartCount}</span>
          </motion.div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero" id="home">
        <div className="hero-overlay"></div>
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Chilled Essence.<br />Perfected Brew.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Elevate your morning ritual with premium, small-batch coffee syrups. 
            Inspired by the purity of glacial ice, crafted for the true coffee enthusiast.
          </motion.p>
          <div className="cta-group">
            <motion.a 
              href="#catalog" 
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Shop Syrups
            </motion.a>
            <motion.a 
              href="#wholesale" 
              className="btn btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Bulk Inquiries
            </motion.a>
          </div>
        </motion.div>
      </header>

      {/* Placeholder for future phases */}
      <section id="catalog" style={{ height: '100vh', padding: '100px 5%' }}>
        <h2>Explore the Frozen Collection</h2>
        <p>Premium syrups arriving in Phase 2...</p>
      </section>
    </div>
  );
}

export default App;
