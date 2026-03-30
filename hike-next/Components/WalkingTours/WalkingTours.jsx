"use client";
import React from "react";
import { useState } from "react";
import BookingModal from "../../Booking/WakingTourBookingModel";
import Link from "next/link";

const tours = [
    {
        id: 1,
        title: "Ilkley",
        duration: "Time-2 hours",
        description: "Industrial Ilkley • Ilkley Moor • Charles Darwin",
        cost: "£20/per person",
        image: "/assets/DayHikes/Ilkley-moor-1.webp"
    },
    {
        id: 2,
        title: "Ilkley Moor",
        duration: "Time-2.5 hours",
        description: "Ilkley Moor • Archaeology • Natural Science",
        cost: "£25/per person",
        image: "/assets/DayHikes/IIkleyimage.webp"
    },
    {
        id: 3,
        title: "Skipton",
        duration: "Time-3 hours",
        description: "The canal• Skipton castle • The market",
        cost: "£20/per person",
        image: "/assets/DayHikes/skipton-dayhike.webp"
    },
    {
        id: 4,
        title: "Bolton Abbey",
        duration: "Time-2 hours",
        description: "The abbey• The strid • Valley of Desolation",
        cost: "£20/per person",
        image: "/assets/DayHikes/Bolton-Abbey-1.webp"
    },
    {
        id: 5,
        title: "Grassington",
        duration: "Time-2 hours",
        description: "Mining history• Farming",
        cost: "£20/per person",
        image: "/assets/DayHikes/Grassington.webp"
    },
    {
        id: 6,
        title: "Malham",
        duration: "Time-3 hours",
        description: "Malham cove• Geology of Malham",
        cost: "£25/per person",
        image: "/assets/DayHikes/malham.webp"
    },
    {
        id: 7,
        title: "Whitby",
        duration: "Time-2 hours",
        description: "Coastal tour • Whitby Abbey",
        cost: "£20/per person",
        image: "/assets/DayHikes/Whitby-dayhike.webp"
    },
    {
        id: 8,
        title: "Hawes",
        duration: "Time-2 hours",
        description: "Countryside walk • Local attractions",
        cost: "£20/per person",
        image: "/assets/DayHikes/hawesdayhike.webp"
    },
    {
        id: 9,
        title: "Haworth",
        duration: "Time-2 hours",
        description: "Historic village • Cultural sites",
        cost: "£20/per person",
        image: "/assets/DayHikes/haworth-dayhike.webp"
    },
    {
        id: 10,
        title: "Ripon",
        duration: "Time-2 hours",
        description: "City tour • Historic landmarks",
        cost: "£20/per person",
        image: "/assets/DayHikes/ripon.webp"
    }
];

// Add style tag to fix horizontal scroll
const scrollFixStyles = `
    body {
        overflow-x: hidden;
        width: 100%;
        margin: 0;
        padding: 0;
    }
    #__next {
        overflow-x: hidden;
        width: 100%;
    }
    .scrollbar-none {
        -ms-overflow-style: none;
        scrollbar-width: none;
    }
    .scrollbar-none::-webkit-scrollbar {
        display: none;
    }
`;

export default function WalkingTours() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedTour, setSelectedTour] = useState(null);

    const handleBookNow = (e, tour) => {
        e.preventDefault();
        e.stopPropagation();
        setSelectedTour(tour);
        setIsModalOpen(true);
    };

    const handleCardClick = (e) => {
        // If the click came from the button or within it, don't router.push
        if (e.target.closest('button')) {
            return;
        }
        // Navigation will happen automatically via Link
    };

    return (
        <>
            <style>{scrollFixStyles}</style>
            <section className="bg-white py-16 px-6 md:px-16 font-[Raleway] overflow-x-hidden w-full">
                <div className="max-w-7xl mx-auto">
                    <div className="block lg:flex lg:gap-5 lg:items-center">
                        {/* Left Text Section */}
                        <div className="w-full lg:flex-shrink-0 lg:max-w-md mb-8 lg:mb-0">
                            <h2
                                className="text-[#C56441]  font-bold mb-4 sm:text-center"
                                style={{
                                    fontSize: "clamp(28px, 5vw, 32px)",
                                    lineHeight: "clamp(40px, 6vw, 48px)",
                                }}
                            >
                                Walking Tours in Yorkshire
                            </h2>
                            <p
                                className="text-gray-600 leading-relaxed font-normal"
                                style={{
                                    fontSize: "clamp(14px, 2vw, 16px)",
                                }}
                            >
                                Experience the charm of Yorkshire's countryside and culture on
                                expert-led tours for all abilities.
                            </p>
                        </div>

                        {/* Right Cards Section */}
                        <div className="w-full lg:overflow-visible">
                            <div className="flex gap-6 overflow-x-auto py-4 pr-32 lg:pr-48 scrollbar-none">
                                {tours.map((tour) => (
                                    <Link
                                        key={tour.id}
                                        href="/walking-tours"
                                        onClick={handleCardClick}
                                        className="flex-shrink-0 w-[280px] sm:w-[300px] bg-white rounded-2xl
                                       border border-gray-100 shadow-md hover:shadow-lg
                                       transition-all hover:scale-105 flex flex-col overflow-hidden
                                       no-underline text-inherit cursor-pointer"
                                    >
                                        {/* Image */}
                                        <div className="h-48 sm:h-56 p-2">
                                            <div className="w-full h-full rounded-2xl overflow-hidden bg-gray-100">
                                                <img
                                                    src={tour.image}
                                                    alt={tour.title}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-4 flex flex-col flex-1">
                                            <div className="flex justify-between items-center">
                                                <h3 className="text-[#C33400] font-bold text-lg hover:text-[#D86A45] transition">
                                                    {tour.title}
                                                </h3>
                                                <span className="text-sm text-gray-500">{tour.duration}</span>
                                            </div>

                                            <p className="mt-1 text-[#434343] text-sm">
                                                {tour.description}
                                            </p>

                                            <div className="mt-auto pt-4 flex justify-between items-center">
                                                <p className="font-bold text-[#167800] text-sm">
                                                    Cost : {tour.cost}
                                                </p>

                                                <button
                                                    onClick={(e) => handleBookNow(e, tour)}
                                                    className="bg-[#C56441] text-white text-sm px-3 py-1 rounded-md
                                                           hover:bg-[#D86A45] transition z-10 relative"
                                                >
                                                    Request Now
                                                </button>
                                            </div>
                                        </div>
                                    </Link>
                                ))}

                                <div className="flex-shrink-0 w-32 lg:w-48" />
                            </div>
                        </div>
                    </div>
                </div>
                <BookingModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    tour={selectedTour}
                />
            </section>
        </>
    );
}