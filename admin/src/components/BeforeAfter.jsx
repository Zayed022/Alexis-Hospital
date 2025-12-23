import { useEffect, useState } from "react";

const API = "https://alexis-hospital.onrender.com/api/v1/beforeAfterCase";

export default function BeforeAfter() {
  const [cases, setCases] = useState([]);
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const [preview, setPreview] = useState({
    before: null,
    after: null,
  });

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
    } catch (err) {
      console.error(err);
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

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

  /* ================= CREATE / UPDATE ================= */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const fd = new FormData();
    Object.entries(form).forEach(([k, v]) => {
      if (v !== null && v !== "") fd.append(k, v);
    });

    try {
      const res = await fetch(editingId ? `${API}/${editingId}` : API, {
        method: editingId ? "PUT" : "POST",
        body: fd,
      });

      const data = await res.json();
      if (data.success) {
        fetchCases();
        resetForm();
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  /* ================= EDIT ================= */
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
    setPreview({
      before: c.beforeImage,
      after: c.afterImage,
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  /* ================= DELETE ================= */
  const handleDelete = async (id) => {
    if (!confirm("Delete this case permanently?")) return;
    await fetch(`${API}/${id}`, { method: "DELETE" });
    fetchCases();
  };

  /* ================================================= */
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-2xl font-semibold mb-6">
        Before / After Case Management
      </h1>

      {/* ================= FORM ================= */}
      <form
        onSubmit={handleSubmit}
        className="bg-white border rounded-xl p-6 shadow-sm space-y-4"
      >
        <div className="grid md:grid-cols-2 gap-4">
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Case Title"
            className="input"
            required
          />
          <select
            name="serviceCategory"
            value={form.serviceCategory}
            onChange={handleChange}
            className="input"
          >
            <option>Medical</option>
            <option>Cosmetology</option>
          </select>
        </div>

        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Description"
          className="input min-h-[90px]"
        />

        <input
          type="number"
          name="order"
          value={form.order}
          onChange={handleChange}
          placeholder="Display Order"
          className="input"
        />

        {/* Images */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block font-medium mb-1">Before Image</label>
            <input type="file" name="beforeImage" onChange={handleImage} />
            {preview.before && (
              <img
                src={preview.before}
                className="mt-2 h-32 w-full object-cover rounded border"
              />
            )}
          </div>

          <div>
            <label className="block font-medium mb-1">After Image</label>
            <input type="file" name="afterImage" onChange={handleImage} />
            {preview.after && (
              <img
                src={preview.after}
                className="mt-2 h-32 w-full object-cover rounded border"
              />
            )}
          </div>
        </div>

        <div className="flex gap-3 pt-2">
          <button
            disabled={submitting}
            className="bg-black text-white px-6 py-2 rounded"
          >
            {editingId ? "Update Case" : "Create Case"}
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

      {/* ================= LIST ================= */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-4">All Cases</h2>

        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="grid gap-4">
            {cases.map((c) => (
              <div
                key={c._id}
                className="border rounded-xl p-4 flex flex-col md:flex-row gap-4 items-start"
              >
                <div className="flex gap-2">
                  <img
                    src={c.beforeImage}
                    className="w-32 h-20 object-cover rounded"
                  />
                  <img
                    src={c.afterImage}
                    className="w-32 h-20 object-cover rounded"
                  />
                </div>

                <div className="flex-1">
                  <p className="font-medium">{c.title}</p>
                  <p className="text-sm text-gray-500">
                    {c.serviceCategory} | Order {c.order}
                  </p>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit(c)}
                    className="border px-4 py-1 rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(c._id)}
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

/* Global Tailwind helper:
.input {
  @apply border rounded px-3 py-2 w-full;
}
*/
