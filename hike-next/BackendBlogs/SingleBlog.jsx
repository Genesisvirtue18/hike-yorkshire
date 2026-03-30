// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import Navbar from "../Components/NavBar/Navbar";
// import Footer from "../Components/Footer/footer";

// const SingleBlog = () => {
//   const { slug } = useParams();

//   const [blog, setBlog] = useState(null);
//   const [images, setImages] = useState([]);

//   useEffect(() => {
//     fetch(`https://hikeyorkshire.com/api/get-blog.php?slug=${slug}`)
//       .then(res => res.json())
//       .then(data => {
//         setBlog(data.blog);
//         setImages(data.images);
//       });
//   }, [slug]);

//   if (!blog) return <p className="text-center mt-10">Loading...</p>;

//   const topImages = images.filter(img => img.image_section === "top");
//   const middleImages = images.filter(img => img.image_section === "middle");

//   return (
//     <div>
//       <Navbar />
//       <SEO
// title={`${blog.title} | Hike Yorkshire`}
// description={blog.excerpt}
// url={`https://hikeyorkshire.com/blog/${blog.slug}`}
// />

//       <div className="max-w-5xl mx-auto mt-15 px-4 sm:px-6 lg:px-8 py-12 font-[Raleway]">

//         {/* Title and subtitle */}
//         <div className="mb-8">
//           <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-3">
//             {blog.title}
//           </h1>
//           <p className="text-lg text-gray-500">
//             {blog.subtitle}
//           </p>
//         </div>

//         {/* Author */}
//         {/* <div className="flex items-center gap-4 pb-6 mb-6 border-b border-gray-200">
//           <div>
//             <p className="font-medium text-gray-800">
//               {blog.author_name}
//             </p>
//             <p className="text-sm text-gray-500">
//               {blog.author_quote}
//             </p>
//           </div>
//         </div> */}

//         <div className="flex items-center gap-4 pb-6 mb-6 border-b border-gray-200">


//           <div>
//             <p className="font-medium text-gray-800">
//               {blog.author_name}
//             </p>

//             <p className="text-sm text-gray-500 italic">
//               "{blog.author_quote}"
//             </p>
//           </div>

//         </div>

//         {/* Top Tip Section */}
//         <div className="bg-yellow-50 border-l-4 border-yellow-500 p-3 rounded-md mb-8 flex gap-4 items-start">

//           {/* Author Image */}
//           {blog.author_image && (
//             <img
//               src={`https://hikeyorkshire.com/uploads/${blog.author_image}`}
//               alt={blog.author_name}
//               className="w-20 h-20 rounded-full object-cover shadow-md"
//             />
//           )}

//           <div>
//             <h3 className="text-lg font-semibold text-gray-800 mb-1">
//               Top Tip
//             </h3>

//             {/* Dummy Text */}
//             <p className="text-gray-700 text-sm leading-relaxed">
//                {blog.top_tip}
//             </p>
//           </div>

//         </div>

//         {/* Top Images */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
//           {topImages.map((img) => (
//             <img
//               key={img.id}
//               src={`https://hikeyorkshire.com/blog_images/${img.image_url}`}
//               alt=""
//               className="w-full h-52 object-cover rounded-lg shadow-md"
//             />
//           ))}
//         </div>

//         {/* Paragraph One */}
//         <p className="text-gray-700 text-lg leading-relaxed mb-10 whitespace-pre-line">
//           {blog.paragraph_one}
//         </p>

//         {/* Middle Images */}
//         <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
//           {middleImages.map((img) => (
//             <img
//               key={img.id}
//               src={`https://hikeyorkshire.com/blog_images/${img.image_url}`}
//               alt=""
//               className="w-full h-52 object-cover rounded-lg shadow-sm"
//             />
//           ))}
//         </div>

//         {/* Paragraph Two */}
//         <p className="text-gray-700 text-lg leading-relaxed mb-10 whitespace-pre-line">
//           {blog.paragraph_two}
//         </p>

//         {/* Final Thoughts */}
//         <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded-md mb-6">
//           <h2 className="text-xl font-semibold text-gray-800 mb-2">
//             🏁 Final Thoughts
//           </h2>
//           <p className="text-gray-700 text-base leading-relaxed whitespace-pre-line">
//             {blog.final_thoughts}
//           </p>
//         </div>

//         {/* Footer Line */}
//         <div className="border-t pt-8 text-center">
//           <p className="text-gray-700 text-lg">
//             Visit{" "}
//             <span className="text-green-700 font-semibold underline">
//               www.hikeyorkshire.com
//             </span>
//           </p>
//           <p className="text-xs text-gray-400 mt-4">
//             © {blog.author_name} · Hike Yorkshire
//           </p>
//         </div>

//       </div>

//     </div>
//   );
// };

// export default SingleBlog;
"use client"
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation"; // ✅ Use Next.js navigation
import Navbar from "../Components/NavBar/Navbar";

// Simple SEO component
const SEO = ({ title, description, url }) => {
  return (
    <>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      <link rel="canonical" href={url} />
    </>
  );
};

const SingleBlog = ({ slug: propSlug }) => {
  const { slug: paramSlug } = useParams();
  const slug = propSlug || paramSlug;

  const [blog, setBlog] = useState(null);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!slug) {
      setError(true);
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(false);
    
    fetch(`https://hikeyorkshire.com/api/get-blog.php?slug=${slug}`)
      .then(res => {
        if (!res.ok) throw new Error('Blog not found');
        return res.json();
      })
      .then(data => {
        setBlog(data.blog);
        setImages(data.images || []);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError(true);
        setLoading(false);
      });
  }, [slug]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <p className="text-center mt-10 text-red-600">Blog not found</p>;
  if (!blog) return <p className="text-center mt-10">Blog not found</p>;

  const topImages = images.filter(img => img.image_section === "top");
  const middleImages = images.filter(img => img.image_section === "middle");

  return (
    <div>
      <Navbar />
      <SEO
        title={`${blog.title} | Hike Yorkshire`}
        description={blog.excerpt}
        url={`https://hikeyorkshire.com/blog/${blog.slug}`}
      />

      <div className="max-w-5xl mx-auto mt-15 px-4 sm:px-6 lg:px-8 py-12 font-[Raleway]">

        {/* Title and subtitle */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-3">
            {blog.title}
          </h1>
          <p className="text-lg text-gray-500">
            {blog.subtitle}
          </p>
        </div>

        {/* Author */}
        <div className="flex items-center gap-4 pb-6 mb-6 border-b border-gray-200">
          <div>
            <p className="font-medium text-gray-800">
              {blog.author_name}
            </p>
            <p className="text-sm text-gray-500 italic">
              "{blog.author_quote}"
            </p>
          </div>
        </div>

        {/* Top Tip Section */}
        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-3 rounded-md mb-8 flex gap-4 items-start">

          {/* Author Image */}
          {blog.author_image && (
            <img
              src={`https://hikeyorkshire.com/uploads/${blog.author_image}`}
              alt={blog.author_name}
              className="w-20 h-20 rounded-full object-cover shadow-md"
            />
          )}

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">
              Top Tip
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
               {blog.top_tip}
            </p>
          </div>

        </div>

        {/* Top Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {topImages.map((img) => (
            <img
              key={img.id}
              src={`https://hikeyorkshire.com/blog_images/${img.image_url}`}
              alt=""
              className="w-full h-52 object-cover rounded-lg shadow-md"
            />
          ))}
        </div>

        {/* Paragraph One */}
        <p className="text-gray-700 text-lg leading-relaxed mb-10 whitespace-pre-line">
          {blog.paragraph_one}
        </p>

        {/* Middle Images */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
          {middleImages.map((img) => (
            <img
              key={img.id}
              src={`https://hikeyorkshire.com/blog_images/${img.image_url}`}
              alt=""
              className="w-full h-52 object-cover rounded-lg shadow-sm"
            />
          ))}
        </div>

        {/* Paragraph Two */}
        <p className="text-gray-700 text-lg leading-relaxed mb-10 whitespace-pre-line">
          {blog.paragraph_two}
        </p>

        {/* Final Thoughts */}
        <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded-md mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            🏁 Final Thoughts
          </h2>
          <p className="text-gray-700 text-base leading-relaxed whitespace-pre-line">
            {blog.final_thoughts}
          </p>
        </div>

        {/* Footer Line */}
        <div className="border-t pt-8 text-center">
          <p className="text-gray-700 text-lg">
            Visit{" "}
            <span className="text-green-700 font-semibold underline">
              www.hikeyorkshire.com
            </span>
          </p>
          <p className="text-xs text-gray-400 mt-4">
            © {blog.author_name} · Hike Yorkshire
          </p>
        </div>

      </div>
    </div>
  );
};

export default SingleBlog;