import React, { useState } from "react";
import { Upload, FileText } from "lucide-react";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleFileChange = (e) => {
    const uploadedFile = e.target.files[0];
    setFile(uploadedFile);

    // Generate preview for image or video
    if (uploadedFile && (uploadedFile.type.startsWith("image/") || uploadedFile.type.startsWith("video/"))) {
      setPreview(URL.createObjectURL(uploadedFile));
    } else {
      setPreview(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !file) {
      alert("Please add a title and upload a file.");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("file", file);

    console.log("Submitting:", { title, description, file });
    alert("Post uploaded successfully!");

    setTitle("");
    setDescription("");
    setFile(null);
    setPreview(null);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 px-4">
      <div className="bg-white shadow-lg rounded-2xl w-full max-w-lg p-6">
        <h2 className="text-2xl font-semibold text-center mb-4">
          Create a New Post
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Title */}
          <input
            type="text"
            placeholder="Post title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            required
          />

          {/* Description */}
          <textarea
            placeholder="Write a short description..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border border-gray-300 rounded-lg p-2 h-24 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />

          {/* File Upload */}
          <div className="border-2 border-dashed rounded-lg p-6 text-center hover:border-blue-400 transition">
            <label className="cursor-pointer flex flex-col items-center gap-2">
              <Upload size={32} className="text-blue-500" />
              <span className="text-sm text-gray-500">
                Click to upload photo, video, or document
              </span>
              <input
                type="file"
                accept="image/*,video/*,.pdf,.doc,.docx"
                className="hidden"
                onChange={handleFileChange}
              />
            </label>
          </div>

          {/* Preview */}
          {preview && (
            <div className="mt-3 rounded-md overflow-hidden border">
              {file.type.startsWith("image/") && (
                <img
                  src={preview}
                  alt="Preview"
                  className="w-full h-60 object-cover"
                />
              )}
              {file.type.startsWith("video/") && (
                <video
                  src={preview}
                  controls
                  className="w-full h-60 object-cover"
                />
              )}
            </div>
          )}

          {/* File name for docs */}
          {!preview && file && (
            <div className="flex items-center gap-2 bg-gray-100 p-2 rounded">
              <FileText size={20} />
              <span className="text-sm">{file.name}</span>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition"
          >
            Upload Post
          </button>
        </form>
      </div>
    </div>
  );
}
