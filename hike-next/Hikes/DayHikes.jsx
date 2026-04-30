"use client"
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { X } from "lucide-react";
import Navbar from "../Components/Navbar/Navbar";
// import hikeImage from "../../src/assets/Hike/tailoredhike.webp";

// import dayHike1 from "../../src/assets/DayHikes/dayhike1.webp";
// import dayHike2 from "../../src/assets/DayHikes/dayhike2.webp";
// import heroImage from "../../src/assets/DayHikes/hero.webp";
// import lengthIcon from "../../src/assets/DayHikes/lengthIcon.webp";
// import timeIcon from "../../src/assets/DayHikes/timeIcon.webp";
// import difficultyIcon from "../../src/assets/DayHikes/difficultyIcon.webp";
// import multidayhike from "../../src/assets/DayHikes/multidayhike1.webp";

// Import both modal components
import BookingModal from "@/Booking/BookingModel"; // For multi-day hikes
import DayHikeBookingModal from "@/Booking/DayHikeBookingMode"; // For day hikes

// import Yorkshire3peaksImage from "../assets/DayHikes/dalesway-hero.webp";
// import MalcomCoveImage from "../assets/DayHikes/Malham-Cove-1.webp";
// import BoltonAbbeyImage from "../assets/DayHikes/Bolton-Abbey-1.webp";
// import RoseberryImage from "../assets/DayHikes/Roseberry-1.webp";
// import IIkleymoorImage from "../assets/DayHikes/Ilkley-moor-1.webp";
// import clevelandmultiDayHikeImg from "../assets/Hike/cleveland-multidayhike.webp";
// import DalewayDayHikeImg from "../assets/DayHikes/daleway-multidayhike.webp";
// import coasttocoastmultiDayHikeImg from "../assets/Hike/coasttocoast-multidayhike.webp";
// import BukdenPike from "../../src/assets/DayHikes/bukden-pike.webp";
// import Whiteby from "../../src/assets/DayHikes/Whitby-to-robin.webp";
// import Ingleton from "../../src/assets/DayHikes/Ingleton2.webp";
// import whernside from "../../src/assets/DayHikes/whernside.webp";





export default function HikesPage() {
  const [activeTab, setActiveTab] = useState("day");
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedHike, setSelectedHike] = useState(null);
  const [isTailoredHikeModalOpen, setIsTailoredHikeModalOpen] = useState(false);
  const [isSubmittingTailoredHike, setIsSubmittingTailoredHike] = useState(false);
  const [showTailoredHikeSuccess, setShowTailoredHikeSuccess] = useState(false);

  // All image constants with exact same names as your imports
const hikeImage = "/assets/Hike/tailoredhike.webp";

const dayHike1 = "/assets/DayHikes/dayhike1.webp";
const dayHike2 = "/assets/DayHikes/dayhike2.webp";
const heroImage = "/assets/DayHikes/hero.webp";
const lengthIcon = "/assets/DayHikes/lengthIcon.webp";
const timeIcon = "/assets/DayHikes/timeIcon.webp";
const difficultyIcon = "/assets/DayHikes/difficultyIcon.webp";
const multidayhike = "/assets/DayHikes/multidayhike1.webp";


const Yorkshire3peaksImage = "/assets/DayHikes/dalesway-hero.webp";
const MalcomCoveImage = "/assets/DayHikes/Malham-Cove-1.webp";
const BoltonAbbeyImage = "/assets/DayHikes/Bolton-Abbey-1.webp";
const RoseberryImage = "/assets/DayHikes/Roseberry-1.webp";
const IIkleymoorImage = "/assets/DayHikes/Ilkley-moor-1.webp";
const clevelandmultiDayHikeImg = "/assets/Hike/cleveland-multidayhike.webp";
const DalewayDayHikeImg = "/assets/DayHikes/daleway-multidayhike.webp";
const coasttocoastmultiDayHikeImg = "/assets/Hike/coasttocoast-multidayhike.webp";
const BukdenPike = "/assets/DayHikes/bukden-pike.webp";
const Whiteby = "/assets/DayHikes/Whitby-to-robin.webp";
const Ingleton = "/assets/DayHikes/Ingleton2.webp";
const whernside = "/assets/DayHikes/whernside.webp";

  const [tailoredHikeFormData, setTailoredHikeFormData] = useState({
    name: "",
    email: "",
    phone: "",
    groupSize: "",
    preferredDate: "",
    customRequest: ""
  });

  const dayHikes = [
    {
      id: 1,
      title: "Yorkshire 3 Peaks",
      desc: "Take on Yorkshire's ultimate hiking challenge across its three highest summits",
      length: "25 miles",
      time: "12 hours",
      difficulty: "Hard",
      cost: "From £50 per person",
      img: Yorkshire3peaksImage,
      link: "/yorkshire-3-peaks",
      type: "day"
    },
    {
      id: 2,
      title: "Malham Cove and Janet's Foss",
      desc: "Explore limestone cliffs, woodlands, and one of Yorkshire's most loved waterfalls",
      length: "4.5 miles",
      time: "3 hours",
      difficulty: "Easy",
      cost: "From £25 per person",
      img: MalcomCoveImage,
      link: "/malham-cove-janets-foss",
      type: "day"
    },
    {
      id: 3,
      title: "Bolton Abbey and Simon's Seat",
      desc: "Climb from historic abbey ruins to sweeping moorland views above Wharfedale",
      length: "9 miles",
      time: "5 hours",
      difficulty: "Intermediate",
      cost: "From £30 per person",
      img: BoltonAbbeyImage,
      link: "/bolton-abbey",
      type: "day"
    },
    {
      id: 4,
      title: "Roseberry Topping and Captain Cook's Monument",
      desc: "Hike to the iconic Roseberry Topping and learn about Captain Cook's heritage",
      length: "6 miles",
      time: "4 hours",
      difficulty: "Intermediate",
      cost: "From £35 per person",
      img: RoseberryImage,
      link: "/roseberry-topping-captain-cooks-monument",
      type: "day"
    },
    {
      id: 5,
      title: "Ilkley Moor and the 12 Apostles",
      desc: "Wander across heather moors and visit the ancient stone circle high above Ilkley",
      length: "5 miles",
      time: "3 hours",
      difficulty: "Intermediate",
      cost: "From £25 per person",
      img: IIkleymoorImage,
      link: "/ilkley-moor",
      type: "day"
    },
    {
      id: 6,
      title: "Buckden Pike",
      desc: "Buckden Pike is a rewarding circular hike from Buckden village, featuring steep climbs, open moorland and wide-ranging views over Upper Wharfedale and Langstrothdale.",
      length: "9 miles",
      time: "3.5 hours",
      difficulty: "Intermediate",
      cost: "From £30 per person",
      img: BukdenPike,
      link: "/buckden-pike",
      type: "day"
    },
    {
      id: 7,
      title: "Whitby to Robin Hood's Bay",
      desc: "Walk a stunning section of the Cleveland Way from Whitby to Robin Hood's Bay, with dramatic clifftop views over the North Sea and a rich mix of coastal wildlife and history.",
      length: "7 miles",
      time: "4 hours",
      difficulty: "Intermediate",
      cost: "From £35 per person",
      img: Whiteby,
      link: "/whitby-robin-hoods-bay",
      type: "day"
    },
    {
      id: 8,
      title: "Ingleton Falls",
      desc: "A classic Yorkshire Dales hike featuring tumbling waterfalls, limestone gorges, ancient woodland, and wide open views across the glacial valley of Kingsdale.",
      length: "4 miles",
      time: "3 hours",
      difficulty: "Easy",
      cost: "From £25 per person",
      img: Ingleton, // use the correct image here
      link: "/ingleton-falls",
      type: "day"
    },
    {
      id: 10,
      title: "Whernside",
      desc: "A classic Yorkshire Dales mountain hike climbing the highest of the Three Peaks, combining high-level moorland walking, sweeping summit views, and the dramatic industrial heritage of Ribblehead Viaduct.",
      length: "10 miles",
      time: "5 hours",
      difficulty: "Intermediate",
      cost: "From £40 per person",
      img: whernside, // use a Whernside or Ribblehead Viaduct image
      link: "/whernside",
      type: "day"
    }


  ];

  const multiDayHikes = [
    {
      id: 8,
      title: "Dales Way",
      desc: "Journey through river valleys, villages, and rolling dales on Yorkshire's most scenic long-distance trail",
      length: "82 miles",
      time: "Time 5-8 days",
      difficulty: "Intermediate",
      cost: "From £950 per person",
      img: DalewayDayHikeImg,
      link: "/daleway",
      type: "multi"
    },
    {
      id: 9,
      title: "Coast to Coast",
      desc: "Traverse England from sea to sea, a legendary hike across mountains, moors, and countryside.",
      length: "192 miles",
      time: "Three 5 day sections",
      difficulty: "Hard",
      cost: "From £975 per person",
      img: coasttocoastmultiDayHikeImg,
      link: "/coast-to-coast",
      type: "multi"
    },
    {
      id: 10,
      title: "Cleveland way",
      desc: "A dramatic trail combining coastal cliffs, ancient ruins, and sweeping moorland views.",
      length: "109 miles",
      time: "Time 7-10 days",
      difficulty: "Intermediate",
      cost: "From £950 per person",
      img: clevelandmultiDayHikeImg,
      link: "/cleveland",
      type: "multi"
    },
  ];

  const hikesToDisplay = activeTab === "day" ? dayHikes : multiDayHikes;

  // Tailored Hike Card Data
  const tailoredHikeCard = {
    id: 100,
    title: "Got a hike in mind?",
    desc: "We're happy to plan a tailored hike just for your group, whether it's a new route or a custom day out in nature.",
    length: "Custom",
    time: "Flexible",
    difficulty: "Tailored",
    cost: "From £100 per person",
    img: hikeImage,
    type: "tailored"
  };

  // Handle card click (excluding book button)
  const handleCardClick = (link, event) => {
    // Check if the click was on the book button or its children
    if (event.target.closest('button')) {
      return; // Don't router.push if book button was clicked
    }
    if (link) {
      router.push(link);
    }
  };

  // Handle book now click for regular hikes
  const handleBookNow = (event, hike) => {
    event.stopPropagation(); // Prevent card click event
    setSelectedHike(hike);
    setIsModalOpen(true);
  };

  // Handle tailored hike click
  const handleTailoredHikeClick = (event) => {
    event.stopPropagation(); // Prevent card click event
    setIsTailoredHikeModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedHike(null);
  };

  // Handle Tailored Hike form input change
  const handleTailoredHikeInputChange = (e) => {
    const { name, value } = e.target;
    setTailoredHikeFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle Tailored Hike form submission with Formspree
  const handleTailoredHikeSubmit = async (e) => {
    e.preventDefault();
    setIsSubmittingTailoredHike(true);

    // Prepare data for Formspree
    const submissionData = {
      ...tailoredHikeFormData,
      formType: "Tailored Hike Request",
      source: "Hikes Page",
      pageSection: "Tailored Hike Card"
    };

    try {
      const response = await fetch("https://formspree.io/f/mlgwgqel", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(submissionData)
      });

      if (response.ok) {
        // Show success message
        setShowTailoredHikeSuccess(true);

        // Reset form
        setTailoredHikeFormData({
          name: "",
          email: "",
          phone: "",
          groupSize: "",
          preferredDate: "",
          customRequest: ""
        });

        // Auto-close modal after 3 seconds
        setTimeout(() => {
          setShowTailoredHikeSuccess(false);
          setIsTailoredHikeModalOpen(false);
        }, 3000);
      } else {
        alert("There was an error submitting your request. Please try again.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("There was an error submitting your request. Please try again.");
    } finally {
      setIsSubmittingTailoredHike(false);
    }
  };

  return (
    <div className="font-['Nunito_Sans'] bg-[#fff]">
      <Navbar />
   

      {/* Hero Section */}
      <div
        className="relative h-[260px] mt-5 sm:h-[340px] md:h-[420px] lg:h-[480px] bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(76.04deg, rgba(0,0,0,0.4) 0.56%, rgba(102,102,102,0) 43.21%), url(${heroImage})`,
        }}
      >
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <h1 className="font-['Raleway'] font-medium text-white text-[26px] sm:text-[34px] md:text-[44px] lg:text-[52px] leading-[36px] sm:leading-[50px] md:leading-[64px] lg:leading-[72px]">
            Find Your Perfect Hike in Yorkshire
          </h1>
          <p className="font-['Nunito_Sans'] text-white font-semibold text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] leading-[120%] mt-3 max-w-[700px]">
            Plan hikes, explore hidden routes, and travel beyond the ordinary
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex justify-center mt-10 gap-4">
        <button
          className={`px-6 py-2 rounded-md font-semibold transition-all ${activeTab === "day" ? "bg-[#C56441] text-white" : "bg-gray-200 text-gray-700"
            }`}
          onClick={() => setActiveTab("day")}
        >
          Day Hikes
        </button>
        <button
          className={`px-6 py-2 rounded-md font-semibold transition-all ${activeTab === "multi" ? "bg-[#C56441] text-white" : "bg-gray-200 text-gray-700"
            }`}
          onClick={() => setActiveTab("multi")}
        >
          Multi Day Hikes
        </button>
      </div>

      {/* Section Title */}
      <div className="text-center mt-10 px-4 max-w-3xl mx-auto">
        <h2 className="font-[Raleway] font-bold text-[30px] leading-[48px] text-center text-[#C56441] mb-2">
          {activeTab === "day" ? "Day Hikes" : "Multi-Day Hikes"}
        </h2>
        <p className="font-['Nunito_Sans'] font-normal text-[20px] leading-[36px] text-gray-700 text-center">
          {activeTab === "day"
            ? "Spend a few unforgettable hours exploring Yorkshire's finest trails. Perfect for spontaneous adventures, our guided day hikes combine local insight, scenic views, and just the right level of challenge."
            : "Immerse yourself in Yorkshire's landscapes over several days. These guided journeys include overnight stays, meal arrangements, and full support, ideal for those who want the complete outdoor experience."}
        </p>
      </div>

      {/* Hike Cards Grid - Including Tailored Hike as last card */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-center mt-10 px-4 max-w-[900px] mx-auto mb-16">
        {/* Regular Hike Cards */}
        {hikesToDisplay.map((hike, index) => (
          <div
            key={hike.id || index}
            onClick={(event) => handleCardClick(hike.link, event)}
            className="bg-white shadow-xl rounded-3xl overflow-hidden flex flex-col transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] cursor-pointer w-full sm:max-w-[380px] mx-auto"
          >
            {/* Image */}
            <div className="h-[220px] overflow-hidden rounded-3xl mx-3 mt-3">
              <img
                src={hike.img}
                alt={hike.title}
                className="w-full h-full object-cover rounded-2xl transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="p-4 flex flex-col justify-between flex-1">
              <div>
                <h3 className="text-[#926A39] text-center font-['Nunito_Sans'] font-bold text-[20px] leading-[30px] tracking-[0] mb-1">
                  {hike.title}
                </h3>

                <p className="text-gray-700 text-center font-['Nunito_Sans'] font-medium text-[16px] leading-[25px] tracking-[0] mb-3">
                  {hike.desc}
                </p>

                {/* Stats Section */}
                <div className="flex justify-between text-gray-700 text-xs sm:text-sm">
                  <div className="flex flex-col items-center">
                    <img src={lengthIcon} alt="Length" className="w-5 h-5 mb-1" />
                    <span className="font-['Nunito_Sans'] font-semibold text-[12px] text-gray-600">Length</span>
                    <span className="font-bold">{hike.length}</span>
                  </div>

                  <div className="flex flex-col items-center">
                    <img src={timeIcon} alt="Time" className="w-5 h-5 mb-1" />
                    <span className="font-['Nunito_Sans'] font-semibold text-[12px] text-gray-600">Time</span>
                    <span className="font-bold">{hike.time}</span>
                  </div>

                  <div className="flex flex-col items-center">
                    <img src={difficultyIcon} alt="Difficulty" className="w-5 h-5 mb-1" />
                    <span className="font-['Nunito_Sans'] font-semibold text-[12px] text-gray-600">Difficulty</span>
                    <span className="font-bold">{hike.difficulty}</span>
                  </div>
                </div>
              </div>

              {/* Cost + Button */}
              <div className="flex justify-between items-center mt-4">
                <p className="text-green-700 font-['Nunito_Sans'] font-bold text-[16px] leading-[27px] tracking-[0]">
                  {hike.cost}
                </p>
                <button
                  onClick={(event) => handleBookNow(event, hike)}
                  className="bg-[#C56441] hover:bg-[#a85632] text-white font-semibold py-1.5 px-4 rounded-md text-sm transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                >
                  Request Now
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* Tailored Hike Card - Same style as other cards */}
        <div
          onClick={(event) => handleTailoredHikeClick(event)}
          className="bg-white shadow-xl rounded-3xl overflow-hidden flex flex-col transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] cursor-pointer w-full sm:max-w-[380px] mx-auto"
        >
          {/* Image */}
          <div className="h-[220px] overflow-hidden rounded-3xl mx-3 mt-3">
            <img
              src={tailoredHikeCard.img}
              alt={tailoredHikeCard.title}
              className="w-full h-full object-cover rounded-2xl transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* Content */}
          <div className="p-4 flex flex-col justify-between flex-1">
            <div>
              <h3 className="text-[#926A39] text-center font-['Nunito_Sans'] font-bold text-[20px] leading-[30px] tracking-[0] mb-1">
                {tailoredHikeCard.title}
              </h3>

              <p className="text-gray-700 text-center font-['Nunito_Sans'] font-medium text-[16px] leading-[25px] tracking-[0] mb-3">
                {tailoredHikeCard.desc}
              </p>

              {/* Stats Section */}
              <div className="flex justify-between text-gray-700 text-xs sm:text-sm">
                <div className="flex flex-col items-center">
                  <img src={lengthIcon} alt="Length" className="w-5 h-5 mb-1" />
                  <span className="font-['Nunito_Sans'] font-semibold text-[12px] text-gray-600">Length</span>
                  <span className="font-bold">{tailoredHikeCard.length}</span>
                </div>

                <div className="flex flex-col items-center">
                  <img src={timeIcon} alt="Time" className="w-5 h-5 mb-1" />
                  <span className="font-['Nunito_Sans'] font-semibold text-[12px] text-gray-600">Time</span>
                  <span className="font-bold">{tailoredHikeCard.time}</span>
                </div>

                <div className="flex flex-col items-center">
                  <img src={difficultyIcon} alt="Difficulty" className="w-5 h-5 mb-1" />
                  <span className="font-['Nunito_Sans'] font-semibold text-[12px] text-gray-600">Difficulty</span>
                  <span className="font-bold">{tailoredHikeCard.difficulty}</span>
                </div>
              </div>
            </div>

            {/* Cost + Button */}
            <div className="flex justify-between items-center mt-4">
              <button
                onClick={handleTailoredHikeClick}
                className="bg-[#3B4B62] hover:bg-[#2e3a55] text-white font-semibold py-1.5 px-4 rounded-md text-sm transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                Request Tailored Hike
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Render appropriate booking modal based on hike type */}
      {isModalOpen && selectedHike && (
        <>
          {selectedHike.type === "day" ? (
            <DayHikeBookingModal
              isOpen={isModalOpen}
              onClose={handleCloseModal}
              hike={selectedHike}
            />
          ) : (
            <BookingModal
              isOpen={isModalOpen}
              onClose={handleCloseModal}
              hike={selectedHike}
            />
          )}
        </>
      )}

      {/* Tailored Hike Modal */}
      {isTailoredHikeModalOpen && (
        <div className="fixed inset-0 font-[Raleway] bg-black/60 z-50 flex items-center justify-center p-3">
          <div className="bg-white rounded-xl max-w-sm w-full max-h-[85vh] overflow-y-auto relative">

            {/* Success Message Overlay */}
            {showTailoredHikeSuccess && (
              <div className="absolute inset-0 bg-white/95 flex flex-col items-center justify-center rounded-xl z-10">
                <div className="text-center p-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-1">Thank You!</h3>
                  <p className="text-gray-600 text-sm mb-1">Your tailored hike request has been submitted.</p>
                  <p className="text-gray-600 font-medium text-sm">We'll connect with you shortly!</p>
                  <div className="mt-4 text-xs text-gray-500">
                    <p>Closing in 3 seconds...</p>
                  </div>
                </div>
              </div>
            )}

            <div className="p-4">
              {/* Modal Header */}
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold text-[#C56441] font-[Raleway]">
                  Request Tailored Hike
                </h3>
                <button
                  onClick={() => setIsTailoredHikeModalOpen(false)}
                  className="text-gray-500 hover:text-gray-700 disabled:opacity-50"
                  disabled={isSubmittingTailoredHike}
                >
                  <X size={20} />
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleTailoredHikeSubmit} className="space-y-3">
                {/* Name */}
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-0.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={tailoredHikeFormData.name}
                    onChange={handleTailoredHikeInputChange}
                    required
                    className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-md focus:ring-1 focus:ring-[#C56441] disabled:opacity-70"
                    placeholder="Your name"
                    disabled={isSubmittingTailoredHike}
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-0.5">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={tailoredHikeFormData.email}
                    onChange={handleTailoredHikeInputChange}
                    required
                    className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-md focus:ring-1 focus:ring-[#C56441] disabled:opacity-70"
                    placeholder="Email address"
                    disabled={isSubmittingTailoredHike}
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-0.5">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={tailoredHikeFormData.phone}
                    onChange={handleTailoredHikeInputChange}
                    className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-md focus:ring-1 focus:ring-[#C56441] disabled:opacity-70"
                    placeholder="Phone number"
                    disabled={isSubmittingTailoredHike}
                  />
                </div>

                {/* Group Size */}
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-0.5">
                    Group Size
                  </label>
                  <select
                    name="groupSize"
                    value={tailoredHikeFormData.groupSize}
                    onChange={handleTailoredHikeInputChange}
                    className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-md focus:ring-1 focus:ring-[#C56441] disabled:opacity-70"
                    disabled={isSubmittingTailoredHike}
                  >
                    <option value="">Select</option>
                    <option value="1">1</option>
                    <option value="2-4">2–4</option>
                    <option value="5-8">5–8</option>
                    <option value="9-12">9–12</option>
                    <option value="13+">13+</option>
                  </select>
                </div>

                {/* Preferred Date */}
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-0.5">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    name="preferredDate"
                    value={tailoredHikeFormData.preferredDate}
                    onChange={handleTailoredHikeInputChange}
                    className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-md focus:ring-1 focus:ring-[#C56441] disabled:opacity-70"
                    disabled={isSubmittingTailoredHike}
                  />
                </div>

                {/* Custom Request */}
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-0.5">
                    Your Ideal Hike *
                  </label>
                  <textarea
                    name="customRequest"
                    value={tailoredHikeFormData.customRequest}
                    onChange={handleTailoredHikeInputChange}
                    required
                    rows={3}
                    className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-md focus:ring-1 focus:ring-[#C56441] disabled:opacity-70"
                    placeholder="Route, difficulty, duration, special needs..."
                    disabled={isSubmittingTailoredHike}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmittingTailoredHike}
                  className="w-full bg-[#3B4B62] text-white py-2.5 rounded-md text-sm font-medium hover:bg-[#2e3a55] transition disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmittingTailoredHike ? (
                    <>
                      <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    "Submit Request"
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}