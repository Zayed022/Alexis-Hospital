import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

export default function CtaImage() {
  const [image, setImage] = useState<string | null>(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8000/api/v1/ctaImage/"
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
      className="w-full"
    >
      <img
        src={image}
        alt="CTA"
        className="w-full h-[620px] object-cover"
      />
    </motion.section>
  );
}
