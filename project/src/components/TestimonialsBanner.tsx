import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function TestimonialsBanner() {
  return (
    <section className="relative h-[220px] md:h-[260px] w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/image.png')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-900/60" />

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 flex flex-col justify-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-white text-3xl md:text-4xl font-bold"
        >
          Testimonials
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-2 text-white/90"
        >
          <Link to="/" className="hover:underline">
            Home
          </Link>{" "}
          | Dr. Ganesh Ahire
        </motion.p>
      </div>
    </section>
  );
}
