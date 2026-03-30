import WalkingTours from "@/WalkingTours/walkingtours";

export const metadata = {
  title: "Guided Walking Tours in Yorkshire | Hike Yorkshire",
  description:
    "Join a guided walking tour in Yorkshire and explore the Dales, Moors and Coast with an experienced local guide. Perfect for individuals, groups and corporate teams.",
  alternates: {
    canonical: "https://hikeyorkshire.com/walking-tours",
  },
  };

export default function Page() {
  return <WalkingTours />;
}