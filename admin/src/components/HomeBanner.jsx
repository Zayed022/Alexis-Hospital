import { useEffect, useState } from "react";

const API = "https://alexis-hospital.onrender.com/api/v1/homeBanner";

export default function HomeBanner() {
  const [banners, setBanners] = useState([]);
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [preview, setPreview] = useState(null);

  const [form, setForm] = useState({
    title: "",
    subtitle: "",
    ctaText: "",
    ctaLink: "",
    isActive: true,
    order: "",
    bannerImage: null,
  });

  /* ================= FETCH ================= */
  const fetchBanners = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${API}/admin`);
      const data = await res.json();
      if (data.success) setBanners(data.banners);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBanners();
  }, []);

  /* ================= HELPERS ================= */
  const resetForm = () => {
    setForm({
      title: "",
      subtitle: "",
      ctaText: "",
      ctaLink: "",
      isActive: true,
      order: "",
      bannerImage: null,
    });
    setEditingId(null);
    setPreview(null);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((p) => ({
      ...p,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setForm((p) => ({ ...p, bannerImage: file }));
    setPreview(URL.createObjectURL(file));
  };

  /* ================= SUBMIT ================= */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const fd = new FormData();
    Object.entries(form).forEach(([k, v]) => {
      if (v !== "" && v !== null) fd.append(k, v);
    });

    const res = await fetch(editingId ? `${API}/${editingId}` : API, {
      method: editingId ? "PUT" : "POST",
      body: fd,
    });

    const data = await res.json();
    if (data.success) {
      fetchBanners();
      resetForm();
    } else alert(data.message);

    setSubmitting(false);
  };

  /* ================= EDIT / DELETE ================= */
  const handleEdit = (b) => {
    setEditingId(b._id);
    setForm({
      title: b.title,
      subtitle: b.subtitle,
      ctaText: b.ctaText,
      ctaLink: b.ctaLink,
      isActive: b.isActive,
      order: b.order,
      bannerImage: null,
    });
    setPreview(b.bannerImage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = async (id) => {
    if (!confirm("Delete this banner permanently?")) return;
    await fetch(`${API}/${id}`, { method: "DELETE" });
    fetchBanners();
  };

  /* ================================================= */
  return (
    <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-10 space-y-10">
      {/* HEADER */}
      <div>
        <h1 className="text-xl sm:text-3xl font-semibold text-gray-800">
          Home Banner Management
        </h1>
        <p className="text-sm sm:text-base text-gray-500 mt-1">
          Manage hero banners displayed on the homepage
        </p>
      </div>

      {/* ================= FORM ================= */}
      <form
        onSubmit={handleSubmit}
        className="bg-white border rounded-2xl p-5 sm:p-6 shadow-sm space-y-6"
      >
        <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
          <h2 className="text-lg sm:text-xl font-medium">
            {editingId ? "Edit Banner" : "Create New Banner"}
          </h2>
          {editingId && (
            <span className="text-xs px-3 py-1 rounded-full bg-blue-50 text-blue-600 w-fit">
              Editing Mode
            </span>
          )}
        </div>

        {/* TEXT FIELDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            ["title", "Title"],
            ["subtitle", "Subtitle"],
            ["ctaText", "CTA Text"],
            ["ctaLink", "CTA Link"],
          ].map(([name, label]) => (
            <div key={name}>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {label}
              </label>
              <input
                name={name}
                value={form[name]}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-black/20"
              />
            </div>
          ))}
        </div>

        {/* SETTINGS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 items-end">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Display Order
            </label>
            <input
              type="number"
              name="order"
              value={form.order}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-black/20"
            />
          </div>

          <label className="flex items-center gap-2 mt-2 sm:mt-6">
            <input
              type="checkbox"
              name="isActive"
              checked={form.isActive}
              onChange={handleChange}
            />
            <span className="text-sm">Banner is Active</span>
          </label>
        </div>

        {/* IMAGE UPLOAD */}
        <div>
          <p className="text-sm font-medium text-gray-700 mb-1">
            Banner Image
          </p>
          <p className="text-xs text-gray-500 mb-2">
            Recommended size: 1600 × 600px
          </p>

          <label className="block border-2 border-dashed rounded-xl px-4 py-8 text-center text-sm text-gray-500 cursor-pointer hover:border-black hover:text-black">
            <input
              type="file"
              onChange={handleImageChange}
              className="hidden"
            />
            Click to upload banner image
          </label>

          {preview && (
            <img
              src={preview}
              className="mt-4 w-full sm:max-w-md h-48 object-cover rounded-xl border"
            />
          )}
        </div>

        {/* ACTIONS */}
        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <button
            disabled={submitting}
            className="bg-black text-white px-6 py-2 rounded-lg w-full sm:w-auto disabled:opacity-60"
          >
            {editingId ? "Update Banner" : "Create Banner"}
          </button>

          {editingId && (
            <button
              type="button"
              onClick={resetForm}
              className="border px-6 py-2 rounded-lg w-full sm:w-auto"
            >
              Cancel
            </button>
          )}
        </div>
      </form>

      {/* ================= LIST ================= */}
      <div>
        <h2 className="text-lg sm:text-xl font-semibold mb-4">
          Existing Banners
        </h2>

        {loading ? (
          <p>Loading banners…</p>
        ) : (
          <div className="grid gap-4">
            {banners.map((b) => (
              <div
                key={b._id}
                className="bg-white border rounded-xl p-4 flex flex-col lg:flex-row gap-4 items-start"
              >
                <img
                  src={b.bannerImage}
                  className="w-full sm:w-44 h-28 object-cover rounded-lg"
                />

                <div className="flex-1">
                  <p className="font-medium text-gray-800">{b.title}</p>
                  <p className="text-sm text-gray-500">
                    Order {b.order}
                  </p>
                </div>

                <span
                  className={`px-3 py-1 text-xs rounded-full ${
                    b.isActive
                      ? "bg-green-100 text-green-700"
                      : "bg-gray-100 text-gray-500"
                  }`}
                >
                  {b.isActive ? "Active" : "Inactive"}
                </span>

                <div className="flex gap-2 w-full lg:w-auto">
                  <button
                    onClick={() => handleEdit(b)}
                    className="border px-4 py-1 rounded flex-1 lg:flex-none"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(b._id)}
                    className="border px-4 py-1 rounded text-red-600 flex-1 lg:flex-none"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
