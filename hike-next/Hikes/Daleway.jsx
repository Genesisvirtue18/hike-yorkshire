"use client"
import { React, useState } from "react";
import { useRouter } from "next/navigation";
import { MapPin, Clock, Mountain } from "lucide-react";
import BookingModal from "@/Booking/BookingModel";
// import heroImg from "../../src/assets/DayHikes/dalesway-hero.webp";
// import backgroundImage from "../../src/assets/DayHikes/daleway-photo1.webp";
// import pic2 from "../../src/assets/DayHikes/daleway-photo2.webp";
// import pics1 from "../../src/assets/DayHikes/pic1.webp";
// import pics2 from "../../src/assets/DayHikes/pic2.webp";
import Navbar from "../Components/Navbar/Navbar";
// import lengthIcon from "../../src/assets/DayHikes/lengthIcon.webp";
// import timeIcon from "../../src/assets/DayHikes/timeIcon.webp";
// import difficultyIcon from "../../src/assets/DayHikes/difficultyIcon.webp";
// import checkIcon from "../../src/assets/DayHikes/checkIcon.webp";
// import icon1 from "../../src/assets/DayHikes/icon1.webp";
// import icon2 from "../../src/assets/DayHikes/icon2.webp";
// import icon3 from "../../src/assets/DayHikes/icon3.webp";
// import DalewayDayHikeImg from "../assets/DayHikes/daleway-multidayhike.webp";
// import jimmyHelping from "../../src/assets/DayHikes/jimmy-helping.webp";
// import clevelandmultiDayHikeImg from "../assets/Hike/cleveland-multidayhike.webp";
// import coasttocoastmultiDayHikeImg from "../assets/Hike/coasttocoast-multidayhike.webp";

// // Import other hike images

// import BukdenPike from "../../src/assets/DayHikes/bukden-pike.webp";
// import Whiteby from "../../src/assets/DayHikes/Whitby-to-robin.webp";


export default function DalesWay() {
    const [activeDay, setActiveDay] = useState(1);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const router = useRouter();
// ========== IMAGE CONSTANTS ==========
// Hero and background images
const heroImg = "/assets/DayHikes/dalesway-hero.webp";
const backgroundImage = "/assets/DayHikes/daleway-photo1.webp";

// Gallery images
const pic2 = "/assets/DayHikes/daleway-photo2.webp";
const pics1 = "/assets/DayHikes/pic1.webp";
const pics2 = "/assets/DayHikes/pic2.webp";

// Icons
const lengthIcon = "/assets/DayHikes/lengthIcon.webp";
const timeIcon = "/assets/DayHikes/timeIcon.webp";
const difficultyIcon = "/assets/DayHikes/difficultyIcon.webp";
const checkIcon = "/assets/DayHikes/checkIcon.webp";

// Feature icons
const icon1 = "/assets/DayHikes/icon1.webp";
const icon2 = "/assets/DayHikes/icon2.webp";
const icon3 = "/assets/DayHikes/icon3.webp";

// Multi-day hike images
const DalewayDayHikeImg = "/assets/DayHikes/daleway-multidayhike.webp";
const clevelandmultiDayHikeImg = "/assets/Hike/cleveland-multidayhike.webp";
const coasttocoastmultiDayHikeImg = "/assets/Hike/coasttocoast-multidayhike.webp";
const BukdenPike= "/assets/DayHikes/bukden-pike.webp";
const Whiteby ="/assets/DayHikes/Whitby-to-robin.webp";

// Additional images
const jimmyHelping = "/assets/DayHikes/jimmy-helping.webp";


    // Hike cards data with route paths
    const otherHikes = [
       {
  id: 1,
  title: "Coast to Coast",
  description: "Traverse England from sea to sea, a legendary hike across mountains, moors, and countryside.",
  distance: "192 miles",
  duration: "3 × 5 day sections",
  difficulty: "Hard",
  image: coasttocoastmultiDayHikeImg,
  route: "/coast-to-coast"
},
{
  id: 2,
  title: "Cleveland Way",
  description: "A dramatic trail combining coastal cliffs, ancient ruins, and sweeping moorland views.",
  distance: "109 miles",
  duration: "7–10 days",
  difficulty: "Intermediate",
  image: clevelandmultiDayHikeImg,
  route: "/cleveland"
}
,
        {
            id: 3,
            title: "Whitby to Robin Hood's Bay",
            description: "Walk a stunning section of the Cleveland Way with dramatic clifftop views over the North Sea",
            distance: "7 miles",
            duration: "4 hours",
            difficulty: "Intermediate",
            image: Whiteby,
            route: "/whitby-to-robin-hoods-bay"
        },
        {
            id: 4,
            title: "Buckden Pike",
            description: "Climb one of the Dales' most distinctive peaks with panoramic views over Upper Wharfedale",
            distance: "9 miles",
            duration: "3.5 hours",
            difficulty: "Intermediate",
            image: BukdenPike,
            route: "/buckden-pike"
        }
    ];

    // Function to handle card click navigation
    const handleCardClick = (route) => {
        router.push(route);
    };

    const routeContent = {
        1: [
            `Start beneath Ilkley Moor before following the 
     <span class="font-medium text-[#C56441]">River Wharfe</span> past Addingham's old mills.`,

            `Visit <span class="font-medium text-[#C56441]">Bolton Priory</span>, a majestic Augustinian ruin set in ancient woodland.`,

            `Cross the <span class="font-medium text-[#C56441]">Stepping Stones</span> and enjoy a riverside lunch at 
     <span class="font-medium text-[#C56441]">The Cavendish Pavilion</span>.`,

            `Overnight in <span class="font-medium text-[#C56441]">Burnsall</span>, a classic Dales village with a stone bridge and riverside inn.`,
        ],

        2: [
            `Follow the Wharfe through  <span class="font-medium text-[#C56441]">Linton Falls</span> and  <span class="font-medium text-[#C56441]">Grassington</span> with its cobbled market square and artisan shops.`,
            `Climb gradually into the limestone hills of  <span class="font-medium text-[#C56441]">Upper Wharfedale,</span>  surrounded by wildflowers and dry-stone walls.`,
        ],

        3: [
            `Journey through <span class="font-medium text-[#C56441]"> Langstrothdale, Hubberholme, and Oughtershaw </span>— some of the Dales' most unspoilt hamlets.`,
            `Cross into  <span class="font-medium text-[#C56441]">  Dentdale,  </span> entering Cumbria via lush valleys and ancient packhorse bridges.`,
        ],

        4: [
            `Walk below the dramatic Howgill Fells before descending into <span class="font-medium text-[#C56441]"> Sedbergh,</span> England's "Book Town."`,
            `The final stretch leads into Windermere, where your Dales journey meets the Lake District fells.`,
        ],
    };

    return (
        <section className="font-['Nunito_Sans'] text-gray-800">
            {/* Navbar + Hero Section */}
            <Navbar />
            <div
                className="relative h-[400px] sm:h-[500px] md:h-[580px] bg-cover bg-center"
                style={{
                    backgroundImage: `linear-gradient(76.04deg, rgba(0, 0, 0, 0.4) 0.56%, rgba(102, 102, 102, 0) 43.21%), url(${DalewayDayHikeImg})`,
                }}
            >
                <div className="absolute inset-0 bg-black/50 flex flex-col justify-end items-start px-4 sm:px-10 md:px-16 pb-6 md:pb-10 space-y-8 sm:space-y-10">
                    {/* Block 1: Title + Description */}
                    <div className="space-y-1 sm:space-y-2">
                        <h1 className="font-['Raleway'] text-white font-semibold text-[22px] sm:text-[30px] md:text-[42px] leading-tight">
                            Dales Way
                        </h1>

                        <p className="text-white text-[12px] sm:text-[14px] md:text-[18px] max-w-full sm:max-w-[650px] leading-[150%]">
                            A journey through Yorkshire's pastoral heart, from Ilkley to Windermere
                        </p>
                    </div>

                    {/* Block 2: Stats */}
                    <div className="flex flex-wrap gap-4 sm:gap-6 text-white text-sm sm:text-base">
                        <div className="flex items-center gap-2">
                            <img src={lengthIcon} alt="Length" className="w-4 h-4 sm:w-5 sm:h-5" />
                            <span className="text-sm sm:text-base">
                                <span className="font-semibold">Length:</span> 82 miles
                            </span>
                        </div>

                        <div className="flex items-center gap-2">
                            <img src={timeIcon} alt="Duration" className="w-4 h-4 sm:w-5 sm:h-5" />
                            <span className="text-sm sm:text-base">
                                <span className="font-semibold">Duration:</span> 5-8 Days
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
                        The Dales Way is a journey through the very heart of Yorkshire's pastoral beauty.
                    </h2>

                    {/* Paragraph 1 */}
                    <p className="font-['Nunito_Sans'] font-normal text-[14px] md:text-[16px] leading-[32px] text-[#434343] mb-8">
                        Beginning in <span className="font-medium text-[#C56441]">Ilkley</span> and ending on the shores of
                        <span className="font-medium text-[#C56441]"> Lake Windermere</span>, it traces a network of riverside paths through the
                        <span className="font-medium text-[#C56441]"> Yorkshire Dales National Park </span> blending rolling farmland,
                        limestone gorges, and charming stone-built villages.
                    </p>

                    {/* Paragraph 2 */}
                    <p className="font-['Nunito_Sans'] font-normal text-[14px] md:text-[16px] leading-[32px] text-[#434343] mb-12">
                        This is a route of contrasts: tranquil valleys, medieval ruins, and the timeless rhythm of rural life.
                    </p>

                    {/* Map */}
                    <div className="flex justify-center">
                       <iframe className="alltrails" src="https://www.alltrails.com/widget/map/custom-route-184582c?u=m&sh=6sspau" width="100%" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" title="AllTrails: Trail Guides and Maps for Hiking, Camping, and Running"></iframe>

                    </div>
                </div>

                {/* ROUTE HIGHLIGHTS (Kept exactly as is) */}
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
                                {day === 1 && "Day 1: Ilkley to Burnsall (13 miles)"}
                                {day === 2 && "Day 2: Burnsall to Kettlewell (12 miles)"}
                                {day === 3 && "Day 3–4: Kettlewell to Dent (26 miles)"}
                                {day === 4 && "Day 5–6: Dent to Sedbergh and Bowness (31 miles)"}
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

            {/* SIGHTS OF INTEREST SECTION (Kept exactly as is) */}
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
                                <span className="font-bold text-[#9B3F1E]">Bolton Abbey and Priory ruins</span>
                                <span className="text-[#363535] font-semibold">
                                    {" "}– 12th-century monastery by the Wharfe
                                </span>
                            </li>

                            <li>
                                <span className="font-bold text-[#9B3F1E]">Linton Falls</span>
                                <span className="text-[#363535] font-semibold">
                                    {" "}– spectacular waterfalls near Grassington
                                </span>
                            </li>

                            <li>
                                <span className="font-bold text-[#9B3F1E]">Dent Heritage Centre</span>
                                <span className="text-[#363535] font-semibold">
                                    {" "}– stories of rural crafts and the "Terrible Knitters of Dent"
                                </span>
                            </li>

                            <li>
                                <span className="font-bold text-[#9B3F1E]">Sedbergh's Bookshops</span>
                                <span className="text-[#363535] font-semibold">
                                    {" "}– literary heart of the western Dales
                                </span>
                            </li>

                            <li>
                                <span className="font-bold text-[#9B3F1E]">Lake Windermere</span>
                                <span className="text-[#363535] font-semibold">
                                    {" "}– England's largest natural lake
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
                        src={pic2}
                        alt="Dales Way scenery"
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
      
      {/* MAIN IMAGE */}
      <img
        src={pics2}
        alt="Dales Way scenery"
        className="w-[220px] h-[240px] md:w-[200px] md:h-[300px] object-cover md:-rotate-3"
      />

      {/* SECOND IMAGE — desktop only */}
      <img
        src={pics1}
        alt="Dales Way river"
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
        Why Choose the Dales Way?
      </h2>

      <ul className="space-y-4 text-[15px] md:text-[18px] text-[#C56441] font-medium">
        <li className="flex gap-3 items-start">
          <img src={icon1} className="w-6 h-6" alt="Checklist" />
          <span className="font-['Nunito_Sans'] font-semibold">
            Gentle gradients and welcoming villages, ideal for first-time long-distance walkers
          </span>
        </li>

        <li className="flex gap-3 items-start">
          <img src={icon2} className="w-6 h-6" alt="Balance" />
          <span className="font-['Nunito_Sans'] font-semibold">
            A perfect balance of nature, comfort, and culture
          </span>
        </li>

        <li className="flex gap-3 items-start">
          <img src={icon3} className="w-6 h-6" alt="Guides" />
          <span className="font-['Nunito_Sans'] font-semibold">
            Expert guides share local folklore, dialect, and hidden gems
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