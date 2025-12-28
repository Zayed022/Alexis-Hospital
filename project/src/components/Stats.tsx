import { Stethoscope, Users, Smile } from "lucide-react";

const stats = [
  {
    value: "7+",
    label: "Years Of Experience",
    icon: Stethoscope,
  },
  {
    value: "5K+",
    label: "Patients Treated",
    icon: Users,
  },
  {
    value: "95%",
    label: "Happy Patients",
    icon: Smile,
  },
];

export default function Stats() {
  return (
    <section className="relative w-full py-16 md:py-20 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1580281657521-6f0c5b11d6b9?auto=format&fit=crop&w=1600&q=80')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-white text-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-4"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-lg">
                <stat.icon className="w-8 h-8 text-lime-500" />
              </div>

              {/* Value */}
              <p className="text-4xl font-bold tracking-tight">
                {stat.value}
              </p>

              {/* Label */}
              <p className="text-sm md:text-base text-gray-200">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
