import { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/pagination";

interface HomeBannerType {
  _id: string;
  title: string;
  subtitle?: string;
  bannerImage: string;
  ctaText?: string;
  ctaLink?: string;
}

export default function HomeBanner() {
  const [banners, setBanners] = useState<HomeBannerType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const res = await axios.get("https://alexis-hospital.onrender.com/api/v1/homeBanner/");
        setBanners(res.data.banners || []);
      } catch (error) {
        console.error("Failed to fetch banners", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBanners();
  }, []);

  if (loading || banners.length === 0) return null;

  return (
    <section className="relative w-full bg-white">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop
        speed={1000}
        className="h-[70vh] md:h-[85vh]"
      >
        {banners.map((banner) => (
         <SwiperSlide key={banner._id}>
  <div className="w-full h-full bg-white">
    <div className="max-w-7xl mx-auto h-full px-6 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 h-full items-center gap-12">

        {/* LEFT: CONTENT (WHITE, CLEAN) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-xl"
        >
          {banner.subtitle && (
            <span className="inline-block mb-4 px-4 py-2 rounded-full text-sm font-medium bg-[#A7D3F3]/20 text-gray-700">
              {banner.subtitle}
            </span>
          )}

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
            {banner.title}
          </h1>

          {banner.ctaText && banner.ctaLink && (
            <motion.a
              href={banner.ctaLink}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 mt-7 px-8 py-4 rounded-full
                bg-gradient-to-r from-[#A7D3F3] to-[#F7C6D3]
                text-white font-semibold text-lg shadow-lg hover:shadow-xl"
            >
              {banner.ctaText}
              <span className="text-xl">→</span>
            </motion.a>
          )}
        </motion.div>

        {/* RIGHT: IMAGE (100% SHARP, NO OVERLAY) */}
        <div className="relative h-[300px] md:h-[70vh] w-full rounded-3xl overflow-hidden shadow-xl">
          <img
            src={banner.bannerImage}
            alt={banner.title}
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
        </div>

      </div>
    </div>
  </div>
</SwiperSlide>


        ))}
      </Swiper>

      {/* Pagination Styling */}
      <style>{`
        .swiper-pagination-bullet {
          background: #cbd5e1;
          opacity: 1;
        }
        .swiper-pagination-bullet-active {
          background: #A7D3F3;
        }
      `}</style>
    </section>
  );
}
