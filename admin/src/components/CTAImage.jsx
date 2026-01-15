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
      await fetch(`${API}/${activeImage._id}`, { method: "DELETE" });
      setActiveImage(null);
    } catch (err) {
      console.error(err);
    }
  };

  /* ================================================== */
  return (
    <div className="max-w-5xl mx-auto px-4 py-6 sm:px-6 lg:px-10 space-y-10">
      {/* HEADER */}
      <div>
        <h1 className="text-xl sm:text-2xl font-semibold text-gray-800">
          CTA Image Management
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          Manage the call-to-action banner shown across the website
        </p>
      </div>

      {/* ================= ACTIVE CTA ================= */}
      <div className="bg-white border rounded-2xl p-5 sm:p-6 shadow-sm">
        <h2 className="text-base sm:text-lg font-medium mb-4">
          Active CTA Image
        </h2>

        {loading ? (
          <p>Loading...</p>
        ) : activeImage ? (
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-start">
            <img
              src={activeImage.image}
              alt="Active CTA"
              className="w-full md:w-96 h-48 object-cover rounded-xl border"
            />

            <div className="flex flex-col gap-3">
              <span className="inline-flex w-fit px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                Active
              </span>

              <button
                onClick={handleDelete}
                className="border px-5 py-2 rounded-lg text-red-600 hover:bg-red-50"
              >
                Delete CTA Image
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
        className="bg-white border rounded-2xl p-5 sm:p-6 shadow-sm space-y-4"
      >
        <h2 className="text-base sm:text-lg font-medium">
          Upload New CTA Image
        </h2>

        {/* Upload Box */}
        <label className="block border-2 border-dashed rounded-xl px-4 py-8 text-center text-sm text-gray-500 cursor-pointer hover:border-black hover:text-black">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
          />
          Click to upload CTA image
        </label>

        {preview && (
          <img
            src={preview}
            alt="Preview"
            className="h-48 w-full md:w-96 object-cover rounded-xl border"
          />
        )}

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <button
            disabled={submitting}
            className="bg-black text-white px-6 py-2 rounded-lg w-full sm:w-auto disabled:opacity-60"
          >
            Upload & Activate
          </button>

          {preview && (
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
    </div>
  );
}
