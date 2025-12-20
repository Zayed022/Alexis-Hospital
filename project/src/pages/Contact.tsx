import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  Ambulance,
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    subject: '',
    message: '',
  });
  

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  
    const clientWhatsAppNumber = "917498881947"; 
    // 👆 Use country code, no +, no spaces
  
    const whatsappMessage = `
  New Inquiry from Website:
  
  Name: ${formData.name}
  Phone: ${formData.phone}
  Subject: ${formData.subject}
  
  Message:
  ${formData.message}
    `.trim();
  
    const encodedMessage = encodeURIComponent(whatsappMessage);
  
    const whatsappURL = `https://wa.me/${clientWhatsAppNumber}?text=${encodedMessage}`;
  
    window.open(whatsappURL, "_blank");
  };
  

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['123 Healthcare Avenue', 'Medical District', 'New York, NY 10001'],
      color: 'from-[#A7D3F3] to-[#A7D3F3]/70',
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+1 (555) 123-4567', '+1 (555) 123-4568', 'Mon-Fri: 9AM - 6PM'],
      color: 'from-[#F7C6D3] to-[#F7C6D3]/70',
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: [
        'info@alexishospital.com',
        'appointments@alexishospital.com',
        'Response within 24 hours',
      ],
      color: 'from-[#A7D3F3] to-[#F7C6D3]',
    },
    {
      icon: Clock,
      title: 'Opening Hours',
      details: [
        'Monday - Friday: 8AM - 8PM',
        'Saturday: 9AM - 5PM',
        'Sunday: 10AM - 4PM',
      ],
      color: 'from-[#F7C6D3] to-[#A7D3F3]',
    },
  ];

  const emergencyContacts = [
    {
      title: 'Emergency Services',
      phone: '911',
      description: 'Life-threatening emergencies',
    },
    {
      title: 'Hospital Emergency',
      phone: '+1 (555) 123-HELP',
      description: 'Direct emergency line',
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
            Get in{' '}
            <span className="bg-gradient-to-r from-[#A7D3F3] to-[#F7C6D3] bg-clip-text text-transparent">
              Touch
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            We're here to answer your questions and provide the care you need.
            Reach out to us anytime.
          </motion.p>
        </div>
      </motion.section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-gradient-to-br from-white to-[#F5EAD7]/20 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all text-center"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`bg-gradient-to-br ${info.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6`}
                >
                  <info.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {info.title}
                </h3>
                <div className="space-y-2">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600 text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#F5EAD7]/30 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Send Us a Message
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                Have a question or inquiry? Fill out the form below and we'll get
                back to you as soon as possible.
              </p>

              {!isSubmitted ? (
                <form
                  onSubmit={handleSubmit}
                  className="bg-white rounded-3xl p-8 shadow-xl"
                >
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#A7D3F3] focus:ring-2 focus:ring-[#A7D3F3]/20 outline-none transition-all"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
  <label className="block text-sm font-semibold text-gray-700 mb-2">
    Phone Number
  </label>
  <input
    type="tel"
    name="phone"
    value={formData.phone}
    onChange={handleChange}
    required
    className="w-full px-4 py-3 rounded-xl border border-gray-200
               focus:border-[#A7D3F3] focus:ring-2 focus:ring-[#A7D3F3]/20
               outline-none transition-all"
    placeholder="+91 98765 43210"
  />
</div>


                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#A7D3F3] focus:ring-2 focus:ring-[#A7D3F3]/20 outline-none transition-all"
                        placeholder="How can we help?"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#A7D3F3] focus:ring-2 focus:ring-[#A7D3F3]/20 outline-none transition-all resize-none"
                        placeholder="Tell us more about your inquiry..."
                      />
                    </div>

                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-gradient-to-r from-[#A7D3F3] to-[#F7C6D3] text-white py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center space-x-2"
                    >
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </motion.button>
                  </div>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white rounded-3xl p-12 shadow-xl text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                    className="bg-gradient-to-br from-[#A7D3F3] to-[#F7C6D3] w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    <CheckCircle className="w-12 h-12 text-white" />
                  </motion.div>
                  <h3 className="text-3xl font-bold text-gray-800 mb-4">
                    Message Sent!
                  </h3>
                  <p className="text-gray-600 text-lg">
                    Thank you for reaching out. We'll respond to your inquiry within
                    24 hours.
                  </p>
                </motion.div>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-4xl font-bold text-gray-800 mb-6">
                  Emergency Contact
                </h2>
                <p className="text-gray-600 text-lg mb-8">
                  For urgent medical emergencies, please use the numbers below:
                </p>
                <div className="space-y-4">
                  {emergencyContacts.map((contact, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.02 }}
                      className="bg-gradient-to-br from-red-50 to-red-100/50 rounded-2xl p-6 border-2 border-red-200"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="bg-red-500 p-3 rounded-xl flex-shrink-0">
                          <Ambulance className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-800 mb-1">
                            {contact.title}
                          </h3>
                          <p className="text-2xl font-bold text-red-600 mb-2">
                            {contact.phone}
                          </p>
                          <p className="text-sm text-gray-600">
                            {contact.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#F5EAD7]/50 to-white rounded-3xl p-8">
  <h3 className="text-2xl font-bold text-gray-800 mb-4">
    Hospital Location
  </h3>

  {/* GOOGLE MAP EMBED */}
  <div className="rounded-2xl overflow-hidden aspect-video mb-6 shadow-lg">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.3388662818693!2d73.06689187467084!3d19.311096444551016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bdb6c23e2777%3A0x179da9d8a75fcee6!2sDR.GANESH%20AHIRE%20MBBS%20MD%20MEDICINE%20%2C%20DR.AHMED%20KHAN%20MANAGING%20DIRECTOR%20-%20ALEXIS%20HOSPITAL%20%26%20CRITICAL%20CARE%20CENTRE!5e0!3m2!1sen!2sin!4v1766237546240!5m2!1sen!2sin"
      className="w-full h-full"
      style={{ border: 0 }}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Alexis Hospital Location"
    />
  </div>

  <p className="text-gray-600 mb-4">
    Located in the heart of the Medical District, easily accessible by
    car and public transportation.
  </p>

  {/* DIRECTIONS BUTTON */}
  <motion.a
    href="https://www.google.com/maps/dir/?api=1&destination=Alexis+Hospital+%26+Critical+Care+Centre"
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="
      inline-flex items-center justify-center
      bg-gradient-to-r from-[#A7D3F3] to-[#F7C6D3]
      text-white px-8 py-3 rounded-full
      font-semibold shadow-lg
    "
  >
    Get Directions
  </motion.a>
</div>


            </motion.div>
          </div>
        </div>
      </section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#A7D3F3] to-[#F7C6D3]"
      >
        <div className="max-w-4xl mx-auto text-center text-white">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-4"
          >
            We're Here to Help
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg"
          >
            Your health and well-being are our top priorities. Don't hesitate to
            reach out.
          </motion.p>
        </div>
      </motion.section>
    </div>
  );
}
