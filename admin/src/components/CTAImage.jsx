import { useEffect, useState } from "react";

const API = "https://alexis-hospital.onrender.com/api/v1/ctaImage";

export default function CTAImage() {
  const [activeImage, setActiveImage] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  /* ================= FETCH ACTIVE CTA ================= */
  const fetchActiveImage = async () => {
    setLoading(true);
    try {
      const res = await fetch(API);
      const data = await res.json();
      if (data.success) setActiveImage(data.image);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchActiveImage();
  }, []);

  /* ================= IMAGE HANDLERS ================= */
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setImageFile(file);
    setPreview(URL.createObjectURL(file));
  };

  const resetForm = () => {
    setImageFile(null);
    setPreview(null);
  };

  /* ================= UPLOAD ================= */
  const handleUpload = async (e) => {
    e.preventDefault();
    if (!imageFile) {
      alert("Please select an image");
      return;
    }

    setSubmitting(true);

    const fd = new FormData();
    fd.append("image", imageFile);
    fd.append("isActive", "true");

    try {
      const res = await fetch(API, {
        method: "POST",
        body: fd,
      });

      const data = await res.json();
      if (data.success) {
        fetchActiveImage();
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

  /* ================= DELETE ================= */
  const handleDelete = async () => {
    if (!activeImage) return;
    if (!confirm("Delete the active CTA image?")) return;

    try {
      await fetch(`${API}/${activeImage._id}`, {
        method: "DELETE",
      });
      setActiveImage(null);
    } catch (err) {
      console.error(err);
    }
  };

  /* ================================================== */
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-semibold mb-6">
        CTA Image Management
      </h1>

      {/* ================= ACTIVE CTA ================= */}
      <div className="bg-white border rounded-xl p-6 shadow-sm mb-8">
        <h2 className="text-lg font-medium mb-4">Active CTA Image</h2>

        {loading ? (
          <p>Loading...</p>
        ) : activeImage ? (
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <img
              src={activeImage.image}
              alt="Active CTA"
              className="w-full md:w-80 h-40 object-cover rounded border"
            />

            <div className="flex gap-3">
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded text-sm">
                Active
              </span>

              <button
                onClick={handleDelete}
                className="border px-4 py-1 rounded text-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ) : (
          <p className="text-gray-500">No active CTA image</p>
        )}
      </div>

      {/* ================= UPLOAD FORM ================= */}
      <form
        onSubmit={handleUpload}
        className="bg-white border rounded-xl p-6 shadow-sm"
      >
        <h2 className="text-lg font-medium mb-4">
          Upload New CTA Image
        </h2>

        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />

        {preview && (
          <img
            src={preview}
            alt="Preview"
            className="mt-4 h-40 w-full md:w-80 object-cover rounded border"
          />
        )}

        <div className="mt-4 flex gap-3">
          <button
            disabled={submitting}
            className="bg-black text-white px-6 py-2 rounded"
          >
            Upload & Activate
          </button>

          {preview && (
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
    </div>
  );
}
