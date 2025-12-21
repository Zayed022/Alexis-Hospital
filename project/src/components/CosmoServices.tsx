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

export default function CosmoService() {
  const [services, setServices] = useState<ServiceType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await axios.get(
          "https://alexis-hospital.onrender.com/api/v1/service/cosmetology"
        );
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
    <section
      className="
        py-28
        bg-gradient-to-br
        from-[#F7C6D3]/20
        via-white
        to-[#A7D3F3]/20
      "
    >
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
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center"
              >
                {/* LEFT CONTENT */}
                <div className="text-center lg:text-left">
                  <motion.span
                    whileHover={{
                      y: -2,
                      boxShadow: "0 8px 20px rgba(247,198,211,0.45)",
                    }}
                    className="
                      inline-block mb-6 px-4 py-2 rounded-full text-sm font-medium
                      bg-gradient-to-r from-[#F7C6D3] to-[#A7D3F3]
                      text-white
                    "
                  >
                    {service.badgeText}
                  </motion.span>

                  <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                    {service.title}
                  </h2>

                  <p className="text-gray-600 text-lg mb-10 max-w-xl mx-auto lg:mx-0">
                    {service.description}
                  </p>

                  <ul className="space-y-4 mb-12">
                    {service.rightPoints.map((point, idx) => (
                      <motion.li
                        key={idx}
                        whileHover={{ x: 6 }}
                        className="flex items-start gap-4 justify-center lg:justify-start"
                      >
                        <span className="
                          mt-1 w-6 h-6 rounded-full flex items-center justify-center
                          bg-gradient-to-br from-[#F7C6D3] to-[#A7D3F3]
                        ">
                          <ChevronRight className="w-4 h-4 text-white" />
                        </span>
                        <span className="text-gray-700">{point}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <motion.button
                    whileHover={{ scale: 1.06 }}
                    whileTap={{ scale: 0.96 }}
                    className="
                      inline-flex items-center gap-3 px-9 py-4 rounded-full
                      bg-gradient-to-r from-[#F7C6D3] to-[#A7D3F3]
                      text-white font-semibold shadow-xl
                    "
                  >
                    {service.buttonText}
                  </motion.button>
                </div>

                {/* RIGHT IMAGE GRID */}
                <div className="grid grid-cols-2 gap-6">
                  {service.images.map((img, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ y: -8, scale: 1.03 }}
                      className="
                        relative aspect-square rounded-3xl overflow-hidden
                        bg-white shadow-xl
                      "
                    >
                      <img
                        src={img}
                        alt="Service"
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  ))}

                  {Array.from({ length: 4 - service.images.length }).map(
                    (_, idx) => (
                      <div
                        key={`placeholder-${idx}`}
                        className="
                          aspect-square rounded-3xl
                          bg-gradient-to-br from-[#F7C6D3]/20 to-[#A7D3F3]/20
                          flex items-center justify-center
                        "
                      >
                        <Sparkles className="w-10 h-10 text-[#F7C6D3]" />
                      </div>
                    )
                  )}
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
