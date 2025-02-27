"use client";

import { Download, Eye, Heart, MoreHorizontal, X } from "lucide-react";
import { useState } from "react";
import { toast } from "react-toastify";

interface Note {
  public_id: string; // Unique identifier for each note
  subject: string;
  description: string;
  file_url: string;
  country: string;
  grade: string;
}

interface FavoritesPageProps {
  favorites: string[]; // List of favorite note IDs
  notes?: Note[]; // All notes (optional with a fallback)
  onRemoveFavorite: (public_id: string) => void; // Callback to remove a note from favorites
}

const FavoritesPage: React.FC<FavoritesPageProps> = ({ favorites, notes = [], onRemoveFavorite }) => {
  const [selectedNote, setSelectedNote] = useState<Note | null>(null);
  const [previewLoading, setPreviewLoading] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [activeMetadataId, setActiveMetadataId] = useState<string | null>(null);
  const [showPreview, setShowPreview] = useState(false);
  const [currentPage, setCurrentPage] = useState(1); // Current page number
  const itemsPerPage = 10; // Number of items to display per page

  // Filter notes to only include favorites
  const favoriteNotes = notes.filter((note) => favorites.includes(note.public_id));

  // Calculate total pages for pagination
  const totalPages = Math.ceil(favoriteNotes.length / itemsPerPage);

  // Get the notes for the current page
  const paginatedFavoriteNotes = favoriteNotes.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Toggle metadata visibility for a specific note
  const toggleMetadata = (public_id: string) => {
    setActiveMetadataId((prevId) => (prevId === public_id ? null : public_id));
  };

  // Handle preview of a note
  const handlePreview = async (note: Note) => {
    setSelectedNote(note);
    setShowPreview(true);
    setPreviewLoading(true);
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      setDownloadProgress(progress);
      if (progress >= 100) {
        clearInterval(interval);
        setPreviewLoading(false);
      }
    }, 200);
  };

  // Handle file download
  const handleDownload = async (fileUrl: string) => {
    try {
      const response = await fetch(fileUrl);
      const blob = await response.blob();
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = fileUrl.split("/").pop() || "note";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      toast.success("Download started.");
    } catch (error) {
      toast.error("Failed to download file.");
    }
  };

  // Handle removing a note from favorites
  const handleRemoveFavorite = (public_id: string) => {
    onRemoveFavorite(public_id);
    toast.info("Note removed from favorites.");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-900 text-center mb-6">Favorites</h1>

        {/* Favorites Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {paginatedFavoriteNotes.map((note) => (
            <div key={note.public_id} className="relative bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900">{note.subject}</h2>
                    <p className="text-sm text-gray-600 mt-2">{note.description}</p>
                  </div>
                  <button
                    onClick={() => handleRemoveFavorite(note.public_id)}
                    className="text-red-500 hover:text-red-700 transition-colors"
                  >
                    <Heart className="w-6 h-6" fill="currentColor" /> {/* Filled heart for favorites */}
                  </button>
                </div>

                {/* Metadata Button and Popup */}
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <button onClick={() => handlePreview(note)} className="text-indigo-600 hover:text-indigo-800">
                      <Eye size={20} />
                    </button>
                    <button onClick={() => handleDownload(note.file_url)} className="text-green-600 hover:text-green-800">
                      <Download size={20} />
                    </button>
                  </div>
                  <button onClick={() => toggleMetadata(note.public_id)} className="text-gray-600 hover:text-gray-800">
                    <MoreHorizontal size={20} />
                  </button>
                </div>

                {/* Metadata Popup */}
                {activeMetadataId === note.public_id && (
                  <div className="absolute right-0 top-12 mt-2 w-60 bg-white shadow-lg rounded-lg p-4 text-sm z-10">
                    <div className="flex justify-between items-center mb-2">
                      <p className="font-bold text-gray-800">Metadata</p>
                      <button onClick={() => toggleMetadata(note.public_id)} className="text-gray-500 hover:text-gray-800">
                        <X size={18} />
                      </button>
                    </div>
                    <p><strong>Country:</strong> {note.country}</p>
                    <p><strong>Grade:</strong> {note.grade}</p>
                    <p><strong>Subject:</strong> {note.subject}</p>
                    <p><strong>Description:</strong> {note.description}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg disabled:bg-gray-300"
          >
            Previous
          </button>
          <span className="flex items-center">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg disabled:bg-gray-300"
          >
            Next
          </button>
        </div>
      </div>

      {/* Preview Modal */}
      {showPreview && selectedNote && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 w-96 shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">{selectedNote.subject}</h2>
              <button onClick={() => setShowPreview(false)} className="text-gray-500 hover:text-gray-800">
                <X size={20} />
              </button>
            </div>
            {previewLoading ? (
              <div className="flex flex-col items-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-indigo-600"></div>
                <p className="mt-2">{downloadProgress}%</p>
              </div>
            ) : (
              <iframe src={selectedNote.file_url} className="w-full h-64" />
            )}
            <button onClick={() => handleDownload(selectedNote.file_url)} className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-lg">
              Download
            </button>
            <button onClick={() => setShowPreview(false)} className="mt-2 w-full bg-gray-300 py-2 rounded-lg">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;