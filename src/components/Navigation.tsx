interface NavigationProps {
  activeSection: string;
}

const Navigation = ({ activeSection }: NavigationProps) => {
  const sections = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Work' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'philosophy', label: 'Philosophy' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-6">
      {sections.map((section) => (
        <button
          key={section.id}
          onClick={() => scrollToSection(section.id)}
          className="group relative flex items-center"
          aria-label={`Navigate to ${section.label}`}
        >
          <span
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              activeSection === section.id
                ? 'bg-white scale-150'
                : 'bg-gray-600 group-hover:bg-gray-400'
            }`}
          />
          <span
            className={`absolute right-6 whitespace-nowrap text-xs tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
              activeSection === section.id ? 'text-white' : 'text-gray-400'
            }`}
          >
            {section.label}
          </span>
        </button>
      ))}
    </nav>
  );
};

export default Navigation;
