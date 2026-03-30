
import YorkshireThreePeaks from "@/Hikes/YorkshireThreePeaks";
import Whitby from "@/Hikes/Whitby";
import MalhamCoveAndJanetsFoss from "@/Hikes/MalhamCoveAndJanetsFoss";
import BoltonAbbeyAndSimonsSeat from "@/Hikes/BoltonAbbeyAndSimonsSeat";
import RoseberryToppingPage from "@/Hikes/RoseberryToppingPage";
import IlkleyMoorPage from "@/Hikes/IlkleyMoorPage";
import BuckdenPike from "@/Hikes/BuckdenPike";
import IngletonFalls from "@/Hikes/IngletonFalls";
import Whernside from "@/Hikes/Whernside";
import DalesWay from "@/Hikes/Daleway";
import CoastToCoast from "@/Hikes/CoastToCoast";
import Cleveland from "@/Hikes/cleveland";

const seo: Record<string, { title: string; description: string }> = {
  "yorkshire-3-peaks": {
    title: "Yorkshire Three Peaks Challenge | Route Guide & Tips | Hike Yorkshire",
    description:
      "Plan your Yorkshire Three Peaks challenge with our complete route guide. Distance, elevation, timing, kit advice and local tips for tackling Pen-y-ghent, Whernside and Ingleborough.",
  },

  "malham-cove-janets-foss": {
    title: "Malham Cove & Janet's Foss Walk | Hike Yorkshire",
    description:
      "Explore Malham Cove limestone cliffs and Janet's Foss waterfall on a scenic guided walk in the Yorkshire Dales.",
  },
   "bolton-abbey": {
    title: "Bolton Abbey & Simon's Seat Hike | Hike Yorkshire",
    description:
      "Walk from Bolton Abbey ruins to Simon's Seat with sweeping views over Wharfedale on this beautiful Yorkshire hike.",
  },
   "roseberry-topping-captain-cooks-monument": {
    title: "Roseberry Topping & Captain Cook's Monument Walk | Hike Yorkshire",
    description:
      "Hike to the iconic Roseberry Topping and Captain Cook's Monument with panoramic views across the North York Moors.",
  },

  "ilkley-moor": {
    title: "Ilkley Moor & 12 Apostles Stone Circle Walk | Hike Yorkshire",
    description:
      "Explore Ilkley Moor and visit the ancient 12 Apostles stone circle on a scenic guided hike above Wharfedale.",
  },
   "buckden-pike": {
    title: "Buckden Pike Circular Walk | Hike Yorkshire",
    description:
      "A rewarding circular hike to Buckden Pike with sweeping views across Upper Wharfedale and the Yorkshire Dales.",
  },

  "whitby-robin-hoods-bay": {
    title: "Whitby to Robin Hood's Bay Coastal Walk | Hike Yorkshire",
    description:
      "Walk a stunning section of the Cleveland Way from Whitby to Robin Hood's Bay with dramatic clifftop views of the North Sea.",
  },
"ingleton-falls": {
    title: "Ingleton Falls Waterfall Trail | Hike Yorkshire",
    description:
      "Discover the famous Ingleton Falls Trail featuring dramatic waterfalls, limestone gorges and woodland paths.",
  },
   "whernside": {
    title: "Whernside Hike | Yorkshire's Highest Peak | Hike Yorkshire",
    description:
      "Climb Whernside, the highest of the Yorkshire Three Peaks, and enjoy spectacular views across the Yorkshire Dales.",
  },


  daleway: {
    title: "Dales Way Walking Route | Complete Guide | Hike Yorkshire",
    description:
      "Everything you need to walk the Dales Way. An 80-mile long distance route through the Yorkshire Dales from Ilkley to Bowness-on-Windermere, with route info, stages and practical tips.",
  },

  "coast-to-coast": {
    title: "Coast to Coast Walk Guide | Yorkshire Stages & Tips | Hike Yorkshire",
    description:
      "Tackle the iconic Coast to Coast walk with our Yorkshire route guide. From the Dales to the Moors, find stage breakdowns, accommodation tips and everything you need to plan your walk.",
  },

  cleveland: {
    title: "Cleveland Way Walking Route | Complete Guide | Hike Yorkshire",
    description:
      "Plan your Cleveland Way walk with our complete guide. A 110-mile National Trail through the North York Moors and Yorkshire Coast, with route stages, highlights and practical advice.",
  },
};

// ✅ STORE COMPONENT (NOT JSX)
const pages: Record<string, React.ComponentType> = {
  "yorkshire-3-peaks": YorkshireThreePeaks,
  "whitby-robin-hoods-bay": Whitby,
  "malham-cove-janets-foss": MalhamCoveAndJanetsFoss,
  "bolton-abbey": BoltonAbbeyAndSimonsSeat,
  "roseberry-topping-captain-cooks-monument": RoseberryToppingPage,
  "ilkley-moor": IlkleyMoorPage,
  "buckden-pike": BuckdenPike,
  "ingleton-falls": IngletonFalls,
  "whernside": Whernside,
  "daleway": DalesWay,
  "coast-to-coast": CoastToCoast,
  "cleveland": Cleveland
};

// ✅ PAGE
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const Component = pages[slug];

  if (!Component) {
    return <div>Not Found</div>;
  }

  return <Component />;
}

// ✅ SSG (AUTO GENERATE ALL SLUGS)
export async function generateStaticParams() {
  return Object.keys(pages).map((slug) => ({
    slug,
  }));
}

// ✅ OPTIONAL (BEST PRACTICE)
export const revalidate = 60; // ISR (optional)

// ✅ OPTIONAL SEO METADATA
// export async function generateMetadata({
//   params,
// }: {
//   params: Promise<{ slug: string }>;
// }) {
//   const { slug } = await params;

//   const title = slug.replace(/-/g, " ");

//   return {
//     title: `${title} | Hike Yorkshire`,
//     description: `Explore ${title} hike in Yorkshire with guided tours.`,
//   };
// }
// export async function generateMetadata({
//   params,
// }: {
//   params: Promise<{ slug: string }>;
// }) {
//   const { slug } = await params;

//   const data = seo[slug];

//   if (!data) {
//     return {
//       title: "Hike Yorkshire",
//       description: "Explore hiking routes across Yorkshire.",
//     };
//   }

//   return {
//     title: data.title,
//     description: data.description,
//     openGraph: {
//       title: data.title,
//       description: data.description,
//       url: `https://hikeyorkshire.com/hikes/${slug}`,
//       siteName: "Hike Yorkshire",
//       type: "website",
//     },
//   };
// }
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const data = seo[slug];

  if (!data) {
    return {
      title: "Hike Yorkshire",
      description: "Explore hiking routes across Yorkshire.",
    };
  }

  const imageUrl = `https://hikeyorkshire.com/assets/DayHikes/${slug}.webp`;

  return {
    title: data.title,
    description: data.description,

    alternates: {
      canonical: `https://hikeyorkshire.com/hikes/${slug}`,
    },

    openGraph: {
      title: data.title,
      description: data.description,
      url: `https://hikeyorkshire.com/hikes/${slug}`,
      siteName: "Hike Yorkshire",
      type: "website",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: data.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: data.title,
      description: data.description,
      images: [imageUrl],
    },
  };
}