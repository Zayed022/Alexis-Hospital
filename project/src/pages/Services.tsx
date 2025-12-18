import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Stethoscope,
  Activity,
  Pill,
  Ambulance,
  Heart,
  Sparkles,
  Droplet,
  Zap,
  Sun,
  Timer,
  Smile,
} from 'lucide-react';

export default function Services() {
  const [activeTab, setActiveTab] = useState<'medical' | 'cosmetology'>('medical');

  const medicalServices = [
    {
      icon: Stethoscope,
      title: 'General Health',
      description: 'Comprehensive health checkups and preventive care',
      features: ['Annual Physicals', 'Vaccinations', 'Health Screenings'],
    },
    {
      icon: Activity,
      title: 'Diagnostics',
      description: 'Advanced diagnostic imaging and laboratory services',
      features: ['X-Ray & CT Scan', 'Blood Tests', 'MRI Services'],
    },
    {
      icon: Ambulance,
      title: 'Emergency Care',
      description: '24/7 emergency medical services',
      features: ['Critical Care', 'Trauma Care', 'Immediate Response'],
    },
    {
      icon: Heart,
      title: 'Cardiology',
      description: 'Expert cardiovascular care and treatment',
      features: ['Heart Monitoring', 'Cardiac Testing', 'Treatment Plans'],
    },
    {
      icon: Pill,
      title: 'Pharmacy',
      description: 'In-house pharmacy with expert consultation',
      features: ['Prescription Filling', 'Medication Counseling', 'Home Delivery'],
    },
    {
      icon: Activity,
      title: 'Specialist Consultations',
      description: 'Access to expert specialists across all fields',
      features: ['Orthopedics', 'Neurology', 'Gastroenterology'],
    },
  ];

  const cosmetologyServices = [
    {
      icon: Sparkles,
      title: 'Advanced Facials',
      description: 'Deep cleansing and rejuvenating facial treatments',
      features: ['HydraFacial', 'Oxygen Facial', 'Gold Facial'],
    },
    {
      icon: Sun,
      title: 'Tan Removal',
      description: 'Professional skin brightening treatments',
      features: ['De-Tan Therapy', 'Skin Polishing', 'Brightening Masks'],
    },
    {
      icon: Droplet,
      title: 'Chemical Peels',
      description: 'Medical-grade exfoliation for skin renewal',
      features: ['Glycolic Peel', 'Salicylic Peel', 'TCA Peel'],
    },
    {
      icon: Timer,
      title: 'Anti-Aging',
      description: 'Advanced treatments to reduce signs of aging',
      features: ['Botox', 'Dermal Fillers', 'Thread Lift'],
    },
    {
      icon: Zap,
      title: 'Laser Treatments',
      description: 'State-of-the-art laser technology',
      features: ['Laser Hair Removal', 'Skin Resurfacing', 'Pigmentation Treatment'],
    },
    {
      icon: Smile,
      title: 'Hair Rejuvenation',
      description: 'Comprehensive hair and scalp treatments',
      features: ['PRP Therapy', 'Hair Transplant', 'Scalp Treatment'],
    },
  ];

  const services = activeTab === 'medical' ? medicalServices : cosmetologyServices;

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <div className="min-h-screen bg-white pt-20">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#A7D3F3]/20 via-white to-[#F7C6D3]/20"
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold text-gray-800 mb-6"
          >
            Our{' '}
            <span className="bg-gradient-to-r from-[#A7D3F3] to-[#F7C6D3] bg-clip-text text-transparent">
              Services
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Comprehensive healthcare and premium cosmetology services tailored to
            your unique needs
          </motion.p>
        </div>
      </motion.section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center mb-16"
          >
            <div className="bg-gradient-to-r from-[#F5EAD7]/50 to-[#F5EAD7]/30 p-2 rounded-full inline-flex">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab('medical')}
                className={`px-8 py-4 rounded-full font-semibold transition-all ${
                  activeTab === 'medical'
                    ? 'bg-gradient-to-r from-[#A7D3F3] to-[#A7D3F3]/80 text-white shadow-lg'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                Medical Services
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab('cosmetology')}
                className={`px-8 py-4 rounded-full font-semibold transition-all ${
                  activeTab === 'cosmetology'
                    ? 'bg-gradient-to-r from-[#F7C6D3] to-[#F7C6D3]/80 text-white shadow-lg'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                Cosmetology Services
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-gradient-to-br from-white to-[#F5EAD7]/20 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`${
                    activeTab === 'medical'
                      ? 'bg-gradient-to-br from-[#A7D3F3] to-[#A7D3F3]/70'
                      : 'bg-gradient-to-br from-[#F7C6D3] to-[#F7C6D3]/70'
                  } w-16 h-16 rounded-2xl flex items-center justify-center mb-6`}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </motion.div>

                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div
                        className={`w-2 h-2 rounded-full ${
                          activeTab === 'medical'
                            ? 'bg-[#A7D3F3]'
                            : 'bg-[#F7C6D3]'
                        }`}
                      />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {activeTab === 'cosmetology' && (
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#F5EAD7]/30 to-white"
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-4xl font-bold text-gray-800 mb-6"
            >
              Want to Learn More About Our Cosmetology Services?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-gray-600 text-lg mb-8"
            >
              Explore our comprehensive cosmetology offerings, view before & after
              results, and discover pricing information
            </motion.p>
            <Link to="/services/cosmetology">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-[#A7D3F3] to-[#F7C6D3] text-white px-10 py-4 rounded-full font-semibold text-lg shadow-xl"
              >
                View Detailed Cosmetology Page
              </motion.button>
            </Link>
          </div>
        </motion.section>
      )}

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#A7D3F3] to-[#F7C6D3]"
      >
        <div className="max-w-4xl mx-auto text-center text-white">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-6"
          >
            Ready to Get Started?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl mb-10"
          >
            Book your appointment today and experience world-class care
          </motion.p>
          <Link to="/booking">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#A7D3F3] px-10 py-4 rounded-full font-bold text-lg shadow-2xl"
            >
              Book Appointment
            </motion.button>
          </Link>
        </div>
      </motion.section>
    </div>
  );
}
