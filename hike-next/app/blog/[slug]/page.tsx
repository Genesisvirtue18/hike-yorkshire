
// import React, { ReactElement } from "react";
// import BestHikeBlog from "@/Blogs/BestHikesYorkshireBeginners";
// import BestIntermdiateHikeBlog from "@/Blogs/Best-Intermediate-Hikes-in-Yorkshire";
// import BestExpertHikeBlog from "@/Blogs/Best-Expert-Hikes-in-Yorkshire";
// import HikingSustainably from "@/Blogs/Hiking-Sustainably-in-Yorkshire";
// import HikeSustainablyYorkshire from "@/Blogs/Hiking-Sustainably-in-Yorkshire";
// import WildCampingYorkshire from "@/Blogs/WildCampingYorkshireRules";
// import IlkleyMoorAncientStones from "@/Blogs/IlkleyMoorAncientStones";
// import BestCampsitesYorkshireDales from "@/Blogs/BestCampsitesYorkshireDales";
// import HermitOfIlkleyMoor from "@/Blogs/HermitOfIlkleyMoor";
// import MalhamCoveHistory from "@/Blogs/MalhamCoveHistory";
// import BoltonAbbeyToBardenTower from "@/Blogs/BoltonAbbeyToBardenTower";
// import HaworthBrontes from "@/Blogs/HaworthBrontes";
// import RoseberryToppingHistory from "@/Blogs/RoseberryToppingHistory";
// import RobinHoodsBayHistory from "@/Blogs/RobinHoodsBayHistory";
// import SingleBlog from "@/BackendBlogs/SingleBlog";

// // Define the type for static blogs
// interface StaticBlogs {
//   [key: string]: ReactElement;
// }

// const staticBlogs: StaticBlogs = {
//   "best-hike-in-yorkshire-beginners": <BestHikeBlog />,
//   "best-intermediate-hikes-in-yorkshire": <BestIntermdiateHikeBlog />,
//   "best-expert-hikes-in-yorkshire": <BestExpertHikeBlog />,
//   "hiking-sustainably-in-yorkshire": <HikingSustainably />,
//   "hike-sustainably-yorkshire-leave-no-trace": <HikeSustainablyYorkshire />,
//   "wild-camping-yorkshire-rules": <WildCampingYorkshire />,
//   "ilkley-moor-ancient-stones-rock-art": <IlkleyMoorAncientStones />,
//   "best-campsites-yorkshire-dales": <BestCampsitesYorkshireDales />,
//   "the-hermit-of-ilkley-moor-job-senior": <HermitOfIlkleyMoor />,
//   "malham-cove-geology-history-folklore": <MalhamCoveHistory />,
//   "bolton-abbey-to-barden-tower-walk": <BoltonAbbeyToBardenTower />,
//   "haworth-bronte-country-walk": <HaworthBrontes />,
//   "roseberry-topping-history-captain-cook": <RoseberryToppingHistory />,
//   "robin-hoods-bay-smuggling-history": <RobinHoodsBayHistory />
// };

// // Define props type for the page
// interface PageProps {
//   params: Promise<{ slug: string }>;
// }

// export default async function Page({ params }: PageProps) {
//   const { slug } = await params;

//   // STATIC FIRST
//   if (staticBlogs[slug]) {
//     return staticBlogs[slug];
//   }

//   // DYNAMIC FALLBACK - Pass slug as prop to SingleBlog
//   return <SingleBlog slug={slug} />;
// }

// // Generate static paths for all known blogs
// export async function generateStaticParams() {
//   return Object.keys(staticBlogs).map(slug => ({
//     slug: slug
//   }));
// }

// export async function generateMetadata({ params }: PageProps) {
//   const { slug } = await params;

//   const titles: any = {
//     "best-hike-in-yorkshire-beginners": {
//       title: "Best Beginner Hikes in Yorkshire | Easy Walking Routes | Hike Yorkshire",
//       description: "New to hiking? Discover the best beginner-friendly walks in Yorkshire. Easy routes with stunning scenery, clear paths and practical tips for first-time walkers."
//     },
//     "best-intermediate-hikes-in-yorkshire": {
//       title: "Wild Camping in Yorkshire Rules",
//       description: "Learn rules for wild camping in Yorkshire."
//     },
//      "hike-sustainably-yorkshire-leave-no-trace": {
//       title: "How to Hike Sustainably in Yorkshire | Leave No Trace | Hike Yorkshire",
//       description: " Learn how to hike responsibly in Yorkshire with our Leave No Trace guide. Practical tips for protecting the countryside, wildlife and farmland on every walk."
//     },
//       "wild-camping-yorkshire-rules": {
//       title: "Wild Camping in Yorkshire: Rules, Laws & Best Spots | Hike Yorkshire",
//       description: "Thinking about wild camping in Yorkshire? Find out what the rules are, where you can camp legally and how to do it responsibly in the Yorkshire Dales and Moors."
//     },
//       "ilkley-moor-ancient-stones-rock-art": {
//       title: "Ilkley Moor Ancient Stones & Rock Art | Hike Yorkshire",
//       description: " Explore the prehistoric rock art and ancient standing stones of Ilkley Moor. A guide to Yorkshire's most mysterious moorland and the walks that take you there."
//     },
//        "best-campsites-yorkshire-dales": {
//       title: "Best Campsites in the Yorkshire Dales 2026 | Hike Yorkshire",
//       description: " Find the best campsites in the Yorkshire Dales for tents, campervans and glamping. Our guide covers location, facilities and the walks on your doorstep."
//     },
//        "the-hermit-of-ilkley-moor-job-senior": {
//       title: "The Hermit of Ilkley Moor: The Story of Job Senior | Hike Yorkshire",
//       description: "The fascinating story of Job Senior, the hermit who lived alone on Ilkley Moor in the 19th century. History, folklore and the walks that follow in his footsteps."
//     },
//        "malham-cove-geology-history-folklore": {
//       title: " Malham Cove: Geology, History & Folklore | Hike Yorkshire",
//       description: " Everything you need to know about Malham Cove — its dramatic limestone geology, rich history and local folklore. Plus a full walking guide to the Malham circuit."
//     },
//        "bolton-abbey-to-barden-tower-walk": {
//       title: "Bolton Abbey to Barden Tower Walk Guide | Hike Yorkshire",
//       description: "A complete walking guide from Bolton Abbey to Barden Tower along the River Wharfe. Distance, route details, what to see and where to stop along the way."
//     },
//       "haworth-bronte-country-walk": {
//       title: "Haworth Brontë Country Walk Guide | Hike Yorkshire",
//       description: " Walk in the footsteps of the Brontës on this Haworth moorland route. A complete guide to the Brontë Country walk including the waterfall and Top Withens."
//     },
//       "roseberry-topping-history-captain-cook": {
//       title: "Roseberry Topping Walk & Captain Cook History | Hike Yorkshire",
//       description: "Climb Roseberry Topping and discover its connection to Captain Cook. A full walk guide to one of North Yorkshire's most iconic summits with history and route info."
//     },
//       "robin-hoods-bay-smuggling-history": {
//       title: "Robin Hood's Bay Smuggling History & Walking Guide | Hike Yorkshire",
//       description: " Uncover the smuggling history of Robin Hood's Bay on the Yorkshire Coast. A guide to the village's fascinating past and the coastal walks surrounding it."
//     }
//     // add more if needed
//   };

//   return {
//     title: titles[slug]?.title || "Hike Yorkshire Blog",
//     description: titles[slug]?.description || "Explore Yorkshire hiking blogs",
//   };
// }

// app/blog/[slug]/page.tsx

import React, { ReactElement } from "react";
import BestHikeBlog from "@/Blogs/BestHikesYorkshireBeginners";
import BestIntermdiateHikeBlog from "@/Blogs/Best-Intermediate-Hikes-in-Yorkshire";
import BestExpertHikeBlog from "@/Blogs/Best-Expert-Hikes-in-Yorkshire";
import HikingSustainably from "@/Blogs/Hiking-Sustainably-in-Yorkshire";
import HikeSustainablyYorkshire from "@/Blogs/Hiking-Sustainably-in-Yorkshire";
import WildCampingYorkshire from "@/Blogs/WildCampingYorkshireRules";
import IlkleyMoorAncientStones from "@/Blogs/IlkleyMoorAncientStones";
import BestCampsitesYorkshireDales from "@/Blogs/BestCampsitesYorkshireDales";
import HermitOfIlkleyMoor from "@/Blogs/HermitOfIlkleyMoor";
import MalhamCoveHistory from "@/Blogs/MalhamCoveHistory";
import BoltonAbbeyToBardenTower from "@/Blogs/BoltonAbbeyToBardenTower";
import HaworthBrontes from "@/Blogs/HaworthBrontes";
import RoseberryToppingHistory from "@/Blogs/RoseberryToppingHistory";
import RobinHoodsBayHistory from "@/Blogs/RobinHoodsBayHistory";
import SingleBlog from "@/BackendBlogs/SingleBlog";

interface StaticBlogs {
  [key: string]: ReactElement;
}

const staticBlogs: StaticBlogs = {
  "best-hike-in-yorkshire-beginners": <BestHikeBlog />,
  "best-intermediate-hikes-in-yorkshire": <BestIntermdiateHikeBlog />,
  "best-expert-hikes-in-yorkshire": <BestExpertHikeBlog />,
  "hiking-sustainably-in-yorkshire": <HikingSustainably />,
  "hike-sustainably-yorkshire-leave-no-trace": <HikeSustainablyYorkshire />,
  "wild-camping-yorkshire-rules": <WildCampingYorkshire />,
  "ilkley-moor-ancient-stones-rock-art": <IlkleyMoorAncientStones />,
  "best-campsites-yorkshire-dales": <BestCampsitesYorkshireDales />,
  "the-hermit-of-ilkley-moor-job-senior": <HermitOfIlkleyMoor />,
  "malham-cove-geology-history-folklore": <MalhamCoveHistory />,
  "bolton-abbey-to-barden-tower-walk": <BoltonAbbeyToBardenTower />,
  "haworth-bronte-country-walk": <HaworthBrontes />,
  "roseberry-topping-history-captain-cook": <RoseberryToppingHistory />,
  "robin-hoods-bay-smuggling-history": <RobinHoodsBayHistory />
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;

  // STATIC FIRST - return the static blog component if available
  if (staticBlogs[slug]) {
    return staticBlogs[slug];
  }

  // For dynamic blogs, use the SingleBlog component
  return <SingleBlog slug={slug} />;
}

// Generate static paths for ALL blogs (both static and dynamic)
export async function generateStaticParams() {

  const staticSlugs = Object.keys(staticBlogs);

  let dynamicSlugs: string[] = [];

  try {
    const response = await fetch(
      "https://hikeyorkshire.com/api/get-blogs.php",
      { cache: "no-store" }
    );

    const data = await response.json();

    // FIX: map the slug field
    dynamicSlugs = data.map((blog: any) => blog.slug);

  } catch (error) {
    console.error("Failed to fetch dynamic blog slugs:", error);
  }

  const allSlugs = [...staticSlugs, ...dynamicSlugs];

  return allSlugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;

  const titles: any = {
    "best-hike-in-yorkshire-beginners": {
      title: "Best Beginner Hikes in Yorkshire | Easy Walking Routes | Hike Yorkshire",
      description: "New to hiking? Discover the best beginner-friendly walks in Yorkshire. Easy routes with stunning scenery, clear paths and practical tips for first-time walkers."
    },
    "best-intermediate-hikes-in-yorkshire": {
      title: "Best Intermediate Hikes in Yorkshire | Challenging Walks | Hike Yorkshire",
      description: "Ready for more challenge? Discover the best intermediate hikes in Yorkshire with rewarding views, varied terrain and expert route guidance."
    },
    "best-expert-hikes-in-yorkshire": {
      title: "Best Expert Hikes in Yorkshire | Advanced Walking Routes | Hike Yorkshire",
      description: "Experienced hikers looking for a challenge? Explore Yorkshire's most demanding routes with our expert-level walking guides."
    },
    "hiking-sustainably-in-yorkshire": {
      title: "Hiking Sustainably in Yorkshire | Leave No Trace | Hike Yorkshire",
      description: "Learn how to hike responsibly in Yorkshire with our sustainability guide. Practical tips for protecting the countryside, wildlife and farmland."
    },
    "hike-sustainably-yorkshire-leave-no-trace": {
      title: "How to Hike Sustainably in Yorkshire | Leave No Trace | Hike Yorkshire",
      description: "Learn how to hike responsibly in Yorkshire with our Leave No Trace guide. Practical tips for protecting the countryside, wildlife and farmland on every walk."
    },
    "wild-camping-yorkshire-rules": {
      title: "Wild Camping in Yorkshire: Rules, Laws & Best Spots | Hike Yorkshire",
      description: "Thinking about wild camping in Yorkshire? Find out what the rules are, where you can camp legally and how to do it responsibly in the Yorkshire Dales and Moors."
    },
    "ilkley-moor-ancient-stones-rock-art": {
      title: "Ilkley Moor Ancient Stones & Rock Art | Hike Yorkshire",
      description: "Explore the prehistoric rock art and ancient standing stones of Ilkley Moor. A guide to Yorkshire's most mysterious moorland and the walks that take you there."
    },
    "best-campsites-yorkshire-dales": {
      title: "Best Campsites in the Yorkshire Dales 2026 | Hike Yorkshire",
      description: "Find the best campsites in the Yorkshire Dales for tents, campervans and glamping. Our guide covers location, facilities and the walks on your doorstep."
    },
    "the-hermit-of-ilkley-moor-job-senior": {
      title: "The Hermit of Ilkley Moor: The Story of Job Senior | Hike Yorkshire",
      description: "The fascinating story of Job Senior, the hermit who lived alone on Ilkley Moor in the 19th century. History, folklore and the walks that follow in his footsteps."
    },
    "malham-cove-geology-history-folklore": {
      title: "Malham Cove: Geology, History & Folklore | Hike Yorkshire",
      description: "Everything you need to know about Malham Cove — its dramatic limestone geology, rich history and local folklore. Plus a full walking guide to the Malham circuit."
    },
    "bolton-abbey-to-barden-tower-walk": {
      title: "Bolton Abbey to Barden Tower Walk Guide | Hike Yorkshire",
      description: "A complete walking guide from Bolton Abbey to Barden Tower along the River Wharfe. Distance, route details, what to see and where to stop along the way."
    },
    "haworth-bronte-country-walk": {
      title: "Haworth Brontë Country Walk Guide | Hike Yorkshire",
      description: "Walk in the footsteps of the Brontës on this Haworth moorland route. A complete guide to the Brontë Country walk including the waterfall and Top Withens."
    },
    "roseberry-topping-history-captain-cook": {
      title: "Roseberry Topping Walk & Captain Cook History | Hike Yorkshire",
      description: "Climb Roseberry Topping and discover its connection to Captain Cook. A full walk guide to one of North Yorkshire's most iconic summits with history and route info."
    },
    "robin-hoods-bay-smuggling-history": {
      title: "Robin Hood's Bay Smuggling History & Walking Guide | Hike Yorkshire",
      description: "Uncover the smuggling history of Robin Hood's Bay on the Yorkshire Coast. A guide to the village's fascinating past and the coastal walks surrounding it."
    }
  };

  // For dynamic blogs, you might want to fetch metadata from your API
  if (!titles[slug]) {
    try {
      const response = await fetch(`https://hikeyorkshire.com/api/get-blog.php?slug=${slug}`);
      if (response.ok) {
        const blog = await response.json();
        return {
          title: `${blog.title} | Hike Yorkshire`,
          description: blog.excerpt || blog.subtitle || `Read our complete guide to ${blog.title} in Yorkshire.`
        };
      }
    } catch (error) {
      console.error('Failed to fetch blog metadata:', error);
    }
  }

  return {
    title: titles[slug]?.title || "Hike Yorkshire Blog",
    description: titles[slug]?.description || "Explore Yorkshire hiking blogs, walking routes and outdoor adventures."
  };
}