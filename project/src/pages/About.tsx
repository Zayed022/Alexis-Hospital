import { motion } from 'framer-motion';
import { Award, Users, Heart, Target, Eye, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';

import { doctors } from "../data/doctors";

export default function About() {
  const timeline = [
    { year: '2010', event: 'Alexis Hospital Founded', description: 'Started with 50 beds and basic medical services' },
    { year: '2014', event: 'Cosmetology Wing Added', description: 'Expanded to include premium beauty treatments' },
    { year: '2018', event: 'State-of-the-art Equipment', description: 'Invested in advanced medical and laser technology' },
    { year: '2023', event: 'Award-Winning Care', description: 'Recognized as Best Multispecialty Hospital' },
  ];

  const values = [
    {
      icon: Heart,
      title: 'Patient-Centered Care',
      description: 'Your health and comfort are our top priorities',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to the highest standards of medical care',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Embracing cutting-edge technology and treatments',
    },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <div className="min-h-screen bg-white pt-[120px] md:pt-[96px]">


      {/* HERO */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        
  className="
    relative
    pt-[140px] md:pt-[120px]
    pb-12 md:pb-24
    px-4 sm:px-6 lg:px-8
  "
      >
        <div className="max-w-7xl mx-auto text-center sm:mt-18">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0b1324] mb-4 md:mb-6 font-heading"
          >
            About{" "}
            <span className="bg-gradient-to-r from-[#0095ff] to-[#ff7197] bg-clip-text text-transparent">
              Alexis Hospital
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0 font-body"
          >
            A pioneering healthcare institution combining medical excellence with
            premium wellness and beauty services since 2010.
          </motion.p>
        </div>
      </motion.section>

      {/* MISSION / VISION */}
      <section className="py-12 md:py-24 px-4 sm:px-6 lg:px-8 bg-white font-heading">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <div className="flex items-center space-x-3 mb-4 md:mb-6">
                <Target className="w-6 h-6 md:w-8 md:h-8 text-[#0095ff]" />
                <h2 className="text-2xl sm:text-3xl font-bold text-[#0b1324]">Our Mission</h2>
              </div>

              <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6 md:mb-8 font-body">
                To provide comprehensive, compassionate healthcare services while
                offering world-class cosmetology treatments. We believe that true
                wellness encompasses both physical health and personal confidence.
              </p>

              <div className="flex items-center space-x-3 mb-4 md:mb-6">
                <Eye className="w-6 h-6 md:w-8 md:h-8 text-[#ff7197]" />
                <h2 className="text-2xl sm:text-3xl font-bold text-[#0b1324]">Our Vision</h2>
              </div>

              <p className="text-gray-600 text-base md:text-lg leading-relaxed font-body">
                To be the leading healthcare destination where advanced medical
                science meets aesthetic excellence, setting new standards in
                patient care and satisfaction.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-[#A7D3F3]/10 to-[#F7C6D3]/10 rounded-xl md:rounded-2xl lg:rounded-3xl p-6 md:p-8 lg:p-12 order-1 lg:order-2"
            >
              <div className="space-y-6 md:space-y-8">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-start space-x-3 md:space-x-4"
                  >
                    <div className="bg-gradient-to-br from-[#0095ff] to-[#ff7197] p-2 md:p-3 rounded-lg md:rounded-xl flex-shrink-0">
                      <value.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-[#0b1324] mb-1 md:mb-2">
                        {value.title}
                      </h3>
                      <p className="text-gray-600 text-sm md:text-base">{value.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* JOURNEY */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="py-12 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#A7D3F3]/8 via-white to-[#F7C6D3]/8"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div variants={fadeInUp} className="text-center mb-8 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0b1324] mb-2 md:mb-4">
              Our Journey
            </h2>
            <p className="text-gray-600 text-sm md:text-base lg:text-lg">
              Over a decade of excellence in healthcare and wellness
            </p>
          </motion.div>

          {/* Mobile Timeline */}
          <div className="block lg:hidden">
            <div className="relative">
              <div className="absolute left-4 md:left-6 transform -translate-x-1/2 h-full w-0.5 md:w-1 bg-gradient-to-b from-[#0095ff] to-[#ff7197]" />
              
              <div className="space-y-8 md:space-y-12 ml-8 md:ml-12">
                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="relative"
                  >
                    <div className="absolute -left-8 md:-left-10 transform -translate-x-1/2">
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 180 }}
                        className="bg-gradient-to-br from-[#0095ff] to-[#ff7197] w-4 h-4 md:w-6 md:h-6 rounded-full border-2 md:border-4 border-white"
                      />
                    </div>
                    
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg"
                    >
                      <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-[#0095ff] to-[#ff7197] bg-clip-text text-transparent">
                        {item.year}
                      </span>
                      <h3 className="text-lg md:text-xl font-bold text-[#0b1324] mt-1 md:mt-2 mb-1 md:mb-2">
                        {item.event}
                      </h3>
                      <p className="text-gray-600 text-sm md:text-base">{item.description}</p>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Desktop Timeline */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#0095ff] to-[#ff7197]" />

              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className={`flex items-center ${
                      index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                    }`}
                  >
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="bg-white rounded-2xl p-6 shadow-lg"
                      >
                        <span className="text-3xl font-bold bg-gradient-to-r from-[#0095ff] to-[#ff7197] bg-clip-text text-transparent">
                          {item.year}
                        </span>
                        <h3 className="text-xl font-bold text-[#0b1324] mt-2 mb-2">
                          {item.event}
                        </h3>
                        <p className="text-gray-600">{item.description}</p>
                      </motion.div>
                    </div>

                    <div className="absolute left-1/2 transform -translate-x-1/2">
                      <motion.div
                        whileHover={{ scale: 1.3, rotate: 180 }}
                        className="bg-gradient-to-br from-[#0095ff] to-[#ff7197] w-6 h-6 rounded-full border-4 border-white"
                      />
                    </div>

                    <div className="w-1/2" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* DOCTORS */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="py-12 md:py-24 px-4 sm:px-6 lg:px-8 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div variants={fadeInUp} className="text-center mb-8 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0b1324] mb-2 md:mb-4">
              Meet Our Specialists
            </h2>
            <p className="text-gray-600 text-sm md:text-base lg:text-lg">
              Experienced professionals dedicated to your care
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {doctors.map((doctor) => (
              <Link key={doctor.slug} to={`/doctors/${doctor.slug}`}>
                <motion.div
  variants={fadeInUp}
  whileHover={{ y: -4 }}
  className="
    cursor-pointer
    bg-gradient-to-br from-[#A7D3F3]/10 to-white
    rounded-xl lg:rounded-2xl
    p-5 md:p-6
    shadow-md hover:shadow-lg
    transition-all
    h-[280px] md:h-[300px] lg:h-[320px]
    flex flex-col items-center text-center
  "
>
  {/* IMAGE */}
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="
      w-16 h-16 md:w-20 md:h-20
      bg-gradient-to-br from-[#0095ff] to-[#ff7197]
      rounded-xl
      flex items-center justify-center
      mb-4
      shrink-0
    "
  >
    <img
      src={doctor.image}
      alt={doctor.name}
      className="w-14 h-14 md:w-18 md:h-18 object-cover rounded-lg"
    />
  </motion.div>

  {/* NAME */}
  <h3 className="text-base md:text-lg font-bold text-[#0b1324] leading-tight mb-1 line-clamp-2">
    {doctor.name}
  </h3>

  {/* TITLE */}
  <p className="text-[#0095ff] font-semibold text-sm md:text-sm leading-snug mb-2 line-clamp-2">
    {doctor.title}
  </p>

  {/* EXPERIENCE */}
  <p className="text-sm text-gray-600 font-medium mt-1">
    {doctor.experience}
  </p>
</motion.div>

              </Link>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#0095ff] to-[#ff7197]"
      >
        <div className="max-w-4xl mx-auto text-center text-white">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6"
          >
            Join thousands of satisfied patients
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-xl"
          >
            Experience the Alexis Hospital difference today
          </motion.p>
        </div>
      </motion.section>
    </div>
  );
}