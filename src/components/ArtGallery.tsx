import { useState } from 'react';
import { X } from 'lucide-react';

interface Artwork {
  id: number;
  title: string;
  caption: string;
  image: string;
}

const ArtGallery = () => {
  const [selectedArt, setSelectedArt] = useState<Artwork | null>(null);

  const artworks: Artwork[] = [
    {
      id: 1,
      title: 'Sunil Santha and his wife',
      caption: 'Sunil Santha is a greatest singer was in Sri Lanka',
      image: '/images/art1.jpeg',
    },
    {
      id: 2,
      title: 'Beach Boy',
      caption: 'A portrait pencil art for an oder',
      image: '/images/art2.jpeg',
    },
    {
      id: 3,
      title: 'Hope',
      caption: 'The eyes of the princes, tell us the everything',
      image: '/images/art3.jpeg',
    },
    {
      id: 4,
      title: 'Pencil Portrait - Boy',
      caption: 'A portrait pencil art for an oder',
      image: '/images/art4.jpeg',
    },
    {
      id: 5,
      title: 'Pencil Portrait - Girl',
      caption: "A portrait pencil art for an oder",
      image: '/images/art5.jpeg',
    },
    {
      id: 6,
      title: 'Family',
      caption: 'A portrait pencil art of a family for an oder',
      image: '/images/art6.jpeg',
    },
    {
      id: 7,
      title: 'Love Birds',
      caption: 'Lovely couple',
      image: '/images/art7.jpeg',
    },
    {
      id: 8,
      title: 'The Legend',
      caption: 'Legendary Cricketer, Kumar Sangakkara',
      image: '/images/art8.jpeg',
    },
  ];

  return (
    <section id="gallery" className="min-h-screen py-16 bg-white text-black">
      <div className="container mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-4">Sketchbook</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Personal explorations where design meets art. Each piece tells a story of observation and emotion.
          </p>
        </div>

        <div className="overflow-x-auto pb-8">
          <div className="flex gap-6 min-w-max px-6">

            {artworks.map((art) => (
              <div
                key={art.id}
                className="group cursor-pointer flex-shrink-0"
                onClick={() => setSelectedArt(art)}
              >
                <div className="w-80 h-96 bg-gray-100 border-4 border-black relative overflow-hidden">

                  <img
                    src={art.image}
                    alt={art.title}
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300" />

                </div>

                <div className="mt-4 px-2">
                  <h3 className="text-lg font-light mb-1">{art.title}</h3>
                  <p className="text-sm text-gray-500 italic">{art.caption}</p>
                </div>

              </div>
            ))}

          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-gray-400 tracking-wider">← SCROLL TO EXPLORE →</p>
        </div>

      </div>


      {selectedArt && (
        <div
          className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-6"
          onClick={() => setSelectedArt(null)}
        >

          <button
            onClick={() => setSelectedArt(null)}
            className="absolute top-8 right-8 text-white hover:text-gray-400 transition-colors"
          >
            <X className="w-8 h-8" />
          </button>

          <div
            className="max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >

            <div className="aspect-[4/3] bg-gray-900 border-4 border-white mb-6">

              <img
                src={selectedArt.image}
                alt={selectedArt.title}
                className="w-full h-full object-contain"
              />

            </div>

            <div className="text-center text-white">
              <h3 className="text-2xl font-light mb-2">
                {selectedArt.title}
              </h3>
              <p className="text-gray-400 italic">
                {selectedArt.caption}
              </p>
            </div>

          </div>

        </div>
      )}

    </section>
  );
};

export default ArtGallery;