"use client";
import { supabase } from "@/lib/supabaseClient"; // Ensure this is configured
import { useState } from "react";
import { toast } from "react-toastify";

const UploadNotePage: React.FC = () => {
  const [country, setCountry] = useState("");
  const [grade, setGrade] = useState("");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!country || !grade || !subject || !description || !file) {
      toast.info("Please fill all fields and upload a file.");
      return;
    }

    setUploading(true);

    try {
      // Generate unique file path
      const filePath = `notes/${Date.now()}_${file.name}`;

      // Upload file to Supabase Storage
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from("notes") // Use your bucket name
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      // Get the public URL of the file
      const { data: publicUrlData } = supabase.storage.from("notes").getPublicUrl(filePath);
      const file_url = publicUrlData.publicUrl;

      // Save metadata to Supabase 'notes' table
      const { error } = await supabase.from("notes").insert([
        { country, grade, subject, description, file_url },
      ]);

      if (error) throw error;

      toast.success("Note uploaded successfully!");

      // Reset form
      setCountry("");
      setGrade("");
      setSubject("");
      setDescription("");
      setFile(null);
    } catch (error) {
      console.error("Error:", error);
      toast.error("Something went wrong.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-50 py-12 px-4">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-900 text-center mb-6">
          Upload <span className="text-indigo-600">Notes</span>
        </h1>
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-xl p-6 mt-10">
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
            <input
              type="text"
              placeholder="Grade"
              value={grade}
              onChange={(e) => setGrade(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
            <input
              type="text"
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
            <textarea
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              rows={4}
              required
            />
            <input
              type="file"
              accept=".pdf,.doc,.txt"
              onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)}
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
              required
            />
            <div className="flex justify-center">
              <button
                type="submit"
                disabled={uploading}
                className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 disabled:bg-indigo-300 transition-colors"
              >
                {uploading ? "Uploading..." : "Upload Note"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UploadNotePage;
