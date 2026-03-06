import { useState } from 'react';
import { X } from 'lucide-react';

interface VideoItem {
  id: number;
  title: string;
  caption: string;
  video: string;      // video URL or path
  poster?: string;    // thumbnail image for the video
}

const VideoGallery = () => {
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);

  const videos: VideoItem[] = [
    {
      id: 1,
      title: 'Night with Fashion',
      caption: 'Release presuire with a brush at a calm night',
      video: '/videos/video1.mp4',
      poster: '/images/video1.jpg',
    },
    {
      id: 2,
      title: 'Rain kidding Feelings',
      caption: 'Memorize his feeling with the rain and suffering him',
      video: '/videos/video2.mp4',
      poster: '/images/video2.jpg',
    },
    {
      id: 3,
      title: 'A chance',
      caption: 'A chance to hope randomly',
      video: '/videos/video3.mp4',
      poster: '/images/video3.jpg',
    },
    {
      id: 4,
      title: 'Angry with love',
      caption: 'Evrything says about angry and the reason - love',
      video: '/videos/video4.mp4',
      poster: '/images/video4.jpg',
    },
  ];

  return (
    <section id="video-gallery" className="min-h-screen py-16 bg-white text-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-4">Video Sketches</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Short video explorations capturing motion and emotion in nature and art.
          </p>
        </div>

        <div className="overflow-x-auto pb-8">
          <div className="flex gap-6 min-w-max px-6">
            {videos.map((vid) => (
              <div
                key={vid.id}
                className="group cursor-pointer flex-shrink-0"
                onClick={() => setSelectedVideo(vid)}
              >
                {/* Video preview in the gallery */}
                <div className="w-80 h-96 bg-gray-100 border-4 border-black relative overflow-hidden">
                  <video
                    src={vid.video}
                    poster={vid.poster}
                    className="w-full h-full object-cover"
                    muted
                    loop
                    autoPlay
                  />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                </div>

                <div className="mt-4 px-2">
                  <h3 className="text-lg font-light mb-1">{vid.title}</h3>
                  <p className="text-sm text-gray-500 italic">{vid.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-gray-400 tracking-wider">← SCROLL TO EXPLORE →</p>
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-6"
          onClick={() => setSelectedVideo(null)}
        >
          <button
            onClick={() => setSelectedVideo(null)}
            className="absolute top-8 right-8 text-white hover:text-gray-400 transition-colors"
          >
            <X className="w-8 h-8" />
          </button>

          <div
            className="max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="aspect-[16/9] bg-gray-900 border-4 border-white mb-6">
              <video
                src={selectedVideo.video}
                poster={selectedVideo.poster}
                controls
                autoPlay
                className="w-full h-full object-contain"
              />
            </div>

            <div className="text-center text-white">
              <h3 className="text-2xl font-light mb-2">{selectedVideo.title}</h3>
              <p className="text-gray-400 italic">{selectedVideo.caption}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default VideoGallery;