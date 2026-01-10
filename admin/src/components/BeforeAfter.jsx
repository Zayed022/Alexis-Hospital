import { useEffect, useState } from "react";

const API = "https://alexis-hospital.onrender.com/api/v1/beforeAfterCase";

export default function BeforeAfter() {
  const [cases, setCases] = useState([]);
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const [preview, setPreview] = useState({ before: null, after: null });

  const [form, setForm] = useState({
    title: "",
    description: "",
    serviceCategory: "Medical",
    order: "",
    beforeImage: null,
    afterImage: null,
  });

  /* ================= FETCH ================= */
  const fetchCases = async () => {
    setLoading(true);
    try {
      const res = await fetch(API);
      const data = await res.json();
      if (data.success) setCases(data.cases);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCases();
  }, []);

  /* ================= FORM ================= */
  const resetForm = () => {
    setForm({
      title: "",
      description: "",
      serviceCategory: "Medical",
      order: "",
      beforeImage: null,
      afterImage: null,
    });
    setPreview({ before: null, after: null });
    setEditingId(null);
  };

  const handleChange = (e) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleImage = (e) => {
    const { name, files } = e.target;
    if (!files[0]) return;

    setForm((p) => ({ ...p, [name]: files[0] }));
    setPreview((p) => ({
      ...p,
      [name === "beforeImage" ? "before" : "after"]:
        URL.createObjectURL(files[0]),
    }));
  };

  /* ================= SUBMIT ================= */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const fd = new FormData();
    Object.entries(form).forEach(([k, v]) => {
      if (v !== null && v !== "") fd.append(k, v);
    });

    const res = await fetch(editingId ? `${API}/${editingId}` : API, {
      method: editingId ? "PUT" : "POST",
      body: fd,
    });

    const data = await res.json();
    if (data.success) {
      fetchCases();
      resetForm();
    } else alert(data.message);

    setSubmitting(false);
  };

  /* ================= EDIT / DELETE ================= */
  const handleEdit = (c) => {
    setEditingId(c._id);
    setForm({
      title: c.title,
      description: c.description,
      serviceCategory: c.serviceCategory,
      order: c.order,
      beforeImage: null,
      afterImage: null,
    });
    setPreview({ before: c.beforeImage, after: c.afterImage });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = async (id) => {
    if (!confirm("Delete this case permanently?")) return;
    await fetch(`${API}/${id}`, { method: "DELETE" });
    fetchCases();
  };

  /* ================================================= */
  return (
    <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-10 space-y-10">
      {/* HEADER */}
      <div>
        <h1 className="text-xl sm:text-2xl font-semibold text-gray-800">
          Before / After Case Management
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          Manage treatment transformation cases
        </p>
      </div>

      {/* ================= FORM ================= */}
      <form
        onSubmit={handleSubmit}
        className="bg-white border rounded-2xl p-5 sm:p-6 shadow-sm space-y-6"
      >
        {/* BASIC INFO */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Case Title
            </label>
            <input
              name="title"
              value={form.title}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-black/20"
              placeholder="Enter case title"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Service Category
            </label>
            <select
              name="serviceCategory"
              value={form.serviceCategory}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-black/20"
            >
              <option>Medical</option>
              <option>Cosmetology</option>
            </select>
          </div>
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
            className="w-full border rounded-lg px-3 py-2 min-h-[100px] focus:ring-2 focus:ring-black/20"
            placeholder="Brief case description"
          />
        </div>

        {/* ORDER */}
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
            placeholder="Order number"
          />
        </div>

        {/* IMAGES */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { key: "beforeImage", label: "Before Image", prev: "before" },
            { key: "afterImage", label: "After Image", prev: "after" },
          ].map(({ key, label, prev }) => (
            <div key={key} className="border rounded-xl p-4">
              <p className="text-sm font-medium text-gray-700 mb-2">
                {label}
              </p>

              <label className="block border-2 border-dashed rounded-lg px-4 py-6 text-center text-sm text-gray-500 cursor-pointer hover:border-black hover:text-black">
                <input
                  type="file"
                  name={key}
                  onChange={handleImage}
                  className="hidden"
                />
                Click to upload image
              </label>

              {preview[prev] && (
                <img
                  src={preview[prev]}
                  className="mt-3 h-40 w-full object-cover rounded-lg border"
                />
              )}
            </div>
          ))}
        </div>

        {/* ACTIONS */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            disabled={submitting}
            className="bg-black text-white px-6 py-2 rounded-lg w-full sm:w-auto disabled:opacity-60"
          >
            {editingId ? "Update Case" : "Create Case"}
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
          All Cases
        </h2>

        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="grid gap-4">
            {cases.map((c) => (
              <div
                key={c._id}
                className="bg-white border rounded-xl p-4 flex flex-col lg:flex-row gap-4 items-start"
              >
                <div className="flex gap-2">
                  <img src={c.beforeImage} className="w-28 h-20 object-cover rounded" />
                  <img src={c.afterImage} className="w-28 h-20 object-cover rounded" />
                </div>

                <div className="flex-1">
                  <p className="font-medium text-gray-800">{c.title}</p>
                  <p className="text-sm text-gray-500">
                    {c.serviceCategory} • Order {c.order}
                  </p>
                </div>

                <div className="flex gap-2 w-full lg:w-auto">
                  <button
                    onClick={() => handleEdit(c)}
                    className="border px-4 py-1 rounded flex-1 lg:flex-none"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(c._id)}
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
