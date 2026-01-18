import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";

// LOGOS
import hospitalLogo from "../assets/logo-hospital.png";
import cosmoLogo from "../assets/logo-cosmo.png";

const servicesDropdown = [
  "Diabetes Management",
  "Cardiology & Echocardiography",
  "Internal Medicine",
  "Critical Care",
  "Infectious Diseases",
  "Respiratory Care",
  "Nephrology",
  "Endocrine Disorders",
  "Gastrointestinal Disorders",
  "Neurology",
  "Immunology & Rheumatology",
  "Patient Education",
];

export default function Navbar() {
  const location = useLocation();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Cosmetology", path: "/services/cosmetology" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav
      className="
        font-body
        fixed
        mt-10
        md:mt-0
        top-10
        left-0
        right-0
        z-40
        bg-white/95
        backdrop-blur
        shadow-sm
      "
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* HEADER */}
        <div className="h-20 flex items-center justify-between">
          {/* LOGOS */}
          <div className="flex items-center gap-6">
            <Link to="/">
              <img
                src={hospitalLogo}
                alt="Alexis Hospital"
                className="h-11 w-auto object-contain"
              />
            </Link>

            <div className="h-8 w-px bg-gray-300" />

            <Link to="/services/cosmetology">
              <img
                src={cosmoLogo}
                alt="Alexis Cosmetology"
                className="h-10 w-auto object-contain"
              />
            </Link>
          </div>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
              link.name === "Services" ? (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => setDesktopServicesOpen(true)}
                  onMouseLeave={() => setDesktopServicesOpen(false)}
                >
                  <button className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-[#0f5aa7]">
                    Services <ChevronDown size={14} />
                  </button>

                  <AnimatePresence>
                    {desktopServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full mt-4 left-0 w-[640px] max-w-[90vw]
                        bg-[#125ca5] text-white rounded-xl shadow-xl p-6"
                      >
                        <div className="grid grid-cols-2 gap-3 text-sm">
                          {servicesDropdown.map((item) => (
                            <Link
                              key={item}
                              to="/services"
                              className="hover:text-lime-300"
                            >
                              {item}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium ${
                    isActive(link.path)
                      ? "text-[#A7D3F3]"
                      : "text-gray-700 hover:text-[#0f5aa7]"
                  }`}
                >
                  {link.name}
                </Link>
              )
            )}

            <Link to="/booking">
              <button className="bg-gradient-to-r from-[#0095ff] to-[#ff7197] text-white px-5 py-2 rounded-full text-sm font-medium">
                Book Appointment
              </button>
            </Link>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "calc(100vh - 120px)", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden overflow-y-auto pb-24"
            >
              {navLinks.map((link) =>
                link.name === "Services" ? (
                  <div key={link.name}>
                    <button
                      onClick={() =>
                        setMobileServicesOpen(!mobileServicesOpen)
                      }
                      className="w-full flex justify-between px-4 py-3 text-gray-700"
                    >
                      Services <ChevronDown size={16} />
                    </button>

                    {mobileServicesOpen && (
                      <div className="pl-6 space-y-2 text-sm">
                        {servicesDropdown.map((item) => (
                          <Link
                            key={item}
                            to="/services"
                            onClick={() => setMobileOpen(false)}
                            className="block text-gray-600"
                          >
                            {item}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-3 text-gray-700"
                  >
                    {link.name}
                  </Link>
                )
              )}

              {/* MOBILE BOOK APPOINTMENT */}
              <div className="px-4 mt-6">
                <Link to="/booking" onClick={() => setMobileOpen(false)}>
                  <button className="w-full bg-gradient-to-r from-[#0095ff] to-[#ff7197] text-white py-3 rounded-full text-sm font-semibold">
                    Book Appointment
                  </button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
