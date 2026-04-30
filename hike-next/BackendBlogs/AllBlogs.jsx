"use client"
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../Components/Navbar/Navbar";
import { ClockIcon } from "@heroicons/react/24/outline";

// // Static blog imports
// import blogCard from "../../src/assets/DayHikes/dalesway-hero.webp";
// import Camping from "../../src/assets/Blog/camping.webp";
// import IikleyMoor from "../../src/assets/Blog/iikleymoor.webp";
// import BoltonAbbey from "../../src/assets/Blog/BoltonAbbey.webp";
// import RosberryToping from "../../src/assets/Blog/RosberryToping.webp";
// import RobinHoodWay from "../../src/assets/Blog/RobinHoodWay.webp";
// import besthike from "../../src/assets/Blog/besthike.webp";
// import malcamcove from "../../src/assets/Blog/malcamcove.webp";
// import HaworthdayhikeImage from "../assets/DayHikes/haworth-dayhike.webp";
// import bestcampsite from "../../src/assets/Blog/bestcampsite.webp";
// import hermit from "../../src/assets/Blog/hermit.webp";
// import blogHero from "../../src/assets/Hero/hero-image.webp";


export default function Blogs() {
  const router = useRouter();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

// ========== BLOG IMAGES ==========
// Static blog imports as constants
const blogCard = "/assets/DayHikes/dalesway-hero.webp";
const Camping = "/assets/Blog/camping.webp";
const IikleyMoor = "/assets/Blog/iikleymoor.webp";
const BoltonAbbey = "/assets/Blog/BoltonAbbey.webp";
const RosberryToping = "/assets/Blog/RosberryToping.webp";
const RobinHoodWay = "/assets/Blog/RobinHoodWay.webp";
const besthike = "/assets/Blog/besthike.webp";
const malcamcove = "/assets/Blog/malcamcove.webp";
const HaworthdayhikeImage = "/assets/DayHikes/haworth-dayhike.webp";
const bestcampsite = "/assets/Blog/bestcampsite.webp";
const hermit = "/assets/Blog/hermit.webp";
const blogHero = "/assets/Hero/hero-image.webp";

  // STATIC BLOG DATA (Fallback/SEO Friendly)
  const staticBlogPosts = [
    {
      id: 1,
      title: "Hike Sustainably in Yorkshire: Leave No Trace on the Moors",
      subtitle: "Discover how to hike sustainably in Yorkshire using Leave No Trace principles.",
      date: "March 20, 2024",
      readTime: "7 min read",
      category: "Sustainable Hiking",
      featured_image: blogCard,
      slug: "hike-sustainably-yorkshire-leave-no-trace",
      isStatic: true
    },
    {
      id: 2,
      title: "The 5 Best Hikes in Yorkshire for Beginners",
      subtitle: "Beginner-friendly walking routes with gentle terrain and beautiful scenery.",
      date: "March 15, 2024",
      readTime: "5 min read",
      category: "Beginners Guide",
      featured_image: besthike,
      slug: "best-hike-in-yorkshire-beginners",
      isStatic: true
    },
    {
      id: 3,
      title: "Wild Camping in Yorkshire: What's Legal & How to Do It Right",
      subtitle: "Learn UK wild camping laws and how to camp responsibly in Yorkshire.",
      date: "March 10, 2024",
      readTime: "8 min read",
      category: "Wild Camping",
      featured_image: Camping,
      slug: "wild-camping-yorkshire-rules",
      isStatic: true
    },
    {
      id: 4,
      title: "Walking Through Time: Ancient Stones of Ilkley Moor",
      subtitle: "Explore prehistoric rock art, stone circles, and folklore on Ilkley Moor.",
      date: "March 5, 2024",
      readTime: "6 min read",
      category: "History & Archaeology",
      featured_image: IikleyMoor,
      slug: "ilkley-moor-ancient-stones-rock-art",
      isStatic: true
    },
    {
      id: 5,
      title: "The 5 Best Campsites in the Yorkshire Dales",
      subtitle: "From riverside pitches to wild moorland camps across the Dales.",
      date: "February 28, 2024",
      readTime: "6 min read",
      category: "Camping",
      featured_image: bestcampsite,
      slug: "best-campsites-yorkshire-dales",
      isStatic: true
    },
    {
      id: 6,
      title: "The Hermit of Ilkley Moor: Job Senior",
      subtitle: "Discover the story of Ilkley Moor's mysterious hermit and local legend.",
      date: "February 22, 2024",
      readTime: "5 min read",
      category: "Folklore",
      featured_image: hermit,
      slug: "the-hermit-of-ilkley-moor-job-senior",
      isStatic: true
    },
    {
      id: 7,
      title: "Malham Cove: From Tropical Seas to Towering Waterfalls",
      subtitle: "Uncover the geology, myths, and deep history of Malham Cove.",
      date: "February 18, 2024",
      readTime: "7 min read",
      category: "Geology",
      featured_image: malcamcove,
      slug: "malham-cove-geology-history-folklore",
      isStatic: true
    },
    {
      id: 8,
      title: "Bolton Abbey to Barden Tower: Yorkshire's Monastic Past",
      subtitle: "A historic riverside walk through medieval ruins and the Dales.",
      date: "February 12, 2024",
      readTime: "6 min read",
      category: "Historic Walks",
      featured_image: BoltonAbbey,
      slug: "bolton-abbey-to-barden-tower-walk",
      isStatic: true
    },
    {
      id: 9,
      title: "Haworth's Literary Landscapes: Walking with the Brontës",
      subtitle: "Follow the Brontë sisters across Yorkshire's wild moors.",
      date: "February 5, 2024",
      readTime: "7 min read",
      category: "Literary Walks",
      featured_image: HaworthdayhikeImage,
      slug: "haworth-bronte-country-walk",
      isStatic: true
    },
    {
      id: 10,
      title: "Roseberry Topping: Yorkshire's Matterhorn",
      subtitle: "Viking folklore, geology, and Captain Cook's legacy in one walk.",
      date: "January 30, 2024",
      readTime: "6 min read",
      category: "Landmarks",
      featured_image: RosberryToping,
      slug: "roseberry-topping-history-captain-cook",
      isStatic: true
    },
    {
      id: 11,
      title: "Robin Hood's Bay: Yorkshire's Smuggling Haven",
      subtitle: "Discover hidden tunnels, smugglers' tales, and coastal legends.",
      date: "January 25, 2024",
      readTime: "6 min read",
      category: "Coastal History",
      featured_image: RobinHoodWay,
      slug: "robin-hoods-bay-smuggling-history",
      isStatic: true
    },
  ];

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://hikeyorkshire.com/api/get-blogs.php");
      
      if (!response.ok) {
        throw new Error('Failed to fetch blogs');
      }
      
      const data = await response.json();
      
      // Mark dynamic blogs
      const dynamicBlogs = data.map(blog => ({
        ...blog,
        isStatic: false
      }));
      
      // Combine dynamic and static blogs, removing duplicates based on slug
      const allBlogs = [...dynamicBlogs, ...staticBlogPosts];
      const uniqueBlogs = Array.from(
        new Map(allBlogs.map(blog => [blog.slug, blog])).values()
      );
      
      // Sort by date (newest first)
      uniqueBlogs.sort((a, b) => new Date(b.date) - new Date(a.date));
      
      setBlogs(uniqueBlogs);
      setError(null);
    } catch (err) {
      console.error("Error fetching blogs:", err);
      setError(err.message);
      // Fallback to static blogs if fetch fails
      setBlogs(staticBlogPosts);
    } finally {
      setLoading(false);
    }
  };

  const handleCardClick = (slug) => {
    router.push(`/blog/${slug}`);
  };

  const getImageUrl = (blog) => {
    if (blog.isStatic) {
      return blog.featured_image; // Static import
    }
    return `https://hikeyorkshire.com/uploads/${blog.featured_image}`;
  };

  return (
    <div className="w-full min-h-screen bg-gray-50 font-[Raleway]">
      <Navbar />
 
      {/* HERO */}
      <div
        className="w-full h-[300px] md:h-[350px] bg-cover bg-center relative"
        style={{ backgroundImage: `url(${blogHero})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative h-full flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-3">
            Hike Yorkshire Blog
          </h1>
          <p className="text-base md:text-lg max-w-2xl">
            Tips, guides, history, and stories from Yorkshire's trails
          </p>
        </div>
      </div>

      {/* BLOG GRID */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 md:py-10">
        <h2 className="text-xl md:text-2xl font-bold text-center mb-1">
          Latest Articles
        </h2>
        <p className="text-gray-600 text-sm text-center mb-6">
          Hiking guides and outdoor stories from Yorkshire
        </p>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#C56441]"></div>
          </div>
        ) : error ? (
          <div className="text-center text-red-600 py-8">
            <p>Error loading blogs: {error}</p>
            <button 
              onClick={fetchBlogs}
              className="mt-4 bg-[#C56441] hover:bg-[#a85632] text-white px-4 py-2 rounded-md"
            >
              Try Again
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {blogs.map((blog) => (
              <div
                key={`${blog.isStatic ? 'static' : 'dynamic'}-${blog.id}`}
                onClick={() => handleCardClick(blog.slug)}
                className="
                  bg-white rounded-lg shadow-sm hover:shadow-md
                  transition-all duration-200 cursor-pointer
                  border border-gray-100 hover:-translate-y-[2px]
                  flex flex-col h-full
                "
              >
                {/* IMAGE */}
                <div className="relative h-36 md:h-40 overflow-hidden rounded-t-lg flex-shrink-0">
                  <img
                    src={getImageUrl(blog)}
                    alt={blog.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      // Fallback image if the main image fails to load
                      e.target.src = blogCard;
                    }}
                  />
                </div>

                {/* CONTENT */}
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="font-semibold text-base md:text-lg mb-1 line-clamp-2 hover:text-[#C56441]">
                    {blog.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-3 line-clamp-2 flex-grow">
                    {blog.subtitle || blog.excerpt}
                  </p>

                  {/* Date and Read Time */}
               
                  <button className="w-full mt-2 bg-[#C56441] hover:bg-[#a85632] text-white text-sm font-semibold py-2 rounded-md">
                    Read
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