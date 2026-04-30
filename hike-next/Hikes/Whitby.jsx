"use client"
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { MapPin, Clock, Mountain } from "lucide-react";
import Navbar from "../Components/Navbar/Navbar";
import BookingModal from "@/Booking/DayHikeBookingMode";




export default function WhitbyToRobinHoodsBay() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();
  const Yorkshire3peaksImage="/assets/DayHikes/dalesway-hero.webp"
  // Images (Next.js public folder paths)

const lengthIcon = "/assets/DayHikes/lengthIcon.webp";
const timeIcon = "/assets/DayHikes/timeIcon.webp";
const difficultyIcon = "/assets/DayHikes/difficultyIcon.webp";

const checkIcon = "/assets/DayHikes/checkIcon.webp";
const jimmyHelping = "/assets/DayHikes/jimmy-helping.webp";
const pic2 = "/assets/DayHikes/daleway-photo2.webp";
const backgroundImage = "/assets/DayHikes/daleway-photo1.webp";

const pics2 = "/assets/DayHikes/pic2.webp";
const pics1 = "/assets/DayHikes/pic1.webp";

const icon1 = "/assets/DayHikes/icon1.webp";
const icon2 = "/assets/DayHikes/icon2.webp";
const icon3 = "/assets/DayHikes/icon3.webp";

const Whiteby = "/assets/DayHikes/Whitby-to-robin.webp";
const WhitbyImage2 = "/assets/WhyChoose/Whitby-2.webp";

const BukdenPike="/assets/DayHikes/bukden-pike.webp";
const  IlkleyMoorImage="/assets/DayHikes/Ilkley-moor-1.webp"
const MalcomCoveImage="/assets/DayHikes/Malham-Cove-1.webp"

  // Hike cards data with route paths
  const otherHikes = [
    {
      id: 1,
      title: "Yorkshire 3 Peaks",
      description: "Conquer Yorkshire's iconic 3 Peaks in a legendary 25-mile endurance challenge",
      distance: "25 miles",
      duration: "12 hours",
      difficulty: "Hard",
      image: Yorkshire3peaksImage,
      route: "/yorkshire-3-peaks"
    },
    {
      id: 2,
      title: "Malham Cove and Janet's Foss",
      description: "Explore limestone cliffs, woodlands, and one of Yorkshire's most loved waterfalls",
      distance: "4.5 miles",
      duration: "3 hours",
      difficulty: "Easy",
      image: MalcomCoveImage,
      route: "/malham-cove-janets-foss"
    },
    {
      id: 3,
      title: "Buckden Pike",
      description: "Climb one of the Dales' most distinctive peaks with panoramic views over Upper Wharfedale",
      distance: "9 miles",
      duration: "3.5 hours",
      difficulty: "Intermediate",
      image: BukdenPike,
      route: "/buckden-pike"
    },
    {
      id: 4,
      title: "Ilkley Moor and the 12 Apostles",
      description: "Wander across heather moors and visit the ancient stone circle high above Ilkley",
      distance: "5 miles",
      duration: "3 hours",
      difficulty: "Intermediate",
      image: IlkleyMoorImage,
      route: "/ilkley-moor"
    }
  ];

  // Function to handle card click navigation
  const handleCardClick = (route) => {
    router.push(route);
  };

  return (
    <section className="font-['Nunito_Sans'] text-gray-800">
      {/* Navbar + Hero Section */}
      <Navbar />
     
      <div
        className="relative h-[400px] sm:h-[500px] md:h-[580px] bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(76.04deg, rgba(0, 0, 0, 0.4) 0.56%, rgba(102, 102, 102, 0) 43.21%), url(${Whiteby})`,
        }}
      >
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-end items-start px-4 sm:px-10 md:px-16 pb-6 md:pb-10 space-y-8 sm:space-y-10">
          {/* Block 1: Title + Description */}
          <div className="space-y-1 sm:space-y-2">
            <h1 className="font-['Raleway'] text-white font-semibold text-[22px] sm:text-[30px] md:text-[42px] leading-tight">
              Whitby to Robin Hood's Bay
            </h1>

            <p className="text-white text-[12px] sm:text-[14px] md:text-[18px] max-w-full sm:max-w-[650px] leading-[150%]">
              Walk a stunning section of the Cleveland Way from Whitby to Robin Hood's Bay, with dramatic clifftop views over the North Sea and a rich mix of coastal wildlife and history.
            </p>
          </div>

          {/* Block 2: Stats */}
          <div className="flex flex-wrap gap-4 sm:gap-6 text-white text-sm sm:text-base">
            <div className="flex items-center gap-2">
              <img src={lengthIcon} alt="Length" className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-sm sm:text-base">
                <span className="font-semibold">Length:</span> 7 miles
              </span>
            </div>

            <div className="flex items-center gap-2">
              <img src={timeIcon} alt="Duration" className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-sm sm:text-base">
                <span className="font-semibold">Duration:</span> 4 hours
              </span>
            </div>

            <div className="flex items-center gap-2">
              <img src={difficultyIcon} alt="Difficulty" className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-sm sm:text-base">
                <span className="font-semibold">Difficulty:</span> Intermediate
              </span>
            </div>
          </div>

          {/* Block 3: Price & Button */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            <p className="text-white font-semibold text-[16px] sm:text-[18px]">
              From £35 per person
            </p>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-[#C56441] font-['Nunito_Sans'] hover:bg-[#a85632] text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300"
            >
              Request Now
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-10 md:px-16">
        <div className="grid md:grid-cols-2 mt-5 gap-8 md:gap-20">
          <div className="font-['Nunito_Sans']">
            <p className="mb-6 text-[18px] leading-[30px] text-gray-700 font-normal">
              Discover Yorkshire's most breathtaking long-distance trails with Hike Yorkshire's expertly guided
              multi-day adventures. Our itineraries combine stunning landscapes, fascinating local history,
              and comfortable accommodation leaving you free to focus on the journey.
            </p>
          </div>

          <div className="space-y-3">
                     <div className="flex items-start gap-3 font-['Nunito_Sans'] font-bold text-[18px] leading-[30px] text-[#C56441]">
                       <img src={checkIcon} alt="check icon" className="w-4 h-4 mt-2 flex-shrink-0" />
                       <span>Ex- military guides</span>
                     </div>
         
                     <div className="flex items-start gap-3 font-['Nunito_Sans'] font-bold text-[18px] leading-[30px] text-[#C56441]">
                       <img src={checkIcon} alt="check icon" className="w-4 h-4 mt-2 flex-shrink-0" />
                       <span>Educational hikes</span>
                     </div>
         
                     <div className="flex items-start gap-3 font-['Nunito_Sans'] font-bold text-[18px] leading-[30px] text-[#C56441]">
                       <img src={checkIcon} alt="check icon" className="w-4 h-4 mt-2 flex-shrink-0" />
                       <span>Historical and folklore commentary throughout</span>
                     </div>
         
                     <div className="flex items-start gap-3 font-['Nunito_Sans'] font-bold text-[18px] leading-[30px] text-[#C56441]">
                       <img src={checkIcon} alt="check icon" className="w-4 h-4 mt-2 flex-shrink-0" />
                       <span>Small groups</span>
                     </div>
                   </div>
        </div>

        {/* Do you need a guide? Section */}
        <div className="mt-8 mb-10">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center bg-[#FFF6EE] rounded-xl p-6 md:p-10">
            {/* Image */}
            <div className="flex items-center">
              <div className="overflow-hidden rounded-xl shadow-md w-full h-[220px] md:h-[260px]">
                <img
                  src={jimmyHelping}
                  alt="Jimmy helping hikers on a trail"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Text */}
            <div className="flex flex-col justify-center space-y-4 max-w-[520px]">
              <p className="font-['Nunito_Sans'] font-semibold text-[16px] md:text-[18px] text-[#C56441]">
                Do you need a guide?
              </p>

              <p className="font-['Nunito_Sans'] text-[14px] md:text-[16px] leading-[28px] text-gray-700">
                Hike Yorkshire provides ex-military guides who are highly trained in
                navigation, first aid, fieldcraft, and fitness. Their local knowledge
                is invaluable in ensuring your day out is both educational and enjoyable.
              </p>

              <p className="font-['Nunito_Sans'] text-[14px] md:text-[16px] leading-[28px] text-gray-700">
                Conditions on the hills can change quickly, so taking a well-drilled
                professional along is the best way to make sure everyone returns
                safe and happy.
              </p>
            </div>
          </div>
        </div>

        {/* UPDATED SECTION - Heading, Paragraphs, and Map */}
        <div className="mt-8 mb-16">
          {/* Heading */}
          <h2 className="font-['Nunito_Sans'] font-semibold text-[20px] md:text-[22px] leading-[30px] md:leading-[32px] text-[#C56441] tracking-[0] mb-6">
            Follow one of North Yorkshire's most scenic coastal trails along the Cleveland Way, from historic Whitby to the smuggler's haven of Robin Hood's Bay.
          </h2>

          {/* Paragraph 1 */}
          <p className="font-['Nunito_Sans'] font-normal text-[14px] md:text-[16px] leading-[32px] text-[#434343] mb-8">
            This clifftop path offers breathtaking views of the North Sea, dramatic headlands, and glimpses of seals and seabirds along the rugged coastline. Beginning beneath the ruins of Whitby Abbey, the route meanders south past wildflower meadows and fishing coves, finishing in the cobbled streets of Robin Hood's Bay, perfect for a celebratory drink or ice cream by the harbour.
          </p>

          {/* Paragraph 2 */}
          <p className="font-['Nunito_Sans'] font-normal text-[14px] md:text-[16px] leading-[32px] text-[#434343] mb-12">
            The terrain includes a few short climbs and descents but is well marked and ideal for those wanting a mix of fresh sea air, heritage and natural beauty. Guided walks highlight local legends, maritime history and coastal conservation.
          </p>

          {/* Map */}
          <div className="flex justify-center">
            <iframe className="alltrails" src="https://www.alltrails.com/widget/trail/england/north-yorkshire/whitby-to-robin-hood-s-bay?u=m&sh=6sspau" width="100%" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" title="AllTrails: Trail Guides and Maps for Hiking, Camping, and Running"></iframe>

          </div>
        </div>
      </div>

      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      <section
        className="relative flex flex-col md:flex-row items-stretch overflow-hidden py-0"
        style={{
          height: "auto",
          minHeight: "400px",
        }}
      >
        {/* LEFT SIDE - TEXT with gradient background */}
        <div
          className="relative flex flex-col justify-center w-full md:w-[65%] px-6 md:px-20 bg-[#E6AA7C] overflow-hidden py-10 md:py-0"
          style={{
            height: "auto",
            minHeight: "400px",
          }}
        >
          {/* Gradient (only visible on desktop) */}
          <div
            className="absolute inset-0 z-0 hidden md:block"
            style={{
              background:
                "linear-gradient(90deg, #E6AA7C 0%, #E6AA7C 60%, rgba(230,170,124,0.9) 75%, rgba(230,170,124,0.7) 85%, rgba(230,170,124,0.4) 92%, rgba(230,170,124,0) 100%)",
            }}
          ></div>

          {/* Content */}
          <div className="relative z-10">
            <h3 className="font-['Nunito_Sans'] font-bold text-[22px] leading-[32px] text-[#9B3F1E] mb-6">
              Sights of Interest
            </h3>

            <ul className="space-y-2 font-['Nunito_Sans'] text-[16px] leading-[28px] list-disc pl-6 marker:text-[#C56441]">
              <li>
                <span className="font-bold text-[#9B3F1E]">Whitby Abbey</span>
                <span className="text-[#363535] font-semibold">
                  {" "}– iconic Gothic ruins overlooking the North Sea, immortalised in Bram Stoker's Dracula
                </span>
              </li>

              <li>
                <span className="font-bold text-[#9B3F1E]">Cleveland Way Coastal Path</span>
                <span className="text-[#363535] font-semibold">
                  {" "}– stunning clifftop walking route with panoramic sea views
                </span>
              </li>

              <li>
                <span className="font-bold text-[#9B3F1E]">Robin Hood's Bay</span>
                <span className="text-[#363535] font-semibold">
                  {" "}– historic fishing village with cobbled streets and traditional cottages
                </span>
              </li>

              <li>
                <span className="font-bold text-[#9B3F1E]">North Sea Cliffs</span>
                <span className="text-[#363535] font-semibold">
                  {" "}– dramatic sandstone cliffs offering spectacular coastal scenery
                </span>
              </li>

              <li>
                <span className="font-bold text-[#9B3F1E]">Whitby Harbour</span>
                <span className="text-[#363535] font-semibold">
                  {" "}– bustling fishing port with maritime heritage and fresh seafood
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* RIGHT SIDE - IMAGE (hidden on mobile) */}
        <div className="relative hidden md:block w-[35%] h-[400px] overflow-hidden">
          <img
            src={pic2}
            alt="Whitby coastal scenery"
            className="w-full h-full object-cover object-center"
          />

          {/* Blending overlay */}
          <div
            className="absolute left-[-80px] top-0 h-full w-[180px] pointer-events-none"
            style={{
              background:
                "linear-gradient(to right, rgba(230,170,124,1) 50%, rgba(230,170,124,0.9) 40%, rgba(230,170,124,0.7) 60%, rgba(230,170,124,0.4) 80%, rgba(230,170,124,0.2) 100%, rgba(230,170,124,0) 120%)",
              filter: "blur(10px)",
            }}
          ></div>
        </div>

        {/* Subtle seam gradient (desktop only) */}
        <div
          className="absolute top-0 bottom-0 left-[65%] w-[60px] pointer-events-none z-20 hidden md:block"
          style={{
            background:
              "linear-gradient(90deg, rgba(230,170,124,0.3) 50%, rgba(230,170,124,0) 100%)",
            transform: "translateX(-50%)",
          }}
        ></div>
      </section>

      {/* WHY CHOOSE */}
   <section
  className="relative py-10 px-6 md:px-32 bg-cover bg-center bg-no-repeat overflow-hidden"
  style={{
    backgroundImage: `url(${backgroundImage})`,
  }}
>
  {/* WHITE SOFT OVERLAY */}
  <div className="absolute inset-0 bg-white/60 backdrop-blur-[1px]"></div>

  {/* MAIN CONTENT */}
  <div className="relative z-10 grid grid-cols-1 md:grid-cols-[45%_55%] gap-8 items-center">

    {/* LEFT — IMAGE AREA */}
    <div className="relative flex justify-center md:justify-start h-[260px] md:h-[360px]">

      {/* PRIMARY IMAGE (mobile + desktop) */}
      <img
        src={WhitbyImage2}
        alt="Whitby Abbey view"
        className="
          w-[220px] h-[240px]
          md:w-[200px] md:h-[300px]
          object-cover
          md:-rotate-3
        "
      />

      {/* SECOND IMAGE (desktop only) */}
      <img
        src={Whiteby}
        alt="Robin Hood's Bay coastal view"
        className="
          hidden md:block
          w-[230px] h-[320px]
          object-cover
          absolute top-12 left-20 rotate-3
        "
      />
    </div>

    {/* RIGHT — TEXT CONTENT */}
    <div className="text-center md:text-left">
      <h2
        className="
          font-[Raleway] font-semibold italic text-[#4B4B4B]
          text-[18px] sm:text-[22px] md:text-[26px] lg:text-[30px]
          leading-tight mb-6
        "
      >
        Why Choose Whitby to Robin Hood&apos;s Bay?
      </h2>

      <ul className="space-y-4 text-[15px] md:text-[18px] text-[#C56441] font-medium">
        <li className="flex gap-3 items-start">
          <img src={icon1} className="w-6 h-6 object-contain" alt="Coastal" />
          <span className="font-['Nunito_Sans'] font-semibold leading-[26px]">
            One of Yorkshire’s most spectacular coastal walks with breathtaking clifftop views over the North Sea
          </span>
        </li>

        <li className="flex gap-3 items-start">
          <img src={icon2} className="w-6 h-6 object-contain" alt="History" />
          <span className="font-['Nunito_Sans'] font-semibold leading-[26px]">
            A route steeped in maritime heritage, from Dracula’s Whitby Abbey to smugglers’ Robin Hood’s Bay
          </span>
        </li>

        <li className="flex gap-3 items-start">
          <img src={icon3} className="w-6 h-6 object-contain" alt="Wildlife" />
          <span className="font-['Nunito_Sans'] font-semibold leading-[26px]">
            Abundant coastal wildlife including seals, seabirds, and wildflowers along the rugged coastline
          </span>
        </li>
      </ul>
    </div>

  </div>
</section>

      {/* OTHER HIKES SECTION */}
      <section className="bg-white py-10 md:py-12 px-3 sm:px-4 md:px-6">
        <div className="max-w-[1200px] mx-auto">
          {/* Section Heading */}
         

          {/* HIKE CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {otherHikes.map((hike) => (
              <div
                key={hike.id}
                onClick={() => handleCardClick(hike.route)}
                className="
                  bg-white rounded-lg shadow-md hover:shadow-lg
                  transition-all duration-300 overflow-hidden
                  group cursor-pointer transform hover:-translate-y-1
                  border border-gray-100
                  active:scale-[0.98] transition-transform
                "
                role="button"
                tabIndex={0}
                onKeyPress={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    handleCardClick(hike.route);
                  }
                }}
              >
                {/* Image */}
                <div className="h-40 md:h-44 overflow-hidden relative">
                  <img
                    src={hike.image}
                    alt={hike.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </div>

                {/* Content */}
                <div className="p-3 md:p-4">
                  <h3 className="font-[Raleway] font-semibold text-[16px] md:text-[17px] text-gray-800 mb-1 group-hover:text-[#C56441] transition-colors">
                    {hike.title}
                  </h3>

                  <p className="font-['Nunito_Sans'] text-[12px] md:text-[13px] text-gray-600 mb-3 leading-snug line-clamp-2">
                    {hike.description}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-1">
                    <div className="text-center">
                      <div className="flex flex-col items-center">
                        <div className="w-7 h-7 bg-gray-100 rounded-full flex items-center justify-center mb-0.5 group-hover:bg-[#FFF6EE] transition-colors">
                          <MapPin className="w-3 h-3 text-gray-600" />
                        </div>
                        <span className="font-['Nunito_Sans'] text-[11px] font-bold text-gray-800">
                          {hike.distance}
                        </span>
                      </div>
                    </div>

                    <div className="text-center">
                      <div className="flex flex-col items-center">
                        <div className="w-7 h-7 bg-gray-100 rounded-full flex items-center justify-center mb-0.5 group-hover:bg-[#FFF6EE] transition-colors">
                          <Clock className="w-3 h-3 text-gray-600" />
                        </div>
                        <span className="font-['Nunito_Sans'] text-[11px] font-bold text-gray-800">
                          {hike.duration}
                        </span>
                      </div>
                    </div>

                    <div className="text-center">
                      <div className="flex flex-col items-center">
                        <div className="w-7 h-7 bg-gray-100 rounded-full flex items-center justify-center mb-0.5 group-hover:bg-[#FFF6EE] transition-colors">
                          <Mountain className="w-3 h-3 text-gray-600" />
                        </div>
                        <span className="font-['Nunito_Sans'] text-[11px] font-bold text-gray-800">
                          {hike.difficulty}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>


        </div>
      </section>
    </section>
  );
}