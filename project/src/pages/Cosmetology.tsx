import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  Sun,
  Droplet,
  Timer,
  Zap,
  Smile,
  Check,
  ArrowRight,
  Star,
} from 'lucide-react';
import CosmoService from '../components/CosmoServices';
import ServiceCards from '../components/ServiceCards';
import BeforeAfterCase from '../components/BeforeAfterCase';

export default function Cosmetology() {
  const categories = [
    {
      icon: Sparkles,
      title: 'Advanced Facials',
      description: 'Deep cleansing, hydration, and rejuvenation',
      treatments: ['HydraFacial', 'Oxygen Therapy', 'Gold Facial', 'Diamond Facial'],
      priceRange: '$150 - $300',
      duration: '60-90 min',
    },
    {
      icon: Sun,
      title: 'Tan Removal',
      description: 'Restore your natural skin tone',
      treatments: ['De-Tan Pack', 'Skin Polishing', 'Whitening Treatment', 'Brightening Serum'],
      priceRange: '$100 - $250',
      duration: '45-60 min',
    },
    {
      icon: Droplet,
      title: 'Chemical Peels',
      description: 'Medical-grade exfoliation and renewal',
      treatments: ['Glycolic Peel', 'Salicylic Peel', 'TCA Peel', 'Lactic Acid Peel'],
      priceRange: '$200 - $400',
      duration: '30-45 min',
    },
    {
      icon: Timer,
      title: 'Anti-Aging',
      description: 'Turn back the clock on aging',
      treatments: ['Botox', 'Dermal Fillers', 'Thread Lift', 'Micro-needling'],
      priceRange: '$500 - $1500',
      duration: '30-120 min',
    },
    {
      icon: Zap,
      title: 'Laser Treatments',
      description: 'Advanced laser technology',
      treatments: ['Hair Removal', 'Skin Resurfacing', 'Pigmentation', 'Scar Treatment'],
      priceRange: '$300 - $800',
      duration: '30-90 min',
    },
    {
      icon: Smile,
      title: 'Hair Rejuvenation',
      description: 'Restore hair health and growth',
      treatments: ['PRP Therapy', 'Hair Transplant', 'Scalp Treatment', 'Hair Regrowth'],
      priceRange: '$400 - $2000',
      duration: '60-180 min',
    },
  ];

  const procedures = [
    {
      title: 'Consultation',
      description: 'Comprehensive skin analysis and treatment planning',
    },
    {
      title: 'Preparation',
      description: 'Skin cleansing and preparation for the procedure',
    },
    {
      title: 'Treatment',
      description: 'Advanced treatment using state-of-the-art technology',
    },
    {
      title: 'Aftercare',
      description: 'Post-treatment care and follow-up guidance',
    },
  ];

  const benefits = [
    'FDA-approved treatments and equipment',
    'Board-certified dermatologists',
    'Personalized treatment plans',
    'Luxury treatment rooms',
    'Complimentary consultation',
    'Flexible payment options',
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <div className="min-h-screen bg-white pt-20">
      

      <CosmoService/>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Our Treatment Categories
            </h2>
            <p className="text-gray-600 text-lg">
              Comprehensive beauty and skin care solutions
            </p>
          </motion.div>

          <ServiceCards category="Cosmetology" />
        </div>
      </section>

      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#F5EAD7]/30 to-white"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Treatment Process
            </h2>
            <p className="text-gray-600 text-lg">
              Your journey to beautiful skin in four simple steps
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {procedures.map((procedure, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                className="relative"
              >
                <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
                  <div className="bg-gradient-to-br from-[#F7C6D3] to-[#A7D3F3] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {procedure.title}
                  </h3>
                  <p className="text-gray-600">{procedure.description}</p>
                </div>
                {index < procedures.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-[#F7C6D3]" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Why Choose{' '}
                <span className="bg-gradient-to-r from-[#F7C6D3] to-[#A7D3F3] bg-clip-text text-transparent">
                  Alexis Hospital
                </span>
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                Experience the perfect blend of medical expertise and luxury beauty
                treatments in a world-class facility.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-4"
                  >
                    <div className="bg-gradient-to-br from-[#F7C6D3] to-[#A7D3F3] w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                      <Star className="w-5 h-5 text-white fill-white" />
                    </div>
                    <span className="text-gray-700 text-lg">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <br />

           {/* TEXT CONTENT */}
{/* SECTION HEADER */}
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className="max-w-4xl mx-auto text-center mb-20"
>
  <h3 className="text-3xl font-bold text-gray-800 mb-6">
    Before & After Results
  </h3>

  <p className="text-gray-600 max-w-2xl mx-auto">
    Our treatments deliver visible, transformative results. Schedule a
    consultation to see real patient testimonials and before-after galleries.
  </p>
</motion.div>

{/* FULL-WIDTH CAROUSEL */}
<div className="relative w-screen left-1/2 -translate-x-1/2 overflow-hidden">
  <BeforeAfterCase />
</div>

<p className="text-sm text-gray-500 italic text-center mt-12">
  Results may vary based on individual skin type and condition
</p>


          </div>
        </div>
      </section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#F7C6D3] to-[#A7D3F3]"
      >
        <div className="max-w-4xl mx-auto text-center text-white">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-6"
          >
            Ready to Transform Your Skin?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl mb-10"
          >
            Book your complimentary consultation and discover the perfect treatment
            plan for your unique needs
          </motion.p>
          <Link to="/booking">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#F7C6D3] px-10 py-4 rounded-full font-bold text-lg shadow-2xl"
            >
              Schedule Your Consultation
            </motion.button>
          </Link>
        </div>
      </motion.section>
    </div>
  );
}
