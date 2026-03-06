const Skills = () => {
  const technicalSkills = [
    'Figma',
    'Adobe XD',
    'React',
    'TailwindCSS',
    'Prototyping',
    'Design Systems',
    'Illustration',
    'Digital Painting',
    'UX Research',
  ];

  const softSkills = [
    'Leadership',
    'Empathy',
    'Creativity',
    'Storytelling',
    'Collaboration',
    'Attention to Detail',
  ];

  return (
    <section id="skills" className="min-h-screen py-24 bg-white text-black">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light mb-16 text-center">Skills & Experience</h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-16 leading-relaxed">
  | UI/UX Engineer Intern at <span className="font-medium">ICIEOS (Pvt) Ltd</span>, 
  where I spent six months designing intuitive user experiences, refining interfaces, 
  and translating ideas into meaningful digital solutions.
</p>

          <div className="grid md:grid-cols-2 gap-16">
            <div className="bg-black text-white p-12">
              <h3 className="text-2xl font-light mb-8 pb-4 border-b border-gray-700">
                Technical Skills
              </h3>
              <div className="space-y-4">
                {technicalSkills.map((skill, index) => (
                  <div key={index} className="flex items-center group">
                    <div className="w-2 h-2 bg-white rounded-full mr-4 group-hover:scale-150 transition-transform duration-300" />
                    <span className="text-lg font-light group-hover:text-gray-300 transition-colors">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 p-12">
              <h3 className="text-2xl font-light mb-8 pb-4 border-b border-gray-300">
                Soft Skills
              </h3>
              <div className="space-y-4 mb-12">
                {softSkills.map((skill, index) => (
                  <div key={index} className="flex items-center group">
                    <div className="w-2 h-2 bg-black rounded-full mr-4 group-hover:scale-150 transition-transform duration-300" />
                    <span className="text-lg font-light group-hover:text-gray-600 transition-colors">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-300 pt-8">
                <h4 className="text-xl font-light mb-4">Education</h4>
                <p className="text-gray-700 leading-relaxed">
                  <span className="font-medium">BSc (Hons) in Computing and Information Systems</span>
                  <br />
                  <span className="text-sm text-gray-500">Sabaragamuwa University of Sri Lanka, 2026</span>
                </p><br></br>
                <p className="text-gray-700 leading-relaxed">
                  <span className="font-medium">GCE Advanced Level (A/L) in Physical Science stream</span>
                  <br />
                  <span className="text-sm text-gray-500">B/Orubendiwewa Secondary School of Sri Lanka, 2020</span>
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="inline-block border border-black px-8 py-4 hover:bg-black hover:text-white transition-all duration-300 cursor-pointer">
              <span className="text-sm tracking-widest">DOWNLOAD RESUME</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
