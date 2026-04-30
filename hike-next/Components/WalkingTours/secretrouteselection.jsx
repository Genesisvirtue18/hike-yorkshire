"use client"
import { useState } from "react";
import Navbar from "../Navbar/Navbar";
// import SecretHeroImage from "../../assets/WalkingTour/secret-route-hero.webp";
import SecretBookingModal from "@/Booking/SecretRouteBooking"; 




export default function SecretRoutesSection() {
      const [isModalOpen, setIsModalOpen] = useState(false);
      const SecretHeroImage = "/assets/WalkingTour/secret-route-hero.webp";


    return (

        <section className="w-full">
            <Navbar />
           
            {/* Hero Image with Centered Text */}
            <div className="relative w-full h-[75vh] md:h-[85vh]">
                <img
                    src={SecretHeroImage}
                    alt="Secret Route"
                    className="w-full h-full object-cover"
                />

                {/* Center Text */}
                <div className="absolute inset-0 flex items-end justify-start pb-16 px-10">
                    <h1 className="text-white font-[Raleway] font-semibold text-[35px] leading-[62px] max-w-3xl">
                        Hidden paths. Untold stories. Secret Yorkshire.
                    </h1>
                </div>

            </div>

            {/* Content Section */}
            <div className="max-w-6xl mx-auto py-8 px-6 grid grid-cols-1 md:grid-cols-2 gap-10">

                {/* Left Side Text */}
                <div>
                    <p className="text-[#434343] font-['Nunito_Sans'] font-normal text-[16px] leading-[30px] mb-4">
                        Not every path needs to be shared. Our Secret Routes take you off
                        the beaten track, to peaceful valleys, hidden waterfalls, and quiet
                        hillsides known only to a few.
                    </p>

                    <p className="text-[#434343] font-['Nunito_Sans'] font-normal text-[16px] leading-[30px] mb-4">
                        To protect these special places, we don’t publish them online.
                        Request your secret route, and we’ll plan a bespoke walk just for
                        your group.
                    </p>
                </div>

                {/* Right Side Text + Button (CENTERED) */}
                <div className="flex flex-col items-center justify-center gap-2">
                    <p className="text-[#C56441] font-['Nunito_Sans'] font-semibold 
  text-[18px] leading-[36px] text-center">
                        Let’s keep Yorkshire’s quiet beauty undisturbed, and its secrets safe.
                    </p>

                    <button
                                        onClick={() => setIsModalOpen(true)}

                        className="bg-[#C56441] text-white font-['Nunito_Sans'] font-semibold
  text-[12px] w-[160px] h-[46px] rounded-[8px]
  px-3 py-2 transition-all
  hover:bg-[#D86A45] hover:shadow-[0_0_12px_4px_rgba(200,100,65,0.35)]"
                    >
                        Request Secret Route
                    </button>

                </div>


            </div>

   {/* ✅ MODAL RENDER HERE */}
            <SecretBookingModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </section>
    );
}
