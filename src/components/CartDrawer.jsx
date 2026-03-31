import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, Gift, Info } from 'lucide-react';

const CartDrawer = ({ isOpen, onClose, cartData }) => {
  const { cartItems, updateQuantity, calculateTotals } = cartData;
  const { subtotal, discountedTotal, savings, freeMugReached } = calculateTotals();

  const variants = {
    open: { x: 0, transition: { type: 'spring', damping: 25, stiffness: 200 } },
    closed: { x: '100%', transition: { type: 'spring', damping: 25, stiffness: 200 } }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            className="cart-backdrop" 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div 
            className="cart-drawer glass"
            initial="closed"
            animate="open"
            exit="closed"
            variants={variants}
          >
            <div className="cart-header">
              <h2>Your Arctic Order</h2>
              <button onClick={onClose} className="close-btn"><X /></button>
            </div>

            <div className="cart-items">
              {cartItems.length === 0 ? (
                <p className="empty-cart-msg">The ice is empty. Add some syrups!</p>
              ) : (
                cartItems.map((item) => (
                  <div key={item.id} className="cart-item">
                    <img src={item.image} alt={item.name} />
                    <div className="item-details">
                      <h3>{item.name}</h3>
                      <p>${item.price.toFixed(2)}</p>
                      <div className="qty-controls">
                        <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                        <span>{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {cartItems.length > 0 && (
              <div className="cart-footer">
                {savings > 0 && (
                  <div className="promo-alert bundle">
                    <Gift size={16} />
                    <span>Frozen Bundle Applied! Saved ${savings.toFixed(2)}</span>
                  </div>
                )}
                {freeMugReached ? (
                  <div className="promo-alert mug">
                    <Gift size={16} />
                    <span>Free Branded Mug Unlocked! 🎉</span>
                  </div>
                ) : (
                  <div className="promo-info">
                    <Info size={14} />
                    <span>Add ${(60 - discountedTotal).toFixed(2)} more for a <span className="bold">Free Mug</span>.</span>
                  </div>
                )}
                
                <div className="cart-totals">
                  <div className="total-row">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="total-row main">
                    <span>Total</span>
                    <span>${discountedTotal.toFixed(2)}</span>
                  </div>
                </div>
                <button className="btn btn-primary checkout-btn">Proceed to Frost Checkout</button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
