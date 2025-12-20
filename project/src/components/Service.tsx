import { useEffect, useState } from "react";
import axios from "axios";
import { ChevronRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

interface ServiceType {
  _id: string;
  badgeText: string;
  title: string;
  description: string;
  rightPoints: string[];
  buttonText: string;
  images: string[];
}

export default function Service() {
  const [services, setServices] = useState<ServiceType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await axios.get("https://alexis-hospital.onrender.com/api/v1/service/");
        setServices(res.data.services || []);
      } catch (error) {
        console.error("Failed to fetch services", error);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  if (loading || services.length === 0) return null;

  return (
    <section className="py-24 bg-gradient-to-br from-white via-[#F7F9FC] to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{
            delay: 5500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          loop
          speed={900}
          slidesPerView={1}
          className="!overflow-visible"
        >
          {services.map((service) => (
            <SwiperSlide key={service._id}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* LEFT CONTENT */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  {/* Badge */}
                  <span
                    className="
                      inline-block mb-5 px-4 py-2 rounded-full text-sm font-medium
                      bg-gradient-to-r from-[#A7D3F3]/40 to-[#F7C6D3]/40 text-gray-800
                    "
                  >
                    {service.badgeText}
                  </span>

                  {/* Title */}
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                    {service.title}
                  </h2>

                  {/* Description */}
                  <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Bullet Points */}
                  <ul className="space-y-4 mb-10">
                    {service.rightPoints.map((point, idx) => (
                      <li key={idx} className="flex items-center gap-4">
                        <div
                          className="
                            w-6 h-6 rounded-full flex items-center justify-center
                            bg-gradient-to-br from-[#A7D3F3] to-[#F7C6D3]
                          "
                        >
                          <ChevronRight className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-gray-700">{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <button
                    className="
                      inline-flex items-center gap-3 px-8 py-4 rounded-full
                      bg-gradient-to-r from-[#A7D3F3] to-[#F7C6D3]
                      text-white font-semibold shadow-lg
                      hover:shadow-xl hover:scale-105
                      transition-all
                    "
                  >
                    {service.buttonText}
                  </button>
                </motion.div>

                {/* RIGHT IMAGE GRID */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="grid grid-cols-2 gap-6"
                >
                  {service.images.map((img, idx) => (
                    <div
                      key={idx}
                      className="
                        relative aspect-square rounded-3xl overflow-hidden
                        shadow-lg bg-gradient-to-br
                        from-[#A7D3F3]/20 to-[#F7C6D3]/20
                      "
                    >
                      <img
                        src={img}
                        alt="Service"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}

                  {/* Placeholders */}
                  {Array.from({ length: 4 - service.images.length }).map(
                    (_, idx) => (
                      <div
                        key={`placeholder-${idx}`}
                        className="
                          aspect-square rounded-3xl
                          bg-gradient-to-br from-[#A7D3F3]/20 to-[#F7C6D3]/20
                          flex items-center justify-center
                        "
                      >
                        <Sparkles className="w-10 h-10 text-[#A7D3F3]" />
                      </div>
                    )
                  )}
                </motion.div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
