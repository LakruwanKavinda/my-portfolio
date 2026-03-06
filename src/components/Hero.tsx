import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    "/images/hero1.jpg",
    "/images/hero2.jpg",
    "/images/hero3.jpg",
    "/images/hero4.jpg",
    "/images/hero5.jpg"
  ];

  // Fade-in animation on mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Image carousel loop
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length); // circular loop
    }, 5000); // change image every 5 seconds

    return () => clearInterval(interval); // cleanup
  }, [images.length]);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative bg-cover bg-center transition-all duration-1000"
      style={{ backgroundImage: `url(${images[currentImage]})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-70" />

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDIpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50" />

      <div className="container mx-auto px-6 text-center relative z-10">
        <div
          className={`transition-all duration-1500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <svg
            className="w-32 h-32 mx-auto mb-8 opacity-80"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M50 10 Q60 30 50 50 Q40 70 50 90 M30 30 Q50 40 70 30 M30 70 Q50 60 70 70"
              stroke="white"
              strokeWidth="1.5"
              fill="none"
              className="animate-draw"
            />
          </svg>

          <h1 className="text-5xl md:text-7xl font-light mb-6 tracking-tight">
            Hello, I'm <span className="font-normal">Lakruwan Kavinda</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 mb-4 font-light tracking-wide">
            UI/UX Engineer • Portrait Artist • Wildlife Enthusiast
          </p>

          <p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto mb-12 leading-relaxed">
            Crafting digital experiences inspired by the calm balance of nature.
            <br className="hidden md:block" />
            I design, build, and illustrate interfaces that breathe simplicity. And also I can draw you...
          </p>

          <button
            onClick={scrollToAbout}
            className="inline-block px-8 py-3 border border-white text-white hover:bg-white hover:text-black transition-all duration-300 text-sm tracking-widest"
          >
            EXPLORE MY WORLD
          </button>
        </div>
      </div>

      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-6 h-6 text-gray-400" />
      </button>
    </section>
  );
};

export default Hero;