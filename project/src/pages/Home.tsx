import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Stethoscope,
  Sparkles,
  Syringe,
  Heart,
  Clock,
  Shield,
  Star,
  ChevronRight,
} from 'lucide-react';
import HomeBanner from "../components/HomeBanner"
import Service from '../components/Service';
import BeforeAfterCase from '../components/BeforeAfterCase';
import CtaImage from '../components/CtaImage';

export default function Home() {
  const services = [
    {
      icon: Stethoscope,
      title: 'Medical Excellence',
      description: 'Comprehensive healthcare with experienced specialists',
      color: 'from-[#A7D3F3] to-[#A7D3F3]/70',
    },
    {
      icon: Sparkles,
      title: 'Advanced Cosmetology',
      description: 'Premium beauty treatments and skin rejuvenation',
      color: 'from-[#F7C6D3] to-[#F7C6D3]/70',
    },
    {
      icon: Syringe,
      title: 'Laser Treatments',
      description: 'State-of-the-art laser technology for skin care',
      color: 'from-[#A7D3F3] to-[#F7C6D3]',
    },
    {
      icon: Heart,
      title: '24/7 Emergency Care',
      description: 'Round-the-clock medical emergency services',
      color: 'from-[#F7C6D3] to-[#A7D3F3]',
    },
  ];

  const facilities = [
    {
      icon: Clock,
      title: 'Open 24/7',
      description: 'Always here when you need us',
    },
    {
      icon: Shield,
      title: 'Certified Staff',
      description: 'Highly trained professionals',
    },
    {
      icon: Heart,
      title: 'Patient Care',
      description: 'Your comfort is our priority',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Cosmetology Patient',
      text: 'The anti-aging treatment results exceeded my expectations. The staff is incredibly professional and caring.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Medical Patient',
      text: 'Exceptional medical care combined with luxurious facilities. Alexis Hospital sets a new standard in healthcare.',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      role: 'Laser Treatment Patient',
      text: 'The laser skin care treatment was painless and effective. I can see visible results after just two sessions.',
      rating: 5,
    },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="min-h-screen bg-white">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-[#A7D3F3]/20 via-white to-[#F7C6D3]/20" />

        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-[#A7D3F3]/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-[#F7C6D3]/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="inline-block bg-gradient-to-r from-[#A7D3F3] to-[#F7C6D3] text-white px-6 py-2 rounded-full text-sm font-medium mb-6"
            >
              Premium Healthcare & Wellness Center
            </motion.div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-[#A7D3F3] via-[#F7C6D3] to-[#A7D3F3] bg-clip-text text-transparent">
              Advanced Healthcare
            </span>
            <br />
            <span className="text-gray-800">& Cosmetology</span>
            <br />
            <span className="text-gray-800">Under One Roof</span>
          </motion.h1>

          

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Alexis Hospital — Where medical excellence meets beauty and wellness.
            Experience world-class healthcare and premium cosmetology services.
          </motion.p>

          

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/booking">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-[#A7D3F3] to-[#F7C6D3] text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-shadow"
              >
                Book Appointment
              </motion.button>
            </Link>
            <Link to="/services">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-gray-800 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-shadow border-2 border-gray-200"
              >
                Explore Services
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      <HomeBanner/>
      <Service/>
      <BeforeAfterCase/>

      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-[#F5EAD7]/30"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Our Services
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Comprehensive healthcare and beauty solutions tailored to your needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`bg-gradient-to-br ${service.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6`}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#A7D3F3]/10 to-[#F7C6D3]/10"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={fadeInUp}>
              <span className="bg-gradient-to-r from-[#A7D3F3] to-[#F7C6D3] text-white px-4 py-2 rounded-full text-sm font-medium">
                Premium Cosmetology
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mt-6 mb-6">
                Advanced Beauty & Skin Care Treatments
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Experience luxury cosmetology services with cutting-edge technology
                and expert dermatologists. From anti-aging treatments to laser skin
                rejuvenation, we offer comprehensive beauty solutions.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Advanced Facials & Deep Cleansing',
                  'Tan Removal & Skin Brightening',
                  'Chemical Peels & Exfoliation',
                  'Anti-Aging & Wrinkle Reduction',
                  'Laser Skin Treatments',
                  'Hair Rejuvenation Therapy',
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    variants={fadeInUp}
                    className="flex items-center space-x-3"
                  >
                    <div className="bg-gradient-to-br from-[#A7D3F3] to-[#F7C6D3] w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">
                      <ChevronRight className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </motion.li>
                ))}
              </ul>
              <Link to="/services/cosmetology">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-[#A7D3F3] to-[#F7C6D3] text-white px-8 py-4 rounded-full font-semibold shadow-xl"
                >
                  Explore Cosmetology Services
                </motion.button>
              </Link>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((item) => (
                  <motion.div
                    key={item}
                    whileHover={{ scale: 1.05 }}
                    className="aspect-square bg-gradient-to-br from-[#A7D3F3]/20 to-[#F7C6D3]/20 rounded-3xl overflow-hidden shadow-lg"
                  >
                    <div className="w-full h-full flex items-center justify-center">
                      <Sparkles className="w-12 h-12 text-[#A7D3F3]" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-24 px-4 sm:px-6 lg:px-8 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Hospital Facilities
            </h2>
            <p className="text-gray-600 text-lg">
              World-class infrastructure and patient-centered care
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-[#F5EAD7]/50 to-white rounded-3xl p-10 text-center shadow-lg"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="bg-gradient-to-br from-[#A7D3F3] to-[#F7C6D3] w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6"
                >
                  <facility.icon className="w-10 h-10 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  {facility.title}
                </h3>
                <p className="text-gray-600">{facility.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#A7D3F3]/5 via-white to-[#F7C6D3]/5"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Patient Testimonials
            </h2>
            <p className="text-gray-600 text-lg">
              Hear from those who experienced our exceptional care
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="font-semibold text-gray-800">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <CtaImage/>
      <br />
    </div>
  );
}
