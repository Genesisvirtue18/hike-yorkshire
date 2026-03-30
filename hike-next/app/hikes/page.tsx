import Hikes from "@/Hikes/DayHikes";

export const metadata = {
  metadataBase: new URL("https://hikeyorkshire.com"),

  title: "Yorkshire Hiking Trails & Walking Routes",
  description:
    "Discover the best walking routes in Yorkshire, from beginner-friendly trails to expert-level hikes.",

  alternates: {
    canonical: "https://hikeyorkshire.com/hikes",
  },

  openGraph: {
    title: "Yorkshire Hiking Trails & Walking Routes",
    description:
      "Discover the best walking routes in Yorkshire, from beginner-friendly trails to expert-level hikes.",
    url: "https://hikeyorkshire.com/hikes",
    siteName: "Hike Yorkshire",
    locale: "en_GB",
    type: "website",

    images: [
      {
        url: "/assets/DayHikes/dalesway-hero.webp",
        width: 1200,
        height: 630,
        alt: "Yorkshire hiking trails",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Yorkshire Hiking Trails & Walking Routes",
    description:
      "Discover the best walking routes in Yorkshire, from beginner-friendly trails to expert-level hikes.",
    images: ["/assets/DayHikes/dalesway-hero.webp"],
  },
};

export default function Page() {
  return <Hikes />;
}