const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 border-t border-gray-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center">
          <div className="mb-6">
            <svg
              className="w-12 h-12 opacity-60"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M50 10 Q60 30 50 50 Q40 70 50 90 M30 30 Q50 40 70 30 M30 70 Q50 60 70 70"
                stroke="white"
                strokeWidth="1.5"
                fill="none"
              />
            </svg>
          </div>

          <p className="text-sm text-gray-500 mb-2">
            © 2026 Lakruwan K. Dissanayake. Designed & Developed by me.
          </p>

          <p className="text-xs text-gray-600">
            Built with care, inspired by nature.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
