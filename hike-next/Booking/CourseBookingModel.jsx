import React, { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

// Import course data (you can import from your actual data file)
const COURSE_DATA = {
  "Fieldcraft": [
    {
      id: 1,
      title: "Beginner Fieldcraft Course",
      description: "Survival Skills • Basic Training",
      price: "£75 per person"
    },
    {
      id: 2,
      title: "Advanced Fieldcraft Course",
      description: "Real World • Survival Skills",
      price: "£120 per person"
    }
  ],
  "Navigation": [
    {
      id: 3,
      title: "Beginner Navigation Course",
      description: "Group navigation • Instructor-led",
      price: "£65 per person"
    },
    {
      id: 4,
      title: "Advanced Navigation Course",
      description: "Individual navigation • Student-led",
      price: "£95 per person"
    }
  ],
  "First Aid": [
    {
      id: 5,
      title: "Beginner First Aid Course",
      description: "Essential First Aid • Classroom Based Learning",
      price: "£60 per person"
    },
    {
      id: 6,
      title: "Advanced First Aid Course",
      description: "Real World • Survival Skills",
      price: "£110 per person"
    }
  ],
  "Foraging": [
    {
      id: 7,
      title: "Foraging Course",
      description: "Wild Fungi Identification • Sustainable Harvesting",
      price: "£60 per person"
    }
  ]
};

export default function CourseBookingModal({ isOpen, onClose, course }) {
  const [groupSize, setGroupSize] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    selectedCategory: "",
    selectedCourse: "",
    selectedMonth: "",
    selectedYear: "",
    experienceLevel: ""
  });

  // Initialize form with course data if provided
  React.useEffect(() => {
    if (course) {
      // Find the category for the course
      let category = "";
      let courseId = "";
      
      Object.entries(COURSE_DATA).forEach(([cat, courses]) => {
        const foundCourse = courses.find(c => 
          c.title === course.title || 
          c.description === course.description ||
          c.price === course.price
        );
        if (foundCourse) {
          category = cat;
          courseId = foundCourse.id.toString();
        }
      });

      setFormData(prev => ({
        ...prev,
        selectedCategory: category,
        selectedCourse: courseId
      }));
    }
  }, [course]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Reset course selection if category changes
    if (name === "selectedCategory" && value !== formData.selectedCategory) {
      setFormData(prev => ({
        ...prev,
        selectedCourse: ""
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    // Get selected course details
    const selectedCourse = COURSE_DATA[formData.selectedCategory]?.find(
      c => c.id.toString() === formData.selectedCourse
    );
    
    // Prepare booking data for Formspree
    const bookingData = {
      _subject: "New Course Booking",
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      course_category: formData.selectedCategory,
      course_id: formData.selectedCourse,
      course_title: selectedCourse?.title || "N/A",
      course_description: selectedCourse?.description || "N/A",
      course_price: selectedCourse?.price || "N/A",
      preferred_month: formData.selectedMonth,
      preferred_year: formData.selectedYear,
      experience_level: formData.experienceLevel,
      group_size: groupSize,
      total_price: selectedCourse ? 
        `£${parseInt(selectedCourse.price.replace(/[^0-9]/g, '')) * groupSize}` : 
        "N/A",
      submitted_at: new Date().toISOString(),
      _replyto: formData.email, // This allows you to reply to the submitter
    };
    
    try {
      const response = await fetch("https://formspree.io/f/mlgwgqel", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(bookingData)
      });
      
      if (response.ok) {
        setSubmitStatus("success");
        
        // Show success message with details
        const successMessage = `
          ✅ Course booking submitted successfully!
          
          Details:
          - Course: ${selectedCourse?.title || "N/A"}
          - Price: ${selectedCourse?.price || "N/A"}
          - Participants: ${groupSize}
          - Total: ${bookingData.total_price}
          - Experience Level: ${formData.experienceLevel}
          
          We'll contact you soon to confirm your booking.
          A confirmation has been sent to: ${formData.email}
        `;
        
        alert(successMessage);
        
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          selectedCategory: "",
          selectedCourse: "",
          selectedMonth: "",
          selectedYear: "",
          experienceLevel: ""
        });
        setGroupSize(1);
        
        onClose();
      } else {
        const errorData = await response.json();
        setSubmitStatus("error");
        alert(`❌ Submission failed: ${errorData.error || "Please try again."}`);
      }
    } catch (error) {
      setSubmitStatus("error");
      console.error("Form submission error:", error);
      alert("❌ Submission failed. Please check your internet connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-xl w-[95%] md:w-[600px] p-6 relative animate-fadeIn max-h-[90vh] overflow-y-auto">
        <form onSubmit={handleSubmit}>
          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-3 right-3 p-1.5 rounded-full hover:bg-gray-100"
            disabled={isSubmitting}
          >
            <XMarkIcon className="w-5 h-5 text-gray-700" />
          </button>

          {/* Heading */}
          <h2 className="font-[Raleway] font-bold text-[24px] md:text-[28px] leading-[32px] text-[#926A39] mb-1">
            Book a Course
          </h2>
          <p className="text-gray-600 text-sm mb-6">
            Select your course details and preferred dates.
          </p>

          {/* Status Messages */}
          {submitStatus === "error" && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
              There was an error submitting your booking. Please try again.
            </div>
          )}

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
                required
                disabled={isSubmitting}
                className="w-full mt-1 p-2 rounded-full bg-[#FFF5F1] outline-none font-['Nunito_Sans'] font-medium text-[14px] leading-[20px] text-[#5A5A5A] placeholder-gray-400 disabled:opacity-50"
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
                required
                disabled={isSubmitting}
                className="w-full mt-1 p-2 rounded-full bg-[#FFF5F1] outline-none font-['Nunito_Sans'] font-medium text-[14px] leading-[20px] text-[#5A5A5A] placeholder-gray-400 disabled:opacity-50"
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
                required
                disabled={isSubmitting}
                className="w-full mt-1 p-2 rounded-full bg-[#FFF5F1] outline-none font-['Nunito_Sans'] font-medium text-[14px] leading-[20px] text-[#5A5A5A] placeholder-gray-400 disabled:opacity-50"
              />
            </div>
          </div>

          {/* Course Selection */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {/* Course Category */}
            <div>
              <label className="font-['Nunito_Sans'] font-medium text-[14px] leading-[20px] text-[#5A5A5A]">
                Course Category *
              </label>
              <select
                name="selectedCategory"
                value={formData.selectedCategory}
                onChange={handleInputChange}
                required
                disabled={isSubmitting}
                className="w-full mt-1 p-2 rounded-full bg-[#FFF5F1] outline-none font-['Nunito_Sans'] font-medium text-[14px] leading-[20px] text-[#5A5A5A] disabled:opacity-50"
              >
                <option value="">Select Category</option>
                {Object.keys(COURSE_DATA).map(category => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {/* Specific Course */}
            <div>
              <label className="font-['Nunito_Sans'] font-medium text-[14px] leading-[20px] text-[#5A5A5A]">
                Select Course *
              </label>
              <select
                name="selectedCourse"
                value={formData.selectedCourse}
                onChange={handleInputChange}
                required
                disabled={!formData.selectedCategory || isSubmitting}
                className="w-full mt-1 p-2 rounded-full bg-[#FFF5F1] outline-none font-['Nunito_Sans'] font-medium text-[14px] leading-[20px] text-[#5A5A5A] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <option value="">Select a Course</option>
                {formData.selectedCategory && 
                  COURSE_DATA[formData.selectedCategory].map(course => (
                    <option key={course.id} value={course.id}>
                      {course.title} - {course.price}
                    </option>
                  ))
                }
              </select>
            </div>
          </div>

          {/* Date Selection */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {/* Month */}
            <div>
              <label className="font-['Nunito_Sans'] font-medium text-[14px] leading-[20px] text-[#5A5A5A]">
                Preferred Month *
              </label>
              <select
                name="selectedMonth"
                value={formData.selectedMonth}
                onChange={handleInputChange}
                required
                disabled={isSubmitting}
                className="w-full mt-1 p-2 rounded-full bg-[#FFF5F1] outline-none font-['Nunito_Sans'] font-medium text-[14px] leading-[20px] text-[#5A5A5A] disabled:opacity-50"
              >
                <option value="">Select Month</option>
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

            {/* Year */}
            <div>
              <label className="font-['Nunito_Sans'] font-medium text-[14px] leading-[20px] text-[#5A5A5A]">
                Preferred Year *
              </label>
              <select
                name="selectedYear"
                value={formData.selectedYear}
                onChange={handleInputChange}
                required
                disabled={isSubmitting}
                className="w-full mt-1 p-2 rounded-full bg-[#FFF5F1] outline-none font-['Nunito_Sans'] font-medium text-[14px] leading-[20px] text-[#5A5A5A] disabled:opacity-50"
              >
                <option value="">Select Year</option>
                <option value="2026">2026</option>
                <option value="2027">2027</option>
                <option value="2028">2028</option>
                <option value="2029">2029</option>
              </select>
            </div>
          </div>

          {/* Group Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {/* Experience Level */}
            <div>
              <label className="font-['Nunito_Sans'] font-medium text-[14px] leading-[20px] text-[#5A5A5A]">
                Experience Level *
              </label>
              <select
                name="experienceLevel"
                value={formData.experienceLevel}
                onChange={handleInputChange}
                required
                disabled={isSubmitting}
                className="w-full mt-1 p-2 rounded-full bg-[#FFF5F1] outline-none font-['Nunito_Sans'] font-medium text-[14px] leading-[20px] text-[#5A5A5A] disabled:opacity-50"
              >
                <option value="">Select Level</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
                <option value="mixed">Mixed Group</option>
                <option value="not-known">Not Known</option>
              </select>
            </div>

            {/* Group Size */}
            <div className="flex flex-col gap-1">
              <label className="font-['Nunito_Sans'] font-medium text-[14px] leading-[20px] text-[#5A5A5A]">
                Number of Participants *
              </label>
              <div className="flex items-center justify-between mt-1">
                <span className="font-['Nunito_Sans'] font-medium text-[12px] leading-[20px] text-[#5A5A5A]">
                  Select number of people
                </span>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    className="px-3 py-1.5 bg-[#E5E5E5] text-black rounded-xl font-['Nunito_Sans'] font-semibold text-[14px] leading-[20px] transition-colors hover:bg-[#FAD4C3] disabled:opacity-50"
                    onClick={() => setGroupSize(Math.max(1, groupSize - 1))}
                    disabled={isSubmitting || groupSize <= 1}
                  >
                    −
                  </button>
                  <span className="font-['Nunito_Sans'] font-medium text-[14px] leading-[20px] text-[#5A5A5A] min-w-[20px] text-center">
                    {groupSize}
                  </span>
                  <button
                    type="button"
                    className="px-3 py-1.5 bg-[#FFF0EA] text-[#C65A2E] rounded-xl font-['Nunito_Sans'] font-semibold text-[14px] leading-[20px] transition-colors hover:bg-[#FAD4C3] disabled:opacity-50"
                    onClick={() => setGroupSize(groupSize + 1)}
                    disabled={isSubmitting}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Course Info Display */}
          {formData.selectedCourse && (
            <div className="mb-6 p-3 bg-[#FFF5F1] rounded-lg">
              <p className="font-['Nunito_Sans'] font-semibold text-[14px] text-[#C65A2E] mb-1">
                Selected Course:
              </p>
              {(() => {
                const course = COURSE_DATA[formData.selectedCategory]?.find(
                  c => c.id.toString() === formData.selectedCourse
                );
                return course ? (
                  <div className="space-y-1">
                    <p className="font-['Nunito_Sans'] font-bold text-[14px] text-gray-800">
                      {course.title}
                    </p>
                    <p className="font-['Nunito_Sans'] font-normal text-[13px] text-gray-600">
                      {course.description}
                    </p>
                    <p className="font-['Nunito_Sans'] font-bold text-[14px] text-green-700">
                      {course.price}
                    </p>
                    {groupSize > 1 && (
                      <p className="font-['Nunito_Sans'] font-bold text-[14px] text-[#C65A2E]">
                        Total: £{parseInt(course.price.replace(/[^0-9]/g, '')) * groupSize} 
                        ({groupSize} participants)
                      </p>
                    )}
                  </div>
                ) : null;
              })()}
            </div>
          )}

          {/* Submit Button */}
          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition text-sm disabled:opacity-50"
              disabled={isSubmitting}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-[#C65A2E] text-white px-6 py-2 rounded-md hover:bg-[#b04e27] transition text-sm disabled:opacity-50 flex items-center gap-2"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                  Submitting...
                </>
              ) : (
                "Book Course"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}