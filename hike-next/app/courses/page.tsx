import Courses from "@/Courses/courses";

export const metadata = {
  title: "Hiking & Walking Courses in Yorkshire | Hike Yorkshire",
  description:
    "Build your confidence and skills with our Yorkshire hiking courses. Navigation, fell walking, and outdoor skills courses for all levels across the Yorkshire Dales and Moors.",
 alternates: {
    canonical: "https://hikeyorkshire.com/courses",
  }
  };

export default function Page() {
  return <Courses />;
}