import {
    Phone,
    Mail,
    MapPin,
  } from "lucide-react";
  import {
    FaInstagram,
    FaFacebookF,
    FaYoutube,
  } from "react-icons/fa";

  import { ReactNode } from "react";

interface SocialIconProps {
  href: string;
  color: string;
  children: ReactNode;
}
  
  export default function TopInfoBar() {
    return (
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#0f5aa7] text-white text-sm">

        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between gap-4">
  
          {/* LEFT INFO */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <a
                href="tel:+919028111592"
                className="hover:underline"
              >
                +91 90281 11592
              </a>
            </div>
  
            <div className="flex items-center gap-2">
              <Mail size={16} />
              <a
                href="mailto:ganeshahirea1@gmail.com"
                className="hover:underline"
              >
                alexishospitalbhiwandi@gmail.com
              </a>
            </div>
  
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Get Location
              </a>
            </div>
          </div>
  
          {/* RIGHT ACTIONS */}
          <div className="flex items-center gap-3 ml-auto">
  
            {/* SOCIALS */}
            <div className="hidden sm:flex items-center gap-2">
              <SocialIcon href="#" color="bg-pink-500">
                <FaInstagram />
              </SocialIcon>
              <SocialIcon href="#" color="bg-blue-600">
                <FaFacebookF />
              </SocialIcon>
              <SocialIcon href="#" color="bg-red-600">
                <FaYoutube />
              </SocialIcon>
            </div>
  
            {/* CTA */}
            <a
              href="/contact"
              className="bg-lime-500 hover:bg-lime-600 text-black font-medium px-4 py-1.5 rounded-md transition"
            >
              Book Appointment
            </a>
          </div>
        </div>
  
        {/* MOBILE INFO */}
        <div className="md:hidden border-t border-white/20 px-4 py-2 flex justify-center gap-6 text-xs">
          <a href="tel:+919028111592" className="flex items-center gap-1">
            <Phone size={14} /> Call
          </a>
          <a href="mailto:ganeshahirea1@gmail.com" className="flex items-center gap-1">
            <Mail size={14} /> Email
          </a>
          <a href="https://maps.google.com" className="flex items-center gap-1">
            <MapPin size={14} /> Location
          </a>
        </div>
      </div>
    );
  }
  
  /* ================= SUB COMPONENT ================= */
  function SocialIcon({ href, color, children }: SocialIconProps) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`w-8 h-8 flex items-center justify-center rounded ${color} text-white hover:opacity-90 transition`}
      >
        {children}
      </a>
    );
  }
  
  