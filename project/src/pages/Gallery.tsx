import { motion } from "framer-motion";

const images = [
  "/gallery-1.jpg",
 
];

export default function Gallery() {
  return (
    <section className="py-20 bg-gray-50 mt-10">
      <div className="max-w-7xl mx-auto px-4">

        {/* ================= HEADING ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Our Hospital & Treatment Facilities
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
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
              transition={{ duration: 0.3 }}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-lg transition"
            >
              <img
                src={src}
                alt={`Hospital gallery ${index + 1}`}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
