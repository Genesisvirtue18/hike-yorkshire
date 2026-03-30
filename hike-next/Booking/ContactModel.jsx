import React, { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function ContactModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Prepare data for Formspree
    const submissionData = {
      ...formData,
      formType: "Contact Form",
      source: "Contact Modal"
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
        setFormData({ name: "", phone: "", email: "", message: "" });
        
        // Auto-close modal after 3 seconds
        setTimeout(() => {
          setShowSuccessMessage(false);
          onClose();
        }, 5000);
      } else {
        alert("There was an error sending your message. Please try again.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("There was an error sending your message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-xl w-[95%] max-w-[560px] p-6 relative max-h-[90vh] overflow-y-auto">
        
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

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 p-2 rounded-full hover:bg-gray-100 disabled:opacity-50"
          disabled={isSubmitting}
        >
          <XMarkIcon className="w-5 h-5 text-gray-700" />
        </button>

        {/* Heading */}
        <div className="text-center mb-4">
          <h2 className="font-['Raleway'] font-bold text-[26px] text-[#C56441] mb-1">
            Get in Touch
          </h2>
          <p className="font-['Nunito_Sans'] text-[14px] text-[#434343]">
            Start your journey with Hike Yorkshire
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-3">
          
          {/* Name + Phone */}
          <div className="flex flex-col md:flex-row gap-3">
            <div className="flex-1">
              <label className="block text-[#6D6D6D] text-sm mb-1">
                Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder="Your name"
                className="w-full px-4 py-2.5 border border-[#B1B1B1] rounded-full
                text-sm outline-none focus:ring-2 focus:ring-[#C65A2E] disabled:opacity-70"
                disabled={isSubmitting}
              />
            </div>

            <div className="flex-1">
              <label className="block text-[#6D6D6D] text-sm mb-1">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Phone number"
                className="w-full px-4 py-2.5 border border-[#B1B1B1] rounded-full
                text-sm outline-none focus:ring-2 focus:ring-[#C65A2E] disabled:opacity-70"
                disabled={isSubmitting}
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-[#6D6D6D] text-sm mb-1">
              Email *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              placeholder="Email address"
              className="w-full px-4 py-2.5 border border-[#B1B1B1] rounded-full
              text-sm outline-none focus:ring-2 focus:ring-[#C65A2E] disabled:opacity-70"
              disabled={isSubmitting}
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-[#6D6D6D] text-sm mb-1">
              Message *
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              rows="3"
              placeholder="Your message"
              className="w-full px-4 py-2.5 border border-[#B1B1B1] rounded-xl
              text-sm outline-none resize-none focus:ring-2 focus:ring-[#C65A2E] disabled:opacity-70"
              disabled={isSubmitting}
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full mt-2 py-2.5 bg-[#C65A2E] text-white text-sm font-semibold
            rounded-full hover:bg-[#a74d27] transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </>
            ) : (
              "Send Message"
            )}
          </button>

          <p className="text-center text-xs text-gray-500 pt-1">
            We usually respond within 24 hours
          </p>
        </form>
      </div>
    </div>
  );
}