import React from 'react';
import HoverBox from './HoverBox';
import profileImg from '../PROFILE.jpg';
import AnimatedHeader from './AnimatedHeader';

const AboutMe = () => {
  return (
    <section className="text-left">
      <AnimatedHeader text="About Me"/>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <HoverBox>        <div className="space-y-4 text-slate-700 leading-relaxed text-lg">
          <p>
            I am a BSIT student at the University of the Cordilleras, majoring in 
            <span className="font-semibold text-gray-900"> Network and Security</span>. 
            My academic focus is built on understanding the architecture of connectivity, designing 
            secure, efficient environments and mastering the protocols that keep the digital world running.
          </p>
          <p>
            I am deeply interested in network infrastructure, troubleshooting, and the 
            implementation of robust security measures to protect data integrity across 
            complex systems.
          </p>
        </div>
        </HoverBox>

        {/* Picture */}
<div className="flex justify-center items-center h-full">
  <div className="w-72 h-72 md:w-96 md:h-96 rounded-full border-4 border-blue-500 overflow-hidden shadow-2xl">
    <img 
      src={profileImg} 
      alt="Profile" 
      className="w-full h-full object-cover"
    />
  </div>
</div>
      </div>
    </section>
  );
};

export default AboutMe;