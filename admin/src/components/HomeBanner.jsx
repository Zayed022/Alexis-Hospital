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

  /* -------------------- Fetch All Banners -------------------- */
  const fetchBanners = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${API}/admin`);
      const data = await res.json();
      if (data.success) setBanners(data.banners);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBanners();
  }, []);

  /* -------------------- Form Handling -------------------- */
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
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setForm((prev) => ({ ...prev, bannerImage: file }));
      setPreview(URL.createObjectURL(file));
    }
  };

  /* -------------------- Create / Update -------------------- */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const fd = new FormData();
    Object.entries(form).forEach(([key, value]) => {
      if (value !== "" && value !== null) fd.append(key, value);
    });

    try {
      const res = await fetch(
        editingId ? `${API}/${editingId}` : API,
        {
          method: editingId ? "PUT" : "POST",
          body: fd,
        }
      );

      const data = await res.json();
      if (data.success) {
        fetchBanners();
        resetForm();
      } else {
        alert(data.message || "Operation failed");
      }
    } catch (err) {
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  /* -------------------- Edit -------------------- */
  const handleEdit = (banner) => {
    setEditingId(banner._id);
    setForm({
      title: banner.title || "",
      subtitle: banner.subtitle || "",
      ctaText: banner.ctaText || "",
      ctaLink: banner.ctaLink || "",
      isActive: banner.isActive,
      order: banner.order || "",
      bannerImage: null,
    });
    setPreview(banner.bannerImage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  /* -------------------- Delete -------------------- */
  const handleDelete = async (id) => {
    if (!confirm("Delete this banner permanently?")) return;
    try {
      await fetch(`${API}/${id}`, { method: "DELETE" });
      fetchBanners();
    } catch (err) {
      console.error(err);
    }
  };

  /* ========================================================== */
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-2xl font-semibold mb-6">
        Home Banner Management
      </h1>

      {/* ===================== Form ===================== */}
      <form
        onSubmit={handleSubmit}
        className="bg-white border rounded-lg p-6 grid grid-cols-1 md:grid-cols-2 gap-4 shadow-sm"
      >
        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Title"
          className="input"
        />
        <input
          name="subtitle"
          value={form.subtitle}
          onChange={handleChange}
          placeholder="Subtitle"
          className="input"
        />
        <input
          name="ctaText"
          value={form.ctaText}
          onChange={handleChange}
          placeholder="CTA Text"
          className="input"
        />
        <input
          name="ctaLink"
          value={form.ctaLink}
          onChange={handleChange}
          placeholder="CTA Link"
          className="input"
        />
        <input
          type="number"
          name="order"
          value={form.order}
          onChange={handleChange}
          placeholder="Display Order"
          className="input"
        />

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            name="isActive"
            checked={form.isActive}
            onChange={handleChange}
          />
          Active
        </label>

        <input type="file" onChange={handleImageChange} />

        {preview && (
          <img
            src={preview}
            alt="preview"
            className="h-32 rounded object-cover border"
          />
        )}

        <div className="md:col-span-2 flex gap-3">
          <button
            disabled={submitting}
            className="bg-black text-white px-6 py-2 rounded"
          >
            {editingId ? "Update Banner" : "Create Banner"}
          </button>

          {editingId && (
            <button
              type="button"
              onClick={resetForm}
              className="border px-6 py-2 rounded"
            >
              Cancel
            </button>
          )}
        </div>
      </form>

      {/* ===================== List ===================== */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-4">All Banners</h2>

        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="grid gap-4">
            {banners.map((b) => (
              <div
                key={b._id}
                className="border rounded-lg p-4 flex flex-col md:flex-row gap-4 items-start md:items-center"
              >
                <img
                  src={b.bannerImage}
                  className="w-40 h-24 object-cover rounded"
                />

                <div className="flex-1">
                  <p className="font-medium">{b.title}</p>
                  <p className="text-sm text-gray-500">
                    Order: {b.order} | {b.isActive ? "Active" : "Inactive"}
                  </p>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit(b)}
                    className="px-4 py-1 border rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(b._id)}
                    className="px-4 py-1 border text-red-600 rounded"
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

/* ===================== Tailwind Helpers ===================== */
/* Add to global CSS if needed:
.input {
  @apply border rounded px-3 py-2 w-full;
}
*/
