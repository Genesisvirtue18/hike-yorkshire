/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    path: "/blog/best-hike-in-yorkshire-beginners",
    title: "The 5 Best Hikes in Yorkshire for beginners",
    desc: "Discover peaceful paths and breathtaking views ideal for those new to hiking the Yorkshire Dales",
    tags: ["Best hikes Yorkshire", "Yorkshire walking trails", "Hiking Yorkshire Dales"],
    img: "/assets/Blog/blog1.webp",
    badgeText: "Beginner's Tip — Start Early to Avoid Crowds"
  },
  {
    id: 2,
    path: "/blog/hike-sustainably-yorkshire-leave-no-trace",
    title: "Hike Sustainably in Yorkshire: Leave No Trace on the Moors",
    desc: "Discover how to hike sustainably in Yorkshire using Leave No Trace principles.",
    tags: [
      "sustainable hiking",
      "eco hiking Yorkshire",
      "Leave No Trace UK",
      "hiking Yorkshire Dales",
      "responsible hiking",
      "low impact walking"
    ],
    img: "/assets/Blog/blog2.webp",
    badgeText: "Eco Tip — Pack Out What You Pack In"
  },
  {
    id: 3,
    path: "/blog/wild-camping-yorkshire-rules",
    title: "Wild Camping in Yorkshire: What's Legal & How to Do It Right",
    desc: "Learn UK wild camping laws and how to camp responsibly in Yorkshire.",
    tags: [
      "wild camping Yorkshire",
      "camping laws UK",
      "responsible camping",
      "Leave No Trace UK",
      "backpacking Yorkshire",
      "eco camping"
    ],
    img: "/assets/Blog/blog3.webp",
    badgeText: "Camping Tip — Know the Local Regulations"
  }
];

export default function BlogSection() {
  return (
    <section className="py-12 md:py-18 px-4 sm:px-6 lg:px-8">
      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16 px-4">
      <Link href="/blogs">
  <h2 className="text-[#C56441] font-[Raleway] font-bold text-2xl sm:text-3xl md:text-[32px] leading-8 sm:leading-10 md:leading-[48px] mb-4 cursor-pointer hover:underline">
    Blog
  </h2>
</Link>

        <p className="font-['Nunito_Sans'] font-normal text-base sm:text-lg md:text-[20px] leading-6 sm:leading-7 md:leading-[29px] text-[#434343]">
          See why explorers of all ages love these hikes. Get expert tips, route guides,
          and inspiration for your next adventure.
        </p>
      </div>

      {/* Grid layout with customized width control */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-7xl mx-auto">
        {/* Left — Featured Post */}
        <Link
          href={blogPosts[0].path}
          className="relative block overflow-hidden w-full h-80 sm:h-96 md:h-[551px]
             rounded-3xl lg:rounded-[32px] cursor-pointer group"
        >
          <img 
            src={blogPosts[0].img} 
            alt={blogPosts[0].title}
            className="absolute inset-0 w-full h-full object-cover" 
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/25"></div>

          {/* Top Badge */}
          <span className="absolute top-4 right-4 bg-white text-xs md:text-[12px] font-['Nunito_Sans'] font-medium text-[#2B2B2B] px-3 py-1 rounded-full shadow-sm flex items-center gap-2 max-w-[90%] sm:max-w-none">
            <img src="/assets/Blog/blogicon.webp" alt="blog icon" className="w-4 h-4" />
            <span className="truncate">{blogPosts[0].badgeText}</span>
          </span>

          {/* Bottom Text */}
          <div className="absolute bottom-4 left-4 text-white w-[90%] sm:w-[85%]">
            <h3 className="font-[Raleway] text-lg sm:text-xl md:text-2xl lg:text-[24px] leading-6 sm:leading-7 md:leading-8 lg:leading-[36px] mb-2">
              {blogPosts[0].title}
            </h3>
            <p className="font-['Nunito_Sans'] font-medium text-sm sm:text-base md:text-[18px] leading-5 sm:leading-6 md:leading-[27px] tracking-[0] mb-3">
              {blogPosts[0].desc}
            </p>
            <p className="font-['Nunito_Sans'] font-semibold text-xs sm:text-[14px] leading-4 sm:leading-[21px] tracking-[0] opacity-90">
              {blogPosts[0].tags.map((tag) => `#${tag} `)}
            </p>
          </div>
        </Link>

        {/* Right — Two stacked cards */}
        <div className="flex flex-col gap-4 md:gap-6 lg:gap-[24px] w-full">
          {blogPosts.slice(1).map((post) => (
            <Link
              key={post.id}
              href={post.path}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-6 w-full
             h-auto sm:h-48 md:h-60 lg:h-[259.5px]
             bg-white rounded-3xl lg:rounded-[32px] overflow-hidden
              transition-all group cursor-pointer"
            >

              {/* Image */}
              <div className="w-full sm:w-48 md:w-56 lg:w-[259.5px] h-48 sm:h-full shrink-0">
                <img
                  src={post.img}
                  className="w-full h-full object-cover rounded-3xl lg:rounded-[32px]"
                  alt={post.title}
                />
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center p-4 sm:p-0 sm:pr-4 w-full">
                <span className="bg-white shadow-md text-[#2B2B2B] text-xs md:text-[12px] leading-4 md:leading-[18px] tracking-[0] font-['Nunito_Sans'] font-medium px-3 py-1 rounded-full inline-flex items-center gap-2 w-fit mb-2 sm:mb-0">
                  <img src="/assets/Blog/blogicon.webp" alt="blog icon" className="w-3 h-3" />
                  {post.badgeText}
                </span>

                <h3 className="font-[Raleway] font-bold text-lg md:text-xl lg:text-[20px] leading-6 md:leading-7 lg:leading-[30px] tracking-[0] text-[#C46340] mt-2 sm:mt-2">
                  {post.title}
                </h3>

                <p className="font-['Nunito_Sans'] font-medium text-sm md:text-base lg:text-[16px] leading-5 md:leading-6 lg:leading-[24px] tracking-[0] text-[#6A6A6A] mt-2 max-w-full lg:max-w-[260px]">
                  {post.desc}
                </p>

                <p className="font-['Nunito_Sans'] font-semibold text-xs md:text-[12px] leading-4 md:leading-[18px] tracking-[0] text-[#D39078] mt-2 sm:mt-3">
                  {post.tags.map((tag) => `#${tag} `)}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}