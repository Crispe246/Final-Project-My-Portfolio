import React from 'react';
import HoverBox from './HoverBox';
import AnimatedHeader from './AnimatedHeader';

const Experience = () => {
  return (
    <section className="text-left px-4">
      <AnimatedHeader text="Experience" />
      
      {/* Changed space-y-6 to a grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-24">
        
        {/* Box 1 */}
        <HoverBox>
        <div className="flex flex-col min-h-62.5 py-10">
          <h3 className="text-2xl font-bold text-gray-800 mb-2 text-center underline">Smart Sales System of Tau Ceti</h3>
          <p className="text-xl font-semibold text-gray-800 uppercase mb-3 text-center">System Analysis & Design</p>
          <p className="text-xl text-gray-800 t leading-loose text-center">
            Full system analysis for sales tracking and management, focusing on data flow.
          </p>
        </div>
        </HoverBox>
        {/* Box 2 */}
        <HoverBox>
        <div className="flex flex-col min-h-62.5 text-center py-10">
          <h3 className="text-2xl font-bold text-gray-800 mb-2 text-center underline">E-Commerce Landing Page</h3>
          <p className="text-xl font-semibold text-gray-800 uppercase mb-3">HTML & CSS Project</p>
          <p className="text-xl text-gray-800  leading-loose">
            Developed a responsive landing page focused on UI/UX best practices.
          </p>
        </div>
        </HoverBox>
        {/* Box 3 */}
        <HoverBox>
        <div className="flex flex-col min-h-62.5 text-center py-10">
          <h3 className="text-2xl font-bold text-gray-800 mb-2 text-center underline">Cisco NetRiders Competition (2026)</h3>
          <p className="text-xl font-semibold text-gray-800 uppercase mb-3">Competitor</p>
          <p className="text-xl text-gray-800  leading-loose">
            Tested skills in networking configuration and security troubleshooting.
          </p>
        </div>
        </HoverBox>

      </div>
    </section>
  );
};

export default Experience;