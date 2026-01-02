import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import ServiceCards from "../components/ServiceCards";

type Category = "Medical" | "Cosmetology";

export default function Services() {
  const [activeTab, setActiveTab] = useState<Category>("Medical");

  return (
    <div className="min-h-screen bg-white pt-20 sm:pt-24 overflow-x-hidden sm: mt-12">
      {/* ================= HERO ================= */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="
          relative
          py-16 sm:py-20 lg:py-24
          px-4 sm:px-6 lg:px-8
          bg-gradient-to-br from-[#0095ff]/15 via-white to-[#ff7197]/15
        "
      >
        <div className="max-w-5xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="
              text-3xl sm:text-4xl md:text-5xl lg:text-6xl
              font-bold text-gray-800 mb-4 sm:mb-6
            "
          >
            Our{" "}
            <span className="bg-gradient-to-r from-[#0095ff] to-[#ff7197] bg-clip-text text-transparent">
              Services
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Comprehensive healthcare and premium cosmetology services tailored to
            your unique needs.
          </motion.p>
        </div>
      </motion.section>

      {/* ================= TOGGLE ================= */}
      <section className="py-8 sm:py-10">
        <div className="flex justify-center px-4">
          <div
            className="
              relative
              w-full max-w-md
              grid grid-cols-2
              rounded-full p-1.5
              bg-gray-100
              shadow-inner
            "
          >
            {/* Sliding pill */}
            <motion.div
              layout
              transition={{ type: "spring", stiffness: 320, damping: 28 }}
              className={`
                absolute inset-y-1.5 w-1/2 rounded-full shadow-md
                bg-gradient-to-r from-[#0095ff] to-[#ff7197]
                ${activeTab === "Medical" ? "left-1.5" : "left-1/2"}
              `}
            />

            <button
              onClick={() => setActiveTab("Medical")}
              className={`
                relative z-10
                py-3 text-xs sm:text-sm font-semibold rounded-full
                transition-colors
                ${activeTab === "Medical" ? "text-white" : "text-gray-800"}
              `}
            >
              Medical
            </button>

            <button
              onClick={() => setActiveTab("Cosmetology")}
              className={`
                relative z-10
                py-3 text-xs sm:text-sm font-semibold rounded-full
                transition-colors
                ${activeTab === "Cosmetology" ? "text-white" : "text-gray-800"}
              `}
            >
              Cosmetology
            </button>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <motion.section
        key={activeTab}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <ServiceCards category={activeTab} />
      </motion.section>

      {/* ================= CTA (COSMETOLOGY ONLY) ================= */}
      {activeTab === "Cosmetology" && (
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="
            py-14 sm:py-18
            px-4 sm:px-6 lg:px-8
            bg-gradient-to-br from-[#0095ff]/15 via-white to-[#ff7197]/15
          "
        >
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">
              Want Detailed Cosmetology Insights?
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 sm:mb-8">
              Explore before & after results, procedures, and detailed treatment
              explanations.
            </p>

            <Link to="/services/cosmetology">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="
                  bg-gradient-to-r from-[#0095ff] to-[#ff7197]
                  text-white
                  px-8 sm:px-10
                  py-3 sm:py-4
                  rounded-full
                  font-semibold
                  shadow-xl
                  w-full sm:w-auto
                "
              >
                View Detailed Page
              </motion.button>
            </Link>
          </div>
        </motion.section>
      )}
    </div>
  );
}
