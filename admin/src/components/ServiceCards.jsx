import { useEffect, useState } from "react";

const API = "https://alexis-hospital.onrender.com/api/v1/serviceDetails";

export default function ServiceCards() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [imagePreview, setImagePreview] = useState([]);

  const [form, setForm] = useState({
    title: "",
    shortDescription: "",
    longDescription: "",
    checklist: [""],
    highlights: [""],
    priceRange: "",
    duration: "",
    category: "Medical",
    slug: "",
    order: "",
    images: [],
  });

  /* ================= FETCH ================= */
  const fetchServices = async () => {
    setLoading(true);
    try {
      const res = await fetch(API);
      const data = await res.json();
      if (data.success) setServices(data.services);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  /* ================= HELPERS ================= */
  const resetForm = () => {
    setForm({
      title: "",
      shortDescription: "",
      longDescription: "",
      checklist: [""],
      highlights: [""],
      priceRange: "",
      duration: "",
      category: "Medical",
      slug: "",
      order: "",
      images: [],
    });
    setEditingId(null);
    setImagePreview([]);
  };

  const handleChange = (e) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleArrayChange = (key, index, value) => {
    const arr = [...form[key]];
    arr[index] = value;
    setForm((p) => ({ ...p, [key]: arr }));
  };

  const addArrayItem = (key) =>
    setForm((p) => ({ ...p, [key]: [...p[key], ""] }));

  const removeArrayItem = (key, index) =>
    setForm((p) => ({
      ...p,
      [key]: p[key].filter((_, i) => i !== index),
    }));

  const handleImages = (e) => {
    const files = Array.from(e.target.files);
    if (files.length < 1 || files.length > 4) {
      alert("Upload between 1 and 4 images");
      return;
    }
    setForm((p) => ({ ...p, images: files }));
    setImagePreview(files.map((f) => URL.createObjectURL(f)));
  };

  /* ================= SUBMIT ================= */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const fd = new FormData();
    Object.entries(form).forEach(([key, value]) => {
      if (key === "images") value.forEach((img) => fd.append("images", img));
      else if (Array.isArray(value))
        fd.append(key, JSON.stringify(value.filter(Boolean)));
      else if (value !== "") fd.append(key, value);
    });

    const res = await fetch(editingId ? `${API}/${editingId}` : API, {
      method: editingId ? "PUT" : "POST",
      body: fd,
    });

    const data = await res.json();
    if (data.success) {
      fetchServices();
      resetForm();
    } else alert(data.message);

    setSubmitting(false);
  };

  /* ================= EDIT / DELETE ================= */
  const handleEdit = (s) => {
    setEditingId(s._id);
    setForm({
      title: s.title,
      shortDescription: s.shortDescription,
      longDescription: s.longDescription,
      checklist: s.checklist?.length ? s.checklist : [""],
      highlights: s.highlights?.length ? s.highlights : [""],
      priceRange: s.priceRange,
      duration: s.duration,
      category: s.category,
      slug: s.slug,
      order: s.order,
      images: [],
    });
    setImagePreview(s.images || []);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = async (id) => {
    if (!confirm("Delete this service permanently?")) return;
    await fetch(`${API}/${id}`, { method: "DELETE" });
    fetchServices();
  };

  /* ================================================= */
  return (
    <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-10 space-y-10">
      {/* HEADER */}
      <div>
        <h1 className="text-xl sm:text-3xl font-semibold text-gray-800">
          Service Details Management
        </h1>
        <p className="text-sm sm:text-base text-gray-500 mt-1">
          Manage detailed service cards shown on the website
        </p>
      </div>

      {/* ================= FORM ================= */}
      <form
        onSubmit={handleSubmit}
        className="bg-white border rounded-2xl p-5 sm:p-6 shadow-sm space-y-6"
      >
        <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
          <h2 className="text-lg sm:text-xl font-medium">
            {editingId ? "Edit Service" : "Create New Service"}
          </h2>
          {editingId && (
            <span className="text-xs px-3 py-1 rounded-full bg-blue-50 text-blue-600 w-fit">
              Editing Mode
            </span>
          )}
        </div>

        {/* BASIC INFO */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            ["title", "Title"],
            ["slug", "Unique Slug"],
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

        {/* DESCRIPTIONS */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Short Description
          </label>
          <textarea
            name="shortDescription"
            value={form.shortDescription}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-black/20"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Long Description
          </label>
          <textarea
            name="longDescription"
            value={form.longDescription}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2 min-h-[120px] focus:ring-2 focus:ring-black/20"
          />
        </div>

        {/* ARRAYS */}
        <SectionArray
          title="Checklist"
          items={form.checklist}
          onAdd={() => addArrayItem("checklist")}
          onRemove={(i) => removeArrayItem("checklist", i)}
          onChange={(i, v) => handleArrayChange("checklist", i, v)}
        />

        <SectionArray
          title="Highlights"
          items={form.highlights}
          onAdd={() => addArrayItem("highlights")}
          onRemove={(i) => removeArrayItem("highlights", i)}
          onChange={(i, v) => handleArrayChange("highlights", i, v)}
        />

        {/* META */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {[
            ["priceRange", "Price Range"],
            ["duration", "Duration"],
            ["order", "Display Order"],
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

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Category
            </label>
            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-black/20"
            >
              <option>Medical</option>
              <option>Cosmetology</option>
            </select>
          </div>
        </div>

        {/* IMAGES */}
        <div>
          <p className="text-sm font-medium text-gray-700 mb-1">
            Service Images (1–4)
          </p>

          <label className="block border-2 border-dashed rounded-xl px-4 py-8 text-center text-sm text-gray-500 cursor-pointer hover:border-black hover:text-black">
            <input type="file" multiple onChange={handleImages} className="hidden" />
            Click to upload images
          </label>

          {imagePreview.length > 0 && (
            <div className="mt-3 flex gap-2 flex-wrap">
              {imagePreview.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  className="h-20 w-28 object-cover rounded-lg border"
                />
              ))}
            </div>
          )}
        </div>

        {/* ACTIONS */}
        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <button
            disabled={submitting}
            className="bg-black text-white px-6 py-2 rounded-lg w-full sm:w-auto disabled:opacity-60"
          >
            {editingId ? "Update Service" : "Create Service"}
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
          All Services
        </h2>

        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="grid gap-4">
            {services.map((s) => (
              <div
                key={s._id}
                className="bg-white border rounded-xl p-4 flex flex-col lg:flex-row gap-4 items-start"
              >
                <img
                  src={s.images?.[0]}
                  className="w-full sm:w-32 h-24 object-cover rounded-lg"
                />

                <div className="flex-1">
                  <p className="font-medium text-gray-800">{s.title}</p>
                  <p className="text-sm text-gray-500">
                    {s.category} • {s.slug} • Order {s.order}
                  </p>
                </div>

                <div className="flex gap-2 w-full lg:w-auto">
                  <button
                    onClick={() => handleEdit(s)}
                    className="border px-4 py-1 rounded flex-1 lg:flex-none"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(s._id)}
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

/* ================= Helper ================= */
function SectionArray({ title, items, onAdd, onRemove, onChange }) {
  return (
    <div>
      <p className="text-sm font-medium text-gray-700 mb-2">{title}</p>

      <div className="space-y-2">
        {items.map((v, i) => (
          <div key={i} className="flex gap-2">
            <input
              value={v}
              onChange={(e) => onChange(i, e.target.value)}
              className="flex-1 border rounded-lg px-3 py-2 focus:ring-2 focus:ring-black/20"
            />
            {items.length > 1 && (
              <button
                type="button"
                onClick={() => onRemove(i)}
                className="px-3 border rounded-lg text-red-600"
              >
                ✕
              </button>
            )}
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={onAdd}
        className="mt-2 text-sm text-indigo-600 underline"
      >
        + Add {title}
      </button>
    </div>
  );
}
