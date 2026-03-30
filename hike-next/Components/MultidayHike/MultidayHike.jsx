"use client";
import { useState } from "react";
import BookingModal from "../../Booking/BookingModel";
import Link from "next/link";

export default function MultiDayHikes() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedHike, setSelectedHike] = useState(null);
  const clevelandmultiDayHikeImg="/assets/Hike/cleveland-multidayhike.webp";
  const DalewayDayHikeImg="/assets/DayHikes/daleway-multidayhike.webp";
  const coasttocoastmultiDayHikeImg="/assets/Hike/coasttocoast-multidayhike.webp";

  const hikes = [
    {
      title: "Dales Way",
      desc: "Take on the Dales' most iconic challenge",
      details: "82 miles • Intermediate • 5-8 days",
      cost: "From £950 per person",
      img: DalewayDayHikeImg,
      path: "/daleway", // Add route path
    },
    {
      title: "Cleveland Way",
      desc: "A dramatic trail combining coastal cliffs, ancient ruins, and sweeping moorland views.",
      details: "109 miles • Intermediate • 7-10 days",
      cost: "From £950 per person",
      img: clevelandmultiDayHikeImg,
      path: "/cleveland", // Add route path
    },
    {
      title: "Coast to Coast",
      desc: "Walk from sea to sea through breathtaking landscapes",
      details: "192 miles • Hard • Three 5 day sections ",
      cost: "From £975 per person",
      img: coasttocoastmultiDayHikeImg,
      path: "/coast-to-coast", // Add route path
    },
  ];

  const handleBookNow = (e, hike) => {
    e.preventDefault(); // Prevent Link navigation
    e.stopPropagation(); // Stop event bubbling
    setSelectedHike(hike);
    setIsModalOpen(true);
  };

  return (
    <section className="py-10 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 md:px-0">
        {/* Section Heading */}
        <div className="mb-6">
          <h2 className="font-[Raleway] font-bold text-[22px] leading-[32px] text-[#C56441]">
            Multi-Day Hikes Across Yorkshire
          </h2>

          <p className="font-['Nunito_Sans'] font-normal text-[16px] leading-[28px] text-[#434343] mt-2">
            Take on unforgettable journeys that stretch beyond a single sunrise,
            and discover the Dales at their finest.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {hikes.map((hike, index) => (
            <div 
              key={index}
              className="group transform transition-all duration-300 hover:scale-[1.02]"
            >
              <Link
                href={hike.path}
                className="bg-white rounded-3xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col p-3 cursor-pointer no-underline hover:no-underline h-full"
              >
                {/* Image */}
                <div className="overflow-hidden rounded-2xl mb-3">
                  <img
                    src={hike.img}
                    alt={hike.title}
                    className="w-full h-56 object-cover transform transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Card Content */}
                <div className="flex flex-col flex-grow">
                  <div>
                    <h3 className="font-['Nunito_Sans'] font-bold text-[20px] leading-[30px] text-[#C56441] mb-1 group-hover:text-[#D86A45] transition-colors duration-300">
                      {hike.title}
                    </h3>
                    <p className="font-['Nunito_Sans'] font-medium text-[16px] leading-[24px] text-[#434343] mb-1">
                      {hike.desc}
                    </p>
                    <p className="font-['Nunito_Sans'] font-medium text-[14px] leading-[20px] text-[#434343] mb-3">
                      {hike.details}
                    </p>
                  </div>

                  {/* Cost and Button - NOT wrapped in Link */}
                  <div className="mt-auto flex items-center justify-between">
                    <p className="font-['Nunito_Sans'] font-bold text-[#167800] text-[14px]">
                      Cost: {hike.cost}
                    </p>

                    <button
                      onClick={(e) => handleBookNow(e, hike)}
                      className="border-2 border-[#C56441] bg-[#C56441] text-white font-['Nunito_Sans'] font-medium text-[13px] px-4 py-1.5 rounded-lg 
                        transition-all duration-300 hover:bg-[#a9562f] hover:border-[#a9562f] hover:scale-110 hover:shadow-md"
                    >
                      Request Now
                    </button>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        hike={selectedHike}
      />
    </section>
  );
}