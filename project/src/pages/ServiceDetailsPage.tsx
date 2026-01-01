import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";

interface ServiceDetails {
  title: string;
  shortDescription: string;
  longDescription: string;
  checklist: string[];
  highlights: string[];
  images: string[];
  priceRange: string;
  duration: string;
  category: string;
}

export default function ServiceDetailsPage() {
  const { slug } = useParams();
  const [service, setService] = useState<ServiceDetails | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchService = async () => {
      try {
        const res = await axios.get(
          `https://alexis-hospital.onrender.com/api/v1/serviceDetails/${slug}`
        );
        setService(res.data.service);
      } catch (error) {
        console.error("Failed to fetch service details", error);
      } finally {
        setLoading(false);
      }
    };

    fetchService();
  }, [slug]);

  if (loading || !service) return null;

  return (
    <div className="min-h-screen bg-white pt-24">
      {/* ================= HERO ================= */}
      <section className="bg-gradient-to-br from-[#A7D3F3]/20 via-white to-[#F7C6D3]/20 py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <span className="inline-block mb-4 px-5 py-2 rounded-full text-sm font-semibold
            bg-gradient-to-r from-[#0095ff] to-[#ff7197] text-white">
            {service.category}
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            {service.title}
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {service.shortDescription}
          </p>
        </div>
      </section>

      {/* ================= MAIN CONTENT ================= */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Service Overview
            </h2>

            <p className="text-gray-600 leading-relaxed mb-10">
              {service.longDescription}
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              What’s Included
            </h3>

            <ul className="space-y-3 mb-12">
              {service.checklist.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#ff7197] mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>

            {service.highlights.length > 0 && (
              <>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Why Choose This Service
                </h3>
                <ul className="space-y-3">
                  {service.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Star className="w-5 h-5 text-[#0095ff] mt-0.5" />
                      <span className="text-gray-700 font-medium">
                        {highlight}
                      </span>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </motion.div>

          {/* RIGHT IMAGES */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-28 space-y-6"
          >
            {/* FEATURE IMAGE */}
            {service.images[0] && (
              <div className="rounded-3xl overflow-hidden shadow-xl bg-gray-50 p-4">
                <img
                  src={service.images[0]}
                  alt={service.title}
                  className="w-full h-[320px] object-contain"
                />
              </div>
            )}

            {/* SUPPORTING IMAGES */}
            <div className="grid grid-cols-2 gap-4">
              {service.images.slice(1).map((img, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl overflow-hidden shadow-md bg-gray-50 p-3"
                >
                  <img
                    src={img}
                    alt={`${service.title} ${idx + 2}`}
                    className="w-full h-40 object-contain"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= META INFO ================= */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 gap-10 text-center">
          <div>
            <p className="text-gray-500 mb-1">Price Range</p>
            <p className="text-2xl font-bold text-[#0095ff]">
              {service.priceRange}
            </p>
          </div>

          <div>
            <p className="text-gray-500 mb-1">Duration</p>
            <p className="text-2xl font-bold text-[#0095ff]">
              {service.duration}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
