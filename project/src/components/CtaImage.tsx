import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

export default function CtaImage() {
  const [image, setImage] = useState<string | null>(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const res = await axios.get(
          "https://alexis-hospital.onrender.com/api/v1/ctaImage/"
        );
        setImage(res.data.image?.image || null);
      } catch (err) {
        console.error(err);
      }
    };

    fetchImage();
  }, []);

  if (!image) return null;

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="w-full overflow-hidden"
    >
      <div
        className="
          relative w-full
          h-[220px]
          sm:h-[320px]
          md:h-[420px]
          lg:h-[520px]
          xl:h-[620px]
        "
      >
        <img
          src={image}
          alt="CTA"
          className="
            absolute inset-0
            w-full h-full
            object-cover
          "
        />
      </div>
    </motion.section>
  );
}
