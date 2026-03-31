import React from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <motion.div 
      className="product-card glass"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -10 }}
    >
      <div className="product-image-container">
        <motion.img 
          src={product.image} 
          alt={product.name} 
          className="product-image"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
        {product.tag && (
          <span className="product-tag">{product.tag}</span>
        )}
      </div>
      
      <div className="product-info">
        <h3>{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <div className="product-footer">
          <span className="price">${product.price.toFixed(2)}</span>
          <motion.button 
            className="add-to-cart-btn"
            onClick={() => onAddToCart(product)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Plus size={20} />
            <span>Add</span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
