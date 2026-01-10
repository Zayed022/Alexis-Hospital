import React from "react";
import { useNavigate } from "react-router-dom";

const actions = [
  { title: "Home Banner", path: "/homeBanner" },
  { title: "Service Banner", path: "/serviceBanner" },
  { title: "Before After Cases", path: "/beforeAfter" },
  { title: "Service Cards", path: "/serviceCards" },
  { title: "CTA Image", path: "/ctaImage" },
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-10 space-y-8">
      {/* ================= HEADER ================= */}
      <div>
        <h1 className="text-xl sm:text-3xl lg:text-4xl font-semibold text-gray-800">
          Alexis Hospital Admin
        </h1>
        <p className="text-sm sm:text-base text-gray-500 mt-1">
          Manage website banners, services, and content sections
        </p>
      </div>

      {/* ================= DASHBOARD GRID ================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {actions.map((action, index) => (
          <button
            key={index}
            onClick={() => navigate(action.path)}
            className="group text-left bg-white border rounded-2xl p-5 sm:p-6 shadow-sm
                       hover:shadow-lg hover:border-gray-300
                       active:scale-[0.98] transition-all"
          >
            {/* INDEX BADGE */}
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-medium text-gray-400 group-hover:text-indigo-500">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-500 group-hover:bg-indigo-50 group-hover:text-indigo-600">
                Manage
              </span>
            </div>

            {/* TITLE */}
            <h3 className="text-base sm:text-lg font-medium text-gray-800 group-hover:text-indigo-600 transition-colors">
              {action.title}
            </h3>

            {/* SUBTEXT */}
            <p className="text-sm text-gray-500 mt-1">
              Configure and update {action.title.toLowerCase()}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Home;
