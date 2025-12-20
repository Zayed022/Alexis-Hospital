import { useEffect, useState } from "react";
import axios from "axios";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

interface ServiceCardType {
  _id: string;
  title: string;
  shortDescription: string;
  checklist: string[];
  priceRange: string;
  duration: string;
  slug: string;
}

interface Props {
  category: "Cosmetology" | "Medical";
}

export default function ServiceCards({ category }: Props) {
  const [services, setServices] = useState<ServiceCardType[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await axios.get(
          `https://alexis-hospital.onrender.com/api/v1/serviceDetails/${category.toLowerCase()}`
        );
        setServices(res.data.services || []);
      } catch (err) {
        console.error("Failed to fetch services", err);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, [category]);

  if (loading || services.length === 0) return null;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
             <Link
             key={service._id}
             to={`/services/${service.slug}`}
           >
            <motion.div
              key={service._id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -10, scale: 1.02 }}
              onClick={() => navigate(`/services/${service.slug}`)}
              className="
                cursor-pointer
                bg-white
                rounded-3xl
                p-8
                shadow-lg
                hover:shadow-2xl
                transition-all
                border border-gray-100
              "
            >
              {/* ICON */}
              <div
                className="
                  w-14 h-14 mb-6
                  rounded-2xl
                  bg-gradient-to-br from-[#F7C6D3] to-[#A7D3F3]
                  flex items-center justify-center
                "
              >
                <span className="text-white text-xl font-bold">
                  ✦
                </span>
              </div>

              {/* TITLE */}
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {service.title}
              </h3>

              {/* SHORT DESCRIPTION */}
              <p className="text-gray-600 mb-6">
                {service.shortDescription}
              </p>

              {/* CHECKLIST */}
              <ul className="space-y-3 mb-8">
                {service.checklist.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-[#F7C6D3]" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>

              {/* DIVIDER */}
              <div className="h-px w-full bg-gray-200 mb-6" />

              {/* FOOTER */}
              <div className="flex justify-between text-sm">
                <div>
                  <p className="text-gray-500">Price Range</p>
                  <p className="font-semibold text-[#F7C6D3]">
                    {service.priceRange}
                  </p>
                </div>
                <div>
                  <p className="text-gray-500">Duration</p>
                  <p className="font-semibold text-[#A7D3F3]">
                    {service.duration}
                  </p>
                </div>
              </div>
            </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
