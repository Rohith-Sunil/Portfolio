// import React from "react";
// import Navbar from "./sections/navbar";
// import Hero from "./sections/Hero";
// import About from "./sections/About";
// import Projects from "./sections/Projects";
// import Experiences from "./sections/Experiences";
// //import Testimonial from "./sections/Testimonial";
// import Contact from "./sections/Contact";
// import Footer from "./sections/Footer";
// import { StarBackground } from "./components/StarBackground";

// const App = () => {
//   return (
//     <>
//       {/* Background should be outside the layout container */}
//       <StarBackground />

//       {/* Main content */}
//       <div className="relative container mx-auto max-w-7xl z-10">
//         <Navbar />
//         <Hero />
//         <About />
//         <Projects />
//         <Experiences />
//         <Contact />
//         <Footer />
//       </div>
//     </>
//   );
// };

// export default App;

import React from "react";
import Navbar from "./sections/navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experiences from "./sections/Experiences";
// import Testimonial from "./sections/Testimonial";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import { StarBackground } from "./components/StarBackground";

const App = () => {
  return (
    <>
      {/* Background should be outside the layout container */}
      <StarBackground />

      {/* Main content */}
      <div className="relative container mx-auto max-w-7xl z-10">
        <Navbar />

        <section id="home" className="scroll-mt-16">
          <Hero />
        </section>

        <section id="about" className="scroll-mt-16">
          <About />
        </section>

        <section id="work" className="scroll-mt-16">
          <Projects />
        </section>

        <section id="exp" className="scroll-mt-16">
          <Experiences />
        </section>

        {/* <section id="testimonials" className="scroll-mt-16">
          <Testimonial />
        </section> */}

        <section id="contact" className="scroll-mt-16">
          <Contact />
        </section>

        <Footer />
      </div>
    </>
  );
};

export default App;
