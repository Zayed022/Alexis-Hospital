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
    <section className="py-16 md:py-24 bg-gradient-to-br from-white via-[#F7F9FC] to-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
    <Swiper
      modules={[Autoplay, Pagination]}
      autoplay={{ delay: 5500, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      loop
      speed={800}
      slidesPerView={1}
      className="!overflow-hidden"
    >
      {services.map((service) => (
        <SwiperSlide key={service._id}>
          {/* ⬇️ constrain slide height */}
          <div className="py-10 md:py-0">
            <div
              className="
                grid grid-cols-1 lg:grid-cols-2
                gap-10 md:gap-16
                items-start lg:items-center
              "
            >
              {/* LEFT CONTENT */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <span className="inline-block mb-4 px-4 py-2 rounded-full text-xs font-medium bg-gradient-to-r from-[#A7D3F3]/40 to-[#F7C6D3]/40 text-gray-800">
                  {service.badgeText}
                </span>

                {/* ⬇️ responsive heading */}
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h2>

                <p className="text-gray-600 text-base sm:text-lg mb-6">
                  {service.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {service.rightPoints.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 mt-1 rounded-full bg-gradient-to-br from-[#A7D3F3] to-[#F7C6D3] flex items-center justify-center">
                        <ChevronRight className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-gray-700 text-sm sm:text-base">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>

                <button className="inline-flex px-6 py-3 rounded-full bg-gradient-to-r from-[#A7D3F3] to-[#F7C6D3] text-white font-semibold shadow-md">
                  {service.buttonText}
                </button>
              </motion.div>

              {/* RIGHT IMAGE GRID */}
              {/* RIGHT IMAGE SECTION */}
{/* RIGHT IMAGE SECTION */}
<motion.div
  initial={{ opacity: 0, scale: 0.96 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
  className="w-full"
>
  {/* MOBILE: vertical stack */}
  <div className="flex flex-col gap-6 sm:hidden">
    {service.images.map((img, idx) => (
      <div
        key={idx}
        className="
          w-full
          aspect-square
          rounded-2xl
          overflow-hidden
          bg-gray-100
          shadow-md
        "
      >
        <img
          src={img}
          alt="Service"
          className="w-full h-full object-cover"
        />
      </div>
    ))}
  </div>

  {/* TABLET & DESKTOP: 2x2 grid */}
  <div className="hidden sm:grid grid-cols-2 gap-6">
    {service.images.slice(0, 4).map((img, idx) => (
      <div
        key={idx}
        className="
          aspect-square
          rounded-3xl
          overflow-hidden
          bg-gray-100
          shadow-lg
        "
      >
        <img
          src={img}
          alt="Service"
          className="w-full h-full object-cover"
        />
      </div>
    ))}
  </div>
</motion.div>


            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
</section>

  );
}
