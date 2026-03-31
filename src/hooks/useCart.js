import { useState, useEffect } from 'react';

export const useCart = () => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('floe_cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('floe_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCartItems(prev => prev.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, delta) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === productId) {
        const newQty = Math.max(0, item.quantity + delta);
        return newQty === 0 ? null : { ...item, quantity: newQty };
      }
      return item;
    }).filter(Boolean));
  };

  const calculateTotals = () => {
    const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    
    // 3-for-$35 Bundle Logic
    // If user has 3 items, the price becomes $35. Each set of 3 is $35.
    const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    const bundles = Math.floor(totalItems / 3);
    const remainders = totalItems % 3;
    const discountedTotal = (bundles * 35) + (remainders * 15);
    
    const savings = subtotal - discountedTotal;
    
    // Free Mug Threshold ($60+)
    const freeMugReached = discountedTotal >= 60;

    return {
      subtotal,
      discountedTotal,
      savings,
      freeMugReached,
      totalCount: totalItems
    };
  };

  return {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    calculateTotals
  };
};
