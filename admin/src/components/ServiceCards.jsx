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
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  /* ================= FORM HELPERS ================= */
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

  /* ================= CREATE / UPDATE ================= */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const fd = new FormData();
    Object.entries(form).forEach(([key, value]) => {
      if (key === "images") {
        value.forEach((img) => fd.append("images", img));
      } else if (Array.isArray(value)) {
        fd.append(key, JSON.stringify(value.filter(Boolean)));
      } else if (value !== "") {
        fd.append(key, value);
      }
    });

    try {
      const res = await fetch(editingId ? `${API}/${editingId}` : API, {
        method: editingId ? "PUT" : "POST",
        body: fd,
      });
      const data = await res.json();

      if (data.success) {
        fetchServices();
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

  /* ================= DELETE ================= */
  const handleDelete = async (id) => {
    if (!confirm("Delete this service permanently?")) return;
    await fetch(`${API}/${id}`, { method: "DELETE" });
    fetchServices();
  };

  /* ================================================== */
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-2xl font-semibold mb-6">
        Service Details Management
      </h1>

      {/* ================= FORM ================= */}
      <form
        onSubmit={handleSubmit}
        className="bg-white border rounded-xl p-6 space-y-4 shadow-sm"
      >
        <div className="grid md:grid-cols-2 gap-4">
          <input name="title" value={form.title} onChange={handleChange} placeholder="Title" className="input" />
          <input name="slug" value={form.slug} onChange={handleChange} placeholder="Unique Slug" className="input" />
        </div>

        <textarea name="shortDescription" value={form.shortDescription} onChange={handleChange} placeholder="Short Description" className="input" />
        <textarea name="longDescription" value={form.longDescription} onChange={handleChange} placeholder="Long Description" className="input min-h-[120px]" />

        {/* Checklist */}
        <SectionArray title="Checklist" items={form.checklist} onAdd={() => addArrayItem("checklist")} onRemove={(i) => removeArrayItem("checklist", i)} onChange={(i, v) => handleArrayChange("checklist", i, v)} />

        {/* Highlights */}
        <SectionArray title="Highlights" items={form.highlights} onAdd={() => addArrayItem("highlights")} onRemove={(i) => removeArrayItem("highlights", i)} onChange={(i, v) => handleArrayChange("highlights", i, v)} />

        <div className="grid md:grid-cols-4 gap-4">
          <input name="priceRange" value={form.priceRange} onChange={handleChange} placeholder="Price Range" className="input" />
          <input name="duration" value={form.duration} onChange={handleChange} placeholder="Duration" className="input" />
          <input name="order" type="number" value={form.order} onChange={handleChange} placeholder="Order" className="input" />
          <select name="category" value={form.category} onChange={handleChange} className="input">
            <option>Medical</option>
            <option>Cosmetology</option>
          </select>
        </div>

        {/* Images */}
        <input type="file" multiple onChange={handleImages} />
        {imagePreview.length > 0 && (
          <div className="flex gap-2 flex-wrap">
            {imagePreview.map((img, i) => (
              <img key={i} src={img} className="h-20 w-28 object-cover rounded border" />
            ))}
          </div>
        )}

        <div className="flex gap-3">
          <button className="bg-black text-white px-6 py-2 rounded">
            {editingId ? "Update Service" : "Create Service"}
          </button>
          {editingId && (
            <button type="button" onClick={resetForm} className="border px-6 py-2 rounded">
              Cancel
            </button>
          )}
        </div>
      </form>

      {/* ================= LIST ================= */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-4">All Services</h2>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="grid gap-4">
            {services.map((s) => (
              <div key={s._id} className="border rounded-xl p-4 flex gap-4">
                <img src={s.images?.[0]} className="w-32 h-20 object-cover rounded" />
                <div className="flex-1">
                  <p className="font-medium">{s.title}</p>
                  <p className="text-sm text-gray-500">
                    {s.category} | {s.slug} | Order {s.order}
                  </p>
                </div>
                <div className="flex gap-2">
                  <button onClick={() => handleEdit(s)} className="border px-4 py-1 rounded">Edit</button>
                  <button onClick={() => handleDelete(s._id)} className="border px-4 py-1 rounded text-red-600">Delete</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

/* ================= Helper Component ================= */
function SectionArray({ title, items, onAdd, onRemove, onChange }) {
  return (
    <div>
      <p className="font-medium mb-2">{title}</p>
      {items.map((v, i) => (
        <div key={i} className="flex gap-2 mb-2">
          <input value={v} onChange={(e) => onChange(i, e.target.value)} className="input flex-1" />
          {items.length > 1 && (
            <button type="button" onClick={() => onRemove(i)} className="px-3 border rounded">
              ✕
            </button>
          )}
        </div>
      ))}
      <button type="button" onClick={onAdd} className="text-sm underline">
        + Add {title}
      </button>
    </div>
  );
}

/* Global Tailwind helper:
.input {
  @apply border rounded px-3 py-2 w-full;
}
*/
