import { motion } from "framer-motion";

const images = [
  
  "/gallery2.png",
  "/g1.jpeg",
  "/g2.jpeg",
  "/g3.jpeg",
  "/g4.jpeg",
  "/g5.jpeg",
  "/g6.jpeg",
  
  
];

export default function Gallery() {
  return (
    <section className="relative py-24 mt-10 overflow-hidden font-heading sm: mt-24">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#A7D3F3]/12 via-white to-[#F7C6D3]/12" />

      <div className="relative max-w-7xl mx-auto px-4">

        {/* ================= HEADING ================= */}
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

        {/* ================= GALLERY GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="
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

              {/* SUBTLE OVERLAY */}
              <div
                className="
                  absolute inset-0
                  bg-gradient-to-t from-black/20 via-transparent to-transparent
                  opacity-0 group-hover:opacity-100
                  transition-opacity
                "
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
