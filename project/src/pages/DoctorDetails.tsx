import { useParams } from "react-router-dom";
import { doctors } from "../data/doctors";
import { CheckCircle } from "lucide-react";
import { Helmet } from "react-helmet-async";

export default function DoctorDetails() {
  const { slug } = useParams();
  const doctor = doctors.find((d) => d.slug === slug);

  if (!doctor) {
    return <div className="text-center py-20">Doctor not found</div>;
  }

  const pageUrl = `https://alexishospitalbhiwandi.com/doctors/${doctor.slug}`;

  return (
    <>
      {/* ================= SEO ================= */}
      <Helmet>
        <title>
          {doctor.name} | {doctor.title} in Bhiwandi | Alexis Hospital
        </title>

        <meta
          name="description"
          content={`${doctor.name} is a senior ${doctor.title} at Alexis Hospital, Bhiwandi, with ${doctor.experience}. Book consultation for expert medical care.`}
        />

<meta property="og:type" content="profile" />
<meta property="og:title" content={`${doctor.name} | Alexis Hospital Bhiwandi`} />
<meta
  property="og:description"
  content={`${doctor.name} is a specialist doctor at Alexis Hospital Bhiwandi. Book appointment for expert consultation.`}
/>
<meta property="og:url" content={pageUrl} />
<meta property="og:image" content={`https://alexishospitalbhiwandi.com${doctor.image}`} />


        <link rel="canonical" href={pageUrl} />

        {/* PHYSICIAN SCHEMA */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Physician",
            "@id": pageUrl,
            "name": doctor.name,
            "image": "https://alexishospitalbhiwandi.com" + doctor.image,
            "medicalSpecialty": doctor.title,
            "worksFor": {
              "@type": "Hospital",
              "name": "Alexis Hospital",
              "url": "https://alexishospitalbhiwandi.com",
            },
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Bhiwandi",
              "addressRegion": "Maharashtra",
              "addressCountry": "IN",
            },
            
          })}
        </script>
      </Helmet>

      {/* ================= PAGE CONTENT ================= */}
      <section className="bg-[#fffdf5] py-16 mt-16">
        <div className="max-w-7xl mx-auto px-4">

          {/* ================= TOP SECTION ================= */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">

            {/* IMAGE */}
            <div className="flex justify-center">
              <div className="bg-white rounded-3xl shadow-lg p-6 max-w-md w-full">
                <img
                  src={doctor.image}
                  alt={`${doctor.name} - ${doctor.title} in Bhiwandi`}
                  loading="lazy"
                  className="w-full h-[420px] object-contain rounded-2xl"
                />
              </div>
            </div>

            {/* INFO */}
            <div>
              <h1 className="text-4xl font-bold text-[#0f5aa7] mb-4">
                {doctor.name}
              </h1>

              <p className="font-semibold mb-4">
                {doctor.title}
              </p>

              {doctor.qualifications.map((q, i) => (
                <p key={i} className="text-gray-700 mb-1">
                  • {q}
                </p>
              ))}
            </div>
          </div>

          {/* ================= DESCRIPTION ================= */}
          <div className="space-y-6 mb-16 max-w-5xl">
            {doctor.description.map((para, i) => (
              <p key={i} className="text-gray-700 leading-relaxed">
                {para}
              </p>
            ))}
          </div>

          {/* ================= INFO GRID ================= */}
          <div className="grid md:grid-cols-2 gap-10">
            <InfoBox title="Areas of Expertise" items={doctor.expertise} />
            <InfoBox title="Professional Experience" items={doctor.experienceDetails} />
            <InfoBox title="Academic & Clinical Background" items={doctor.qualifications} />
            <InfoBox title="Memberships" items={doctor.memberships} />
          </div>
        </div>
      </section>
    </>
  );
}

function InfoBox({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="bg-white border border-lime-300 rounded-2xl p-8 shadow-sm">
      <h2 className="text-2xl font-bold text-[#0f5aa7] mb-6">
        {title}
      </h2>

      <ul className="space-y-3">
        {items.map((item, i) => (
          <li key={i} className="flex gap-2 text-gray-700">
            <CheckCircle className="text-lime-500 w-5 h-5 mt-1" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
