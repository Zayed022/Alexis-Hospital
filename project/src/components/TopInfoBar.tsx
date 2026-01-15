import { Phone, Mail, MapPin } from "lucide-react";
import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";
import { ReactNode } from "react";

interface SocialIconProps {
  href: string;
  children: ReactNode;
}

export default function TopInfoBar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-[#0080ff] text-white text-xs sm:text-sm">

      {/* DESKTOP / TABLET BAR */}
      <div className="max-w-7xl mx-auto px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 flex items-center justify-between">

        {/* LEFT INFO */}
        <div className="hidden md:flex items-center gap-4 lg:gap-6">
          <InfoItem
            icon={<Phone size={14} className="sm:w-4 sm:h-4 md:w-[16px] md:h-[16px]" />}
            href="tel:+919699933358"
          >
            <span className="whitespace-nowrap">+91 9699933358</span>
          </InfoItem>

          <div className="hidden lg:block">
            <InfoItem
              icon={<Mail size={14} className="sm:w-4 sm:h-4 md:w-[16px] md:h-[16px]" />}
              href="mailto:alexishospitalbhiwandi@gmail.com"
            >
              <span className="whitespace-nowrap">
                alexishospitalbhiwandi@gmail.com
              </span>
            </InfoItem>
          </div>

          <div className="hidden xl:block">
            <InfoItem
              icon={<MapPin size={14} className="sm:w-4 sm:h-4 md:w-[16px] md:h-[16px]" />}
              href="https://maps.google.com"
              external
            >
              <span className="whitespace-nowrap">Get Location</span>
            </InfoItem>
          </div>
        </div>

        {/* MOBILE INFO */}
        <div className="flex md:hidden items-center gap-2 sm:gap-3">
          <a
            href="tel:+919699933358"
            className="flex items-center gap-1 hover:text-[#E6F0FA] transition text-xs sm:text-sm"
          >
            <Phone size={12} />
            <span className="hidden sm:inline">Call</span>
          </a>

          <span className="text-white/40">|</span>

          <a
            href="mailto:alexishospitalbhiwandi@gmail.com"
            className="flex items-center gap-1 hover:text-[#E6F0FA] transition text-xs sm:text-sm"
          >
            <Mail size={12} />
            <span className="hidden sm:inline">Email</span>
          </a>
        </div>

        {/* RIGHT ACTIONS */}
        <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3 ml-auto">

          {/* SOCIAL ICONS */}
          <div className="flex items-center gap-1 sm:gap-2">
            <SocialIcon href="https://www.instagram.com/renewplusbhiwandi/">
              <FaInstagram className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
            </SocialIcon>

            <SocialIcon href="#">
              <FaFacebookF className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
            </SocialIcon>

            <SocialIcon href="#">
              <FaYoutube className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
            </SocialIcon>
          </div>

          {/* TABLET LOCATION */}
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex md:hidden items-center gap-1 hover:text-[#E6F0FA] transition text-xs sm:text-sm ml-1 sm:ml-2"
          >
            <MapPin size={12} />
            <span>Location</span>
          </a>

          {/* DESKTOP LOCATION */}
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden xl:flex items-center gap-2 hover:text-[#E6F0FA] transition text-sm ml-2"
          >
            <MapPin size={14} />
            <span>Get Location</span>
          </a>
        </div>
      </div>

      {/* MOBILE QUICK ACTION BAR */}
      <div className="md:hidden border-t border-white/20 bg-[#0D4E92] px-3 py-1.5 flex justify-around">
        <MobileAction
          href="tel:+919028111592"
          icon={<Phone size={12} />}
        >
          <span className="text-xs">Call Now</span>
        </MobileAction>

        <MobileAction
          href="mailto:alexishospitalbhiwandi@gmail.com"
          icon={<Mail size={12} />}
        >
          <span className="text-xs">Email Us</span>
        </MobileAction>

        <MobileAction
          href="https://maps.google.com"
          icon={<MapPin size={12} />}
        >
          <span className="text-xs">Directions</span>
        </MobileAction>
      </div>
    </div>
  );
}

/* ================= SUB COMPONENTS ================= */

function InfoItem({
  icon,
  href,
  children,
  external = false,
}: {
  icon: ReactNode;
  href: string;
  children: ReactNode;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="flex items-center gap-1.5 sm:gap-2 hover:text-[#E6F0FA] transition"
    >
      {icon}
      <span className="text-xs sm:text-sm">{children}</span>
    </a>
  );
}

function MobileAction({
  href,
  icon,
  children,
}: {
  href: string;
  icon: ReactNode;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      className="flex flex-col items-center gap-0.5 text-white hover:text-[#E6F0FA] transition w-full"
    >
      <div className="w-5 h-5 flex items-center justify-center">
        {icon}
      </div>
      {children}
    </a>
  );
}

function SocialIcon({ href, children }: SocialIconProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="
        w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8
        flex items-center justify-center
        rounded-full
        bg-white/15
        text-white
        hover:bg-white/25
        transition
      "
    >
      {children}
    </a>
  );
}
