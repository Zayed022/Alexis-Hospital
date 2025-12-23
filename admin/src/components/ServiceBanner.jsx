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

  /* ================= Fetch Services ================= */
  const fetchServices = async () => {
    setLoading(true);
    try {
      const res = await fetch(API);
      const data = await res.json();
      if (data.success) setServices(data.services);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  /* ================= Form Helpers ================= */
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

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

  /* ================= Create / Update ================= */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const fd = new FormData();
    Object.entries(form).forEach(([key, value]) => {
      if (key === "images") {
        value.forEach((img) => fd.append("images", img));
      } else if (key === "rightPoints") {
        fd.append("rightPoints", JSON.stringify(value.filter(Boolean)));
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
    } catch (e) {
      console.error(e);
    } finally {
      setSubmitting(false);
    }
  };

  /* ================= Edit ================= */
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

  /* ================= Delete ================= */
  const handleDelete = async (id) => {
    if (!confirm("Delete this service permanently?")) return;
    await fetch(`${API}/${id}`, { method: "DELETE" });
    fetchServices();
  };

  /* ================================================== */
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-2xl font-semibold mb-6">Service Management</h1>

      {/* ================= FORM ================= */}
      <form
        onSubmit={handleSubmit}
        className="bg-white border rounded-lg p-6 grid gap-4 shadow-sm"
      >
        <div className="grid md:grid-cols-2 gap-4">
          <input name="badgeText" value={form.badgeText} onChange={handleChange} placeholder="Badge Text" className="input" />
          <input name="title" value={form.title} onChange={handleChange} placeholder="Title" className="input" />
        </div>

        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Description"
          className="input min-h-[80px]"
        />

        <div className="grid md:grid-cols-3 gap-4">
          <input name="buttonText" value={form.buttonText} onChange={handleChange} placeholder="Button Text" className="input" />
          <input type="number" name="order" value={form.order} onChange={handleChange} placeholder="Order" className="input" />
          <select name="category" value={form.category} onChange={handleChange} className="input">
            <option>Medical</option>
            <option>Cosmetology</option>
          </select>
        </div>

        {/* Right Points */}
        <div>
          <p className="font-medium mb-2">Right Points</p>
          {form.rightPoints.map((p, i) => (
            <div key={i} className="flex gap-2 mb-2">
              <input
                value={p}
                onChange={(e) => handlePointsChange(i, e.target.value)}
                className="input flex-1"
                placeholder={`Point ${i + 1}`}
              />
              {form.rightPoints.length > 1 && (
                <button type="button" onClick={() => removePoint(i)} className="px-3 border rounded">
                  ✕
                </button>
              )}
            </div>
          ))}
          <button type="button" onClick={addPoint} className="text-sm underline">
            + Add Point
          </button>
        </div>

        {/* Images */}
        <input type="file" multiple onChange={handleImages} />
        {imagePreviews.length > 0 && (
          <div className="flex gap-2 flex-wrap">
            {imagePreviews.map((img, i) => (
              <img key={i} src={img} className="h-20 w-28 object-cover rounded border" />
            ))}
          </div>
        )}

        <div className="flex gap-3">
          <button disabled={submitting} className="bg-black text-white px-6 py-2 rounded">
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
              <div key={s._id} className="border rounded-lg p-4 flex gap-4 items-start">
                <img src={s.images?.[0]} className="w-32 h-20 object-cover rounded" />
                <div className="flex-1">
                  <p className="font-medium">{s.title}</p>
                  <p className="text-sm text-gray-500">
                    {s.category} | Order {s.order}
                  </p>
                </div>
                <div className="flex gap-2">
                  <button onClick={() => handleEdit(s)} className="border px-4 py-1 rounded">
                    Edit
                  </button>
                  <button onClick={() => handleDelete(s._id)} className="border px-4 py-1 rounded text-red-600">
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

/* Add to global CSS:
.input {
  @apply border rounded px-3 py-2 w-full;
}
*/
