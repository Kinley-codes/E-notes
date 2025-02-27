"use client";

import FavoritesPage from "@/app/Favourites/page"; // Import the FavoritesPage component
import { supabase } from "@/lib/supabaseClient";
import { useUser } from "@clerk/nextjs"; // Import Clerk's useUser hook
import { Download, Eye, Filter, Heart, HeartOff, MoreHorizontal, X } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

interface Note {
  public_id: string; // Unique identifier for each note
  subject: string;
  description: string;
  file_url: string;
  country: string;
  grade: string;
}

const NotesPage: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedNote, setSelectedNote] = useState<Note | null>(null);
  const [previewLoading, setPreviewLoading] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [activeMetadataId, setActiveMetadataId] = useState<string | null>(null);
  const [showPreview, setShowPreview] = useState(false);
  const [favorites, setFavorites] = useState<string[]>([]); // Store favorite note IDs
  const [searchQuery, setSearchQuery] = useState(""); // Search query
  const [filter, setFilter] = useState<"all" | "country" | "grade">("all"); // Filter state
  const [filterValue, setFilterValue] = useState(""); // Filter value (country or grade)
  const [currentPage, setCurrentPage] = useState(1); // Current page number
  const [totalPages, setTotalPages] = useState(1); // Total number of pages
  const itemsPerPage = 10; // Number of items to display per page
  const [showFavorites, setShowFavorites] = useState(false); // Toggle between Notes and Favorites

  const { user } = useUser(); // Get the current user from Clerk

  // Load favorites from localStorage on initial render
  useEffect(() => {
    const savedFavorites = localStorage.getItem("favorites");
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  // Save favorites to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  // Load favorites from Supabase when the user logs in
  useEffect(() => {
    if (user) {
      loadFavoritesFromSupabase(user.id);
    }
  }, [user]);

  // Fetch notes from Supabase with pagination
  useEffect(() => {
    const fetchNotes = async () => {
      setLoading(true);

      // Calculate the range for pagination
      const from = (currentPage - 1) * itemsPerPage;
      const to = from + itemsPerPage - 1;

      // Fetch notes with pagination
      const { data, error, count } = await supabase
        .from("notes")
        .select("*", { count: "exact" })
        .range(from, to);

      if (error) {
        toast.error("Failed to fetch notes.");
      } else {
        setNotes(data as Note[]);
        setTotalPages(Math.ceil((count || 0) / itemsPerPage)); // Calculate total pages
      }

      setLoading(false);
    };

    fetchNotes();
  }, [currentPage]); // Refetch notes when the page changes

  // Save favorites to Supabase
  const saveFavoritesToSupabase = async (userId: string, favorites: string[]) => {
    const { error } = await supabase
      .from("user_favorites")
      .upsert({ user_id: userId, favorites: JSON.stringify(favorites) });
    if (error) {
      toast.error("Failed to save favorites.");
    }
  };

  // Load favorites from Supabase
  const loadFavoritesFromSupabase = async (userId: string) => {
    const { data, error } = await supabase
      .from("user_favorites")
      .select("favorites")
      .eq("user_id", userId)
      .single();
    if (error) {
      toast.error("Failed to load favorites.");
    } else {
      setFavorites(JSON.parse(data.favorites || "[]"));
    }
  };

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

  // Toggle favorite status for a note
  const toggleFavorite = async (public_id: string) => {
    let updatedFavorites;
    if (favorites.includes(public_id)) {
      updatedFavorites = favorites.filter((id) => id !== public_id); // Remove from favorites
      toast.info("Note removed from favorites.");
    } else {
      updatedFavorites = [...favorites, public_id]; // Add to favorites
      toast.success("Note added to favorites!");
    }
    setFavorites(updatedFavorites); // Update local state

    // Save favorites to Supabase
    if (user) {
      await saveFavoritesToSupabase(user.id, updatedFavorites);
    }
  };

  // Filter and search notes
  const filteredNotes = notes
    .filter((note) => {
      if (filter === "country" && filterValue) {
        return note.country.toLowerCase().includes(filterValue.toLowerCase());
      }
      if (filter === "grade" && filterValue) {
        return note.grade.toLowerCase().includes(filterValue.toLowerCase());
      }
      return true;
    })
    .filter((note) => {
      return (
        note.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
        note.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    });

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Toggle between Notes and Favorites */}
        <div className="flex justify-center gap-4 mb-6">
          <button
            onClick={() => setShowFavorites(false)}
            className={`px-4 py-2 rounded-lg ${!showFavorites ? "bg-indigo-600 text-white" : "bg-gray-200 text-gray-700"}`}
          >
            Notes
          </button>
          <button
            onClick={() => setShowFavorites(true)}
            className={`px-4 py-2 rounded-lg ${showFavorites ? "bg-indigo-600 text-white" : "bg-gray-200 text-gray-700"}`}
          >
            Favorites
          </button>
        </div>

        {showFavorites ? (
          // Render FavoritesPage
          <FavoritesPage favorites={favorites} notes={notes} onRemoveFavorite={toggleFavorite} />
        ) : (
          // Render NotesPage
          <>
            <h1 className="text-3xl font-extrabold text-gray-900 text-center mb-6">Notes</h1>

            {/* Search and Filter Bar */}
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <input
                type="text"
                placeholder="Search notes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full md:w-64 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <div className="relative flex items-center gap-2">
                <div className="hidden md:block">
                  <select
                    value={filter}
                    onChange={(e) => setFilter(e.target.value as "all" | "country" | "grade")}
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="all">All</option>
                    <option value="country">Country</option>
                    <option value="grade">Grade</option>
                  </select>
                </div>
                <div className="md:hidden">
                  <button
                    onClick={() => setFilter(filter === "all" ? "country" : filter === "country" ? "grade" : "all")}
                    className="p-2 bg-white border border-gray-300 rounded-lg"
                  >
                    <Filter size={20} />
                  </button>
                </div>
                {filter !== "all" && (
                  <input
                    type="text"
                    placeholder={`Filter by ${filter}...`}
                    value={filterValue}
                    onChange={(e) => setFilterValue(e.target.value)}
                    className="w-full md:w-48 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                )}
              </div>
            </div>

            {loading && <p className="text-center">Loading...</p>}

            {/* Notes Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredNotes.map((note) => (
                <div key={note.public_id} className="relative bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h2 className="text-xl font-semibold text-gray-900">{note.subject}</h2>
                        <p className="text-sm text-gray-600 mt-2">{note.description}</p>
                      </div>
                      <button
                        onClick={() => toggleFavorite(note.public_id)}
                        className="text-gray-400 hover:text-red-500 transition-colors"
                      >
                        {favorites.includes(note.public_id) ? (
                          <Heart className="w-6 h-6 text-red-500" fill="currentColor" />
                        ) : (
                          <HeartOff className="w-6 h-6" />
                        )}
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
          </>
        )}

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
    </div>
  );
};

export default NotesPage;