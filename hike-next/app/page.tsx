// import Home from "@/Components/Home";

// export const metadata = {
//   metadataBase: new URL("https://hikeyorkshire.com"),

//   title: "Hike Yorkshire | Walking Trails, Route Guides & Hiking Tips",

//   description:
//     "Explore the best hiking trails in Yorkshire. From beginner walks to the Three Peaks challenge, find route guides, local tips and walking advice for all abilities.",

//   alternates: {
//     canonical: "https://hikeyorkshire.com",
//   },

//   openGraph: {
//     title: "Hike Yorkshire | Walking Trails, Route Guides & Hiking Tips",
//     description:
//       "Explore the best hiking trails in Yorkshire. Discover route guides, walking tips and iconic hikes like the Yorkshire Three Peaks.",
//     url: "https://hikeyorkshire.com",
//     siteName: "Hike Yorkshire",
//     type: "website",
//     images: [
//       {
//         url: "/Logo/HY-Logo-removebg.webp",
//         width: 1200,
//         height: 630,
//         alt: "Hike Yorkshire",
//       },
//     ],
//   },

//   twitter: {
//     card: "summary_large_image",
//     title: "Hike Yorkshire | Walking Trails, Route Guides & Hiking Tips",
//     description:
//       "Explore the best hiking trails in Yorkshire with route guides and local tips.",
//     images: ["/Logo/HY-Logo-removebg.webp"],
//   },
// };

// export default function Page() {
//   return <Home />;
// }

import Home from "@/Components/Home";

export const metadata = {
  metadataBase: new URL("https://hikeyorkshire.com"),

  title: "Hike Yorkshire | Walking Trails, Route Guides & Hiking Tips",

  description:
    "Explore the best hiking trails in Yorkshire. From beginner walks to the Three Peaks challenge, find route guides, local tips and walking advice for all abilities.",

  alternates: {
    canonical: "https://hikeyorkshire.com",
  },

  openGraph: {
    title: "Hike Yorkshire | Walking Trails, Route Guides & Hiking Tips",
    description:
      "Explore the best hiking trails in Yorkshire. Discover route guides, walking tips and iconic hikes like the Yorkshire Three Peaks.",
    url: "https://hikeyorkshire.com",
    siteName: "Hike Yorkshire",
    locale: "en_GB",
    type: "website",

    images: [
      {
        url: "/assets/Hero/hero-image.webp",
        width: 1200,
        height: 630,
        alt: "Hiking in Yorkshire",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Hike Yorkshire | Walking Trails, Route Guides & Hiking Tips",
    description:
      "Explore the best hiking trails in Yorkshire with route guides and local tips.",
    images: ["/assets/Hero/hero-image.webp"],
  },
};

export default function Page() {
  return <Home />;
}