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

const pageUrl = "https://alexishospitalbhiwandi.com/testimonials";

export default function Testimonials() {
  return (
    <>
      {/* ================= SEO ================= */}
      <Helmet>
        <title>
          Patient Reviews & Testimonials | Alexis Hospital Bhiwandi
        </title>

        <meta
          name="description"
          content="Read verified patient reviews and testimonials of Alexis Hospital Bhiwandi. Trusted multispecialty hospital with compassionate doctors, modern facilities, and excellent patient care."
        />

        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={pageUrl} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Patient Testimonials – Alexis Hospital Bhiwandi" />
        <meta
          property="og:description"
          content="Real patient experiences at Alexis Hospital Bhiwandi. Highly rated doctors and compassionate medical care."
        />
        <meta property="og:url" content={pageUrl} />
        <meta
          property="og:image"
          content="https://alexishospitalbhiwandi.com/logo.png"
        />

        {/* ================= SCHEMA ================= */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            "name": "Alexis Hospital & Critical Care Centre",
            "url": "https://alexishospitalbhiwandi.com",
            "logo": "https://alexishospitalbhiwandi.com/logo.png",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Bhiwandi",
              "addressRegion": "Maharashtra",
              "addressCountry": "IN"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5",
              "reviewCount": testimonials.length.toString()
            },
            "review": testimonials.map((t) => ({
              "@type": "Review",
              "author": {
                "@type": "Person",
                "name": t.name
              },
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": t.rating,
                "bestRating": "5"
              },
              "reviewBody": t.message,
              "datePublished": "2024-01-01"
            }))
          })}
        </script>

        {/* Breadcrumb for crawl depth */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://alexishospitalbhiwandi.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Testimonials",
                "item": pageUrl
              }
            ]
          })}
        </script>
      </Helmet>

      {/* ================= PAGE CONTENT ================= */}
      <section className="py-14 bg-gradient-to-br from-[#A7D3F3]/10 via-white to-[#F7C6D3]/10 mt-20">
        <div className="max-w-6xl mx-auto px-4">

          {/* REAL SEO H1 */}
          <h1 className="text-3xl md:text-4xl font-extrabold text-center text-[#0b1324] mb-4">
            Patient Testimonials – Alexis Hospital Bhiwandi
          </h1>

          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
            Discover real patient reviews of Alexis Hospital Bhiwandi,
            trusted for ethical medical treatment, expert doctors,
            and compassionate care.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((item, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-md border"
              >
                <Quote className="w-6 h-6 text-[#ff7197] mb-3" />

                <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                  “{item.message}”
                </p>

                <div className="mt-4 flex items-center justify-between">
                  <strong>{item.name}</strong>
                  <div className="flex gap-1">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-orange-400 text-orange-400" />
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* INTERNAL CRAWL BOOST */}
          <div className="sr-only">
            <a href="/doctors/dr-ganesh-ahire">Dr Ganesh Ahire Reviews</a>
            <a href="/services">Hospital Services in Bhiwandi</a>
            <a href="/contact">Contact Alexis Hospital</a>
          </div>

        </div>
      </section>
    </>
  );
}
