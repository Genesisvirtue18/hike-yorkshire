import React from "react";
import Navbar from "../Components/NavBar/Navbar";
// import BgImage from "../../src/assets/ContactUs/mountain-bg.webp"; 

export default function Contact() {
    const BgImage= "/assets/ContactUs/mountain-bg.webp"; 

    return (
        <div
            className="relative w-full h-screen bg-cover bg-center overflow-hidden"
            style={{
                backgroundImage: `url(${BgImage})`,
            }}
        >
            {/* Navbar */}
            <Navbar />
   

            {/* Center Content Box */}
            <div className="min-h-screen flex items-center justify-center ">
                <div className="bg-white rounded-[20px] shadow-lg w-[90%] max-w-[900px] p-[30px] flex flex-col md:flex-row items-center gap-[20px]">

                    {/* Left Side */}
                    <div className="w-full md:w-[40%] flex flex-col justify-center text-center md:text-left">
                        <h2 className="font-[Raleway] font-bold text-[40px] leading-[110%] text-[#C56441] mb-2">
                            Get in Touch
                        </h2>

                        <p className="font-['Nunito_Sans'] font-medium text-[15px] leading-[26px] text-[#434343]">
                            Reach out and start your journey with <br /> Hike Yorkshire today.
                        </p>
                    </div>

                    {/* Right Side - Form */}
                    <div className="w-full md:w-[60%]">
                        <form className="space-y-3">
                            {/* Name + Phone */}
                            <div className="flex flex-col md:flex-row gap-3">
                                <div className="flex-1">
                                    <label className="block text-[#6D6D6D] font-['Nunito_Sans'] font-medium text-[14px] leading-[21px] mb-1">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Enter Your Name"
                                        className="w-full px-3 py-2 border border-[#B1B1B1] rounded-full outline-none
              font-['Nunito_Sans'] text-[13px] leading-[20px] text-[#434343]
              placeholder:text-[#AFAFAF]
              focus:ring-1 focus:ring-[#C65A2E]"
                                    />
                                </div>

                                <div className="flex-1">
                                    <label className="block text-[#6D6D6D] font-['Nunito_Sans'] font-medium text-[14px] leading-[21px] mb-1">
                                        Phone Number
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Enter Your Phone Number"
                                        className="w-full px-3 py-2 border border-[#B1B1B1] rounded-full outline-none
              font-['Nunito_Sans'] text-[13px] leading-[20px] text-[#434343]
              placeholder:text-[#AFAFAF]
              focus:ring-1 focus:ring-[#C65A2E]"
                                    />
                                </div>
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block text-[#6D6D6D] font-['Nunito_Sans'] font-medium text-[14px] leading-[21px] mb-1">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    placeholder="Enter Your Email"
                                    className="w-full px-3 py-2 border border-[#B1B1B1] rounded-full outline-none
            font-['Nunito_Sans'] text-[13px] leading-[20px] text-[#434343]
            placeholder:text-[#AFAFAF]
            focus:ring-1 focus:ring-[#C65A2E]"
                                />
                            </div>

                            {/* Message */}
                            <div>
                                <label className="block text-[#6D6D6D] font-['Nunito_Sans'] font-medium text-[14px] leading-[21px] mb-1">
                                    Message
                                </label>
                                <textarea
                                    rows="3"
                                    placeholder="Enter Your Message"
                                    className="w-full px-3 py-2 border border-[#B1B1B1] rounded-2xl outline-none
            font-['Nunito_Sans'] text-[13px] leading-[20px] text-[#434343]
            placeholder:text-[#AFAFAF]
            focus:ring-1 focus:ring-[#C65A2E] resize-none"
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="px-6 py-2 bg-[#C65A2E] text-white text-[14px] font-semibold rounded-full hover:bg-[#a74d27] transition-all duration-300"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>



        </div>
    );
}
