import React from 'react';
import ProductCard from './ProductCard';
import { motion } from 'framer-motion';

const products = [
  {
    id: 1,
    name: 'Vanilla Glacier',
    description: 'Smooth, pure vanilla bean essence with a cool finish.',
    price: 15.00,
    image: '/assets/syrups/vanilla_glacier.png',
    tag: 'Best Seller'
  },
  {
    id: 2,
    name: 'Caramel Frost',
    description: 'Deep, rich salted caramel with a hint of arctic coolness.',
    price: 15.00,
    image: '/assets/syrups/caramel_frost.png',
    tag: 'Sweet'
  },
  {
    id: 3,
    name: 'Arctic Hazelnut',
    description: 'Roasted hazelnut flavor with a refreshing snowy aftertaste.',
    price: 15.00,
    image: '/assets/syrups/arctic_hazelnut.png',
    tag: 'Earthy'
  },
  {
    id: 4,
    name: 'Peppermint Ice',
    description: 'Invigorating peppermint that leaves a crisp, cold sensation.',
    price: 15.00,
    image: 'https://images.unsplash.com/photo-1595126731405-6582572c6762?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    tag: 'Limited Edition'
  }
];

const ProductGrid = ({ onAddToCart }) => {
  return (
    <section className="product-grid-section" id="catalog">
      <div className="section-header">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          The Frozen Collection
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Premium coffee syrups designed for the discerning home barista.
        </motion.p>
      </div>
      
      <div className="grid-container">
        {products.map((product) => (
          <ProductCard 
            key={product.id} 
            product={product} 
            onAddToCart={onAddToCart} 
          />
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
