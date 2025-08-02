import { motion } from 'framer-motion';
import React from 'react';

function AnimatedSection({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}  // Start hidden + pushed down
      whileInView={{ opacity: 1, y: 0 }} // Animate to visible + normal position
      transition={{ duration: 0.6, ease: 'easeOut' }} // Smoothness
      viewport={{ once: true, amount: 0.3 }} // Animate once when 30% visible
      className="w-full"
    >
      {children}
    </motion.div>
  );
}

export default AnimatedSection;
