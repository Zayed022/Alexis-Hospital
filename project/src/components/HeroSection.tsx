import { useEffect, useState } from "react";

const heroBackgrounds = [
  "/hospital-bg1.jpeg",
  "/hospital-bg2.jpeg",
  "/hospital-bg3.jpeg",
];

interface Doctor {
    name: string;
    details: string;
    className?: string;
  }
  

export default function HeroSection() {
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % heroBackgrounds.length);
    }, 6000); // change every 6 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-20 md:pt-20 lg:pt-16 pb-24 bg-white overflow-hidden">

      {/* ================= Background Slideshow ================= */}
      <div className="absolute inset-0 z-0">
        {heroBackgrounds.map((img, index) => (
          <div
            key={img}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentBg ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={img}
              alt=""
              className="w-full h-full object-cover"
            />
            {/* Overlay for readability */}
            <div className="absolute inset-0 bg-white/80" />
          </div>
        ))}
      </div>

      {/* ================= Foreground Content ================= */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 text-center">

        {/* Logo */}
        <div className="flex justify-center mb-4 md:mb-10">
          <img
            src="/logo.png"
            alt="Alexis Hospital Logo"
            className="w-36 h-36 md:w-52 md:h-52 object-contain"
          />
        </div>

        {/* Hospital Name */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-wide">
          <span className="bg-gradient-to-r from-[#0095ff] to-[#ff7197] bg-clip-text text-transparent">
            ALEXIS HOSPITAL
          </span>
        </h1>

        <p className="mt-2 text-base sm:text-lg md:text-xl font-semibold text-gray-700 uppercase tracking-[0.25em]">
          & Critical Care Centre
        </p>

        {/* Divider */}
        <div className="mt-6 flex flex-col items-center gap-3">
          <span className="w-24 h-[2px] bg-gradient-to-r from-[#0095ff] to-[#ff7197] rounded-full" />
          <p className="text-sm md:text-base text-gray-600 font-medium">
            Compassionate Care • Advanced Treatment • Trusted Expertise
          </p>
        </div>

        {/* ================= Doctors ================= */}
        <div className="relative w-full mt-10 md:mt-20">

          {/* Mobile */}
          <div className="flex flex-col gap-8 md:hidden">
            <Doctor
              name="Dr. Ahmed Khan"
              details="(Managing Director) • 24 Hours Emergency"
            />
            <Doctor
              name="Dr. Ganesh Ahire"
              details="M.B.B.S., M.D. (Medicine) • OPD 12–2 & 5–7"
            />
            <Doctor
              name="Dr. Saman Ahmed Khan"
              details="Consultant Cosmetologist • Aesthetic Medicine"
            />
          </div>

          {/* Desktop */}
          <div className="hidden md:block relative h-[320px] lg:h-[360px]">

            <Doctor
              name="Dr. Ahmed Khan"
              details="(Managing Director)"
              className="absolute left-8 lg:left-12 top-0 text-left"
            />

            <Doctor
              name="Dr. Ganesh Ahire"
              details="M.B.B.S., M.D. (Medicine) • OPD 12–2 & 5–7 • 24×7 Emergency"
              className="absolute left-1/2 -translate-x-1/2 top-0 text-center max-w-sm"
            />

            <Doctor
              name="Dr. Saman Ahmed Khan"
              details="Consultant Cosmetologist • Aesthetic Medicine"
              className="absolute right-8 lg:right-12 top-0 text-left max-w-sm"
            />

          </div>
        </div>
      </div>
    </section>
  );
}

/* ================= Doctor Component ================= */
function Doctor({ name, details, className = "" }) {
  return (
    <div className={className}>
      <h3 className="font-bold text-lg md:text-xl bg-gradient-to-r from-[#0095ff] to-[#ff7197] bg-clip-text text-transparent">
        {name}
      </h3>
      <p className="mt-1 text-sm md:text-base text-gray-700 leading-relaxed">
        {details}
      </p>
    </div>
  );
}
