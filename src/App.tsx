import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import ArtGallery from './components/ArtGallery';
import VideoGallery from './components/VideoGallery';
import Philosophy from './components/Philosophy';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navigation from './components/Navigation';

function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'projects', 'gallery', 'philosophy', 'skills', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-black text-white overflow-x-hidden">
      <Navigation activeSection={activeSection} />
      <Hero />
      <About />
      <Projects />
      <ArtGallery />
      <VideoGallery />
      <Philosophy />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
