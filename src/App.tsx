import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { VideoSection } from './components/VideoSection';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Location } from './components/Location';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { Admin } from './components/Admin';
import { AdPopup } from './components/AdPopup';

const LandingPage = () => (
  <>
    <Header />
    <main>
      <Hero />
      <About />
      <VideoSection />
      <Services />
      <Gallery />
      <Testimonials />
      <FAQ />
      <Location />
    </main>
    <Footer />
    <WhatsAppButton />
    <AdPopup />
  </>
);

function App() {
  return (
    <div className="min-h-screen bg-titanus-black text-white selection:bg-titanus-yellow selection:text-black">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </div >
  );
}

export default App;
