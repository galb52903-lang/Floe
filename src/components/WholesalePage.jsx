import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, FileText, Package } from 'lucide-react';

const WholesalePage = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="wholesale-section" id="wholesale">
      <div className="wholesale-grid">
        <motion.div 
          className="wholesale-info"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="badge">B2B Partnerships</div>
          <h2>For the Modern Café</h2>
          <p>
            Join our network of premium cafes and specialty shops. 
            We offer tiered volume pricing and custom flavor profiles for the discerning business owner.
          </p>
          <div className="perks">
            <div className="perk">
              <Package size={24} />
              <span>Bulk 1L and 5L Dispensing Options</span>
            </div>
            <div className="perk">
              <FileText size={24} />
              <span>Net-30 Invoicing for Qualified Partners</span>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="wholesale-form-container glass-card glass"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {submitted ? (
            <div className="success-msg">
              <h3>Inquiry Received</h3>
              <p>One of our Partnership Managers will reach out to your cafe within 24 hours.</p>
              <button 
                className="btn btn-secondary" 
                onClick={() => setSubmitted(false)}
              >
                Send Another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="wholesale-form">
              <div className="input-group">
                <label>Café Name</label>
                <input type="text" placeholder="e.g., The Frozen Grind" required />
              </div>
              <div className="input-row">
                <div className="input-group">
                  <label>Monthly Syrup Volume</label>
                  <select required>
                    <option value="">Select Range</option>
                    <option value="low">1-10 cases</option>
                    <option value="med">11-50 cases</option>
                    <option value="high">50+ cases</option>
                  </select>
                </div>
                <div className="input-group">
                  <label>Contact Email</label>
                  <input type="email" placeholder="manager@cafe.com" required />
                </div>
              </div>
              <div className="input-group">
                <label>Expected First Delivery Date</label>
                <input type="date" required />
              </div>
              <button type="submit" className="btn btn-primary submit-btn">
                <span>Request Wholesale Catalog</span>
                <Send size={18} />
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default WholesalePage;
