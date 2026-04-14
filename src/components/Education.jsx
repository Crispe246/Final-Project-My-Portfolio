import React from 'react';
import HoverBox from './HoverBox';
import AnimatedHeader from './AnimatedHeader';

const Education = () => {
  return (
    <section className="p-8">
      <AnimatedHeader text="Education" />
      <div className="space-y-6 mt-24">
        <HoverBox>
        <div>
          <h3 className="text-xl font-semibold text-gray-800 underline">University of the Cordilleras</h3>
          <p className="text-blue-800 italic">Bachelor of Science in Information Technology</p>
          <p className="text-gray-800">2024 — Present</p>
        </div>
        </HoverBox>
        <HoverBox>
        <div>
          <h3 className="text-xl font-semibold text-gray-800 underline">Claremont School of Binangonan</h3>
          <p className="text-blue-800 italic">High School Diploma</p>
          <p className="text-gray-800">Graduated</p>
        </div>
        </HoverBox>
      </div>
    </section>
  );
};

export default Education;