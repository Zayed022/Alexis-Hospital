import { Quote, Star } from "lucide-react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

interface Testimonial {
  name: string;
  message: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Poonam Nair",
    rating: 5,
    message:
      "One of the finest hospitals in Bhiwandi. Dr. Ganesh is extremely compassionate and explains everything clearly. My elderly father has been under his care for more than a year, and the treatment approach has been excellent. Highly recommended.",
  },
  {
    name: "Sonali Pathak",
    rating: 5,
    message:
      "Doctors here are very caring and experienced. I am undergoing treatment for SLE, and I have seen remarkable improvement. The nursing staff is polite and handles patients very gently. The hospital is clean and well managed.",
  },
  {
    name: "Ramesh Patil",
    rating: 5,
    message:
      "I visited Alexis Hospital for general medical treatment. The doctor listened patiently and explained medicines properly. Staff behaviour was good and the overall experience was very satisfactory.",
  },
  {
    name: "Shabana Khan",
    rating: 5,
    message:
      "My mother was admitted for treatment and received excellent care. Doctors and nurses were very supportive and respectful. We felt confident and reassured throughout the treatment.",
  },
];

export default function Testimonials() {
  const pageUrl = "https://alexishospitalbhiwandi.com/testimonials";

  return (
    <>
      {/* ================= SEO ================= */}
      <Helmet>
        <title>
          Patient Testimonials | Alexis Hospital Bhiwandi – Trusted Medical Care
        </title>

        <meta
          name="description"
          content="Read genuine patient testimonials about Alexis Hospital Bhiwandi. Trusted doctors, compassionate care, and advanced treatment across medical and cosmetology services."
        />

        <link rel="canonical" href={pageUrl} />

        {/* OPEN GRAPH */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Patient Testimonials – Alexis Hospital Bhiwandi"
        />
        <meta
          property="og:description"
          content="Real patient experiences at Alexis Hospital Bhiwandi. Trusted doctors, excellent care, and modern facilities."
        />
        <meta property="og:url" content={pageUrl} />
        <meta
          property="og:image"
          content="https://alexishospitalbhiwandi.com/og-image.jpg"
        />

        {/* REVIEW SCHEMA */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Hospital",
            "name": "Alexis Hospital",
            "url": "https://alexishospitalbhiwandi.com",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Bhiwandi",
              "addressRegion": "Maharashtra",
              "addressCountry": "IN",
            },
            "review": testimonials.map((t) => ({
              "@type": "Review",
              "author": {
                "@type": "Person",
                "name": t.name,
              },
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": t.rating,
                "bestRating": "5",
              },
              "reviewBody": t.message,
            })),
          })}
        </script>
      </Helmet>

      {/* ================= PAGE UI ================= */}
      <section
        className="
          relative
          py-10 sm:py-14 md:py-16
          bg-gradient-to-br from-[#A7D3F3]/10 via-white to-[#F7C6D3]/10
          overflow-hidden
        "
      >
        <div className="absolute inset-0 bg-[radial-gradient(#e5f0ff_1px,transparent_1px)] [background-size:22px_22px] opacity-30" />

        

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12 mt-20"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0b1324]">
              What Our{" "}
              <span className="bg-gradient-to-r from-[#0095ff] to-[#ff7197] bg-clip-text text-transparent">
                Patients Say
              </span>
            </h1>
            <p className="mt-3 text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
              Trusted by patients across Bhiwandi for compassionate care,
              advanced treatment, and professional medical support.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {testimonials.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-100"
              >
                <div className="absolute -top-5 left-6 w-10 h-10 rounded-full bg-gradient-to-br from-[#0095ff] to-[#ff7197] flex items-center justify-center shadow-md">
                  <Quote className="w-5 h-5 text-white" />
                </div>

                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-4">
                  “{item.message}”
                </p>

                <div className="mt-6 flex items-center justify-between">
                  <p className="font-semibold text-[#0b1324]">
                    {item.name}
                  </p>
                  <div className="flex gap-1">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-orange-400 text-orange-400"
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
