"use client";
import { useState, useRef, useEffect } from "react";
import { FaRoute } from "react-icons/fa";
import { GiDuration } from "react-icons/gi";
import { MdOutlineTerrain } from "react-icons/md";
import BookingModal from "../../Booking/DayHikeBookingMode";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Yorkshire3peaksImage from "@/public/assets/DayHikes/dalesway-hero.webp";
import MalcomCoveImage from "@/public/assets/DayHikes/Malham-Cove-1.webp";
import BoltonAbbeyImage from "@/public/assets/DayHikes/Bolton-Abbey-1.webp"; // Fixed double slash
import RoseberryImage from "@/public/assets/DayHikes/Roseberry-1.webp";
import IIkleymoorImage from "@/public/assets/DayHikes/Ilkley-moor-1.webp";
import BukdenPike from "@/public/assets/DayHikes/bukden-pike.webp";
import Whiteby from "@/public/assets/DayHikes/Whitby-to-robin.webp";
import Ingleton from "@/public/assets/DayHikes/Ingleton2.webp";
import whernside from "@/public/assets/DayHikes/whernside.webp";

import { useRouter } from "next/navigation";

const hikes = [
  {
    id: 1,
    title: "Yorkshire 3 Peaks",
    sub: "Take on the Dales' most iconic challenge.",
    cost: "From £50 per person",
    length: "25 miles",
    time: "12 hours",
    difficulty: "Hard",
    img: Yorkshire3peaksImage,
    path: "/yorkshire-3-peaks",
  },
  {
    id: 2,
    title: "Malham Cove",
    sub: "Explore limestone cliffs, woodlands, and one of Yorkshire's most loved waterfalls.",
    cost: "From £25 per person",
    length: "4.5 miles",
    time: "3 hours",
    difficulty: "Easy",
    img: MalcomCoveImage,
    path: "/malham-cove-janets-foss",
  },
  {
    id: 3,
    title: "Bolton Abbey",
    sub: "Climb from historic abbey ruins to sweeping moorland views above Wharfedale.",
    cost: "From £30 per person",
    length: "9 miles",
    time: "5 hours",
    difficulty: "Intermediate",
    img: BoltonAbbeyImage,
    path: "/bolton-abbey",
  },
  {
    id: 4,
    title: "Roseberry Topping",
    sub: "Hike to the iconic Roseberry Topping and learn about Captain Cook's heritage.",
    cost: "From £35 per person",
    length: "6.5 miles",
    time: "4 hours",
    difficulty: "Intermediate",
    img: RoseberryImage,
    path: "/roseberry-topping-captain-cooks-monument",
  },
  {
    id: 5,
    title: "Ilkley Moor",
    sub: "Ilkley Moor offers open landscapes, natural walking paths, and scenic views across the surrounding countryside.",
    cost: "From £25 per person",
    length: "5 miles",
    time: "3 hours",
    difficulty: "Intermediate",
    img: IIkleymoorImage,
    path: "/ilkley-moor",
  },
  {
    id: 6,
    title: "Buckden Pike",
    sub: "Buckden Pike is a rewarding circular hike from Buckden village, featuring steep climbs, open moorland and wide-ranging views over Upper Wharfedale and Langstrothdale.",
    cost: "From £30 per person",
    length: "9 miles ",
    time: "3.5 hours",
    difficulty: "Intermediate",
    img: BukdenPike,
    path: "/buckden-pike",
  },
  {
    id: 7,
    title: "Whitby to Robin Hood's Bay",
    sub: "Walk a stunning section of the Cleveland Way from Whitby to Robin Hood's Bay, with dramatic clifftop views over the North Sea and a rich mix of coastal wildlife and history.",
    cost: "From £35 per person",
    length: "7 miles ",
    time: "4 hours",
    difficulty: "Intermediate",
    img: Whiteby,
    path: "/whitby-robin-hoods-bay",
  },
  {
    id: 8,
    title: "Ingleton Falls",
    sub: "A classic Yorkshire Dales hike featuring tumbling waterfalls, limestone gorges, ancient woodland, and wide open views across the glacial valley of Kingsdale.",
    cost: "From £25 per person",
    length: "4 miles",
    time: "3 hours",
    difficulty: "Easy",
    img: Ingleton,
    path: "/ingleton-falls",
  },
  {
    id: 9,
    title: "Whernside",
    sub: "A classic Yorkshire Dales mountain hike climbing the highest of the Three Peaks, combining high-level moorland walking, sweeping summit views, and the dramatic industrial heritage of Ribblehead Viaduct.",
    cost: "From £40 per person",
    length: "10 miles",
    time: "5 hours",
    difficulty: "Intermediate",
    img: whernside,
    path: "/whernside",
  }
];

export default function FeaturedHikes() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedHike, setSelectedHike] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [slideDirection, setSlideDirection] = useState('next');
  const [cardsPerView, setCardsPerView] = useState(2);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const router = useRouter();
  const featuredBg = "/assets/Hike/featuredhike.webp";
  
  // The min swipe distance to trigger slide
  const minSwipeDistance = 50;

  // Update cards per view based on screen size
  useEffect(() => {
    const updateCardsPerView = () => {
      const isMobile = window.innerWidth < 768;
      setCardsPerView(isMobile ? 1 : 2);
    };

    updateCardsPerView();
    window.addEventListener('resize', updateCardsPerView);
    
    return () => window.removeEventListener('resize', updateCardsPerView);
  }, []);

  // Handle next slide with animation
  const nextSlide = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setSlideDirection('next');
    
    setCurrentIndex((prevIndex) => 
      prevIndex + cardsPerView >= hikes.length ? 0 : prevIndex + cardsPerView
    );
    
    setTimeout(() => setIsAnimating(false), 300);
  };

  // Handle previous slide with animation
  const prevSlide = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setSlideDirection('prev');
    
    setCurrentIndex((prevIndex) => 
      prevIndex - cardsPerView < 0 ? hikes.length - cardsPerView : prevIndex - cardsPerView
    );
    
    setTimeout(() => setIsAnimating(false), 300);
  };

  // Touch event handlers for swipe detection
  const onTouchStart = (e) => {
    setTouchEnd(null); // Reset touch end
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  // Mouse event handlers for trackpad/mouse swipe
  const onMouseDown = (e) => {
    setTouchEnd(null);
    setTouchStart(e.clientX);
  };

  const onMouseMove = (e) => {
    if (touchStart !== null) {
      setTouchEnd(e.clientX);
    }
  };

  const onMouseUp = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
    
    // Reset
    setTouchStart(null);
    setTouchEnd(null);
  };

  // Get current visible hikes
  const getVisibleHikes = () => {
    const visibleHikes = [];
    for (let i = 0; i < cardsPerView; i++) {
      const hikeIndex = (currentIndex + i) % hikes.length;
      visibleHikes.push(hikes[hikeIndex]);
    }
    return visibleHikes;
  };

  // Handle card click - router.push to hike detail page
  const handleCardClick = (hike) => (e) => {
    // Don't router.push if the click was on the Book Now button
    if (e.target.closest('button[data-book-now]')) {
      return;
    }
    
    // router.push to hike detail page
    router.push(hike.path); 
  };

  // Handle Book Now click
  const handleBookNowClick = (hike, e) => {
    e.stopPropagation(); // Prevent card click event
    e.preventDefault(); // Prevent any default behavior
    setSelectedHike(hike);
    setIsModalOpen(true);
  };

  const visibleHikes = getVisibleHikes();

  // Calculate slide animation classes
  const getSlideAnimationClass = () => {
    if (!isAnimating) return '';
    
    if (slideDirection === 'next') {
      return 'slide-out-left slide-in-right';
    } else {
      return 'slide-out-right slide-in-left';
    }
  };

  return (
    <section
      className="relative w-full py-6 md:py-8 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${featuredBg})`,
        height: "auto",
        opacity: 1,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/50"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header - Stack vertically on mobile */}
        <div className="mb-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* LEFT: Heading + Subtitle - Center text on mobile */}
          <div className="text-center sm:text-left w-full sm:w-auto">
            <h2 className="font-[Raleway] font-bold text-[#926A39] text-[20px] leading-[28px] md:text-[24px] md:leading-[36px]">
              Top day hikes in Yorkshire
            </h2>
            <p className="font-['Nunito_Sans'] text-[14px] leading-[24px] md:text-[16px] md:leading-[28px] text-[#434343] mt-2 max-w-3xl mx-auto sm:mx-0">
              Challenge yourself with our favorite full-day hikes across stunning northern landscapes.
            </p>
          </div>

          {/* RIGHT: Navigation Buttons - Center on mobile */}
          <div className="flex items-center gap-3">
            {/* Left Arrow */}
            <button
              onClick={prevSlide}
              disabled={isAnimating}
              className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center 
                bg-[#C56441]/90 text-white rounded-full
                shadow-md shadow-black/20
                hover:bg-[#C56441] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <FaChevronLeft className="text-[14px] md:text-[18px]" />
            </button>

            {/* Right Arrow */}
            <button
              onClick={nextSlide}
              disabled={isAnimating}
              className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center 
                bg-[#C56441]/90 text-white rounded-full
                shadow-md shadow-black/20
                hover:bg-[#C56441] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <FaChevronRight className="text-[14px] md:text-[18px]" />
            </button>
          </div>
        </div>

        {/* Hike Cards Container with Sliding Animation and Swipe Detection */}
        <div 
          className="relative"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp} // Reset if mouse leaves area
        >
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 ${getSlideAnimationClass()}`}>
            {visibleHikes.map((hike) => (
              <div
                key={hike.id}
                onClick={handleCardClick(hike)}
                className="group relative transition-all duration-300 hover:scale-[1.02] cursor-pointer select-none"
              >
                {/* Card Container */}
                <div className="bg-white rounded-2xl md:rounded-3xl shadow-md group-hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col h-full">
                  <div className="relative p-3 pb-0">
                    {/* Image container with overflow-hidden */}
                    <div className="overflow-hidden rounded-xl">
                      <img
                        src={hike.img.src}
                        alt={hike.title}
                        className="w-full h-48 md:h-80 object-cover transform transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>

                    {/* Info Pills */}
                    <div className="absolute bottom-2 md:bottom-3 left-1/2 -translate-x-1/2 w-[95%] md:w-[90%] flex flex-wrap justify-center gap-1 md:gap-2">
                      <div className="flex items-center bg-white px-2 py-1 md:px-3 md:py-1.5 rounded-full shadow-md text-[#2B2B2B] font-['Nunito_Sans'] font-medium text-[11px] md:text-[13px] whitespace-nowrap">
                        <FaRoute className="mr-1 text-[#C56441]" />
                        Length - {hike.length}
                      </div>

                      <div className="flex items-center bg-white px-2 py-1 md:px-3 md:py-1.5 rounded-full shadow-md text-[#2B2B2B] font-['Nunito_Sans'] font-medium text-[11px] md:text-[13px] whitespace-nowrap">
                        <GiDuration className="mr-1 text-[#C56441]" />
                        Time - {hike.time}
                      </div>

                      <div className="flex items-center bg-white px-2 py-1 md:px-3 md:py-1.5 rounded-full shadow-md text-[#2B2B2B] font-['Nunito_Sans'] font-medium text-[11px] md:text-[13px] whitespace-nowrap">
                        <MdOutlineTerrain className="mr-1 text-[#C56441]" />
                        Difficulty - {hike.difficulty}
                      </div>
                    </div>
                  </div>

                  {/* TEXT + BOTTOM (flex column) */}
                  <div className="p-4 md:p-6 flex flex-col h-full">
                    {/* Title */}
                    <div className="font-[Raleway] font-normal text-[#C56441] text-[18px] md:text-[20px] leading-[26px] md:leading-[30px] group-hover:text-[#D86A45] transition-all">
                      {hike.title}
                    </div>
                    
                    <p className="font-['Nunito_Sans'] font-medium text-[14px] md:text-[16px] text-[#434343] leading-[20px] md:leading-[24px] mt-2 md:mt-3">
                      {hike.sub}
                    </p>

                    {/* FORCE TO BOTTOM */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-auto pt-4 gap-3">
                      <p className="font-['Nunito_Sans'] font-bold text-[16px] md:text-[18px] text-[#167800] leading-[22px] md:leading-[24px]">
                        {hike.cost}
                      </p>

                      <button
                        data-book-now
                        onClick={(e) => handleBookNowClick(hike, e)}
                        className="border-2 border-[#C56441] bg-[#C56441] text-white font-['Nunito_Sans'] text-[12px] md:text-[14px]
                          px-4 py-2 md:px-5 md:py-2.5 rounded-lg transition-all duration-300
                          hover:bg-[#a9562f] hover:border-[#a9562f]
                          hover:shadow-md hover:scale-105 w-full sm:w-auto
                          relative z-10"
                      >
                        Request Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Indicators - Only show on mobile */}
        <div className="flex justify-center mt-6 md:hidden">
          <div className="flex gap-2">
            {Array.from({ length: Math.ceil(hikes.length) }).map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!isAnimating && index !== currentIndex) {
                    setIsAnimating(true);
                    setSlideDirection(index > currentIndex ? 'next' : 'prev');
                    setCurrentIndex(index);
                    setTimeout(() => setIsAnimating(false), 300);
                  }
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? 'bg-[#C56441] w-4' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
      
      <BookingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        hike={selectedHike}
      />
{/* 
      <style jsx>{`
        .slide-out-left {
          animation: slideOutLeft 0.3s ease-in-out forwards;
        }
        .slide-in-right {
          animation: slideInRight 0.3s ease-in-out forwards;
        }
        .slide-out-right {
          animation: slideOutRight 0.3s ease-in-out forwards;
        }
        .slide-in-left {
          animation: slideInLeft 0.3s ease-in-out forwards;
        }
        
        @keyframes slideOutLeft {
          from {
            transform: translateX(0);
            opacity: 1;
          }
          to {
            transform: translateX(-100%);
            opacity: 0;
          }
        }
        
        @keyframes slideInRight {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        @keyframes slideOutRight {
          from {
            transform: translateX(0);
            opacity: 1;
          }
          to {
            transform: translateX(100%);
            opacity: 0;
          }
        }
        
        @keyframes slideInLeft {
          from {
            transform: translateX(-100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>  */}
    </section>
  );
}