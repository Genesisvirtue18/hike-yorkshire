import React, { useState } from "react";

export default function SecretRouteBooking({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [groupSize, setGroupSize] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Prepare data for Formspree
    const submissionData = {
      ...formData,
      groupSize: groupSize,
      routeType: "Secret Route",
      source: "Secret Route Booking Form"
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
          experience: "",
        });
        setGroupSize(1);
        
        // Auto-close modal after 3 seconds
        setTimeout(() => {
          setShowSuccessMessage(false);
          onClose();
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
    <div className="fixed inset-0 bg-black/40 font-[Raleway] backdrop-blur-sm flex items-center justify-center z-50 px-3">
      {/* Modal Box */}
      <div className="bg-white w-full max-w-[420px] rounded-xl shadow-lg p-4 relative">
        
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
              <p className="text-gray-600 text-sm mb-1">Your secret route request has been submitted.</p>
              <p className="text-gray-600 font-medium text-sm">We'll connect with you shortly!</p>
              <div className="mt-4 text-xs text-gray-500">
                <p>Closing in 3 seconds...</p>
              </div>
            </div>
          </div>
        )}

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-3 top-3 text-gray-500 text-lg hover:text-gray-700 disabled:opacity-50"
          disabled={isSubmitting}
        >
          ✕
        </button>

        {/* Title */}
        <h1 className="font-[Raleway] font-semibold text-[18px] text-[#926A39]">
          Secret Route Booking
        </h1>
        <p className="text-gray-500 text-xs mt-1 mb-3">
          Fill the details below to request your Secret Route.
        </p>

        <form onSubmit={handleSubmit} className="space-y-3">
          {/* Name */}
          <div>
            <label className="text-xs text-[#5A5A5A] font-medium">Full Name *</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleInput}
              className="w-full mt-1 p-1.5 bg-[#FFF0EA] rounded-md outline-none text-xs disabled:opacity-70"
              disabled={isSubmitting}
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-xs text-[#5A5A5A] font-medium">Email *</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleInput}
              className="w-full mt-1 p-1.5 bg-[#FFF0EA] rounded-md outline-none text-xs disabled:opacity-70"
              disabled={isSubmitting}
            />
          </div>

          {/* Phone */}
          <div>
            <label className="text-xs text-[#5A5A5A] font-medium">Phone *</label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleInput}
              className="w-full mt-1 p-1.5 bg-[#FFF0EA] rounded-md outline-none text-xs disabled:opacity-70"
              disabled={isSubmitting}
            />
          </div>

          {/* Experience */}
          <div>
            <label className="text-xs text-[#5A5A5A] font-medium">Group Ability *</label>
            <select
              name="experience"
              required
              value={formData.experience}
              onChange={handleInput}
              className="w-full mt-1 p-1.5 bg-[#FFF0EA] rounded-md outline-none text-xs disabled:opacity-70"
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
          <div>
            <label className="text-xs text-[#5A5A5A] font-medium">Group Size *</label>

            <div className="flex items-center gap-3 mt-1">
              <button
                type="button"
                onClick={() => setGroupSize(Math.max(1, groupSize - 1))}
                className="w-7 h-7 bg-[#E5E5E5] rounded-md flex items-center justify-center hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isSubmitting}
              >
                −
              </button>

              <span className="text-sm text-[#444] font-medium">{groupSize}</span>

              <button
                type="button"
                onClick={() => setGroupSize(groupSize + 1)}
                className="w-7 h-7 bg-[#FFF0EA] text-[#C56441] rounded-md flex items-center justify-center hover:bg-[#FFE5D9] disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isSubmitting}
              >
                +
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#C56441] text-white py-2 rounded-md text-xs font-semibold 
                     transition-all duration-300
                     hover:bg-[#a9562f] hover:shadow-md hover:scale-[1.02]
                     disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
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
              "Request Secret Route"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}