import { useState } from 'react';
import { ExternalLink } from 'lucide-react';

import wildtrackImg from "../assets/projects/wildtrack.png";
import organicFormsImg from "../assets/projects/organic-forms.png";
import minimalDashboardImg from "../assets/projects/minimal-dashboard.png";
import wildlifeSketchesImg from "../assets/projects/wildlife-sketches.png";
import greenSpaceFinderImg from "../assets/projects/green-space-finder.png";
import textureLibraryImg from "../assets/projects/texture-library.png";

interface Project {
  id: number;
  title: string;
  type: string;
  description: string;
  tools: string;
  image: string;
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
  {
    id: 1,
    title: 'Sunday Times',
    type: 'Redesign Web',
    description:
      'Redesign a web page. I have redesign the Sunday Times e news paper here. I used some UI/UX stratergies to make it to attractive.',
    tools: 'Figma, Photoshop',
    image: wildtrackImg,
  },
  {
    id: 2,
    title: 'Travalia Website',
    type: 'Tourism Website',
    description:
      'A series of abstract illustrations exploring the intersection of nature and geometric shapes.',
    tools: 'Figma, Adobe Illustrator',
    image: organicFormsImg,
  },
  {
    id: 3,
    title: 'Vampior Production',
    type: 'Film Production Website',
    description:
      'A clean, data-focused dashboard that prioritizes clarity and breathing space. Designed with the principle that less is more.',
    tools: 'Figma, React, TailwindCSS',
    image: minimalDashboardImg,
  },
  {
    id: 4,
    title: 'Doctor DOOM',
    type: 'Film Poster',
    description:
      'A clean, data-focused dashboard that prioritizes clarity and breathing space. Designed with the principle that less is more.',
    tools: 'Photoshop, Illustrator',
    image: wildlifeSketchesImg,
  },
  {
    id: 5,
    title: 'AudiRAB',
    type: 'Audiobook Mobile App',
    description:
      'This mobile app help to listen any kind of pdf. Here we have use simple and clean design,',
    tools: 'Figma, Prototyping, Flutter',
    image: greenSpaceFinderImg,
  },
  {
    id: 6,
    title: 'CHATpre',
    type: 'Chatting Platform',
    description:
      'To design this web platform, I used simple and clear structur. That was help to develop easier and it will easy to use fo the clients',
    tools: 'Photography, Digital Processing',
    image: textureLibraryImg,
  },
];
 

  return (
    <section id="projects" className="min-h-screen py-24 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-light mb-16 text-center">Selected Works</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="aspect-[4/3] bg-gray-900 relative overflow-hidden mb-4">
                <div className="absolute inset-0 flex items-center justify-center text-gray-700 text-sm">
                  <img
  src={project.image}
  alt={project.title}
  className="absolute inset-0 w-full h-full object-cover"
/>

                </div>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-90 transition-all duration-500 flex items-center justify-center">
                  <div className="text-black text-center p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-xs tracking-widest mb-2 text-gray-600">{project.type}</p>
                    <h3 className="text-2xl font-light mb-2">{project.title}</h3>
                    <ExternalLink className="w-5 h-5 mx-auto" />
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-light mb-1 group-hover:text-gray-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-gray-500">{project.type}</p>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-6"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white text-black max-w-3xl w-full p-8 md:p-12 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-2xl hover:text-gray-600 transition-colors"
            >
              ×
            </button>

            <p className="text-xs tracking-widest mb-2 text-gray-500">
              {selectedProject.type}
            </p>
            <h3 className="text-3xl md:text-4xl font-light mb-6">{selectedProject.title}</h3>

            <div className="aspect-video bg-gray-100 mb-6 flex items-center justify-center text-gray-400">
              <img
  src={selectedProject.image}
  alt={selectedProject.title}
  className="w-full aspect-video object-cover mb-6"
/>

            </div>

            <p className="text-lg leading-relaxed mb-6 text-gray-700">
              {selectedProject.description}
            </p>

            <div className="border-t border-gray-300 pt-4">
              <p className="text-sm text-gray-500">
                <span className="font-medium">Tools:</span> {selectedProject.tools}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
