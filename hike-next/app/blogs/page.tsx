import AllBlog from "@/BackendBlogs/AllBlogs";

export const metadata = {
  title: "Yorkshire Hiking Blog | Trail Guides, Tips & Outdoor Advice",
  description:
    "Read the Hike Yorkshire blog for trail guides, walking tips, local history and outdoor advice. Your go-to resource for exploring Yorkshire on foot.",
  alternates: {
    canonical: "https://hikeyorkshire.com/blogs",
  },
  };

export default function Page() {
  return <AllBlog />;
}