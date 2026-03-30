import React, { useState } from "react";
import { XMarkIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const PLACES = [
    "Yorkshire 3 peaks",
    "Malham Cove",
    "Bolton Abbey",
    "Roseberry Topping",
    "Ilkley Moor",
    "Buckden Pike",
    "Whitby to Robin Hood's Bay",
    "Ingleton Falls",
    "Whernside"
];

const MONTHS = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

export default function BookingModal({ isOpen, onClose }) {
    const [tab, setTab] = useState("fixed");
    const [groupSize, setGroupSize] = useState(1);
    const [selectedMonths, setSelectedMonths] = useState([]);
    const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        hikeDate: "",
        ability: "",
        place: "",
        otherPlace: ""
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        
        if (name === "otherPlace" && value.trim() !== "") {
            setFormData(prev => ({ ...prev, place: "other" }));
        }
    };

    const handlePlaceChange = (e) => {
        const value = e.target.value;
        setFormData(prev => ({ 
            ...prev, 
            place: value,
            ...(value !== "other" && { otherPlace: "" })
        }));
    };

    const toggleMonth = (month) => {
        setSelectedMonths((prev) =>
            prev.includes(month)
                ? prev.filter((m) => m !== month)
                : [...prev, month]
        );
    };

    const getTodayDate = () => {
        const today = new Date();
        return today.toISOString().split('T')[0];
    };

    const selectAllMonths = () => {
        setSelectedMonths(MONTHS);
    };

    const clearMonths = () => {
        setSelectedMonths([]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Determine which place value to use
        const finalPlace = formData.place === "other" 
            ? formData.otherPlace 
            : formData.place;

        // Prepare data for Formspree
        const submissionData = {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            place: finalPlace,
            ability: formData.ability,
            groupSize: groupSize,
            bookingType: tab,
            ...(tab === "fixed" && { hikeDate: formData.hikeDate }),
            ...(tab === "flexible" && { 
                preferredMonths: selectedMonths.join(", "),
                preferredYear: selectedYear 
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
                    hikeDate: "",
                    ability: "",
                    place: "",
                    otherPlace: ""
                });
                setGroupSize(1);
                setSelectedMonths([]);
                setSelectedYear(new Date().getFullYear());
                
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
            <div className="bg-white rounded-2xl shadow-xl w-[95%] md:w-[480px] p-5 relative max-h-[90vh] overflow-y-auto font-[Raleway]">
                
                {/* Close Button */}
                <button 
                    onClick={onClose} 
                    className="absolute top-3 right-3 p-1 rounded-full hover:bg-gray-100"
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
                <h2 className="font-bold text-[22px] text-[#926A39] mb-1">Book your hike</h2>
                <p className="text-gray-600 text-xs mb-4">Select date, place, and group details.</p>

                <form onSubmit={handleSubmit}>
                    {/* Tabs */}
                    <div className="flex mb-5 bg-[#FAD4C3] rounded-lg p-0.5">
                        <button
                            type="button"
                            onClick={() => setTab("fixed")}
                            className={`flex-1 py-1.5 text-xs font-semibold ${tab === "fixed"
                                    ? "bg-[#C56441] text-white rounded"
                                    : "text-[#EA8E6C]"
                                }`}
                            disabled={isSubmitting}
                        >
                            Fixed Date
                        </button>
                        <button
                            type="button"
                            onClick={() => setTab("flexible")}
                            className={`flex-1 py-1.5 text-xs font-semibold ${tab === "flexible"
                                    ? "bg-[#C56441] text-white rounded"
                                    : "text-[#EA8E6C]"
                                }`}
                            disabled={isSubmitting}
                        >
                            Flexible Dates
                        </button>
                    </div>

                    {/* Compact Contact Info */}
                    <div className="grid grid-cols-2 gap-3 mb-4">
                        <div>
                            <label className="text-xs font-medium text-gray-600">Full Name *</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                className="w-full mt-1 p-2 text-sm rounded-lg bg-[#FFF5F1]"
                                placeholder="Your name"
                                required
                                disabled={isSubmitting}
                            />
                        </div>
                        <div>
                            <label className="text-xs font-medium text-gray-600">Email *</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="w-full mt-1 p-2 text-sm rounded-lg bg-[#FFF5F1]"
                                placeholder="email@example.com"
                                required
                                disabled={isSubmitting}
                            />
                        </div>
                        <div className="col-span-2">
                            <label className="text-xs font-medium text-gray-600">Phone *</label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                className="w-full mt-1 p-2 text-sm rounded-lg bg-[#FFF5F1]"
                                placeholder="Phone number"
                                required
                                disabled={isSubmitting}
                            />
                        </div>
                    </div>

                    {/* Date Selection */}
                    <div className="mb-4">
                        {tab === "fixed" ? (
                            <div>
                                <label className="text-xs font-medium text-gray-600">Hike Date *</label>
                                <input
                                    type="date"
                                    name="hikeDate"
                                    value={formData.hikeDate}
                                    onChange={handleInputChange}
                                    min={getTodayDate()}
                                    className="w-full mt-1 p-2 text-sm rounded-lg bg-[#FFF5F1]"
                                    required
                                    disabled={isSubmitting}
                                />
                            </div>
                        ) : (
                            <div className="space-y-3">
                                <div>
                                    <div className="flex justify-between items-center mb-1">
                                        <label className="text-xs font-medium text-gray-600">Preferred Months</label>
                                        <div className="flex gap-2">
                                            <button
                                                type="button"
                                                onClick={selectAllMonths}
                                                className="text-xs px-2 py-0.5 bg-gray-100 rounded hover:bg-gray-200"
                                                disabled={isSubmitting}
                                            >
                                                Select All
                                            </button>
                                            <button
                                                type="button"
                                                onClick={clearMonths}
                                                className="text-xs px-2 py-0.5 bg-gray-100 rounded hover:bg-gray-200"
                                                disabled={isSubmitting}
                                            >
                                                Clear
                                            </button>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-4 gap-1.5">
                                        {MONTHS.map((month) => {
                                            const isSelected = selectedMonths.includes(month);
                                            const isCurrentOrFuture = () => {
                                                const currentMonth = new Date().getMonth();
                                                const selectedMonthIndex = MONTHS.indexOf(month);
                                                const currentYear = new Date().getFullYear();
                                                if (selectedYear > currentYear) return true;
                                                if (selectedYear === currentYear) {
                                                    return selectedMonthIndex >= currentMonth;
                                                }
                                                return false;
                                            };
                                            
                                            return (
                                                <button
                                                    key={month}
                                                    type="button"
                                                    onClick={() => isCurrentOrFuture() && toggleMonth(month)}
                                                    disabled={!isCurrentOrFuture() || isSubmitting}
                                                    className={`p-1.5 text-xs rounded-lg transition-all ${isSelected
                                                            ? "bg-[#C65A2E] text-white"
                                                            : isCurrentOrFuture()
                                                                ? "bg-[#FFF5F1] hover:bg-[#FFE5D9]"
                                                                : "bg-gray-100 text-gray-400 cursor-not-allowed"
                                                        }`}
                                                >
                                                    {month.substring(0, 3)}
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>
                                
                                <div>
                                    <label className="text-xs font-medium text-gray-600">Year *</label>
                                    <div className="flex items-center gap-2 mt-1">
                                        <button
                                            type="button"
                                            onClick={() => setSelectedYear(prev => prev - 1)}
                                            disabled={selectedYear <= new Date().getFullYear() || isSubmitting}
                                            className="p-1.5 rounded-lg bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            <ChevronLeftIcon className="w-4 h-4" />
                                        </button>
                                        <select
                                            value={selectedYear}
                                            onChange={(e) => setSelectedYear(Number(e.target.value))}
                                            className="flex-1 p-2 text-sm rounded-lg bg-[#FFF5F1]"
                                            disabled={isSubmitting}
                                        >
                                            {[0, 1, 2, 3, 4].map((i) => {
                                                const year = new Date().getFullYear() + i;
                                                return (
                                                    <option key={year} value={year}>{year}</option>
                                                );
                                            })}
                                        </select>
                                        <button
                                            type="button"
                                            onClick={() => setSelectedYear(prev => prev + 1)}
                                            className="p-1.5 rounded-lg bg-gray-100"
                                            disabled={isSubmitting}
                                        >
                                            <ChevronRightIcon className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Place & Ability */}
                    <div className="mb-4 space-y-3">
                        <div>
                            <label className="text-xs font-medium text-gray-600">Hike Location *</label>
                            <select
                                value={formData.place}
                                onChange={handlePlaceChange}
                                className="w-full mt-1 p-2 text-sm rounded-lg bg-[#FFF5F1]"
                                required
                                disabled={isSubmitting}
                            >
                                <option value="">Choose a location</option>
                                {PLACES.map((p) => (
                                    <option key={p} value={p}>{p}</option>
                                ))}
                                <option value="other">Other (specify)</option>
                            </select>
                            
                            {formData.place === "other" && (
                                <div className="mt-2">
                                    <label className="text-xs font-medium text-gray-600">Specify Location *</label>
                                    <input
                                        type="text"
                                        name="otherPlace"
                                        value={formData.otherPlace}
                                        onChange={handleInputChange}
                                        className="w-full mt-1 p-2 text-sm rounded-lg bg-[#FFF5F1]"
                                        placeholder="Enter your preferred hike location"
                                        required={formData.place === "other"}
                                        disabled={isSubmitting}
                                    />
                                </div>
                            )}
                        </div>
                        
                        <div>
                            <label className="text-xs font-medium text-gray-600">Group Ability *</label>
                            <select
                                name="ability"
                                value={formData.ability}
                                onChange={handleInputChange}
                                className="w-full mt-1 p-2 text-sm rounded-lg bg-[#FFF5F1]"
                                required
                                disabled={isSubmitting}
                            >
                                <option value="">Select level</option>
                                <option value="beginner">Beginner</option>
                                <option value="intermediate">Intermediate</option>
                                <option value="experienced">Experienced</option>
                                <option value="mixed">Mixed</option>
                            </select>
                        </div>
                    </div>

                    {/* Group Size */}
                    <div className="mb-6">
                        <label className="text-xs font-medium text-gray-600 mb-2 block">Group Size: {groupSize} {groupSize === 1 ? 'person' : 'people'}</label>
                        <div className="flex items-center">
                            <button
                                type="button"
                                onClick={() => setGroupSize(Math.max(1, groupSize - 1))}
                                className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-l-lg hover:bg-gray-200"
                                disabled={isSubmitting}
                            >
                                <span className="text-lg">−</span>
                            </button>
                            <div className="flex-1 text-center py-2 bg-gray-50 font-medium">
                                {groupSize}
                            </div>
                            <button
                                type="button"
                                onClick={() => setGroupSize(groupSize + 1)}
                                className="w-10 h-10 flex items-center justify-center bg-[#FFF0EA] text-[#C65A2E] rounded-r-lg hover:bg-[#FFE5D9]"
                                disabled={isSubmitting}
                            >
                                <span className="text-lg">+</span>
                            </button>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-end">
                        <button 
                            type="submit"
                            disabled={isSubmitting}
                            className="bg-[#C65A2E] text-white px-8 py-2.5 text-sm rounded-lg hover:bg-[#b04e27] transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center gap-2"
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
                                "Request Now"
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}