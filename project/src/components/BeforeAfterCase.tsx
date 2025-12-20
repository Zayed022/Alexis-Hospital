import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

interface BeforeAfterCaseType {
  _id: string;
  title: string;
  description: string;
  serviceCategory: string;
  beforeImage: string;
  afterImage: string;
}

export default function BeforeAfterCase() {
  const [cases, setCases] = useState<BeforeAfterCaseType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCases = async () => {
      try {
        const res = await axios.get(
          "https://alexis-hospital.onrender.com/api/v1/beforeAfterCase/"
        );
        setCases(res.data.cases || []);
      } catch (error) {
        console.error("Failed to fetch cases", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCases();
  }, []);

  if (loading || cases.length === 0) return null;

  /* -------------------- CARD -------------------- */

  const CaseContent = ({ item }: { item: BeforeAfterCaseType }) => (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="
  bg-white rounded-[32px] shadow-2xl
  max-w-[1100px]
  mx-auto
  p-6 sm:p-10 lg:p-14
  grid grid-cols-1 lg:grid-cols-2
  gap-10 lg:gap-16
  items-center
"
>
      {/* LEFT */}
      <div>
        <span
          className="
            inline-block mb-6 px-4 py-2 rounded-full text-sm font-semibold
            bg-gradient-to-r from-[#A7D3F3]/40 to-[#F7C6D3]/40 text-gray-800
          "
        >
          {item.serviceCategory}
        </span>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          {item.title}
        </h2>

        <p className="text-gray-600 text-lg leading-relaxed max-w-md">
          {item.description}
        </p>
      </div>

      {/* RIGHT */}
      <div className="grid grid-cols-2 gap-10 items-center">
        {[{ src: item.beforeImage, label: "BEFORE" },
          { src: item.afterImage, label: "AFTER" }].map((img) => (
          <motion.div
            key={img.label}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
            className="
              rounded-3xl overflow-hidden
              bg-white border border-gray-100
              shadow-xl
            "
          >
           <div className="w-full aspect-square bg-white flex items-center justify-center">
  <img
    src={img.src}
    alt={img.label}
    className="
      w-full
      h-full
      object-cover
    "
  />
</div>


            <div className="py-4 text-center text-sm font-semibold tracking-wider text-gray-700">
              {img.label}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );

  /* -------------------- RENDER -------------------- */

  return (
    <section className="py-36 bg-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6">
        {/* RIGHT FADE (SOFT, NO HARD EDGE) */}
        <div
          className="
            pointer-events-none absolute right-0 top-0 z-20 h-full w-36
            bg-gradient-to-l from-white via-white/80 to-transparent
          "
        />

        <Swiper
  modules={[Autoplay, Pagination]}
  autoplay={{ delay: 5500, disableOnInteraction: false }}
  pagination={{ clickable: true }}
  loop
  speed={900}
  centeredSlides
  slidesPerView={1.22}     // 👈 critical
  spaceBetween={64}        // 👈 breathing room
  roundLengths
  watchSlidesProgress      // 👈 VERY IMPORTANT
  className="before-after-swiper"
>

          {cases.map((item) => (
            <SwiperSlide
              key={item._id}
              className="!overflow-visible bg-transparent"
            >
              <CaseContent item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
