import React from 'react';
import { motion } from 'framer-motion';
import AnimatedHeader from './AnimatedHeader'; 
import HoverBox from './HoverBox'; 

const Contact = () => {
  return (
    <section className="w-full py-12">
      <AnimatedHeader text="Contact" />

      <div className="max-w-3xl mx-auto mt-16 px-4">
        <HoverBox>
          <div className="p-8 md:p-12">
            <h3 className="text-2xl font-black uppercase tracking-tight underline text-cyan-400 mb-8 border-b border-blue-500/20 pb-4">
            CONTACT DETAILS:
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Email */}
              <a href="mailto:markandrewhoover2@gmail.com" className="flex items-center gap-4 group cursor-pointer">
                <motion.div 
                  whileTap={{ 
                    scale: 0.8, 
                    rotate: -10, 
                    /* Darker shadow combo: Deep Navy and a tight Cyan core */
                    boxShadow: "0 0 20px #0891b2, 0 0 50px #1e3a8a, 0 0 80px #172554" 
                  }}
                  transition={{ type: "spring", stiffness: 450, damping: 12 }}
                  className="w-10 h-10 flex items-center justify-center bg-blue-600/20 rounded-lg text-cyan-400 group-hover:bg-cyan-500 group-hover:text-gray-900 transition-all shadow-[0_0_10px_rgba(30,58,138,0.4)]"
                >
                  <span className="text-xs font-bold">@</span>
                </motion.div>
                <div>
                  <p className="text-[10px] font-mono uppercase text-slate-500 tracking-widest">Email</p>
                  <p className="text-slate-200 font-medium group-hover:text-cyan-300 transition-colors">markandrew
                    hoover@gmail.com</p>
                </div>
              </a>

              {/* Phone */}
              <a href="tel:09176511151" className="flex items-center gap-4 group cursor-pointer">
                <motion.div 
                  whileTap={{ 
                    scale: 0.8, 
                    rotate: -10, 
                    boxShadow: "0 0 20px #0891b2, 0 0 50px #1e3a8a, 0 0 80px #172554" 
                  }}
                  transition={{ type: "spring", stiffness: 450, damping: 12 }}
                  className="w-10 h-10 flex items-center justify-center bg-blue-600/20 rounded-lg text-cyan-400 group-hover:bg-cyan-500 group-hover:text-gray-900 transition-all shadow-[0_0_10px_rgba(30,58,138,0.4)]"
                >
                  <span className="text-xs font-bold">#</span>
                </motion.div>
                <div>
                  <p className="text-[10px] font-mono uppercase text-slate-500 tracking-widest">Phone</p>
                  <p className="text-slate-200 font-medium group-hover:text-cyan-300 transition-colors">+63 917 651 1151</p>
                </div>
              </a>

              {/* Facebook */}
              <a href="https://www.facebook.com/mark.hoover.396909" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group cursor-pointer">
                <motion.div 
                  whileTap={{ 
                    scale: 0.8, 
                    rotate: -10, 
                    boxShadow: "0 0 20px #0891b2, 0 0 50px #1e3a8a, 0 0 80px #172554" 
                  }}
                  transition={{ type: "spring", stiffness: 450, damping: 12 }}
                  className="w-10 h-10 flex items-center justify-center bg-blue-600/20 rounded-lg text-cyan-400 group-hover:bg-cyan-500 group-hover:text-gray-900 transition-all shadow-[0_0_10px_rgba(30,58,138,0.4)]"
                >
                  <span className="text-xs font-bold">FB</span>
                </motion.div>
                <div>
                  <p className="text-[10px] font-mono uppercase text-slate-500 tracking-widest">Facebook</p>
                  <p className="text-slate-200 font-medium group-hover:text-cyan-300 transition-colors">Mark Hoover</p>
                </div>
              </a>

              {/* Instagram */}
              <a href="https://www.instagram.com/markhoover24/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group cursor-pointer">
                <motion.div 
                  whileTap={{ 
                    scale: 0.8, 
                    rotate: -10, 
                    boxShadow: "0 0 20px #0891b2, 0 0 50px #1e3a8a, 0 0 80px #172554" 
                  }}
                  transition={{ type: "spring", stiffness: 450, damping: 12 }}
                  className="w-10 h-10 flex items-center justify-center bg-blue-600/20 rounded-lg text-cyan-400 group-hover:bg-cyan-500 group-hover:text-gray-900 transition-all shadow-[0_0_10px_rgba(30,58,138,0.4)]"
                >
                  <span className="text-xs font-bold">IG</span>
                </motion.div>
                <div>
                  <p className="text-[10px] font-mono uppercase text-slate-500 tracking-widest">Instagram</p>
                  <p className="text-slate-200 font-medium group-hover:text-cyan-300 transition-colors">@your.handle</p>
                </div>
              </a>

            </div>
          </div>
        </HoverBox>
      </div>
    </section>
  );
};

export default Contact;