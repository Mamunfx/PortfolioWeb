import Navbar from './Components/Navbar'
import Banner from './Components/Banner';
import Services from './Components/services';
import Aboutme from './Components/Aboutme';
import ExtraBanner from './Components/ExtraBanner';
import Footer from './Components/Footer';
import Skills from './Components/Skills';
import Portfolio from './Components/Portfolio';
import Testimonial from './Components/Testimonial';
import GetInTouch from './Components/GetInTouch';

function App() {

  return (
    <>
      <Navbar ></Navbar>
      <Banner></Banner>
      <Services></Services>
      <Aboutme></Aboutme>
      <ExtraBanner></ExtraBanner>
      <Skills></Skills>
      <Portfolio></Portfolio>
      <Testimonial></Testimonial>
      <GetInTouch></GetInTouch>
      <Footer></Footer>
    </>
  )
}

export default App
