import portrait from "../assets/portrait3.png";


const About = () => {
  return (
    <section id="about" className="min-h-screen py-24 bg-white text-black relative">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.1),transparent_50%)]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="aspect-[3/4] bg-gray-200 relative overflow-hidden group">
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                <img
  src={portrait}
  alt="Portrait"
  className="absolute inset-0 w-full h-full object-cover"
/>

              </div>
              <div className="mt-4 text-right">
                <p className="font-serif italic text-2xl text-gray-600">Lakruwan K. Dissanayake</p>
              </div>
            </div>

            <div className="order-1 md:order-2 space-y-6">
              <h2 className="text-4xl md:text-5xl font-light mb-8">About Me</h2>

              <p className="text-lg leading-relaxed text-gray-700">
                Hi, I'm <span className="font-medium">Lakruwan Kavinda</span>, a UI/UX engineer and visual artist who believes that great design is like nature - functional, balanced, and beautifully imperfect.
              </p>

              <p className="text-lg leading-relaxed text-gray-700">
                I blend human-centered design with artistic sensitivity to create meaningful digital experiences. Every project is an opportunity to observe, understand, and craft solutions that feel intuitive and alive.
              </p>

              <p className="text-lg leading-relaxed text-gray-700">
                And also I'm a portraitartist. When I'm not designing, I'm usually sketching wildlife or exploring green spaces to recharge creativity. Nature teaches me patience, balance, and the beauty of imperfection.
              </p>

              <div className="pt-4 border-t border-gray-300 mt-8">
                <p className="text-sm text-gray-500 tracking-wider">• I am an <b>UI/UX Engineer</b></p><br></br>
                <p className="text-sm text-gray-500 tracking-wider">• I am an <b>UI/UX Designer</b></p><br></br>
                <p className="text-sm text-gray-500 tracking-wider">• I am a <b>Portrait Artist</b></p><br></br>
                <p className="text-sm text-gray-500 tracking-wider">• I am a <b>Wildlife Enthusiast</b></p><br></br>
                <p className="text-sm text-gray-500 tracking-wider">• I am a <b>Taekwondo player</b> (Former captain of the Sabaragamuwa University Taekwondo team, 2025/2026)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
