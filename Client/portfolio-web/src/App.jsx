import React from 'react';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import Services from './Components/Services';
import Aboutme from './Components/Aboutme';
import ExtraBanner from './Components/ExtraBanner';
import Skills from './Components/Skills';
import Portfolio from './Components/Portfolio';
import Testimonial from './Components/Testimonial';
import GetInTouch from './Components/GetInTouch';
import Footer from './Components/Footer';
import ACI from './Components/ACI';
import GrowChart from './Components/GrowChart';

function App() {
  return (
    <>
      <Navbar />
      <section id="banner">
        <Banner />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="aboutme">
        <Aboutme />
      </section>
      <section id="extrabanner">
        <ExtraBanner />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="portfolio">
        <Portfolio />
      </section>

      <section id="GrowChart">
        <GrowChart></GrowChart>
      </section>

      <section id="testimonial">
        <Testimonial />
      </section>
      <section id="getintouch">
        <GetInTouch />
      </section>
      <section id="footer">
        <Footer />
      </section>
      


    </>
  );
}

export default App;
