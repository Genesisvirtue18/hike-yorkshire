import React from "react";


export default function AboutSection() {
  return (
    <section className="py-8 sm:py-10 lg:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-6 sm:gap-8">
        {/* Heading at the top */}
        <h2 className="font-[Raleway] font-bold text-lg sm:text-xl lg:text-[25px] leading-[28px] sm:leading-[32px] lg:leading-[40px] text-[#926A39] tracking-[0px] text-center md:text-left">
          Hike Yorkshire offers guided outdoor adventures and educational walking tours across the Yorkshire Dales.
        </h2>

        {/* Content Columns */}
        <div className="flex flex-col lg:flex-row items-start gap-6 sm:gap-8 w-full">
          {/* Left Large Image */}
          <div className="w-full lg:w-1/2 flex-shrink-0">
            <img
              src="/assets/About/about-1.webp"
              alt="Yorkshire Sheep"
              className="rounded-lg sm:rounded-xl shadow-md sm:shadow-lg w-full h-[255px] sm:h-[355px] md:h-[405px] lg:h-[455px] object-cover"
            />
          </div>

          {/* Right Text and Small Images */}
          <div className="w-full lg:w-1/2 flex flex-col gap-4 sm:gap-6">
            {/* Paragraph */}
            <p className="font-['Nunito_Sans'] font-normal text-base sm:text-[17px] lg:text-[18px] leading-[22px] sm:leading-[32px] lg:leading-[30px] text-[#434343]">
              Hike Yorkshire is a veteran owned outdoor adventure company, based in the beautiful Yorkshire Dales. Our guides are all highly trained in navigation, first aid and knowledgeable about the area's history, geology, architecture, flora and fauna.
              <br />
              <br />
              
              We cater to groups of all abilities, providing an educational, sustainable and safe way to explore Yorkshire's finest scenery. Our courses teach lost skills and our walking tours bring towns and villages to life. Hike Yorkshire provides a safe pair of hands to ensure your day out is a success.
            </p>

            {/* Small Images Grid */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <img
                src="/assets/About/about-2.webp"
                alt="Yorkshire Landscape"
                className="rounded-lg sm:rounded-xl shadow-md w-full h-[120px] sm:h-[140px] lg:h-[150px] object-cover"
              />
              <img
                src="/assets/About/about-3.webp"
                alt="Yorkshire Landscape"
                className="rounded-lg sm:rounded-xl shadow-md w-full h-[120px] sm:h-[140px] lg:h-[150px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}