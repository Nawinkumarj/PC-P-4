import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Appoinment from './components/Appoinment';
import Service2Details from './components/Service2Details';
import Home from './pages/Home';
import About from './pages/About';
import Team from './pages/Team';
import Training from './pages/Training';
import Training2 from './pages/Training2';
import Disclaimer from './components/Disclaimer';
import Service1 from './pages/Service1';
import Service2 from './pages/Service2';
import Training1 from './pages/Training1';
import ContactUs from './pages/ContactUs'
import Service1Details from './pages/Service1Details'
import ScrollToTop from './components/ScrollToTop' 

function App() {
  const [isDisclaimerVisible, setIsDisclaimerVisible] = useState(false);
  const [isAppoinmentVisible, setIsAppoinmentVisible] = useState(false);

  useEffect(() => {
    setIsDisclaimerVisible(true);
  }, []);

  const closeDisclaimer = () => {
    setIsDisclaimerVisible(false);
  };

  const openAppoinment = () => {
    setIsAppoinmentVisible(true);
  };

  const closeAppoinment = () => {
    setIsAppoinmentVisible(false);
  };

  return (
    <div>
       <ScrollToTop />
      <Navbar openAppoinment={openAppoinment} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service1" element={<Service1 />} />
        <Route path="/Service2" element={<Service2 />} />
        <Route path="/services/:id" element={<Service2Details />} />
        <Route path='/service1/:id' element={<Service1Details />} />
        <Route path="/our-team" element={<Team />} />
        <Route path="/training" element={<Training />} />
        <Route path="/training1" element={<Training1 />} />
        <Route path="/training2" element={<Training2 />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>

      <Footer />

      <Disclaimer isOpen={isDisclaimerVisible} onClose={closeDisclaimer} />

      {isAppoinmentVisible && <Appoinment onClose={closeAppoinment} />}
    </div>
  );
}

export default App;
