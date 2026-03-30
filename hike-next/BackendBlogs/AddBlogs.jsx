"use client"
import React, { useEffect, useState } from "react";
import Navbar from "../Components/NavBar/Navbar";
import { Pencil, Trash2, Plus, X, Eye, Upload, Image as ImageIcon } from "lucide-react";

export default function AdminBlogDashboard() {
  const emptyForm = {
    id: null,
    title: "",
    subtitle: "",
    author_name: "",
    author_quote: "",
      top_tip: "",   // ✅ ADD THIS
    paragraph_one: "",
    paragraph_two: "",
    final_thoughts: "",
    is_featured: 0,
    featured_image: ""
  };

  const [form, setForm] = useState(emptyForm);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [previewMode, setPreviewMode] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  
  // Image states
  const [featuredImage, setFeaturedImage] = useState(null);
  const [authorImage, setAuthorImage] = useState(null);
  const [topImage1, setTopImage1] = useState(null);
  const [topImage2, setTopImage2] = useState(null);
  const [middleImage1, setMiddleImage1] = useState(null);
  const [middleImage2, setMiddleImage2] = useState(null);
  const [middleImage3, setMiddleImage3] = useState(null);
  
  // Image preview URLs
  const [imagePreviews, setImagePreviews] = useState({});

  /* ================= FETCH BLOGS ================= */
  const fetchBlogs = async () => {
    try {
      const res = await fetch("https://hikeyorkshire.com/api/get-blogs.php");
      const data = await res.json();
      setBlogs(data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  // Update image previews when files change
  useEffect(() => {
    const previews = {};
    if (featuredImage) previews.featured = URL.createObjectURL(featuredImage);
if (authorImage) previews.author = URL.createObjectURL(authorImage);
    if (topImage1) previews.top1 = URL.createObjectURL(topImage1);
    if (topImage2) previews.top2 = URL.createObjectURL(topImage2);
    if (middleImage1) previews.middle1 = URL.createObjectURL(middleImage1);
    if (middleImage2) previews.middle2 = URL.createObjectURL(middleImage2);
    if (middleImage3) previews.middle3 = URL.createObjectURL(middleImage3);
    setImagePreviews(previews);
    
    return () => {
      Object.values(previews).forEach(url => URL.revokeObjectURL(url));
    };
  }, [featuredImage, topImage1, topImage2, middleImage1, middleImage2, middleImage3]);

  /* ================= SUBMIT ================= */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = new FormData();
    Object.keys(form).forEach(key => {
      data.append(key, form[key]);
    });

    // Append images
    if (featuredImage) data.append("featured_image", featuredImage);
    if (authorImage) data.append("author_image", authorImage);
    if (topImage1) data.append("top_images[]", topImage1);
    if (topImage2) data.append("top_images[]", topImage2);
    if (middleImage1) data.append("middle_images[]", middleImage1);
    if (middleImage2) data.append("middle_images[]", middleImage2);
    if (middleImage3) data.append("middle_images[]", middleImage3);

    const url = form.id
      ? "https://hikeyorkshire.com/api/update-blog.php"
      : "https://hikeyorkshire.com/api/add-blog.php";

    try {
      await fetch(url, {
        method: "POST",
        body: data,
      });
      
      alert(form.id ? "Blog Updated Successfully!" : "Blog Added Successfully!");
      resetForm();
      fetchBlogs();
    } catch (error) {
      alert("Error saving blog. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  /* ================= RESET FORM ================= */
  const resetForm = () => {
    setForm(emptyForm);
    setFeaturedImage(null);
  setAuthorImage(null);
    setTopImage1(null);
    setTopImage2(null);
    setMiddleImage1(null);
    setMiddleImage2(null);
    setMiddleImage3(null);
    setImagePreviews({});
    setShowForm(false);
    setPreviewMode(false);
  };

  /* ================= EDIT ================= */
  const handleEdit = (blog) => {
    // Map the blog data to match our form structure
    setForm({
      id: blog.id || null,
      title: blog.title || "",
      author_image: blog.author_image || "",
      subtitle: blog.subtitle || "",
      author_name: blog.author_name || "",
        top_tip: blog.top_tip || "",   // ✅ ADD
      author_quote: blog.author_quote || "",
      paragraph_one: blog.paragraph_one || "",
      paragraph_two: blog.paragraph_two || "",
      final_thoughts: blog.final_thoughts || "",
      is_featured: Number(blog.is_featured) || 0,
      featured_image: blog.featured_image || ""
    });
    
    setShowForm(true);
    setPreviewMode(false);
    
    // Clear any existing image previews
    setFeaturedImage(null);
    setTopImage1(null);
    setTopImage2(null);
    setMiddleImage1(null);
    setMiddleImage2(null);
    setMiddleImage3(null);
    setImagePreviews({});
    
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  /* ================= DELETE ================= */
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this blog?")) return;

    try {
      await fetch("https://hikeyorkshire.com/api/delete-blog.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      
      fetchBlogs();
      alert("Blog deleted successfully!");
    } catch (error) {
      alert("Error deleting blog. Please try again.");
    }
  };

  /* ================= PREVIEW ================= */
  const handlePreview = (blog) => {
    setSelectedBlog(blog);
    setPreviewMode(true);
  };

  /* ================= FILTER BLOGS ================= */
  const filteredBlogs = blogs.filter(blog =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (blog.author_name && blog.author_name.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  /* ================= IMAGE UPLOAD COMPONENT ================= */
  const ImageUploadField = ({ label, file, setter, previewKey, existingImage }) => (
    <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 hover:border-[#C56441] transition-colors">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <div className="flex items-center space-x-4">
        <label className="cursor-pointer bg-gray-50 hover:bg-gray-100 px-4 py-2 rounded-lg border border-gray-300 flex items-center space-x-2">
          <Upload size={18} />
          <span>Choose File</span>
          <input
            type="file"
            className="hidden"
            accept="image/*"
            onChange={(e) => setter(e.target.files[0])}
          />
        </label>
        
        {/* Show existing image if available and no new preview */}
        {existingImage && !imagePreviews[previewKey] && (
          <div className="relative group">
            <img
              src={`https://hikeyorkshire.com/uploads/${existingImage}`}
              alt="Existing"
              className="w-16 h-16 object-cover rounded-lg border-2 border-gray-200"
            />
          </div>
        )}
        
        {/* Show new preview if available */}
        {imagePreviews[previewKey] && (
          <div className="relative group">
            <img
              src={imagePreviews[previewKey]}
              alt="Preview"
              className="w-16 h-16 object-cover rounded-lg border-2 border-gray-200"
            />
            <button
              type="button"
              onClick={() => setter(null)}
              className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <X size={14} />
            </button>
          </div>
        )}
      </div>
    </div>
  );

  /* ================= BLOG PREVIEW MODAL ================= */
  const BlogPreviewModal = ({ blog, onClose }) => {
    if (!blog) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          <div className="sticky top-0 bg-white border-b p-4 flex justify-between items-center">
            <h3 className="text-xl font-bold">Blog Preview</h3>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <X size={24} />
            </button>
          </div>
          <div className="p-6">
            {blog.featured_image && (
              <img
                src={`https://hikeyorkshire.com/uploads/${blog.featured_image}`}
                alt={blog.title}
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
            )}
            <h1 className="text-3xl font-bold mb-2">{blog.title}</h1>
            <h2 className="text-xl text-gray-600 mb-4">{blog.subtitle}</h2>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-[#C56441] rounded-full flex items-center justify-center text-white font-bold">
                {blog.author_name ? blog.author_name.charAt(0).toUpperCase() : "A"}
              </div>
              <div className="ml-3">
                <p className="font-semibold">{blog.author_name || "Anonymous"}</p>
                {blog.author_quote && (
                  <p className="text-sm text-gray-500">{blog.author_quote}</p>
                )}
              </div>
            </div>
            
            <div className="prose max-w-none">
              {blog.paragraph_one && <p className="mb-4">{blog.paragraph_one}</p>}
              {blog.paragraph_two && <p className="mb-4">{blog.paragraph_two}</p>}
              {blog.final_thoughts && (
                <div className="bg-gray-50 p-4 rounded-lg italic">
                  {blog.final_thoughts}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen mt-15 font-[Raleway] bg-gradient-to-br from-gray-50 to-gray-100">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Blog Dashboard</h1>
            <p className="text-gray-600 mt-1">Manage your blog posts and content</p>
          </div>
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-[#C56441] hover:bg-[#b04d2e] text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition-colors shadow-lg"
          >
            {showForm ? (
              <>
                <X size={20} />
                <span>Close Form</span>
              </>
            ) : (
              <>
                <Plus size={20} />
                <span>New Blog Post</span>
              </>
            )}
          </button>
        </div>

        {/* Form Section */}
        {showForm && (
          <div className="bg-white rounded-xl shadow-xl p-6 mb-8 border border-gray-200">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">
              {form.id ? "Edit Blog Post" : "Create New Blog Post"}
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Basic Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Title *
                  </label>
                  <input
                    type="text"
                    value={form.title || ""}
                    onChange={(e) => setForm({ ...form, title: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C56441] focus:border-transparent"
                    placeholder="Enter blog title"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subtitle
                  </label>
                  <input
                    type="text"
                    value={form.subtitle || ""}
                    onChange={(e) => setForm({ ...form, subtitle: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C56441] focus:border-transparent"
                    placeholder="Enter subtitle"
                  />
                </div>
              </div>

              {/* Author Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Author Name
                  </label>
                  <input
                    type="text"
                    value={form.author_name || ""}
                    onChange={(e) => setForm({ ...form, author_name: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C56441] focus:border-transparent"
                    placeholder="Enter author name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Author Quote
                  </label>
                  <input
                    type="text"
                    value={form.author_quote || ""}
                    onChange={(e) => setForm({ ...form, author_quote: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C56441] focus:border-transparent"
                    placeholder="Enter author quote"
                  />
                </div>
                <div>
  <label className="block text-sm font-medium text-gray-700 mb-2">
    Top Tip
  </label>

  <textarea
    value={form.top_tip || ""}
    onChange={(e) => setForm({ ...form, top_tip: e.target.value })}
    rows={2}
    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C56441] focus:border-transparent"
    placeholder="Enter top tip for readers"
  />
</div>
                <ImageUploadField
label="Author Image"
file={authorImage}
setter={setAuthorImage}
previewKey="author"
existingImage={form.author_image}
/>
              </div>

              {/* Images Section */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-gray-700">Images</h3>
                
                {/* Featured Image */}
                <ImageUploadField
                  label="Featured Image"
                  file={featuredImage}
                  setter={setFeaturedImage}
                  previewKey="featured"
                  existingImage={form.featured_image}
                />

                {/* Top Images */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ImageUploadField
                    label="Top Image 1"
                    file={topImage1}
                    setter={setTopImage1}
                    previewKey="top1"
                  />
                  <ImageUploadField
                    label="Top Image 2"
                    file={topImage2}
                    setter={setTopImage2}
                    previewKey="top2"
                  />
                </div>

                {/* Middle Images */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <ImageUploadField
                    label="Middle Image 1"
                    file={middleImage1}
                    setter={setMiddleImage1}
                    previewKey="middle1"
                  />
                  <ImageUploadField
                    label="Middle Image 2"
                    file={middleImage2}
                    setter={setMiddleImage2}
                    previewKey="middle2"
                  />
                  <ImageUploadField
                    label="Middle Image 3"
                    file={middleImage3}
                    setter={setMiddleImage3}
                    previewKey="middle3"
                  />
                </div>
              </div>

              {/* Content Sections */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Paragraph One
                </label>
                <textarea
                  value={form.paragraph_one || ""}
                  onChange={(e) => setForm({ ...form, paragraph_one: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C56441] focus:border-transparent"
                  placeholder="Enter first paragraph"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Paragraph Two
                </label>
                <textarea
                  value={form.paragraph_two || ""}
                  onChange={(e) => setForm({ ...form, paragraph_two: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C56441] focus:border-transparent"
                  placeholder="Enter second paragraph"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Final Thoughts
                </label>
                <textarea
                  value={form.final_thoughts || ""}
                  onChange={(e) => setForm({ ...form, final_thoughts: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C56441] focus:border-transparent"
                  placeholder="Enter final thoughts"
                />
              </div>

              {/* Featured Checkbox */}
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="featured"
                  checked={Number(form.is_featured) === 1}
                  onChange={(e) => setForm({ ...form, is_featured: e.target.checked ? 1 : 0 })}
                  className="w-4 h-4 text-[#C56441] border-gray-300 rounded focus:ring-[#C56441]"
                />
                <label htmlFor="featured" className="text-sm text-gray-700">
                  Featured Blog Post
                </label>
              </div>

              {/* Form Actions */}
              <div className="flex space-x-4 pt-4 border-t">
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-[#C56441] hover:bg-[#b04d2e] text-white px-8 py-3 rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
                >
                  {loading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Saving...</span>
                    </>
                  ) : (
                    <span>{form.id ? "Update Blog" : "Create Blog"}</span>
                  )}
                </button>
                
                <button
                  type="button"
                  onClick={resetForm}
                  className="px-8 py-3 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Blog List Section */}
        <div className="bg-white rounded-xl shadow-xl border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
              <h2 className="text-xl font-semibold text-gray-800">
                All Blog Posts ({filteredBlogs.length})
              </h2>
              
              {/* Search */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search blogs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C56441] focus:border-transparent w-full sm:w-64"
                />
                <svg
                  className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Title
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Author
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Featured
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredBlogs.map((blog) => (
                  <tr key={blog.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        {blog.featured_image && (
                          <img
                            src={`https://hikeyorkshire.com/uploads/${blog.featured_image}`}
                            alt={blog.title}
                            className="w-10 h-10 rounded-lg object-cover mr-3"
                          />
                        )}
                        <div>
                          <div className="text-sm font-medium text-gray-900">
                            {blog.title}
                          </div>
                          {blog.subtitle && (
                            <div className="text-sm text-gray-500">
                              {blog.subtitle}
                            </div>
                          )}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {blog.author_name || "Anonymous"}
                    </td>
                    <td className="px-6 py-4">
                      {Number(blog.is_featured) === 1 ? (
                        <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                          Featured
                        </span>
                      ) : (
                        <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">
                          Regular
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-right space-x-2">
                      <button
                        onClick={() => handlePreview(blog)}
                        className="text-gray-600 hover:text-gray-900 p-2 hover:bg-gray-100 rounded-lg transition-colors"
                        title="Preview"
                      >
                        <Eye size={18} />
                      </button>
                      <button
                        onClick={() => handleEdit(blog)}
                        className="text-blue-600 hover:text-blue-900 p-2 hover:bg-blue-50 rounded-lg transition-colors"
                        title="Edit"
                      >
                        <Pencil size={18} />
                      </button>
                      <button
                        onClick={() => handleDelete(blog.id)}
                        className="text-red-600 hover:text-red-900 p-2 hover:bg-red-50 rounded-lg transition-colors"
                        title="Delete"
                      >
                        <Trash2 size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Empty State */}
          {filteredBlogs.length === 0 && (
            <div className="text-center py-12">
              <div className="flex justify-center mb-4">
                <ImageIcon size={48} className="text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                No blog posts found
              </h3>
              <p className="text-gray-500 mb-4">
                {searchTerm ? "Try adjusting your search" : "Get started by creating your first blog post"}
              </p>
              {!searchTerm && (
                <button
                  onClick={() => setShowForm(true)}
                  className="inline-flex items-center space-x-2 bg-[#C56441] hover:bg-[#b04d2e] text-white px-6 py-3 rounded-lg transition-colors"
                >
                  <Plus size={20} />
                  <span>Create New Blog Post</span>
                </button>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Preview Modal */}
      {previewMode && (
        <BlogPreviewModal
          blog={selectedBlog}
          onClose={() => {
            setPreviewMode(false);
            setSelectedBlog(null);
          }}
        />
      )}
    </div>
  );
}