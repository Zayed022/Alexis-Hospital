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
import Stats from '../components/Stats';
import VideoTestimonials from '../components/VideoTestimonials';

export default function Home() {
  const services = [
    {
      icon: Stethoscope,
      title: 'Medical Excellence',
      description: 'Comprehensive healthcare with experienced specialists',
      color: 'from-[#0095ff] to-[#ff7197]/70',
    },
    {
      icon: Sparkles,
      title: 'Advanced Cosmetology',
      description: 'Premium beauty treatments and skin rejuvenation',
      color: 'from-[#0095ff] to-[#ff7197]/70',
    },
    {
      icon: Syringe,
      title: 'Laser Treatments',
      description: 'State-of-the-art laser technology for skin care',
      color: 'from-[#0095ff] to-[#ff7197]',
    },
    {
      icon: Heart,
      title: '24/7 Emergency Care',
      description: 'Round-the-clock medical emergency services',
      color: 'from-[#0095ff] to-[#ff7197]',
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
      <section
  className="
    relative
    pt-28 sm:pt-32 md:pt-36
    min-h-[90vh] md:min-h-screen
    flex items-center justify-center
    overflow-hidden
  "
>
  {/* Background */}
  <div className="absolute inset-0 " />

  {/* Ambient Blobs (responsive) */}
  <motion.div
    className="
      absolute
      top-20 left-6 sm:left-16
      w-56 h-56 sm:w-72 sm:h-72
      
      rounded-full blur-3xl
    "
    animate={{ scale: [1, 1.15, 1] }}
    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
  />

  <motion.div
    className="
      absolute
      bottom-20 right-6 sm:right-16
      w-72 h-72 sm:w-96 sm:h-96
      
      rounded-full blur-3xl
    "
    animate={{ scale: [1, 1.2, 1] }}
    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
  />

  {/* Content */}
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">

    {/* Premium Tagline */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="
        inline-flex items-center bg-gradient-to-r from-[#0095ff] to-[#ff7197]
        mb-6 sm:mb-8
        px-5 py-2
        rounded-full
         backdrop-blur
        border border-gray-200
        shadow-sm
      "
    >
      <span className="text-xs sm:text-sm font-semibold tracking-wide text-[#ffffff] font-heading">
        Excellence in Healthcare & Aesthetics
      </span>
    </motion.div>

    {/* Heading */}
    <motion.h1
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="
        text-4xl sm:text-5xl md:text-6xl lg:text-7xl
        font-extrabold
        mb-6 sm:mb-8
        leading-tight
      "
    >
      <span className="bg-gradient-to-r from-[#0095ff] to-[#ff7197] bg-clip-text text-transparent font-heading">
        Advanced Healthcare
      </span>
      <br />
      <span className="text-[#0b1324] font-heading">
        & Premium Cosmetology
      </span>
      <br />
      <span className="text-[#0b1324] font-heading">
        Under One Roof
      </span>
    </motion.h1>

    {/* Optional short supporting line (UX improvement) */}
    <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto mb-8 font-body">
      World-class medical care and advanced cosmetology, delivered with precision,
      trust, and compassion.
    </p>

    {/* CTAs */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="
        flex flex-col sm:flex-row
        gap-4 sm:gap-5
        justify-center
      "
    >
      <Link to="/booking">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          className="
            bg-gradient-to-r from-[#0095ff] to-[#ff7197]
            text-white
            px-8 sm:px-9
            py-3.5 sm:py-4
            rounded-full
            font-semibold
            text-base sm:text-lg
            shadow-xl hover:shadow-2xl
            transition font-body
          "
        >
          Book Appointment
        </motion.button>
      </Link>

      <Link to="/services">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          className="
            bg-white
            text-[#0b1324]
            px-8 sm:px-9
            py-3.5 sm:py-4
            rounded-full
            font-semibold
            text-base sm:text-lg
            shadow-md hover:shadow-lg
            border border-gray-200
            transition
          "
        >
          View Our Services
        </motion.button>
      </Link>
    </motion.div>

  </div>
</section>


      <VideoTestimonials/>
      <HomeBanner/>
      

     <motion.section
  variants={fadeInUp}
  className="
    relative
    py-6 md:py-8
    px-4 sm:px-6
    overflow-hidden
    bg-gradient-to-br from-[#A7D3F3]/10 via-white to-[#F7C6D3]/10
  "
>
  {/* Ambient Blobs — hide on small screens */}
  <motion.div
    className="hidden sm:block absolute top-10 left-6 w-48 h-48 bg-[#0095ff]/12 rounded-full blur-3xl"
    animate={{ scale: [1, 1.08, 1] }}
    transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
  />
  <motion.div
    className="hidden sm:block absolute bottom-10 right-6 w-56 h-56 bg-[#ff7197]/12 rounded-full blur-3xl"
    animate={{ scale: [1, 1.1, 1] }}
    transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
  />
  

  {/* Content */}
  <div className="relative z-10 max-w-7xl mx-auto text-center">

    {/* Heading */}
    <motion.h2
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="
        text-2xl sm:text-3xl md:text-4xl
        font-extrabold text-[#0b1324]
        mb-2 font-heading
      "
    >
      Our{" "}
      <span className="bg-gradient-to-r from-[#0095ff] to-[#ff7197] bg-clip-text text-transparent">
        Happy Clients
      </span>
    </motion.h2>

    {/* Description */}
    <motion.p
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: 0.05 }}
      className="
        text-sm sm:text-base md:text-lg
        text-gray-600
        max-w-lg mx-auto
        leading-relaxed
        mb-4 font-body
      "
    >
      Real patient transformations powered by expert care and advanced treatments.
    </motion.p>

    {/* Before / After — NO extra margin */}
    <div className="mt-2">
      <BeforeAfterCase />
    </div>

  </div>
</motion.section>


      
      

      <motion.section
  initial="initial"
  whileInView="animate"
  viewport={{ once: true }}
  variants={staggerContainer}
  className="
    relative
    py-4 md:py-6
    px-4 sm:px-6 lg:px-8
    bg-gradient-to-br from-white to-[#F5EAD7]/30
    overflow-hidden
  "
>
  <div className="max-w-7xl mx-auto">

    {/* HEADER */}
    <motion.div
      variants={fadeInUp}
      className="text-center mb-5"
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0b1324] mb-2 font-heading">
        Our{" "}
        <span className="bg-gradient-to-r from-[#0095ff] to-[#ff7197] bg-clip-text text-transparent font-heading">
          Services
        </span>
      </h2>

      <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-xl mx-auto font-body">
        Comprehensive healthcare and beauty solutions tailored to your needs
      </p>
    </motion.div>

    {/* OPTIONAL SERVICE INTRO */}
    <div className="mb-4">
      <Service />
    </div>

    {/* SERVICES GRID */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
      {services.map((service, index) => (
        <motion.div
          key={index}
          variants={fadeInUp}
          whileHover={{ y: -4 }}
          className="
            bg-white
            rounded-xl
            p-5
            shadow-sm
            hover:shadow-lg
            transition-all
          "
        >
          <motion.div
            whileHover={{ rotate: 360, scale: 1.06 }}
            transition={{ duration: 0.6 }}
            className={`
              bg-gradient-to-br ${service.color}
              w-12 h-12
              rounded-lg
              flex items-center justify-center
              mb-3
            `}
          >
            <service.icon className="w-6 h-6 text-white" />
          </motion.div>

          <h3 className="text-base sm:text-lg font-bold text-[#0b1324] mb-1.5 font-heading">
            {service.title}
          </h3>

          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-body">
            {service.description}
          </p>
        </motion.div>
      ))}
    </div>

  </div>
</motion.section>



{/*
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
      */}

      <motion.section
  initial="initial"
  whileInView="animate"
  viewport={{ once: true }}
  variants={staggerContainer}
  className="relative py-14 md:py-16 px-4 sm:px-6 lg:px-8 bg-white"
>
  <div className="max-w-7xl mx-auto">

    {/* HEADER */}
    <motion.div
      variants={fadeInUp}
      className="text-center mb-8"
    >
      <h2 className="text-3xl md:text-4xl font-extrabold text-[#0b1324] mb-3 font-heading">
        Hospital{" "}
        <span className="bg-gradient-to-r from-[#0095ff] to-[#ff7197] bg-clip-text text-transparent">
          Facilities
        </span>
      </h2>

      <p className="text-gray-600 text-base md:text-lg max-w-xl mx-auto font-body">
        World-class infrastructure and patient-centered care
      </p>
    </motion.div>

    {/* FACILITIES GRID */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {facilities.map((facility, index) => (
        <motion.div
          key={index}
          variants={fadeInUp}
          whileHover={{ y: -6 }}
          className="bg-gradient-to-br from-[#F5EAD7]/40 to-white
                     rounded-2xl p-6 text-center
                     shadow-md hover:shadow-xl transition-all"
        >
          <motion.div
            whileHover={{ rotate: 360, scale: 1.08 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-[#0095ff] to-[#ff7197]
                       w-16 h-16 rounded-xl
                       flex items-center justify-center mx-auto mb-4"
          >
            <facility.icon className="w-8 h-8 text-white" />
          </motion.div>

          <h3 className="text-lg font-bold text-[#0b1324] mb-2 font-heading">
            {facility.title}
          </h3>

          <p className="text-sm text-gray-600 leading-relaxed font-body">
            {facility.description}
          </p>
        </motion.div>
      ))}
    </div>
  </div>
</motion.section>


      <Stats/>
      

      <motion.section
  initial="initial"
  whileInView="animate"
  viewport={{ once: true }}
  variants={staggerContainer}
  className="
    relative
    py-10 md:py-12
    px-4 sm:px-6 lg:px-8
    bg-gradient-to-br
    from-[#0095ff]/5
    via-white
    to-[#ff7197]/5
  "
>
  <div className="max-w-7xl mx-auto">

    {/* HEADER */}
    <motion.div
      variants={fadeInUp}
      className="text-center mb-8"
    >
      <h2 className="text-2xl md:text-3xl font-extrabold text-[#0b1324] mb-2 font-heading">
        Patient{" "}
        <span className="bg-gradient-to-r from-[#0095ff] to-[#ff7197] bg-clip-text text-transparent">
          Testimonials
        </span>
      </h2>
      <p className="text-sm md:text-base text-gray-600 max-w-xl mx-auto font-body">
        Hear from those who experienced our exceptional care
      </p>
    </motion.div>

    {/* TESTIMONIAL GRID */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {testimonials.map((testimonial, index) => (
        <motion.div
          key={index}
          variants={fadeInUp}
          whileHover={{ y: -6 }}
          className="
            bg-white
            rounded-2xl
            p-6
            shadow-md
            hover:shadow-xl
            transition-all
          "
        >
          {/* RATING */}
          <div className="flex mb-3">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star
                key={i}
                className="w-4 h-4 text-yellow-400 fill-yellow-400"
              />
            ))}
          </div>

          {/* TEXT */}
          <p className="text-sm text-gray-700 mb-5 leading-relaxed italic">
            “{testimonial.text}”
          </p>

          {/* USER */}
          <div>
            <p className="font-semibold text-[#0b1324] text-sm font-heading">
              {testimonial.name}
            </p>
            <p className="text-xs text-gray-500">
              {testimonial.role}
            </p>
          </div>
        </motion.div>
      ))}
    </div>

    {/* CTA */}
    <div className="flex justify-center mt-8">
      <Link to="/testimonials">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="
            inline-flex
            items-center
            justify-center
            rounded-full
            bg-gradient-to-r
            from-[#0095ff]
            to-[#ff7197]
            px-7
            py-3
            text-sm
            font-semibold
            text-white
            shadow-lg
            hover:shadow-xl
            transition
            focus:outline-none
            focus:ring-2
            focus:ring-[#0095ff]
            focus:ring-offset-2
            font-heading
          "
        >
          Read More Testimonials
        </motion.button>
      </Link>
    </div>

  </div>
</motion.section>



      <CtaImage/>
      <br />
    </div>
  );
}
