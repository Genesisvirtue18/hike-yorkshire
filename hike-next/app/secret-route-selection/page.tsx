import SecretRoutesSection from "@/Components/WalkingTours/secretrouteselection";

export const metadata = {
  title: "Secret Walking Routes in Yorkshire | Hidden Trails & Guided Adventures",
  
  description:
    "Discover secret walking routes in Yorkshire with expert local guides. Explore hidden trails across the Yorkshire Dales, North York Moors and coast. Perfect for unique hiking experiences and private tours.",

  keywords: [
    "secret routes Yorkshire",
    "hidden trails Yorkshire",
    "Yorkshire walking tours",
    "guided hikes Yorkshire",
    "Yorkshire Dales walks",
    "North York Moors hiking",
    "private hiking tours UK"
  ],

  openGraph: {
    title: "Secret Walking Routes in Yorkshire | Hidden Trails",
    description:
      "Explore hidden and secret walking routes in Yorkshire with expert guides. Unique hiking experiences across the Dales and Moors.",
    url: "https://hikeyorkshire.com/secret-route-selection",
    siteName: "Hike Yorkshire",
    images: [
      {
        url: "/assets/WalkingTour/secret-route-hero.webp", // or any banner image
        width: 1200,
        height: 630,
        alt: "Secret walking routes in Yorkshire",
      },
    ],
    type: "website",
  },


  alternates: {
    canonical: "https://hikeyorkshire.com/secret-route-selection",
  },
};

export default function Page() {
  return <SecretRoutesSection />;
}