import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const images = [
  "/gallery2.png",
  "/g1.jpeg",
  "/g2.jpeg",
  "/g3.jpeg",
  "/g4.jpeg",
  "/g5.jpeg",
  "/g6.jpeg",
  "/g7.jpeg",
  "/g8.webp",
  "/g9.webp",
  "/g10.webp",
  "/g11.webp",
  "/g12.webp",
  "/g13.webp",
  "/g14.webp",
  "/g15.jpg",
  "/g16.jpg",
  "/g17.jpg",
  "/g18.jpg",
  "/g19.jpg",
  "/g20.jpg",
  "/g21.jpg",
  "/g22.jpg",
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  // Close on ESC key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setSelectedImage(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <section className="relative py-24 mt-10 overflow-hidden font-heading sm:mt-24">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#A7D3F3]/12 via-white to-[#F7C6D3]/12" />

      <div className="relative max-w-7xl mx-auto px-4">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#0b1324]">
            Our Hospital & Treatment Facilities
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Explore our modern hospital infrastructure, treatment rooms,
            consulting areas, and patient-friendly facilities.
          </p>
        </motion.div>

        {/* GALLERY GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35 }}
              onClick={() => setSelectedImage(src)}
              className="
                cursor-pointer
                group relative overflow-hidden rounded-3xl
                bg-white shadow-md hover:shadow-2xl
                transition-all
              "
            >
              <img
                src={src}
                alt={`Hospital gallery ${index + 1}`}
                className="
                  w-full h-64 object-cover
                  transition-transform duration-500
                  group-hover:scale-105
                "
                loading="lazy"
              />

              <div className="
                absolute inset-0
                bg-black/20 opacity-0
                group-hover:opacity-100
                transition-opacity
              " />
            </motion.div>
          ))}
        </div>
      </div>

      {/* FULLSCREEN MODAL */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
              fixed inset-0 z-50
              bg-black/80
              flex items-center justify-center
              px-4
            "
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              src={selectedImage}
              alt="Full view"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 25 }}
              className="
                max-w-full max-h-[90vh]
                rounded-xl shadow-2xl
              "
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
