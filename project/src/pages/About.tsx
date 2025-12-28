import { motion } from 'framer-motion';
import { Award, Users, Heart, Target, Eye, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';

import { doctors } from "../data/doctors"


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
            About{' '}
            <span className="bg-gradient-to-r from-[#A7D3F3] to-[#F7C6D3] bg-clip-text text-transparent">
              Alexis Hospital
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            A pioneering healthcare institution combining medical excellence with
            premium wellness and beauty services since 2010.
          </motion.p>
        </div>
      </motion.section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <Target className="w-8 h-8 text-[#A7D3F3]" />
                <h2 className="text-3xl font-bold text-gray-800">Our Mission</h2>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                To provide comprehensive, compassionate healthcare services while
                offering world-class cosmetology treatments. We believe that true
                wellness encompasses both physical health and personal confidence.
              </p>

              <div className="flex items-center space-x-3 mb-6">
                <Eye className="w-8 h-8 text-[#F7C6D3]" />
                <h2 className="text-3xl font-bold text-gray-800">Our Vision</h2>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
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
              className="bg-gradient-to-br from-[#A7D3F3]/10 to-[#F7C6D3]/10 rounded-3xl p-12"
            >
              <div className="space-y-8">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="bg-gradient-to-br from-[#A7D3F3] to-[#F7C6D3] p-3 rounded-xl flex-shrink-0">
                      <value.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        {value.title}
                      </h3>
                      <p className="text-gray-600">{value.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
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
              Our Journey
            </h2>
            <p className="text-gray-600 text-lg">
              Over a decade of excellence in healthcare and wellness
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#A7D3F3] to-[#F7C6D3]" />

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
                      <span className="text-3xl font-bold bg-gradient-to-r from-[#A7D3F3] to-[#F7C6D3] bg-clip-text text-transparent">
                        {item.year}
                      </span>
                      <h3 className="text-xl font-bold text-gray-800 mt-2 mb-2">
                        {item.event}
                      </h3>
                      <p className="text-gray-600">{item.description}</p>
                    </motion.div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2">
                    <motion.div
                      whileHover={{ scale: 1.3, rotate: 180 }}
                      className="bg-gradient-to-br from-[#A7D3F3] to-[#F7C6D3] w-6 h-6 rounded-full border-4 border-white"
                    />
                  </div>
                  <div className="w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="py-24 px-4 sm:px-6 lg:px-8 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Meet Our Specialists
            </h2>
            <p className="text-gray-600 text-lg">
              Experienced professionals dedicated to your care
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
  {doctors.map((doctor) => (
    <Link key={doctor.slug} to={`/doctors/${doctor.slug}`}>
      <motion.div
        variants={fadeInUp}
        whileHover={{ y: -10 }}
        className="cursor-pointer bg-gradient-to-br from-[#F5EAD7]/30 to-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all"
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="w-24 h-24 bg-gradient-to-br from-[#A7D3F3] to-[#F7C6D3] rounded-2xl flex items-center justify-center mx-auto mb-6"
        >
          <img
            src={doctor.image}
            alt={doctor.name}
            className="w-20 h-20 object-cover rounded-xl"
          />
        </motion.div>

        <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">
          {doctor.name}
        </h3>

        <p className="text-[#0f5aa7] font-semibold text-center mb-2">
          {doctor.title}
        </p>

        <p className="text-sm text-gray-500 text-center">
          {doctor.experience}
        </p>
      </motion.div>
    </Link>
  ))}
</div>

        </div>
      </motion.section>

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
            Join thousands of satisfied patients
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl mb-2"
          >
            Experience the Alexis Hospital difference today
          </motion.p>
        </div>
      </motion.section>
    </div>
  );
}
