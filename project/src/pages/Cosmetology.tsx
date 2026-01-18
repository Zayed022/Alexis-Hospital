import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Star } from "lucide-react";

import CosmoService from "../components/CosmoServices";
import ServiceCards from "../components/ServiceCards";

export default function Cosmetology() {
  const procedures = [
    {
      title: "Consultation",
      description: "Comprehensive skin analysis and treatment planning",
    },
    {
      title: "Preparation",
      description: "Skin cleansing and preparation for the procedure",
    },
    {
      title: "Treatment",
      description: "Advanced treatment using state-of-the-art technology",
    },
    {
      title: "Aftercare",
      description: "Post-treatment care and follow-up guidance",
    },
  ];

  const benefits = [
    "FDA-approved treatments and equipment",
    "Board-certified dermatologists",
    "Personalized treatment plans",
    "Luxury treatment rooms",
    "Complimentary consultation",
    "Flexible payment options",
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.45 },
  };

  return (
    <div className="min-h-screen bg-white pt-16 sm:pt-20 font-heading sm: mt-20">
      {/* HERO */}
      <CosmoService />

      {/* ================= CATEGORIES ================= */}
      <section className="py-10 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          

          <ServiceCards category="Cosmetology" />
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="
          py-10 sm:py-14 lg:py-16
          px-4 sm:px-6 lg:px-8
          bg-gradient-to-br from-[#A7D3F3]/10 via-white to-[#F7C6D3]/10
        "
      >
        <div className="max-w-7xl mx-auto">
          <motion.div variants={fadeInUp} className="text-center mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0b1324] mb-2">
              Treatment Process
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Four simple steps to better skin
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {procedures.map((procedure, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="relative"
              >
                <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-md text-center h-full">
                  <div className="
                    bg-gradient-to-br from-[#0095ff] to-[#ff7197]
                    w-10 h-10 sm:w-12 sm:h-12
                    rounded-full flex items-center justify-center
                    mx-auto mb-4
                    text-white font-semibold
                  ">
                    {index + 1}
                  </div>

                  <h3 className="text-base sm:text-lg font-semibold text-[#0b1324] mb-1">
                    {procedure.title}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    {procedure.description}
                  </p>
                </div>

                {index < procedures.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 -translate-y-1/2">
                    <ArrowRight className="w-5 h-5 text-[#ff7197]" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ================= WHY CHOOSE ================= */}
      <section className="py-10 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
      
      {/* LEFT CONTENT */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0b1324] mb-4">
          Why Choose{" "}
          <span className="bg-gradient-to-r from-[#0095ff] to-[#ff7197] bg-clip-text text-transparent">
            Alexis Hospital
          </span>
        </h2>

        <p className="text-gray-600 text-sm sm:text-base mb-6">
          A perfect balance of medical expertise and luxury aesthetics.
        </p>

        <div className="space-y-3">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="flex items-start gap-3"
            >
              <div className="
                bg-gradient-to-br from-[#0095ff] to-[#ff7197]
                w-6 h-6 rounded-full flex items-center justify-center shrink-0
              ">
                <Star className="w-3 h-3 text-white fill-white" />
              </div>

              <span className="text-gray-700 text-xs sm:text-sm">
                {benefit}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* RIGHT IMAGE */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="flex justify-center lg:justify-end"
      >
        <img
          src="/logo.png"
          alt="Alexis Hospital Logo"
          className="w-56 sm:w-64 md:w-72 lg:w-80 object-contain opacity-95"
        />
      </motion.div>

    </div>
  </div>
</section>


      {/* ================= CTA ================= */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="
          py-10 sm:py-14
          px-4 sm:px-6 lg:px-8
          bg-gradient-to-r from-[#0095ff] to-[#ff7197]
        "
      >
        <div className="max-w-3xl mx-auto text-center text-white">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold mb-3"
          >
            Ready to Transform Your Skin?
          </motion.h2>

          <p className="text-sm sm:text-base mb-6">
            Book your complimentary consultation today.
          </p>

          <Link to="/booking">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="
                bg-white text-[#0095ff]
                px-6 sm:px-8
                py-2.5 sm:py-3
                rounded-full
                font-semibold
                text-sm sm:text-base
                shadow-lg
                w-full sm:w-auto
              "
            >
              Schedule Consultation
            </motion.button>
          </Link>
        </div>
      </motion.section>
    </div>
  );
}
