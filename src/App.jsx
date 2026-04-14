import React, { useRef } from "react";
import Header_Navbar from "./components/Header_Navbar";
import Divider from "./components/Divider";
import AboutMe from "./components/AboutMe";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import HoverBox from "./components/HoverBox";
{/*refs used for NavigationActivation*/}
function App() {
  const refs = {
    aboutRef: useRef(null),
    educationRef: useRef(null),
    skillsRef: useRef(null),
    experienceRef: useRef(null),
    contactRef: useRef(null),
  };

  const scrollToSection = (elementRef) => {
    if (elementRef.current) {
      window.scrollTo({
        top: elementRef.current.offsetTop - 100,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-[#1e3a8a] to-[#374151] pb-24">
      <Header_Navbar refs={refs} scrollToSection={scrollToSection} />

      <main className="space-y-24 mt-14">
        <div ref={refs.aboutRef}>
          <AboutMe />
        </div>
        <div ref={refs.educationRef}>
          <Education />
        </div>
        <div ref={refs.skillsRef}>
          <Skills />
        </div>
        <div ref={refs.experienceRef}>
          <Experience />
        </div>
        <div ref={refs.contactRef}>
          <Contact />
        </div>
      </main>
    </div>
  );
}

export default App;
