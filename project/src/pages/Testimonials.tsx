import { Quote, Star } from "lucide-react";
import { motion } from "framer-motion";
import TestimonialsBanner from "../components/TestimonialsBanner";

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
      "One of the finest hospitals in Bhiwandi, with Dr. Ganesh being one of the most soft-spoken and compassionate doctors. He is an excellent listener and has a remarkable ability to connect with his patients. I have been visiting Dr. Ganesh’s hospital for my elderly father for over a year, and his sensitive approach toward my father’s care has been truly commendable. He explains medications and treatments in a way that is easy to understand, which I greatly appreciate. I highly recommend both the hospital and Dr. Ganesh for their exceptional service.",
  },
  {
    name: "Sonali Pathak",
    rating: 5,
    message:
      "It's a very good hospital and the doctors are caring and experienced. Dr. Ahire is a well-experienced doctor. I have been following his treatment for SLE disease and have seen significant improvement. I was admitted twice, and the nursing staff was very friendly and careful. Even if you are afraid of needles, they handle blood tests with great care. Overall, it is a hygienic and reliable hospital.",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-20 bg-[#f6faef]">
      {/* Subtle Pattern Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#dfeecf_1px,transparent_1px)] [background-size:20px_20px] opacity-30" />
      <TestimonialsBanner/>

      <div className="relative max-w-6xl mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            What Our Patients Say
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Trusted by patients for compassionate care, medical expertise,
            and personalized treatment.
          </p>
        </motion.div>

        {/* Testimonials */}
        <div className="space-y-12">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="relative bg-white rounded-3xl border border-lime-300 shadow-md px-6 md:px-10 py-10"
            >
              {/* Quote Icon */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-lime-100 flex items-center justify-center">
                <Quote className="w-6 h-6 text-lime-600" />
              </div>

              {/* Message */}
              <p className="text-gray-700 leading-relaxed text-center md:text-lg">
                {item.message}
              </p>

              {/* Footer */}
              <div className="mt-8 flex flex-col items-center">
                <p className="font-semibold text-blue-600 text-lg">
                  {item.name}
                </p>

                <div className="flex gap-1 mt-2">
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
  );
}
