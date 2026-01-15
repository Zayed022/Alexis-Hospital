import { useEffect, useState } from "react";

const API = "https://alexis-hospital.onrender.com/api/v1/service";

export default function ServiceBanner() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [imagePreviews, setImagePreviews] = useState([]);

  const [form, setForm] = useState({
    badgeText: "",
    title: "",
    description: "",
    buttonText: "",
    order: "",
    category: "Medical",
    rightPoints: [""],
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
      badgeText: "",
      title: "",
      description: "",
      buttonText: "",
      order: "",
      category: "Medical",
      rightPoints: [""],
      images: [],
    });
    setEditingId(null);
    setImagePreviews([]);
  };

  const handleChange = (e) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handlePointsChange = (index, value) => {
    const updated = [...form.rightPoints];
    updated[index] = value;
    setForm((p) => ({ ...p, rightPoints: updated }));
  };

  const addPoint = () =>
    setForm((p) => ({ ...p, rightPoints: [...p.rightPoints, ""] }));

  const removePoint = (index) =>
    setForm((p) => ({
      ...p,
      rightPoints: p.rightPoints.filter((_, i) => i !== index),
    }));

  const handleImages = (e) => {
    const files = Array.from(e.target.files);
    if (files.length < 1 || files.length > 4) {
      alert("Select between 1 and 4 images");
      return;
    }
    setForm((p) => ({ ...p, images: files }));
    setImagePreviews(files.map((f) => URL.createObjectURL(f)));
  };

  /* ================= SUBMIT ================= */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const fd = new FormData();
    Object.entries(form).forEach(([key, value]) => {
      if (key === "images") value.forEach((img) => fd.append("images", img));
      else if (key === "rightPoints")
        fd.append("rightPoints", JSON.stringify(value.filter(Boolean)));
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
      badgeText: s.badgeText || "",
      title: s.title || "",
      description: s.description || "",
      buttonText: s.buttonText || "",
      order: s.order || "",
      category: s.category || "Medical",
      rightPoints: s.rightPoints?.length ? s.rightPoints : [""],
      images: [],
    });
    setImagePreviews(s.images || []);
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
          Service Management
        </h1>
        <p className="text-sm sm:text-base text-gray-500 mt-1">
          Manage service banners and highlights shown on the website
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

        {/* TEXT FIELDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            ["badgeText", "Badge Text"],
            ["title", "Title"],
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
                placeholder={label}
              />
            </div>
          ))}
        </div>

        {/* DESCRIPTION */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2 min-h-[90px] focus:ring-2 focus:ring-black/20"
            placeholder="Service description"
          />
        </div>

        {/* SETTINGS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Button Text
            </label>
            <input
              name="buttonText"
              value={form.buttonText}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-black/20"
            />
          </div>

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

        {/* RIGHT POINTS */}
        <div>
          <p className="text-sm font-medium text-gray-700 mb-2">
            Right Points
          </p>

          <div className="space-y-2">
            {form.rightPoints.map((p, i) => (
              <div key={i} className="flex gap-2">
                <input
                  value={p}
                  onChange={(e) => handlePointsChange(i, e.target.value)}
                  className="flex-1 border rounded-lg px-3 py-2 focus:ring-2 focus:ring-black/20"
                  placeholder={`Point ${i + 1}`}
                />
                {form.rightPoints.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removePoint(i)}
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
            onClick={addPoint}
            className="mt-2 text-sm text-indigo-600 underline"
          >
            + Add Point
          </button>
        </div>

        {/* IMAGE UPLOAD */}
        <div>
          <p className="text-sm font-medium text-gray-700 mb-1">
            Service Images (1–4)
          </p>

          <label className="block border-2 border-dashed rounded-xl px-4 py-8 text-center text-sm text-gray-500 cursor-pointer hover:border-black hover:text-black">
            <input type="file" multiple onChange={handleImages} className="hidden" />
            Click to upload images
          </label>

          {imagePreviews.length > 0 && (
            <div className="mt-3 flex gap-2 flex-wrap">
              {imagePreviews.map((img, i) => (
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
                    {s.category} • Order {s.order}
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
