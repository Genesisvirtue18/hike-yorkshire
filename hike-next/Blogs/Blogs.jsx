import React from "react";
import { useRouter } from "next/navigation";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/footer";
import { ClockIcon, CalendarIcon } from "@heroicons/react/24/outline";

import blogCard from "../../src/assets/DayHikes/dalesway-hero.webp";
import Camping from "../../src/assets/Blog/camping.webp";
import IikleyMoor from "../../src/assets/Blog/iikleymoor.webp";
import BoltonAbbey from "../../src/assets/Blog/BoltonAbbey.webp";
import RosberryToping from "../../src/assets/Blog/RosberryToping.webp";
import RobinHoodWay from "../../src/assets/Blog/RobinHoodWay.webp";
import besthike from "../../src/assets/Blog/besthike.webp";
import malcamcove from "../../src/assets/Blog/malcamcove.webp";
import HaworthdayhikeImage from "../assets/DayHikes/haworth-dayhike.webp";
import bestcampsite from "../../src/assets/Blog/bestcampsite.webp";
import hermit from "../../src/assets/Blog/hermit.webp";
import SEO from "../Components/SEO";   // 👈 add this















import blogHero from "../../src/assets/Hero/hero-image.webp";

export default function Blogs() {
  const router = useRouter();


  // BLOG DATA (SEO FRIENDLY)
  const blogPosts = [
    {
      id: 1,
      title: "Hike Sustainably in Yorkshire: Leave No Trace on the Moors",
      excerpt:
        "Discover how to hike sustainably in Yorkshire using Leave No Trace principles.",
      date: "March 20, 2024",
      readTime: "7 min read",
      category: "Sustainable Hiking",
      image: blogCard,
      slug: "/blog/hike-sustainably-yorkshire-leave-no-trace",
    },
    {
      id: 2,
      title: "The 5 Best Hikes in Yorkshire for Beginners",
      excerpt:
        "Beginner-friendly walking routes with gentle terrain and beautiful scenery.",
      date: "March 15, 2024",
      readTime: "5 min read",
      category: "Beginners Guide",
      image: besthike,
      slug: "/blog/best-hike-in-yorkshire-beginners",
    },
    {
      id: 3,
      title: "Wild Camping in Yorkshire: What’s Legal & How to Do It Right",
      excerpt:
        "Learn UK wild camping laws and how to camp responsibly in Yorkshire.",
      date: "March 10, 2024",
      readTime: "8 min read",
      category: "Wild Camping",
      image: Camping,
      slug: "/blog/wild-camping-yorkshire-rules",
    },
    {
      id: 4,
      title: "Walking Through Time: Ancient Stones of Ilkley Moor",
      excerpt:
        "Explore prehistoric rock art, stone circles, and folklore on Ilkley Moor.",
      date: "March 5, 2024",
      readTime: "6 min read",
      category: "History & Archaeology",
      image: IikleyMoor,
      slug: "/blog/ilkley-moor-ancient-stones-rock-art",
    },
    {
      id: 5,
      title: "The 5 Best Campsites in the Yorkshire Dales",
      excerpt:
        "From riverside pitches to wild moorland camps across the Dales.",
      date: "February 28, 2024",
      readTime: "6 min read",
      category: "Camping",
      image: bestcampsite,
      slug: "/blog/best-campsites-yorkshire-dales",
    },
    {
      id: 6,
      title: "The Hermit of Ilkley Moor: Job Senior",
      excerpt:
        "Discover the story of Ilkley Moor’s mysterious hermit and local legend.",
      date: "February 22, 2024",
      readTime: "5 min read",
      category: "Folklore",
      image: hermit,
      slug: "/blog/the-hermit-of-ilkley-moor-job-senior",
    },
    {
      id: 7,
      title: "Malham Cove: From Tropical Seas to Towering Waterfalls",
      excerpt:
        "Uncover the geology, myths, and deep history of Malham Cove.",
      date: "February 18, 2024",
      readTime: "7 min read",
      category: "Geology",
      image: malcamcove,
      slug: "/blog/malham-cove-geology-history-folklore",
    },
    {
      id: 8,
      title: "Bolton Abbey to Barden Tower: Yorkshire’s Monastic Past",
      excerpt:
        "A historic riverside walk through medieval ruins and the Dales.",
      date: "February 12, 2024",
      readTime: "6 min read",
      category: "Historic Walks",
      image: BoltonAbbey,
      slug: "/blog/bolton-abbey-to-barden-tower-walk",
    },
    {
      id: 9,
      title: "Haworth’s Literary Landscapes: Walking with the Brontës",
      excerpt:
        "Follow the Brontë sisters across Yorkshire’s wild moors.",
      date: "February 5, 2024",
      readTime: "7 min read",
      category: "Literary Walks",
      image: HaworthdayhikeImage,
      slug: "/blog/haworth-bronte-country-walk",
    },
    {
      id: 10,
      title: "Roseberry Topping: Yorkshire’s Matterhorn",
      excerpt:
        "Viking folklore, geology, and Captain Cook’s legacy in one walk.",
      date: "January 30, 2024",
      readTime: "6 min read",
      category: "Landmarks",
      image: RosberryToping,
      slug: "/blog/roseberry-topping-history-captain-cook",
    },
    {
      id: 11,
      title: "Robin Hood’s Bay: Yorkshire’s Smuggling Haven",
      excerpt:
        "Discover hidden tunnels, smugglers’ tales, and coastal legends.",
      date: "January 25, 2024",
      readTime: "6 min read",
      category: "Coastal History",
      image: RobinHoodWay,
      slug: "/blog/robin-hoods-bay-smuggling-history",
    },
  ];

  const handleCardClick = (slug) => {
    router.push(slug);
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
            Tips, guides, history, and stories from Yorkshire’s trails
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

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
    {blogPosts.map((blog) => (
      <div
        key={blog.id}
        onClick={() => handleCardClick(blog.slug)}
        className="
          bg-white rounded-lg shadow-sm hover:shadow-md
          transition-all duration-200 cursor-pointer
          border border-gray-100 hover:-translate-y-[2px]
        "
      >
        {/* IMAGE */}
        <div className="relative h-36 md:h-40 overflow-hidden rounded-t-lg">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full  h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* CONTENT */}
        <div className="p-4">
          <h3 className="font-semibold text-base md:text-lg mb-1 line-clamp-2 hover:text-[#C56441]">
            {blog.title}
          </h3>

          <p className="font-['Nunito_Sans'] text-gray-600 text-sm mb-3 line-clamp-2">
            {blog.excerpt}
          </p>

          <div className="flex items-center justify-between text-gray-500 text-xs">
            <div className="flex items-center gap-1">
              <ClockIcon className="w-4 h-4" />
              {blog.readTime}
            </div>
          </div>

          <button className="w-full mt-3 bg-[#C56441] hover:bg-[#a85632] text-white text-sm font-semibold py-2 rounded-md">
            Read
          </button>
        </div>
      </div>
    ))}
  </div>
</div>


    </div>
  );
}
