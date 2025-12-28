import { useRef, useState } from "react";
import { Play } from "lucide-react";
import { motion } from "framer-motion";

interface VideoTestimonial {
  id: string;
  name: string;
  role: string;
  videoSrc: string;
  poster: string;
}

const videos: VideoTestimonial[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    role: "Cosmetology Patient",
    videoSrc: "/videos/testimonial-1.mp4",
    poster: "/images/testimonials/thumb-1.jpg",
  },
  {
    id: "2",
    name: "Michael Chen",
    role: "Medical Patient",
    videoSrc: "/videos/testimonial-2.mp4",
    poster: "/images/testimonials/thumb-2.jpg",
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    role: "Laser Treatment Patient",
    videoSrc: "/videos/testimonial-3.mp4",
    poster: "/images/testimonials/thumb-3.jpg",
  },
];

export default function VideoTestimonials() {
  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});
  const [playingId, setPlayingId] = useState<string | null>(null);

  const handlePlay = (id: string) => {
    Object.values(videoRefs.current).forEach((video) => {
      if (video && !video.paused) video.pause();
    });

    const selected = videoRefs.current[id];
    if (selected) {
      selected.play();
      setPlayingId(id);
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Patient Video Testimonials
          </h2>
          <p className="mt-3 text-gray-600">
            Real stories. Real experiences. Trusted care.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition overflow-hidden"
            >
              {/* Video */}
              <div className="relative group">
                <video
                  ref={(el) => (videoRefs.current[item.id] = el)}
                  src={item.videoSrc}
                  poster={item.poster}
                  controls={playingId === item.id}
                  className="w-full h-56 object-cover"
                  onEnded={() => setPlayingId(null)}
                />

                {playingId !== item.id && (
                  <button
                    onClick={() => handlePlay(item.id)}
                    className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition"
                  >
                    <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <Play className="w-6 h-6 text-[#0f5aa7] ml-1" />
                    </div>
                  </button>
                )}
              </div>

              {/* Footer */}
              <div className="p-6">
                <p className="font-semibold text-gray-800 text-lg">
                  {item.name}
                </p>
                <p className="text-sm text-gray-500">{item.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
