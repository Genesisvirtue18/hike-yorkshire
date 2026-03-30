"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function SecretYorkshire() {
const router = useRouter();
  return (
    <section className="relative bg-[#f9fafb] py-8 sm:py-12 lg:py-16 overflow-hidden">
      {/* Container */}
      <div className="relative flex items-center justify-center max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Left Image - slightly lower */}
        <div className="hidden lg:block absolute left-0 top-[60%] -translate-y-1/2 w-[30%] xl:w-[35%]">
          <div className="overflow-hidden rounded-r-2xl xl:rounded-r-3xl translate-x-[-40%] xl:translate-x-[-45%]">
            <img
              src="/assets/Secret/left-secret.webp"
              alt="Hikers in Yorkshire"
              className="w-full h-[280px] xl:h-[350px] object-cover"
            />
          </div>
        </div>

        {/* Right Image - slightly higher */}
        <div className="hidden lg:block absolute right-0 top-[40%] -translate-y-1/2 w-[30%] xl:w-[35%]">
          <div className="overflow-hidden rounded-l-2xl xl:rounded-l-3xl translate-x-[40%] xl:translate-x-[45%]">
            <img
              src="/assets/Secret/right-secret.webp"
              alt="Dog in Yorkshire fields"
              className="w-full h-[280px] xl:h-[350px] object-cover"
            />
          </div>
        </div>

        {/* Center Text Card */}
        <div className="relative z-10 rounded-xl sm:rounded-2xl px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10 text-center w-full max-w-2xl lg:w-[45%] lg:max-w-none">
          <h2 className="font-[Raleway] font-bold text-2xl sm:text-[28px] lg:text-[30px] leading-[32px] sm:leading-[40px] lg:leading-[48px] text-[#C56441] text-center mb-3 sm:mb-4">
            The Secret Side of Yorkshire
          </h2>

          <p className="font-['Nunito_Sans'] text-base sm:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[28px] lg:leading-[30px] font-normal text-[#434343] text-center mb-4 sm:mb-6">
            As locals, the team knows a number of 'off the beaten track' routes
            that we like to keep private. These routes are available upon
            request, but we ask that their locations are not published online!
            <br />
            <br className="hidden sm:block" />
            Please make a request here 'Secret Route' and we will get back to
            you regarding our unpublished walks.
          </p>

          <button
  onClick={() => router.push("/secret-route-selection")}
  className="bg-[#C56441] text-white font-['Nunito_Sans'] font-medium 
  text-sm sm:text-[15px] lg:text-[16px] 
  leading-[20px] sm:leading-[22px] lg:leading-[24px]
  w-full sm:w-[200px] lg:w-[220px] 
  h-[44px] sm:h-[48px] lg:h-[50px] 
  rounded-lg sm:rounded-[8px] 
  px-4 sm:px-[24px] py-2 sm:py-[12px] 
  flex items-center justify-center gap-2 sm:gap-[8px]
  transition-all duration-300 mx-auto

  hover:bg-[#a85534]
  hover:shadow-[0_4px_15px_rgba(197,100,65,0.45)]
  hover:-translate-y-1
  hover:scale-[1.03]"
>
  Request Secret Route
</button>


        </div>
      </div>

      {/* Mobile layout */}
      <div className="lg:hidden flex flex-col gap-3 sm:gap-4 mt-6 sm:mt-8 px-4 sm:px-6">
        <img
          src="/assets/Secret/left-secret.webp"
          alt="Hikers in Yorkshire"
          className="w-full h-[200px] sm:h-[250px] object-cover rounded-xl sm:rounded-2xl"
        />
        <img
          src="/assets/Secret/right-secret.webp"
          alt="Dog in Yorkshire fields"
          className="w-full h-[200px] sm:h-[250px] object-cover rounded-xl sm:rounded-2xl"
        />
      </div>
    </section>
  );
}