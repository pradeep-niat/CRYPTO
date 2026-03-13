import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Tokenomics from './components/Tokenomics';
import HowToBuy from './components/HowToBuy';
import Roadmap from './components/Roadmap';
import LiveChart from './components/LiveChart';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-mystery-black">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Tokenomics />
        <HowToBuy />
        <Roadmap />
        <LiveChart />
      </main>
      <Footer />
    </div>
  );
}
