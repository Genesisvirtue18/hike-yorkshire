// import React from "react";

// import Hero from "@/Components/hero/Hero";
// import Strengths from "@/Components/Strengths/Strengths";
// import Team from "@/Components/team/Team";
// import FeaturedHikes from "@/Components/FeaturedHikes/FeaturedHikes";
// import MultiDayHikes from "@/Components/MultidayHike/MultidayHike";
// import AboutSection from "@/Components/About/about";
// import SecretYorkshire from "@/Components/SecretYorkshire/SecretYorkshire";
// import Testimonials from "@/Components/testimonials/Testimonials";
// import BlogSection from "@/Components/BlogSection/BlogSection";
// import WalkingTours from "@/Components/WalkingTours/WalkingTours";
// import TailoredHikeSection from "@/Components/TailoredHikeSection/TailoredHikeSection";
// import NavBar from "@/Components/NavBar/Navbar";
// import Footer from "@/Components/Footer/Footer";

// export default function Home() {
//   return (
//     <div className="w-full overflow-hidden">

//       {/* <NavBar /> */}
//            {/*  <Hero />
//         <Strengths />
//       <Team />
//       <FeaturedHikes />
//       <MultiDayHikes />
//       <AboutSection />
//       <SecretYorkshire />
//       <WalkingTours />
//       <TailoredHikeSection />
//       <Testimonials />
//       <BlogSection />
//       <Footer /> */}
//     </div>
//   );
// }

import React from "react";


import Hero from "@/Components/hero/Hero";
import Strengths from "@/Components/Strengths/Strengths";
import Team from "@/Components/team/Team";
import FeaturedHikes from "@/Components/FeaturedHikes/FeaturedHikes";
import MultiDayHikes from "@/Components/MultidayHike/MultidayHike";
import AboutSection from "@/Components/About/about";
import SecretYorkshire from "@/Components/SecretYorkshire/SecretYorkshire";
import Testimonials from "@/Components/testimonials/Testimonials";
 import BlogSection from "@/Components/BlogSection/BlogSection";
import WalkingTours from "@/Components/WalkingTours/WalkingTours";
  import TailoredHikeSection from "@/Components/TailoredHikeSection/TailoredHikeSection";
import NavBar from "@/Components/NavBar/Navbar";
 import Footer from "@/Components/Footer/Footer";





export default function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Strengths />
      <Team />
      <FeaturedHikes />
      <MultiDayHikes />
      <AboutSection />
      <SecretYorkshire />
      <WalkingTours />
      <TailoredHikeSection />
       <Testimonials />
       <BlogSection />
        <Footer />


    </div>
  );
}