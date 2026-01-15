import { motion } from 'framer-motion';
import { useState } from 'react';
import { Calendar, Clock, User, Mail, Phone, FileText, CheckCircle } from 'lucide-react';

export default function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    message: '',
  });
  

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const WHATSAPP_NUMBER = "919699933358"; 
// 👆 replace with CLIENT’S official WhatsApp number (country code required)

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  const message = `
📅 *New Appointment Request*

👤 Name: ${formData.name}
📞 Phone: ${formData.phone}
🩺 Service: ${formData.service}
📆 Date: ${formData.date}
⏰ Time: ${formData.time}

📝 Notes:
${formData.message || "No additional notes"}
  `;

  const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    message
  )}`;

  window.open(whatsappURL, "_blank");

  setIsSubmitted(true);
};


  const services = [
  // ===== GENERAL =====
  "General Health Checkup",
  "Specialist Consultation",
  "Emergency Care",
  "Diagnostic Services",

  // ===== SKIN =====
  "Skin – Hydra Facial",
  "Skin – Medi Facial",
  "Skin – Vampire Facial",
  "Skin – Hollywood Facial",
  "Skin – Glass Glow Facial",
  "Skin – Acne Treatment",
  "Skin – Pigmentation Treatment",
  "Skin – Anti-Aging Treatment",
  "Skin – Chemical Peel",
  "Skin – Under-Eye Treatment",
  "Skin – Lip Pigmentation Treatment",
  "Skin – Tattoo Removal",
  "Skin – Skin Tag / Mole Removal",

  // ===== HAIR =====
  "Hair – Hair Fall Treatment",
  "Hair – Dandruff Treatment",
  "Hair – Hair Rejuvenation",
  "Hair – PRP / GFC Treatment",
  "Hair – Hair Mesotherapy",
  "Hair – Hair Transplant",

  // ===== LASER =====
  "Laser – Upper Lip",
  "Laser – Chin",
  "Laser – Full Face",
  "Laser – Underarms",
  "Laser – Full Arms",
  "Laser – Full Legs",
  "Laser – Full Body",

  // ===== PRE-WEDDING =====
  "Pre-Wedding – Body Polishing",
  "Pre-Wedding – BB Glow",
  "Pre-Wedding – Glow Therapy",
];


  const timeSlots = [
    '09:00 AM',
    '10:00 AM',
    '11:00 AM',
    '12:00 PM',
    '02:00 PM',
    '03:00 PM',
    '04:00 PM',
    '05:00 PM',
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
            Book Your{' '}
            <span className="bg-gradient-to-r from-[#0095ff] to-[#ff7197] bg-clip-text text-transparent">
              Appointment
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Schedule your visit with our expert team. We're here to provide you with
            exceptional care and personalized attention.
          </motion.p>
        </div>
      </motion.section>

      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Why Book With Us?
              </h2>
              <div className="space-y-6">
                {[
                  {
                    icon: Calendar,
                    title: 'Flexible Scheduling',
                    description: 'Choose from available time slots that fit your schedule',
                  },
                  {
                    icon: User,
                    title: 'Expert Professionals',
                    description: 'Consultations with experienced doctors and specialists',
                  },
                  {
                    icon: Clock,
                    title: 'Minimal Wait Time',
                    description: 'Punctual appointments with respect for your time',
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="bg-gradient-to-br from-[#0095ff] to-[#ff7197] p-3 rounded-xl flex-shrink-0">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-12 bg-gradient-to-br from-[#F5EAD7]/50 to-[#F5EAD7]/30 rounded-3xl p-8"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Need Immediate Assistance?
                </h3>
                <p className="text-gray-600 mb-4">
                  For urgent medical matters or immediate booking assistance, please
                  contact us directly.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-[#A7D3F3]" />
                    <span className="text-gray-700">+91 9699933358</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-[#F7C6D3]" />
                    <span className="text-gray-700">appointments@alexishospital.com</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {!isSubmitted ? (
                <form
                  onSubmit={handleSubmit}
                  className="bg-gradient-to-br from-white to-[#F5EAD7]/10 rounded-3xl p-8 shadow-xl border border-gray-100"
                >
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">
                    Appointment Details
                  </h2>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name
                      </label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-[#A7D3F3] focus:ring-2 focus:ring-[#A7D3F3]/20 outline-none transition-all"
                          placeholder="John Doe"
                        />
                      </div>
                    </div>

                    
                    

                    <div>
  <label className="block text-sm font-semibold text-gray-700 mb-2">
    Phone Number
  </label>
  <div className="relative">
    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
    <input
      type="tel"
      name="phone"
      value={formData.phone}
      onChange={handleChange}
      required
      className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200
                 focus:border-[#A7D3F3] focus:ring-2 focus:ring-[#A7D3F3]/20
                 outline-none transition-all"
      placeholder="+91 98765 43210"
    />
  </div>
</div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Service Type
                      </label>
                      <div className="relative">
                        <FileText className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          required
                          className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-[#A7D3F3] focus:ring-2 focus:ring-[#A7D3F3]/20 outline-none transition-all appearance-none"
                        >
                          <option value="">Select a service</option>
                          {services.map((service) => (
                            <option key={service} value={service}>
                              {service}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Preferred Date
                        </label>
                        <div className="relative">
                          <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            required
                            min={new Date().toISOString().split('T')[0]}
                            className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-[#A7D3F3] focus:ring-2 focus:ring-[#A7D3F3]/20 outline-none transition-all"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Preferred Time
                        </label>
                        <div className="relative">
                          <Clock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <select
                            name="time"
                            value={formData.time}
                            onChange={handleChange}
                            required
                            className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-[#A7D3F3] focus:ring-2 focus:ring-[#A7D3F3]/20 outline-none transition-all appearance-none"
                          >
                            <option value="">Select time</option>
                            {timeSlots.map((slot) => (
                              <option key={slot} value={slot}>
                                {slot}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Additional Notes (Optional)
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#A7D3F3] focus:ring-2 focus:ring-[#A7D3F3]/20 outline-none transition-all resize-none"
                        placeholder="Any specific concerns or requirements..."
                      />
                    </div>

                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-gradient-to-r from-[#0095ff] to-[#ff7197] text-white py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
                    >
                      Confirm Appointment
                    </motion.button>
                  </div>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-gradient-to-br from-white to-[#F5EAD7]/10 rounded-3xl p-12 shadow-xl border border-gray-100 text-center"
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
  Appointment Sent Successfully!
</h3>

<p className="text-gray-600 text-lg mb-6">
  Your appointment request has been sent directly to our WhatsApp.
  Our team will contact you shortly to confirm.
</p>

<p className="text-gray-500 text-sm">
  Please keep WhatsApp available on your phone.
</p>

                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
