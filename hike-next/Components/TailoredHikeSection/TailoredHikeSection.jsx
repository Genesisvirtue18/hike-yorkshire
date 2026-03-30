"use client";
import React, { useState } from "react";
import { X } from "lucide-react";

export default function TailoredHikeSection() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const hikeImage="/assets/Hike/tailoredhike.webp";
    
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        groupSize: "",
        preferredDate: "",
        customRequest: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Prepare data for Formspree
        const submissionData = {
            ...formData,
            formType: "Tailored Hike Request",
            source: "Tailored Hike Section"
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
                setShowSuccessMessage(true);
                
                // Reset form
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    groupSize: "",
                    preferredDate: "",
                    customRequest: "",
                });
                
                // Auto-close modal after 3 seconds
                setTimeout(() => {
                    setShowSuccessMessage(false);
                    setIsModalOpen(false);
                }, 3000);
            } else {
                alert("There was an error submitting your request. Please try again.");
            }
        } catch (error) {
            console.error("Form submission error:", error);
            alert("There was an error submitting your request. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <section
                className="relative py-16 md:py-30 px-4 sm:px-6 md:px-16 bg-cover bg-center"
                style={{
                    backgroundImage: `url(${hikeImage})`,
                }}
            >
                {/* White overlay */}
                <div className="absolute inset-0 bg-white/50"></div>

                {/* Content */}
                <div className="relative max-w-3xl mx-auto flex flex-col md:flex-row items-center bg-white rounded-2xl overflow-hidden shadow-lg">
                    {/* Left Text Section */}
                    <div className="p-6 md:p-8 flex-1 w-full">
                        <h2
                            className="mb-4 md:mb-3 text-2xl md:text-[32px] leading-8 md:leading-[48px]"
                            style={{
                                fontFamily: "Raleway, sans-serif",
                                fontWeight: 700,
                                color: "#C56441",
                                letterSpacing: "0",
                            }}
                        >
                            Got a hike in mind?
                        </h2>

                        <p
                            className="mb-6 md:mb-5 text-base md:text-[20px] leading-6 md:leading-[36px]"
                            style={{
                                fontFamily: "Nunito Sans, sans-serif",
                                fontWeight: 500,
                                color: "#434343",
                                letterSpacing: "0",
                            }}
                        >
                            We're happy to plan a tailored hike just for your group, whether it's a new route or a custom day out in nature.
                        </p>
                        <button
                            style={{
                                fontFamily: "Nunito Sans, sans-serif",
                                fontWeight: 500,
                                fontSize: "16px",
                                lineHeight: "24px",
                                letterSpacing: "0",
                                backgroundColor: "#3B4B62",
                                color: "#FFFFFF",
                            }}
                            className="px-5 py-3 md:py-2 rounded-md 
             hover:bg-[#2e3a55] hover:scale-105 hover:shadow-md 
             transition-all duration-200 text-base md:text-[18px] 
             leading-6 md:leading-[27px]"
                            onClick={() => setIsModalOpen(true)}
                        >
                            Request Tailored Hike
                        </button>
                    </div>

                    {/* Right Image Section */}
                    <div className="flex-shrink-0 w-full md:w-1/2 p-4 md:p-4">
                        <div className="rounded-2xl overflow-hidden shadow-lg">
                            <img
                                src={hikeImage}
                                alt="Tailored Hike"
                                className="w-full h-48 sm:h-56 md:h-72 lg:h-82 object-cover rounded-2xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Modal for Tailored Hike Request */}
            {isModalOpen && (
                <div className="fixed inset-0 font-[Raleway] bg-black/60 z-50 flex items-center justify-center p-3">
                    <div className="bg-white rounded-xl max-w-sm w-full max-h-[85vh] overflow-y-auto relative">
                        
                        {/* Success Message Overlay */}
                        {showSuccessMessage && (
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
                                    onClick={() => setIsModalOpen(false)}
                                    className="text-gray-500 hover:text-gray-700 disabled:opacity-50"
                                    disabled={isSubmitting}
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            {/* Form */}
                            <form onSubmit={handleSubmit} className="space-y-3">

                                {/* Name */}
                                <div>
                                    <label className="block text-xs font-medium text-gray-700 mb-0.5">
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-md focus:ring-1 focus:ring-[#C56441] disabled:opacity-70"
                                        placeholder="Your name"
                                        disabled={isSubmitting}
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
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-md focus:ring-1 focus:ring-[#C56441] disabled:opacity-70"
                                        placeholder="Email address"
                                        disabled={isSubmitting}
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
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-md focus:ring-1 focus:ring-[#C56441] disabled:opacity-70"
                                        placeholder="Phone number"
                                        disabled={isSubmitting}
                                    />
                                </div>

                                {/* Group Size */}
                                <div>
                                    <label className="block text-xs font-medium text-gray-700 mb-0.5">
                                        Group Size
                                    </label>
                                    <select
                                        name="groupSize"
                                        value={formData.groupSize}
                                        onChange={handleInputChange}
                                        className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-md focus:ring-1 focus:ring-[#C56441] disabled:opacity-70"
                                        disabled={isSubmitting}
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
                                        value={formData.preferredDate}
                                        onChange={handleInputChange}
                                        className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-md focus:ring-1 focus:ring-[#C56441] disabled:opacity-70"
                                        disabled={isSubmitting}
                                    />
                                </div>

                                {/* Custom Request */}
                                <div>
                                    <label className="block text-xs font-medium text-gray-700 mb-0.5">
                                        Your Ideal Hike *
                                    </label>
                                    <textarea
                                        name="customRequest"
                                        value={formData.customRequest}
                                        onChange={handleInputChange}
                                        required
                                        rows={3}
                                        className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-md focus:ring-1 focus:ring-[#C56441] disabled:opacity-70"
                                        placeholder="Route, difficulty, duration, special needs..."
                                        disabled={isSubmitting}
                                    />
                                </div>

                                {/* Submit */}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-[#3B4B62] text-white py-2.5 rounded-md text-sm font-medium hover:bg-[#2e3a55] transition disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                >
                                    {isSubmitting ? (
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
        </>
    );
}