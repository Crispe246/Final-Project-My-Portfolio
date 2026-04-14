import React from 'react';
import HoverBox from './HoverBox';
import AnimatedHeader from './AnimatedHeader';
const Skills = () => {
  return (
    <section>
      <AnimatedHeader text="Skills" />
      <div className="grid md:grid-cols-2 gap-8 text-left mt-24">
      <HoverBox>
  <div>
    {/*Technical Skills*/}
    <h3 className="text-3xl font-bold mb-3 text-gray-800 underline">Technical</h3>
    <ul className="list-disc list-inside space-y-2 text-black">
      <li><strong>Basic React</strong> – Component structure & state</li>
      <li><strong>Basic JavaScript</strong> – ES6 & DOM</li>
      <li><strong>Tailwind CSS</strong> – Responsive utility styling</li>
      <li><strong>Basic SQL</strong> – Querying & database structure</li>
      <li><strong>Basic Java</strong> – OOP & logic</li>
    </ul>
  </div>
</HoverBox>

<HoverBox>
  <div>
    {/*Soft Skills*/}
    <h3 className="text-3xl font-bold mb-3 text-gray-800 underline">Soft Skills</h3>
    <ul className="list-disc list-inside space-y-2 text-black">
      <li>Critical Thinking & Problem Solving</li>
      <li>Team Collaboration</li>
      <li>Effective Communication</li>
      <li>Active Learning & Adaptability</li>
    </ul>
  </div>
</HoverBox>
      </div>
    </section>
  );
};

export default Skills;