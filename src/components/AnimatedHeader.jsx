import React from 'react';
import Divider from './Divider'; 
import { motion } from 'framer-motion';

const AnimatedHeader = ({ text }) => {
  return (
    /* h-32 is a rigid box. 'contain-strict' is a high-performance CSS trick */
    <div className="relative w-full h-32 flex flex-col items-center justify-center overflow-hidden" style={{ contain: 'strict' }}>
      <div className="w-full">
        <Divider />
      </div>

      <div className="relative w-full h-full flex items-center justify-center">
        <motion.div 
          /* Use a fixed pixel range. If your screen is 1000px, 
             this stays safely in the middle without hitting the edges. */
          animate={{
            x: [-150, 150, -150],
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 15, 
            ease: "linear" 
          }}
          /* absolute + block stops the layout engine from re-calculating */
          className="absolute block whitespace-nowrap pointer-events-none"
        >
          <h1 className="md:!text-7xl !font-san !font-extrabold !uppercase !tracking-widest
         !text-cyan-400  ![filter:drop-shadow(0_0_15px_rgba(6,182,212,0.6))]">
            {text}
          </h1>
        </motion.div>
      </div>

      <div className="w-full mt-auto">
        <Divider />
      </div>
    </div>
  );
};

export default AnimatedHeader;