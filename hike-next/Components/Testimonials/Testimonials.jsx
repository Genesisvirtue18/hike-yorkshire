// Remove these imports
// import TestimonialBg from '../../../public/assets/Testimonial/testimonialbackground.webp';
// import ReviewerPhoto1 from '../../../public/assets/Testimonial/reviewer.webp';
// import ReviewerPhoto2 from '../../../public/assets/Testimonial/reviewer-1.webp';

export default function Testimonials() {
  return (
    <section
      className="relative py-12 md:py-15 px-4 sm:px-6 lg:px-8 bg-cover bg-center"
      style={{ backgroundImage: `url('/assets/Testimonial/testimonialbackground.webp')` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto py-8 md:py-28 px-4 md:px-6 lg:px-16 flex flex-col md:flex-row items-start gap-8 md:gap-16">
        {/* Left Text */}
        <div className="text-white flex flex-col justify-center w-full md:w-1/2">
          <h2
            style={{
              fontFamily: "Raleway, sans-serif",
              fontWeight: 700,
              fontSize: "clamp(32px, 5vw, 40px)",
              lineHeight: "clamp(40px, 6vw, 56px)",
              letterSpacing: "0",
            }}
            className="mb-4 md:mb-6"
          >
            What Our Hikers Say
          </h2>
          <p
            style={{
              fontFamily: "Nunito Sans, sans-serif",
              fontWeight: 400,
              fontSize: "clamp(18px, 3vw, 22px)",
              lineHeight: "clamp(28px, 4vw, 40px)",
              letterSpacing: "0",
              color: "#FFFFFF",
            }}
          >
            See why explorers of all levels choose Hike Yorkshire for their next adventure.
          </p>
        </div>

        {/* Right Testimonial Cards */}
        <div className="flex w-full md:w-1/2 overflow-x-auto gap-4 md:gap-6 scroll-smooth pb-4
                [&::-webkit-scrollbar]:hidden
                scrollbar-none">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 flex flex-col justify-between flex-shrink-0 w-[85vw] sm:w-80 md:w-96">
            <p
              style={{
                fontFamily: "Nunito Sans, sans-serif",
                fontWeight: 500,
                fontSize: "16px",
                lineHeight: "26px",
                color: "#4A4A4A",
                marginBottom: "1rem",
                textAlign: "left",
              }}
              className="md:text-[18px] md:leading-[28px]"
            >
              "‘I booked a guide for the Yorkshire 3 peaks as we were a group of mixed abilities. Hike Yorkshire's guise was an ex marine who was amazing and showed us all how to pack our kit properly and router.push with just a map and compass. We really enjoyed it!."
            </p>
            <div className="flex items-center gap-3">
              {/* Reviewer Image */}
              <img 
                src="/assets/Testimonial/reviewer.webp"
                alt="Charles" 
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <h3
                  style={{
                    fontFamily: "Nunito Sans, sans-serif",
                    fontWeight: 600,
                    fontSize: "14px",
                    lineHeight: "18px",
                    color: "#333333",
                  }}
                >
                  Charles
                </h3>
                {/* 5 Stars */}
                <div className="flex items-center mt-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 flex flex-col justify-between flex-shrink-0 w-[85vw] sm:w-80 md:w-96">
            <p
              style={{
                fontFamily: "Nunito Sans, sans-serif",
                fontWeight: 500,
                fontSize: "16px",
                lineHeight: "26px",
                color: "#4A4A4A",
                marginBottom: "1rem",
                textAlign: "left",
              }}
              className="md:text-[18px] md:leading-[28px]"
            >
              "I had a camping holiday planned but I had never camped before. I did a fieldcraft course with Hike Yorkshire and it was so useful. They taught me loads of useful things and tricks to keep myself warm and dry!."
            </p>
            <div className="flex items-center gap-3">
              {/* Reviewer Image */}
              <img 
                src="/assets/Testimonial/reviewer-1.webp"
                alt="Em" 
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <h3
                  style={{
                    fontFamily: "Nunito Sans, sans-serif",
                    fontWeight: 600,
                    fontSize: "14px",
                    lineHeight: "18px",
                    color: "#333333",
                  }}
                >
                  Em
                </h3>
                {/* 5 Stars */}
                <div className="flex items-center mt-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}