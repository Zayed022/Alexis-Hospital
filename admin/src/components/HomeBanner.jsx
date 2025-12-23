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

  /* ================= Fetch ================= */
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

  /* ================= Helpers ================= */
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

  /* ================= Submit ================= */
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
    } else {
      alert(data.message);
    }

    setSubmitting(false);
  };

  /* ================= Edit / Delete ================= */
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
    <div className="max-w-7xl mx-auto p-6 space-y-10">
      {/* ================= HEADER ================= */}
      <div>
        <h1 className="text-3xl font-semibold">Home Banner Management</h1>
        <p className="text-gray-500 mt-1">
          Manage hero banners displayed on the homepage.
        </p>
      </div>

      {/* ================= FORM CARD ================= */}
      <div className="bg-white border rounded-2xl shadow-sm p-6">
        <div className="flex justify-between mb-4">
          <h2 className="text-xl font-medium">
            {editingId ? "Edit Banner" : "Create New Banner"}
          </h2>
          {editingId && (
            <span className="text-sm text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
              Editing Mode
            </span>
          )}
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Text Section */}
          <div className="grid md:grid-cols-2 gap-4">
            <Input label="Title" name="title" value={form.title} onChange={handleChange} />
            <Input label="Subtitle" name="subtitle" value={form.subtitle} onChange={handleChange} />
            <Input label="CTA Text" name="ctaText" value={form.ctaText} onChange={handleChange} />
            <Input label="CTA Link" name="ctaLink" value={form.ctaLink} onChange={handleChange} />
          </div>

          {/* Settings */}
          <div className="grid md:grid-cols-3 gap-4 items-end">
            <Input label="Display Order" type="number" name="order" value={form.order} onChange={handleChange} />
            <label className="flex items-center gap-2 mt-6">
              <input type="checkbox" name="isActive" checked={form.isActive} onChange={handleChange} />
              <span className="text-sm">Banner is Active</span>
            </label>
          </div>

          {/* Image Upload */}
          <div>
            <p className="font-medium mb-1">Banner Image</p>
            <p className="text-sm text-gray-500 mb-2">
              Recommended size: 1600×600px
            </p>
            <input type="file" onChange={handleImageChange} />
            {preview && (
              <img
                src={preview}
                className="mt-4 w-full max-w-md h-40 object-cover rounded-xl border"
              />
            )}
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-4">
            <button
              disabled={submitting}
              className="bg-black text-white px-6 py-2 rounded-lg"
            >
              {editingId ? "Update Banner" : "Create Banner"}
            </button>

            {editingId && (
              <button
                type="button"
                onClick={resetForm}
                className="border px-6 py-2 rounded-lg"
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>

      {/* ================= LIST ================= */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Existing Banners</h2>

        {loading ? (
          <p>Loading banners…</p>
        ) : (
          <div className="grid gap-4">
            {banners.map((b) => (
              <div
                key={b._id}
                className="bg-white border rounded-xl p-4 flex gap-4 items-center"
              >
                <img
                  src={b.bannerImage}
                  className="w-44 h-24 object-cover rounded-lg"
                />

                <div className="flex-1">
                  <p className="font-medium">{b.title}</p>
                  <p className="text-sm text-gray-500">
                    Order {b.order}
                  </p>
                </div>

                <span
                  className={`px-3 py-1 text-sm rounded-full ${
                    b.isActive
                      ? "bg-green-100 text-green-700"
                      : "bg-gray-100 text-gray-500"
                  }`}
                >
                  {b.isActive ? "Active" : "Inactive"}
                </span>

                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit(b)}
                    className="border px-4 py-1 rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(b._id)}
                    className="border px-4 py-1 rounded text-red-600"
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

/* ================= UI Helpers ================= */
function Input({ label, ...props }) {
  return (
    <div>
      <label className="text-sm font-medium">{label}</label>
      <input {...props} className="input mt-1" />
    </div>
  );
}

/* Global CSS:
.input {
  @apply border rounded-lg px-3 py-2 w-full;
}
*/
