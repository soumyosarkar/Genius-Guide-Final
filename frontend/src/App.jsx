import Navbar from './components/Navbar';
import Hero from './components/Hero/Hero';
import Services from './components/Services';
import TrustedPartner from './components/TrustedPartner/TrustedPartner';
import GetInTouch from './components/GetInTouch/GetInTouch';

import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <TrustedPartner />
        <GetInTouch />
        {/* <Contact /> */}
      </main>
      <Footer />
    </div>
  );
}

export default App;