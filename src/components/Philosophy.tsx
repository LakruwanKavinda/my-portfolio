const Philosophy = () => {
  const principles = [
    {
      title: 'Observe',
      description: 'Understand patterns in people and nature',
    },
    {
      title: 'Simplify',
      description: 'Keep what matters most',
    },
    {
      title: 'Harmonize',
      description: 'Blend functionality with emotion',
    },
  ];

  return (
    <section id="philosophy" className="min-h-screen py-24 bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="organic-lines" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              <path d="M0,100 Q50,50 100,100 T200,100" stroke="white" fill="none" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#organic-lines)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-light mb-12 leading-tight">
            Design Philosophy
          </h2>

          <p className="text-2xl md:text-3xl font-light leading-relaxed mb-8 text-gray-300">
            I design with empathy, guided by nature's rhythm.
          </p>

          <p className="text-xl md:text-2xl font-light leading-relaxed text-gray-400">
            Every interface should breathe, move, and feel alive — not mechanical.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <h3 className="text-xl tracking-wider mb-12 text-center text-gray-400">MY APPROACH</h3>

          <div className="grid md:grid-cols-3 gap-12">
            {principles.map((principle, index) => (
              <div key={index} className="text-center group">
                <div className="mb-6 relative">
                  <div className="w-24 h-24 mx-auto border border-white rounded-full flex items-center justify-center text-3xl font-light group-hover:bg-white group-hover:text-black transition-all duration-500">
                    0{index + 1}
                  </div>
                </div>
                <h4 className="text-2xl font-light mb-4">{principle.title}</h4>
                <p className="text-gray-400 leading-relaxed">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-3xl mx-auto mt-24 text-center">
          <blockquote className="text-xl md:text-2xl font-light italic text-gray-400 leading-relaxed">
            "Great design, like nature, is not about perfection. It's about balance, purpose, and the courage to let things breathe."
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
