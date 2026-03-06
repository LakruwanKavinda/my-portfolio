import { Mail, Linkedin, Instagram, Dribbble, Github, Facebook } from 'lucide-react';

const Contact = () => {
  const socialLinks = [
    { icon: Mail, label: 'Email', href: 'mailto:lakruwankavinda689@gmail.com' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/lakruwan-kavinda-a40454249' },
    { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/lakruwan_kavinda?igsh=MWhuMDQzZGR0MXJueA==' },
    { icon: Dribbble, label: 'Dribbble', href: 'https://dribbble.com/ART-L1' },

    { icon: Github, label: 'GitHub', href: 'https://github.com/LakruwanKavinda?tab=repositories' },
    { icon: Facebook, label: 'Facebook', href: 'https://www.facebook.com/share/1DL3UTKzNZ/' },
    { icon: Dribbble, label: 'Behance', href: 'https://www.behance.net/lakruwankavinda' },
  ];

  return (
    <section id="contact" className="min-h-screen py-24 bg-black text-white flex items-center">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <svg
              className="w-20 h-20 mx-auto mb-8 opacity-60"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="50" cy="50" r="40" stroke="white" strokeWidth="1" />
              <path d="M30 50 L50 30 L70 50 M50 30 L50 70" stroke="white" strokeWidth="1" />
            </svg>
          </div>

          <h2 className="text-4xl md:text-6xl font-light mb-6">
            Let's create something meaningful.
          </h2>

          <p className="text-xl text-gray-400 mb-16 max-w-2xl mx-auto leading-relaxed">
            Whether you have a project in mind or just want to connect, I'd love to hear from you.
          </p>

          <div className="flex justify-center gap-8 mb-16">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                aria-label={link.label}
              >
                <div className="w-16 h-16 border border-white rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
                  <link.icon className="w-6 h-6" />
                </div>
                <p className="text-xs mt-2 text-gray-500 group-hover:text-white transition-colors">
                  {link.label}
                </p>
              </a>
            ))}
          </div>

          <div className="max-w-2xl mx-auto">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-transparent border-b border-gray-700 py-4 px-2 focus:border-white outline-none transition-colors"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-transparent border-b border-gray-700 py-4 px-2 focus:border-white outline-none transition-colors"
                />
              </div>
              <textarea
                rows={5}
                placeholder="Your Message"
                className="w-full bg-transparent border-b border-gray-700 py-4 px-2 focus:border-white outline-none transition-colors resize-none"
              />
              <button
                type="submit"
                className="w-full md:w-auto px-12 py-4 border border-white hover:bg-white hover:text-black transition-all duration-300 text-sm tracking-widest"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;