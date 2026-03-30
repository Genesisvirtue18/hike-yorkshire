"use client";
import React, { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function BookingModal({ isOpen, onClose }) {
  const [tab, setTab] = useState("fixed");
  const [groupSize, setGroupSize] = useState(1);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [customLocation, setCustomLocation] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    startDate: "",
    endDate: "",
    month: "",
    year: "",
    ability: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleLocationChange = (e) => {
    const value = e.target.value;
    setSelectedLocation(value);
    
    // Clear custom location if user selects a predefined location
    if (value !== "other") {
      setCustomLocation("");
    }
  };

  const handleCustomLocationChange = (e) => {
    setCustomLocation(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Determine which location to use
    const finalLocation = selectedLocation === "other" 
      ? customLocation 
      : selectedLocation;

    // Prepare data for Formspree
    const submissionData = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      location: finalLocation,
      ability: formData.ability,
      groupSize: groupSize,
      bookingType: tab === "fixed" ? "Fixed Dates" : "Flexible Dates",
      ...(tab === "fixed" && { 
        startDate: formData.startDate,
        endDate: formData.endDate
      }),
      ...(tab === "flexible" && { 
        preferredMonth: formData.month,
        preferredYear: formData.year
      })
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
          startDate: "",
          endDate: "",
          month: "",
          year: "",
          ability: ""
        });
        setSelectedLocation("");
        setCustomLocation("");
        setGroupSize(1);
        
        // Auto-close modal after 3 seconds
        setTimeout(() => {
          setShowSuccessMessage(false);
          onClose();
        }, 5000);
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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-xl w-[95%] md:w-[600px] p-6 relative animate-fadeIn max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 p-1.5 rounded-full hover:bg-gray-100"
          disabled={isSubmitting}
        >
          <XMarkIcon className="w-5 h-5 text-gray-700" />
        </button>

        {/* Success Message Overlay */}
        {showSuccessMessage && (
          <div className="absolute inset-0 bg-white/95 flex flex-col items-center justify-center rounded-2xl z-10">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Thank You!</h3>
              <p className="text-gray-600 mb-1">Thank you for your request. Our team will get back to you shortly.</p>
              <div className="mt-6 text-sm text-gray-500">
                <p>Closing in 5 seconds...</p>
              </div>
            </div>
          </div>
        )}

        {/* Heading */}
        <h2 className="font-[Raleway] font-bold text-[24px] md:text-[28px] leading-[32px] text-[#926A39] mb-1">
          Book your hike
        </h2>
        <p className="text-gray-600 text-sm mb-4">
          Select your preferred dates and group details, we'll confirm your booking soon.
        </p>

        {/* Tabs */}
        <div className="inline-flex mb-6 bg-[#FAD4C3] rounded-lg p-1">
          <button
            onClick={() => setTab("fixed")}
            className={`px-4 py-1.5 transition-all font-['Nunito_Sans'] font-semibold text-[12px] leading-[24px] ${
              tab === "fixed"
                ? "bg-[#C56441] text-white rounded-lg"
                : "text-[#EA8E6C] bg-transparent"
            }`}
            disabled={isSubmitting}
          >
            Fixed Dates
          </button>
          <button
            onClick={() => setTab("flexible")}
            className={`px-4 py-1.5 transition-all font-['Nunito_Sans'] font-semibold text-[12px] leading-[24px] ${
              tab === "flexible"
                ? "bg-[#C56441] text-white rounded-lg"
                : "text-[#EA8E6C] bg-transparent"
            }`}
            disabled={isSubmitting}
          >
            Flexible Dates
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {/* Name */}
            <div className="col-span-1">
              <label className="font-['Nunito_Sans'] font-medium text-[14px] leading-[20px] text-[#5A5A5A]">
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your full name"
                className="w-full mt-1 p-2 rounded-full bg-[#FFF5F1] outline-none font-['Nunito_Sans'] font-medium text-[14px] leading-[20px] text-[#5A5A5A] placeholder-gray-400"
                required
                disabled={isSubmitting}
              />
            </div>

            {/* Email */}
            <div className="col-span-1">
              <label className="font-['Nunito_Sans'] font-medium text-[14px] leading-[20px] text-[#5A5A5A]">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                className="w-full mt-1 p-2 rounded-full bg-[#FFF5F1] outline-none font-['Nunito_Sans'] font-medium text-[14px] leading-[20px] text-[#5A5A5A] placeholder-gray-400"
                required
                disabled={isSubmitting}
              />
            </div>

            {/* Phone Number */}
            <div className="col-span-1 md:col-span-2">
              <label className="font-['Nunito_Sans'] font-medium text-[14px] leading-[20px] text-[#5A5A5A]">
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Enter your phone number"
                className="w-full mt-1 p-2 rounded-full bg-[#FFF5F1] outline-none font-['Nunito_Sans'] font-medium text-[14px] leading-[20px] text-[#5A5A5A] placeholder-gray-400"
                required
                disabled={isSubmitting}
              />
            </div>
          </div>

          {/* Form - Now includes Location at the top */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Location Field - First in the form section */}
            <div className="col-span-1 md:col-span-2">
              <label className="font-['Nunito_Sans'] font-medium text-[14px] leading-[20px] text-[#5A5A5A]">
                Select Hike Route *
              </label>
              <select
                value={selectedLocation}
                onChange={handleLocationChange}
                className="w-full mt-1 p-2 rounded-full bg-[#FFF5F1] outline-none font-['Nunito_Sans'] font-medium text-[14px] leading-[20px] text-[#5A5A5A]"
                required
                disabled={isSubmitting}
              >
                <option value="">Choose a hike route</option>
                <option value="daleway">Dales Way</option>
                <option value="coast-to-coast">Coast to Coast</option>
                <option value="cleveland">Cleveland Way</option>
                <option value="other">Other (specify)</option>
              </select>
              
              {/* Custom Location Input - Only shown when "Other" is selected */}
              {selectedLocation === "other" && (
                <div className="mt-2">
                  <label className="font-['Nunito_Sans'] font-medium text-[14px] leading-[20px] text-[#5A5A5A]">
                    Specify Your Hike Route *
                  </label>
                  <input
                    type="text"
                    value={customLocation}
                    onChange={handleCustomLocationChange}
                    placeholder="Enter your preferred hike route"
                    className="w-full mt-1 p-2 rounded-full bg-[#FFF5F1] outline-none font-['Nunito_Sans'] font-medium text-[14px] leading-[20px] text-[#5A5A5A] placeholder-gray-400"
                    required={selectedLocation === "other"}
                    disabled={isSubmitting}
                    autoFocus
                  />
                </div>
              )}
            </div>

            {/* Fixed Dates */}
            {tab === "fixed" && (
              <>
                <div>
                  <label className="font-['Nunito_Sans'] font-medium text-[14px] leading-[20px] text-[#5A5A5A]">
                    Select Start Date *
                  </label>
                  <input
                    type="date"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleInputChange}
                    className="w-full mt-1 p-2 rounded-full bg-[#FFF5F1] outline-none font-['Nunito_Sans'] font-medium text-[14px] leading-[20px] text-[#5A5A5A]"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label className="font-['Nunito_Sans'] font-medium text-[14px] leading-[20px] text-[#5A5A5A]">
                    Select End Date *
                  </label>
                  <input
                    type="date"
                    name="endDate"
                    value={formData.endDate}
                    onChange={handleInputChange}
                    className="w-full mt-1 p-2 rounded-full bg-[#FFF5F1] outline-none font-['Nunito_Sans'] font-medium text-[14px] leading-[20px] text-[#5A5A5A]"
                    required
                    disabled={isSubmitting}
                  />
                </div>
              </>
            )}

            {/* Flexible Dates */}
            {tab === "flexible" && (
              <>
                <div>
                  <label className="font-['Nunito_Sans'] font-medium text-[14px] leading-[20px] text-[#5A5A5A]">
                    Select Month *
                  </label>
                  <select 
                    name="month"
                    value={formData.month}
                    onChange={handleInputChange}
                    className="w-full mt-1 p-2 rounded-full bg-[#FFF5F1] outline-none font-['Nunito_Sans'] font-medium text-[14px] leading-[20px] text-[#5A5A5A]"
                    required
                    disabled={isSubmitting}
                  >
                    <option value="">Select Tentative Month</option>
                    <option value="January">January</option>
                    <option value="February">February</option>
                    <option value="March">March</option>
                    <option value="April">April</option>
                    <option value="May">May</option>
                    <option value="June">June</option>
                    <option value="July">July</option>
                    <option value="August">August</option>
                    <option value="September">September</option>
                    <option value="October">October</option>
                    <option value="November">November</option>
                    <option value="December">December</option>
                  </select>
                </div>

                <div>
                  <label className="font-['Nunito_Sans'] font-medium text-[14px] leading-[20px] text-[#5A5A5A]">
                    Select Year *
                  </label>
                  <select 
                    name="year"
                    value={formData.year}
                    onChange={handleInputChange}
                    className="w-full mt-1 p-2 rounded-full bg-[#FFF5F1] outline-none font-['Nunito_Sans'] font-medium text-[14px] leading-[20px] text-[#5A5A5A]"
                    required
                    disabled={isSubmitting}
                  >
                    <option value="">Select Tentative Year</option>
                    <option value="2026">2026</option>
                    <option value="2027">2027</option>
                    <option value="2028">2028</option>
                    <option value="2029">2029</option>
                  </select>
                </div>
              </>
            )}

            {/* Group Ability */}
            <div>
              <label className="font-['Nunito_Sans'] font-medium text-[14px] leading-[20px] text-[#5A5A5A]">
                Group Ability *
              </label>
              <select 
                name="ability"
                value={formData.ability}
                onChange={handleInputChange}
                className="w-full mt-1 p-2 rounded-full bg-[#FFF5F1] outline-none font-['Nunito_Sans'] font-medium text-[14px] leading-[20px] text-[#5A5A5A]"
                required
                disabled={isSubmitting}
              >
                <option value="">Select Ability</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Experienced">Experienced</option>
                <option value="Mixed">Mixed</option>
                <option value="Not Known">Not Known</option>
              </select>
            </div>

            {/* Group Size */}
            <div className="flex flex-col gap-1">
              <span className="font-['Nunito_Sans'] font-medium text-[14px] leading-[20px] text-[#5A5A5A]">
                Group Size
              </span>

              <div className="flex items-center justify-between">
                <span className="font-['Nunito_Sans'] font-medium text-[12px] leading-[20px] text-[#5A5A5A]">
                  Select Number of Members
                </span>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    className="px-3 py-1.5 bg-[#E5E5E5] text-black rounded-xl font-['Nunito_Sans'] font-semibold text-[14px] leading-[20px] transition-colors hover:bg-[#FAD4C3] disabled:opacity-50 disabled:cursor-not-allowed"
                    onClick={() => setGroupSize(Math.max(1, groupSize - 1))}
                    disabled={isSubmitting}
                  >
                    −
                  </button>
                  <span className="font-['Nunito_Sans'] font-medium text-[14px] leading-[20px] text-[#5A5A5A]">
                    {groupSize}
                  </span>
                  <button
                    type="button"
                    className="px-3 py-1.5 bg-[#FFF0EA] text-[#C65A2E] rounded-xl font-['Nunito_Sans'] font-semibold text-[14px] leading-[20px] transition-colors hover:bg-[#FAD4C3] disabled:opacity-50 disabled:cursor-not-allowed"
                    onClick={() => setGroupSize(groupSize + 1)}
                    disabled={isSubmitting}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end mt-6">
            <button 
              type="submit"
              disabled={isSubmitting}
              className="bg-[#C65A2E] text-white px-6 py-2 rounded-md hover:bg-[#b04e27] transition text-sm disabled:opacity-70 disabled:cursor-not-allowed flex items-center gap-2"
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
                "Continue"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}