"use client"
import { React, useState } from "react";
import { useRouter } from "next/navigation";
import { MapPin, Clock, Mountain } from "lucide-react";
import BookingModal from "@/Booking/BookingModel";
// import backgroundImage from "../../src/assets/DayHikes/daleway-photo1.webp";
// import clevelandIllustration from "../../src/assets/DayHikes/clevelandIllustration.webp";
// import pics1 from "../../src/assets/DayHikes/pic1.webp";
// import pics2 from "../../src/assets/DayHikes/pic2.webp";
import Navbar from "../Components/NavBar/Navbar";
// import lengthIcon from "../../src/assets/DayHikes/lengthIcon.webp";
// import timeIcon from "../../src/assets/DayHikes/timeIcon.webp";
// import difficultyIcon from "../../src/assets/DayHikes/difficultyIcon.webp";
// import checkIcon from "../../src/assets/DayHikes/checkIcon.webp";
// import icon1 from "../../src/assets/DayHikes/icon1.webp";
// import icon2 from "../../src/assets/DayHikes/icon2.webp";
// import icon4 from "../../src/assets/DayHikes/icon4.webp";
// import clevelandmultiDayHikeImg from "../assets/Hike/cleveland-multidayhike.webp";
// import jimmyHelping from "../../src/assets/DayHikes/jimmy-helping.webp";

// // Import other hike images
// import MalcomCoveImage from "../assets/DayHikes/Malham-Cove-1.webp";

// import Yorkshire3peaksImage from "../assets/DayHikes/dalesway-hero.webp";
// import DalewayDayHikeImg from "../assets/DayHikes/daleway-multidayhike.webp";
// import coasttocoastmultiDayHikeImg from "../assets/Hike/coasttocoast-multidayhike.webp";


export default function ClevelandWay() {
    const [activeDay, setActiveDay] = useState(1);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const router = useRouter();
    // Background and illustration images
const backgroundImage = "/assets/DayHikes/daleway-photo1.webp";
const clevelandIllustration = "/assets/DayHikes/clevelandIllustration.webp";

// Gallery images
const pics1 = "/assets/DayHikes/pic1.webp";
const pics2 = "/assets/DayHikes/pic2.webp";

// Icons
const lengthIcon = "/assets/DayHikes/lengthIcon.webp";
const timeIcon = "/assets/DayHikes/timeIcon.webp";
const difficultyIcon = "/assets/DayHikes/difficultyIcon.webp";
const checkIcon = "/assets/DayHikes/checkIcon.webp";

// Feature icons (icon3 is missing, only these three)
const icon1 = "/assets/DayHikes/icon1.webp";
const icon2 = "/assets/DayHikes/icon2.webp";
const icon4 = "/assets/DayHikes/icon4.webp";

// Multi-day hike images
const clevelandmultiDayHikeImg = "/assets/Hike/cleveland-multidayhike.webp";
const coasttocoastmultiDayHikeImg = "/assets/Hike/coasttocoast-multidayhike.webp";
const DalewayDayHikeImg = "/assets/DayHikes/daleway-multidayhike.webp";

// Day hike images
const MalcomCoveImage = "/assets/DayHikes/Malham-Cove-1.webp";
const Yorkshire3peaksImage = "/assets/DayHikes/dalesway-hero.webp";

// Additional images
const jimmyHelping = "/assets/DayHikes/jimmy-helping.webp";



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
  title: "Coast to Coast",
  description: "Traverse England from sea to sea, a legendary hike across mountains, moors, and countryside.",
  distance: "192 miles",
  duration: "3 × 5 day sections",
  difficulty: "Hard",
  image: coasttocoastmultiDayHikeImg,
  route: "/coast-to-coast"
},
{
  id: 4,
  title: "Dales Way",
  description: "Journey through river valleys, villages, and rolling dales on Yorkshire's most scenic long-distance trail",
  distance: "82 miles",
  duration: "Time 5-8 days",
  difficulty: "Intermediate",
  image: DalewayDayHikeImg,
  route: "/daleway"
}

    ];

    // Function to handle card click navigation
    const handleCardClick = (route) => {
        router.push(route);
    };

    const routeContent = {
        1: [
            `Visit <span class="font-medium text-[#C56441]">Rievaulx Abbey</span>, one of Yorkshire's most atmospheric ruins.`,
            `Enjoy panoramic views from <span class="font-medium text-[#C56441]">Sutton Bank</span>, described by author James Herriot as "the finest view in England."`
        ],

        2: [
            `Traverse the <span class="font-medium text-[#C56441]">Hambleton Hills</span> and climb <span class="font-medium text-[#C56441]">Black Hambleton</span>.`,
            `Pass through <span class="font-medium text-[#C56441]">Osmotherley</span>, a picturesque village with traditional inns and ancient wells.`,
            `Stop at <span class="font-medium text-[#C56441]">Mount Grace Priory</span>, a medieval Carthusian monastery hidden in woodland.`
        ],

        3: [
            `Hike the rugged <span class="font-medium text-[#C56441]">Wainstones</span> and <span class="font-medium text-[#C56441]">Urra Moor</span>, the highest point on the trail.`,
            `Descend into the coastal plain, reaching <span class="font-medium text-[#C56441]">Saltburn-by-the-Sea</span> — a Victorian spa resort with cliffs and pier.`
        ],

        4: [
            `Follow the cliff-top trail through <span class="font-medium text-[#C56441]">Staithes</span>, <span class="font-medium text-[#C56441]">Runswick Bay</span>, <span class="font-medium text-[#C56441]">Whitby</span>, and <span class="font-medium text-[#C56441]">Robin Hood's Bay</span>.`,
            `Explore <span class="font-medium text-[#C56441]">Whitby Abbey</span>, <span class="font-medium text-[#C56441]">Captain Cook's Museum</span>, and the cobbled harbour.`,
            `End at <span class="font-medium text-[#C56441]">Scarborough Castle</span>, overlooking golden beaches and sea cliffs.`
        ],
    };

    return (
        <section className="font-['Nunito_Sans'] text-gray-800">
            {/* Navbar + Hero Section */}
            <Navbar />
          
            <div
                className="relative h-[400px] sm:h-[500px] md:h-[580px] bg-cover bg-center"
                style={{
                    backgroundImage: `linear-gradient(76.04deg, rgba(0, 0, 0, 0.4) 0.56%, rgba(102, 102, 102, 0) 43.21%), url(${clevelandmultiDayHikeImg})`,
                }}
            >
                <div className="absolute inset-0 bg-black/50 flex flex-col justify-end items-start px-4 sm:px-10 md:px-16 pb-6 md:pb-10 space-y-8 sm:space-y-10">
                    {/* Block 1: Title + Description */}
                    <div className="space-y-1 sm:space-y-2">
                        <h1 className="font-['Raleway'] text-white font-semibold text-[22px] sm:text-[30px] md:text-[42px] leading-tight">
                            The Cleveland Way
                        </h1>

                        <p className="text-white text-[12px] sm:text-[14px] md:text-[18px] max-w-full sm:max-w-[650px] leading-[150%]">
                            A journey through Yorkshire's pastoral heart, from Irish Sea to North Sea
                        </p>
                    </div>

                    {/* Block 2: Stats */}
                    <div className="flex flex-wrap gap-4 sm:gap-6 text-white text-sm sm:text-base">
                        <div className="flex items-center gap-2">
                            <img src={lengthIcon} alt="Length" className="w-4 h-4 sm:w-5 sm:h-5" />
                            <span className="text-sm sm:text-base">
                                <span className="font-semibold">Length:</span> 109 miles
                            </span>
                        </div>

                        <div className="flex items-center gap-2">
                            <img src={timeIcon} alt="Duration" className="w-4 h-4 sm:w-5 sm:h-5" />
                            <span className="text-sm sm:text-base">
                                <span className="font-semibold">Duration:</span> 7-10 days
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
                            From £950 per person
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
                            <span>Qualified mountain leaders and local guides</span>
                        </div>

                        <div className="flex items-start gap-3 font-['Nunito_Sans'] font-bold text-[18px] leading-[30px] text-[#C56441]">
                            <img src={checkIcon} alt="check icon" className="w-4 h-4 mt-2 flex-shrink-0" />
                            <span>Daily baggage transfers</span>
                        </div>

                        <div className="flex items-start gap-3 font-['Nunito_Sans'] font-bold text-[18px] leading-[30px] text-[#C56441]">
                            <img src={checkIcon} alt="check icon" className="w-4 h-4 mt-2 flex-shrink-0" />
                            <span>Carefully selected accommodation</span>
                        </div>

                        <div className="flex items-start gap-3 font-['Nunito_Sans'] font-bold text-[18px] leading-[30px] text-[#C56441]">
                            <img src={checkIcon} alt="check icon" className="w-4 h-4 mt-2 flex-shrink-0" />
                            <span>Historical and folklore commentary throughout</span>
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
                        The Cleveland Way is Yorkshire's great circular adventure, blending sweeping moorland ridges with the North Sea's dramatic coastline.
                    </h2>

                    {/* Paragraph */}
                    <p className="font-['Nunito_Sans'] font-normal text-[14px] md:text-[16px] leading-[32px] text-[#434343] mb-8">
                        Starting in <span className="font-medium text-[#C56441]">Helmsley</span>, this route follows Iron Age hill forts, abbey ruins, and purple heather trails before meeting the sea near
                        <span className="font-medium text-[#C56441]"> Saltburn</span>,
                        <span className="font-medium text-[#C56441]"> Whitby</span>, and
                        <span className="font-medium text-[#C56441]"> Scarborough</span>.
                        A journey of big skies, ancient heritage, and seaside charm.
                    </p>

                    {/* Map */}
                    <div className="flex justify-center">
                       <iframe className="alltrails" src="https://www.alltrails.com/widget/trail/england/north-yorkshire/cleveland-way-complete?u=m&sh=6sspau" width="100%" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" title="AllTrails: Trail Guides and Maps for Hiking, Camping, and Running"></iframe>

                    </div>
                </div>

                {/* ROUTE HIGHLIGHTS */}
                <div className="mt-8 mb-16 bg-gray-50 rounded-xl p-6 md:p-8">
                    <h2 className="font-['Nunito_Sans'] font-bold text-[20px] md:text-[24px] leading-[28px] md:leading-[36px] text-[#C56441] mb-4 md:mb-6">
                        Route Highlights
                    </h2>

                    {/* TAB BUTTONS */}
                    <div className="flex flex-wrap gap-1 md:gap-2 w-full pb-3">
                        {[1, 2, 3, 4].map((day) => (
                            <button
                                key={day}
                                onClick={() => setActiveDay(day)}
                                className={`flex-1 font-['Nunito_Sans'] font-bold text-[12px] sm:text-[14px] leading-[16px] sm:leading-[20px] pb-1 px-1 sm:px-2 whitespace-normal text-center ${activeDay === day
                                        ? "text-[#C56441] border-b-2 border-[#C56441]"
                                        : "text-[#8E8E8E]"
                                    }`}
                            >
                                {day === 1 && "Day 1: Helmsley to Sutton Bank (10 miles)"}
                                {day === 2 && "Day 2-3: Sutton Bank to Clay Bank Top (22 miles)"}
                                {day === 3 && "Day 4-6: Clay Bank to Saltburn (27 miles)"}
                                {day === 4 && "Day 7-10: Saltburn to Scarborough (50 miles)"}
                            </button>
                        ))}
                    </div>

                    {/* TAB CONTENT */}
                    <ul className="mt-4 md:mt-6 list-disc ml-4 md:ml-6 space-y-2 font-['Nunito_Sans'] font-medium text-[14px] md:text-[16px] leading-[24px] md:leading-[28px] text-[#6B6B6B]">
                        {routeContent[activeDay].map((item, index) => (
                            <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
                        ))}
                    </ul>
                </div>
            </div>

            <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

            {/* SIGHTS OF INTEREST SECTION */}
            <section
                className="relative flex flex-col md:flex-row items-stretch overflow-hidden py-0"
                style={{
                    height: "auto",
                    minHeight: "400px",
                }}
            >
                {/* LEFT SIDE - TEXT with gradient background */}
                <div
                    className="relative flex flex-col justify-center w-full md:w-[65%] px-6 md:px-20 bg-[#E6AA7C] overflow-hidden 
                                 py-10 md:py-0"
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
                                <span className="font-bold text-[#9B3F1E]">
                                    Rievaulx Abbey and Mount Grace Priory
                                </span>
                                <span className="text-[#363535] font-semibold">
                                    {" "}– echoes of Yorkshire's monastic past
                                </span>
                            </li>

                            <li>
                                <span className="font-bold text-[#9B3F1E]">Roseberry Topping</span>
                                <span className="text-[#363535] font-semibold">
                                    {" "}– Yorkshire's "mini Matterhorn"
                                </span>
                            </li>

                            <li>
                                <span className="font-bold text-[#9B3F1E]">Staithes & Runswick Bay</span>
                                <span className="text-[#363535] font-semibold">
                                    {" "}– colourful fishing villages
                                </span>
                            </li>

                            <li>
                                <span className="font-bold text-[#9B3F1E]">Whitby Abbey & harbour</span>
                                <span className="text-[#363535] font-semibold">
                                    {" "}– gothic grandeur and maritime history
                                </span>
                            </li>

                            <li>
                                <span className="font-bold text-[#9B3F1E]">Scarborough Castle</span>
                                <span className="text-[#363535] font-semibold">
                                    {" "}– Norman fortress with sea views
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* RIGHT SIDE - IMAGE (hidden on mobile) */}
                <div
                    className="relative hidden md:block w-[35%] h-[400px] overflow-hidden"
                >
                    <img
                        src={clevelandIllustration}
                        alt="Cleveland coast illustration"
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
  className="relative py-12 md:py-20 px-6 md:px-32 bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: `url(${backgroundImage})`,
  }}
>
  {/* WHITE SOFT OVERLAY */}
  <div className="absolute inset-0 bg-white/60 backdrop-blur-[1px]" />

  {/* MAIN CONTENT */}
  <div className="relative z-10 grid grid-cols-1 md:grid-cols-[45%_55%] gap-8 items-center">

    {/* LEFT — IMAGE STACK */}
    <div className="relative flex justify-center md:justify-start h-[260px] md:h-[360px]">
      
      {/* MAIN IMAGE (always visible) */}
      <img
        src={pics2}
        alt="Cleveland Way scenery"
        className="w-[220px] h-[240px] md:w-[200px] md:h-[300px] object-cover md:-rotate-3"
      />

      {/* SECOND IMAGE (desktop only) */}
      <img
        src={pics1}
        alt="Cleveland Way trail"
        className="hidden md:block w-[230px] h-[320px] object-cover absolute top-12 left-20 rotate-3"
      />
    </div>

    {/* RIGHT — TEXT CONTENT */}
    <div className="text-center md:text-left">
      <h2
        className="font-[Raleway] font-semibold italic text-[#4B4B4B]
        text-[22px] sm:text-[26px] md:text-[32px] lg:text-[36px]
        leading-tight mb-6"
      >
        Why Choose the Cleveland Way?
      </h2>

      <ul className="space-y-4 text-[15px] md:text-[18px] text-[#C56441] font-medium">
        <li className="flex gap-3 items-start">
          <img src={icon1} className="w-6 h-6 object-contain" alt="Intermediate" />
          <span className="font-['Nunito_Sans'] font-semibold">
            Ideal for intermediate walkers seeking variety and cultural depth
          </span>
        </li>

        <li className="flex gap-3 items-start">
          <img src={icon2} className="w-6 h-6 object-contain" alt="Moors and Coast" />
          <span className="font-['Nunito_Sans'] font-semibold">
            A rare blend of wild moorland walking and dramatic Yorkshire coastline
          </span>
        </li>

        <li className="flex gap-3 items-start">
          <img src={icon4} className="w-6 h-6 object-contain" alt="History" />
          <span className="font-['Nunito_Sans'] font-semibold">
            Ancient paths linking abbey ruins, clifftops, and fishing villages
          </span>
        </li>
      </ul>
    </div>

  </div>
</section>


            {/* OTHER HIKES SECTION */}
            <section className="bg-white py-10 md:py-12 px-3 sm:px-4 md:px-6">
                <div className="max-w-[1200px] mx-auto">
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