"use client"
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../Components/Navbar/Navbar";
import BookingModal from "@/Booking/WakingTourBookingModel";
// import hikeImage from "../../src/assets/Hike/tailoredhike.webp";
// import lengthIcon from "../../src/assets/DayHikes/lengthIcon.webp";
// import difficultyIcon from "../../src/assets/DayHikes/difficultyIcon.webp";

// import heroImage from "../../src/assets/DayHikes/dayhike1.webp";
// import timeIcon from "../../src/assets/DayHikes/timeIcon.webp";

import { X } from "lucide-react";

// import IIkleymoorImage from "../assets/DayHikes/Ilkley-moor-1.webp";
// import BoltonAbbeyImage from "../assets/DayHikes/Bolton-Abbey-1.webp";
// import skiptonImage from "../assets/DayHikes/skipton-dayhike.webp";
// import grassiongtonImage from "../assets/DayHikes/Grassington.webp";
// import malhamImage from "../assets/DayHikes/malham.webp";
// import WhitbydayhikeImage from "../assets/DayHikes/Whitby-dayhike.webp";
// import HawesdayhikeImage from "../assets/DayHikes/hawesdayhike.webp";
// import HaworthdayhikeImage from "../assets/DayHikes/haworth-dayhike.webp";
// import ripondayhikeImage from "../assets/DayHikes/ripon.webp";
// import IIkleyimage from "../assets/DayHikes/IIkleyimage.webp";



export default function HikesPage() {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isTailoredHikeModalOpen, setIsTailoredHikeModalOpen] = useState(false);
  const [isSubmittingTailoredHike, setIsSubmittingTailoredHike] = useState(false);
  const [showTailoredHikeSuccess, setShowTailoredHikeSuccess] = useState(false);
  const [selectedHike, setSelectedHike] = useState(null);

  // Main images
const hikeImage = "/assets/Hike/tailoredhike.webp";
const heroImage = "/assets/DayHikes/dayhike1.webp";

// Icon images
const lengthIcon = "/assets/DayHikes/lengthIcon.webp";
const timeIcon = "/assets/DayHikes/timeIcon.webp";
const difficultyIcon = "/assets/DayHikes/difficultyIcon.webp";

// Day hike images
const IIkleymoorImage = "/assets/DayHikes/Ilkley-moor-1.webp";
const BoltonAbbeyImage = "/assets/DayHikes/Bolton-Abbey-1.webp";
const skiptonImage = "/assets/DayHikes/skipton-dayhike.webp";
const grassiongtonImage = "/assets/DayHikes/Grassington.webp";
const malhamImage = "/assets/DayHikes/malham.webp";
const WhitbydayhikeImage = "/assets/DayHikes/Whitby-dayhike.webp";
const HawesdayhikeImage = "/assets/DayHikes/hawesdayhike.webp";
const HaworthdayhikeImage = "/assets/DayHikes/haworth-dayhike.webp";
const ripondayhikeImage = "/assets/DayHikes/ripon.webp";
const IIkleyimage = "/assets/DayHikes/IIkleyimage.webp";



  const [tailoredHikeFormData, setTailoredHikeFormData] = useState({
    name: "",
    email: "",
    phone: "",
    groupSize: "",
    preferredDate: "",
    customRequest: ""
  });

  // Detailed information for each hike
  const hikeDetails = {
    "Ilkley": {
      title: "Ilkley",
      sections: [
        {
          title: "Ilkley",
          points: [
            "Roman origins of Ilkley and its development from Olicana to spa town",
            "Victorian hydropathy, health tourism, and the rise of Ilkley as a resort",
            "Blue plaques and notable figures including Charles Darwin connections",
            "Industrial Ilkley, mills, railways, and working class heritage",
            "Sacred sites including All Saints Church and Ilkley Manor House",
            "Folklore, place name etymology, and the River Wharfe’s influence on the town"
          ]
        },

      ]
    },
      "Ilkley Moor": {
      title: "Ilkley Moor",
      sections: [
        {
          title: "Ilkley Moor",
          points: [
            "Ancient ritual landscapes including the Swastika Stone and Twelve Apostles",
            "Etymology of Ilkley, Wharfedale, and moorland place names",
            "Yorkshire folklore tales including the Hermit of Ilkley Moor",
            "Origins and meaning of Ilkley Moor Bah’ T’at and local dialect",
            "Geological formation of gritstone edges and glacial features",
            "Cow and Calf legends and the cultural symbolism of the moor"
          ]
        }
      ]
    },
    "Skipton": {
      title: "Skipton",
      sections: [
        {
          title: "Skipton",
          points: [
            "Skipton Castle and its role in Norman and medieval defence",
            "Market town development and the etymology of Skipton and Craven",
            "Holy Trinity Church and religious life through the centuries",
            "Leeds Liverpool Canal and Skipton's industrial expansion",
            "Woods, waterways, and viewpoints shaping the town's layout",
            "Education, trade, and civic life including the Old Grammar School"
          ]
        }
      ]
    },
    "Bolton Abbey": {
      title: "Bolton Abbey",
      sections: [
        {
          title: "Bolton Abbey",
          points: [
            "Augustinian priory life and medieval monastic history",
            "The Percy and Cavendish families and estate power in Wharfedale",
            "The Strid's deadly geology and enduring folklore",
            "River Wharfe crossings, stepping stones, and pilgrimage routes",
            "Victorian engineering including bridges and aqueducts",
            "Romantic poets, painters, and the rise of heritage tourism"
          ]
        }
      ]
    },
    "Grassington": {
      title: "Grassington",
      sections: [
        {
          title: "Grassington",
          points: [
            "Limestone geology and its influence on landscape and architecture",
            "Lead mining history and the industrial heritage of Upper Wharfedale",
            "Traditional farming practices and Dales farming communities",
            "Market square history and village social structures",
            "River Wharfe ecology and wildlife habitats",
            "Literary connections and Grassington's role in cultural heritage"
          ]
        }
      ]
    },
    "Malham": {
      title: "Malham",
      sections: [
        {
          title: "Malham",
          points: [
            "Formation of Malham Cove by glacial meltwater and ancient seas",
            "Limestone pavement, clints, grikes, and karst geology",
            "Janet's Foss waterfall and woodland folklore",
            "Gordale Scar and the shaping of the Malhamdale valley",
            "Farming history and Malham as a traditional Dales village",
            "Human use of limestone landscapes from prehistory to today"
          ]
        }
      ]
    },
    "Whitby": {
      title: "Whitby",
      sections: [
        {
          title: "Whitby",
          points: [
            "Anglo Saxon Whitby Abbey and early Christian history",
            "Medieval port, fishing industry, and maritime trade",
            "Gothic revival, Dracula, and literary heritage",
            "Smuggling, shipbuilding, and whaling history",
            "Coastal geology, erosion, and fossil rich cliffs",
            "Folklore, superstition, and seafaring traditions"
          ]
        }
      ]
    },
    "Hawes": {
      title: "Hawes",
      sections: [
        {
          title: "Hawes",
          points: [
            "Norse origins and place names shaped by Viking settlement",
            "Medieval market rights and the role of droving and trade",
            "Farming life in upper Wensleydale and stone built heritage",
            "Religious history including chapels, church, and nonconformism",
            "Buttertubs Pass, packhorse routes, and upland travel",
            "Dales dialect, folklore, and rural traditions"
          ]
        }
      ]
    },
    "Haworth": {
      title: "Haworth",
      sections: [
        {
          title: "Haworth & Brontë Country",
          points: [
            "Brontë family life and literary inspiration",
            "Industrial Haworth and the wool trade",
            "Top Withens and the moorland landscape of Wuthering Heights",
            "Religious life, reform, and social change",
            "Stone architecture, graveyards, and village layout",
            "Place names, folklore, and Pennine identity"
          ]
        }
      ]
    },
    "Ripon": {
      title: "Ripon",
      sections: [
        {
          title: "Ripon - England's Smallest City",
          points: [
            "Saxon origins as one of England's earliest Christian centres founded by St Wilfrid",
            "Ripon Cathedral's architectural evolution from Anglo Saxon crypt to Gothic masterpiece",
            "Medieval civic life, market rights, and Ripon's role as a regional power centre",
            "The Wakeman tradition and the world's oldest continuous civic horn blowing ceremony",
            "Links to royalty, pilgrimage, and the River Ure's role in trade and defence",
            "Georgian and Victorian expansion shaping Ripon's streets, schools, and public buildings"
          ]
        }
      ]
    }
  };

  // Combine all hikes into one list
  const allHikes = [
    {
      title: "Ilkley",
      desc: "From Victorian industry to windswept moorland and Darwin's Yorkshire retreat",
      time: "Time: 2 hours",
      tagline: "Industrial Ilkley • Ilkley Moor • Charles Darwin",
      cost: "From £20 per person",
      img: IIkleymoorImage,
      details: hikeDetails["Ilkley"],
      shortText: "Roman origins of Ilkley and its development from Olicana to spa town..."
    },
     {
      title: "Ilkley Moor",
      desc: "Ancient stones, folklore, and the story behind Yorkshire’s most famous song.",
      time: "Time: 2.5 hours",
      tagline: "Ilkley Moor • Archaeology • Natural Science",
      cost: "From £25 per person",
      img: IIkleyimage,
      details: hikeDetails["Ilkley Moor"],
      shortText: "Ancient ritual landscapes including the Swastika Stone and Twelve Apostles..."
    },
    {
      title: "Skipton",
      desc: "Explore canals, castle walls, and the charm of Skipton's historic market town.",
      time: "Time: 3 hours",
      tagline: "The canal • Skipton castle • The market",
      cost: "From £20 per person",
      img: skiptonImage,
      details: hikeDetails["Skipton"],
      shortText: "Skipton Castle and its role in Norman and medieval defence..."
    },
    {
      title: "Bolton Abbey",
      desc: "Walk among ancient ruins, riverside paths, and the dramatic Strid gorge.",
      time: "Time: 2 hours",
      tagline: "The abbey • The strid • Valley of Desolation",
      cost: "From £20 per person",
      img: BoltonAbbeyImage,
      details: hikeDetails["Bolton Abbey"],
      shortText: "Augustinian priory life and medieval monastic history..."
    },
    {
      title: "Grassington",
      desc: "Step into Dales heritage, mining, farming, and timeless village life",
      time: "Time: 2 hours",
      tagline: "Mining history • Farming heritage",
      cost: "From £20 per person",
      img: grassiongtonImage,
      details: hikeDetails["Grassington"],
      shortText: "Uncover lead mining history and traditional Dales farming communities..."
    },
    {
      title: "Malham",
      desc: "Discover limestone cliffs, hidden waterfalls, and the geology that shaped the Dales.",
      time: "Time: 3 hours",
      tagline: "Malham cove • Geology of Malham",
      cost: "From £25 per person",
      img: malhamImage,
      details: hikeDetails["Malham"],
      shortText: "Formation of Malham Cove by glacial meltwater and ancient seas..."
    },
    {
      title: "Whitby",
      desc: "Seaside legends, abbey ruins, and tales of sailors and storytellers",
      time: "Time: 3 hours",
      tagline: "Whitby Abbey • Coastal cliffs • Dracula heritage",
      cost: "From £20 per person",
      img: WhitbydayhikeImage,
      details: hikeDetails["Whitby"],
      shortText: "Anglo Saxon Whitby Abbey and early Christian history..."
    },
    {
      title: "Hawes",
      desc: "Norse origins and place names shaped by Viking settlement...",
      time: "Time: 3 hours",
      tagline: "Wensleydale cheese • Buttertubs Pass • Norse heritage",
      cost: "From £20 per person",
      img: HawesdayhikeImage,
      details: hikeDetails["Hawes"],
      shortText: "Explore Norse settlement history and traditional Wensleydale farming life..."
    },
    {
      title: "Haworth",
      desc: "Follow in the footsteps of the Brontës through cobbled streets and moors.",
      time: "Time: 2.5 hours",
      tagline: "Brontë sisters • Pennine moors • Industrial heritage",
      cost: "From £20 per person",
      img: HaworthdayhikeImage,
      details: hikeDetails["Haworth"],
      shortText: "Top Withens and the moorland landscape of Wuthering Heights..."
    },
    {
      title: "Ripon",
      desc: "Cathedral spires, market squares, and riverside trails through England's smallest city.",
      time: "Time: 2 hours",
      tagline: "Ripon Cathedral • Wakeman tradition • Saxon history",
      cost: "From £20 per person",
      img: ripondayhikeImage,
      details: hikeDetails["Ripon"],
      shortText: "Saxon origins as one of England’s earliest Christian centres founded by St Wilfrid..."
    },
  ];

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

  // Handle card click to show modal
  const handleCardClick = (hike, event) => {
    // Check if the click was on the book button or its children
    if (event.target.closest('button')) {
      return; // Don't show modal if book button was clicked
    }
    setSelectedHike(hike);
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

  const handleCloseDetailModal = () => {
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
    <div className="font-nunito bg-[#fff]">
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
            Explore and Learn on Foot
          </h1>
          <p className="font-['Nunito_Sans'] text-white font-semibold text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] leading-[120%] mt-3 max-w-[700px]">
            Each tour combines outdoor adventure with insight, from map reading and local ecology to Yorkshire's cultural heritage.
          </p>
        </div>
      </div>

      {/* Section Title */}
      <div className="text-center mt-10 px-4 max-w-3xl mx-auto">
        <h2 className="font-[Raleway] font-bold text-[30px] leading-[48px] text-center text-[#C56441] mb-2">
          Walking Tours
        </h2>
        <p className="font-['Nunito_Sans']  font-normal text-[20px] leading-[36px] text-gray-700 text-center">
          Small group tours that bring together history, archaeology and local culture.
        </p>
      </div>

      {/* Hike Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-center mt-10 px-4 max-w-[900px] mx-auto mb-16">
        {allHikes.map((hike, index) => (
          <div
            key={index}
            onClick={(e) => handleCardClick(hike, e)}
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

                {/* Short text preview */}


                {/* Stats Section */}
                <div className="flex flex-col items-center mt-2 w-full">
                  {(hike.time || hike.tagline) && (
                    <>
                      {/* Time */}
                      {hike.time && (
                        <div className="flex items-center gap-2">
                          <img src={timeIcon} alt="Time" className="w-4 h-4" />
                          <span className="font-['Nunito_Sans'] font-medium text-[16px] leading-[20px] text-[#2B2B2B] tracking-[0]">
                            {hike.time}
                          </span>
                        </div>
                      )}

                      {/* Tagline below time */}
                      {hike.tagline && (
                        <p className="text-center font-['Nunito_Sans'] font-medium text-[14px] leading-[20px] text-[#434343] mt-1">
                          {hike.tagline}
                        </p>
                      )}
                    </>
                  )}
                </div>

                <div className="mt-4 mb-3 text-sm leading-[20px] text-gray-600 font-['Nunito_Sans'] relative">
                  <p className="line-clamp-2 inline">
                    {hike.shortText}
                  </p>

                <button
  className="ml-1 inline text-[#C56441] font-medium hover:underline"
  onClick={() => setSelectedHike(hike)}
>
  Read more
</button>

                </div>

              </div>

              {/* Cost + Button */}
              <div className="flex justify-between items-center mt-2">
                <p className="font-['Nunito_Sans'] font-bold text-[16px] leading-[27px] tracking-[0] text-[#167800]">
                  {hike.cost}
                </p>

                <button
                  onClick={(e) => handleBookNow(e, hike)}
                  className="bg-[#C56441] hover:bg-[#a85632] text-white font-semibold py-1.5 px-4 rounded-md text-sm 
                    transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                >
                  Request Now
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* Tailored Hike Card */}
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

      {/* Hike Detail Modal - Using your design pattern */}
      {selectedHike && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-2">
          <div className="relative bg-white w-full max-w-lg sm:max-w-2xl rounded-xl p-3 flex flex-col md:flex-row gap-3 max-h-[90vh]">

            {/* Close button */}
            <button
              onClick={handleCloseDetailModal}
              className="absolute top-2 right-2 w-7 h-7 rounded-full bg-white shadow flex items-center justify-center text-gray-600 hover:bg-gray-100"
            >
              ×
            </button>

            {/* Image */}
            <div className="w-full md:w-1/3 flex-shrink-0">
              <div className="w-full h-[180px] sm:h-[200px] md:h-full rounded-lg overflow-hidden">
                <img
                  src={selectedHike.img}
                  alt={selectedHike.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="w-full md:w-2/3 flex flex-col gap-3 overflow-y-auto">

              {/* Title */}
              <h3 className="font-['Nunito_Sans'] font-bold text-[18px] sm:text-[22px] text-[#C56441]">
                {selectedHike.title}
              </h3>

              {/* Info pills */}
              <div className="flex flex-wrap gap-2">
                <div className="flex items-center gap-1 px-2 py-1 bg-gray-100 rounded-md text-[13px]">
                  <img src={timeIcon} className="w-4 h-4" />
                  {selectedHike.time}
                </div>




              </div>

              {/* Details */}
              <div className="space-y-3">
                {selectedHike.details?.sections?.map((section, i) => (
                  <div key={i}>
                
                    <ul className="space-y-1">
                      {section.points.map((point, j) => (
                        <li key={j} className="flex items-start text-[13px] text-gray-700">
                          <span className="text-[#C56441] mr-2">•</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              {/* Request Now Button */}
<div className="mt-auto pt-3">
  <button
    onClick={() => setIsModalOpen(true)}
    className="w-full bg-[#C56441] text-white py-2.5 rounded-lg font-semibold text-[14px] hover:bg-[#b25536] transition"
  >
    Request Now
  </button>
</div>


            </div>
          </div>
        </div>
      )}


      {/* Tailored Hike Modal */}
      {isTailoredHikeModalOpen && (
        <div className="fixed inset-0 font-raleway bg-black/60 z-50 flex items-center justify-center p-3">
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
                <h3 className="text-lg font-bold text-[#C56441] font-raleway">
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
      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}