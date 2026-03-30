"use client"
import React, { useState } from "react";
import Navbar from "../Components/NavBar/Navbar";
// import hero from "../../src/assets/Course/courses-hero.webp";

// import icon1 from "../../src/assets/Course/foraging-1.webp";
// import icon2 from "../../src/assets/Course/foraging-2.webp";
// import icon3 from "../../src/assets/Course/foraging-3.webp";
// import icon4 from "../../src/assets/Course/foraging-4.webp";
// import icon5 from "../../src/assets/Course/foraging-5.webp";
// import icon6 from "../../src/assets/Course/foraging-6.webp";

// FIELDCRAFT IMAGES
// import beginnerImg from "../../src/assets/Course/beginner.webp";
// import advancedImg from "../../src/assets/Course/advanced.webp";

// // NAVIGATION IMAGES
// import navBasicImg from "../../src/assets/Course/navBasic.webp";
// import navAdvancedImg from "../../src/assets/Course/navAdvanced.webp";

// // FIRST AID IMAGES
// import firstAidBasicImg from "../../src/assets/Course/firstAidBasic.webp";
// import firstAidAdvancedImg from "../../src/assets/Course/firstAidAdvanced.webp";

// // FORAGING CARD IMAGE
// import foragingCardImg from "../../src/assets/Course/foraging.webp"; // You'll need to add this image

// Import Booking Modal
import BookingModal from "@/Booking/CourseBookingModel";


// CATEGORIES - Foraging moved to last
const categories = ["Fieldcraft", "Navigation", "First Aid", "Foraging"];
const hero = "/assets/Course/courses-hero.webp";

// Foraging icons
const icon1 = "/assets/Course/foraging-1.webp";
const icon2 = "/assets/Course/foraging-2.webp";
const icon3 = "/assets/Course/foraging-3.webp";
const icon4 = "/assets/Course/foraging-4.webp";
const icon5 = "/assets/Course/foraging-5.webp";
const icon6 = "/assets/Course/foraging-6.webp";

// Fieldcraft images
const beginnerImg = "/assets/Course/beginner.webp";
const advancedImg = "/assets/Course/advanced.webp";

// Navigation images
const navBasicImg = "/assets/Course/navBasic.webp";
const navAdvancedImg = "/assets/Course/navAdvanced.webp";

// First aid images
const firstAidBasicImg = "/assets/Course/firstAidBasic.webp";
const firstAidAdvancedImg = "/assets/Course/firstAidAdvanced.webp";

// Foraging card image
const foragingCardImg = "/assets/Course/foraging.webp";

// FORAGING CARD DATA (Single card like other courses)
const foragingCourse = {
  id: 1,
  title: "Foraging Courses",
  description: "Wild fungi identification, sustainable harvesting techniques, and an introduction to woodland ecology.",
  modules: "Hands-on field workshop",
  objective:
    "Learn how to identify fungi safely, forage responsibly, and appreciate their role in woodland ecosystems.",
  price: "£60 per person",
  image: foragingCardImg, // Add a foraging card image
  category: "Foraging",
  level: "All Levels",
  activities: [
    {
      id: 1,
      title: "Welcome, Introductions & Safety Briefing",
      icon: icon1,
      details: [
        {
          points: [
            "- Meet the guide and outline course goals.",
            "- Discuss foraging safety rules (never consume unidentified fungi, hygiene, avoiding contamination).",
            "- Explain responsible foraging ethics: Leave No Trace, sustainable picking, respecting private land.",
            "- Issue field notebooks, ID cards, baskets, and safety instructions.",
            "- Overview of the walk route and emergency plan."
          ],
        },
      ],
    },
    {
      id: 2,
      title: "Fungi Ecology & Woodland Awareness",
      icon: icon2,
      details: [
        {
          points: [
            "- Introduction to the roles of fungi in nature: saprotrophic (decomposers), mycorrhizal (tree partners), and parasitic (tree or plant attackers).",
            "- Demonstrate examples of each type in the field.",
            "- Identify key tree species that fungi associate with (e.g. birch, oak, pine, beech).",
            "- Teach how to 'read the woodland' – recognising habitats where specific mushrooms grow.",
            "- Emphasise how tree–fungus relationships guide successful foraging."
          ],
        },
      ],
    },
    {
      id: 3,
      title: "Break / Discussion Stop",
      icon: icon3,
      details: [
        {
          points: [
            "- Light refreshments (herbal tea, biscuits).",
            "- Recap findings so far and answer participant questions.",
            "- Encourage sharing of any fungi spotted during the first segment.",
          ],
        },
      ],
    },
    {
      id: 4,
      title: "Field Foraging Walk",
      icon: icon4,
      details: [
        {
          heading: "Identification and Responsible Harvesting",
          points: [
            "- Identify 6–10 common Yorkshire mushrooms, focusing on distinguishing edible vs. toxic lookalikes.",
            "- Demonstrate sustainable harvesting methods – when and how to collect responsibly, and when not to pick.",
            "- Highlight legal and ecological responsibilities (permissions, conservation areas, Wildlife & Countryside Act).",
            "- Explain recording and photographing specimens instead of over-collecting.",
            "- Reinforce safety: carry mushrooms separately, wash hands, avoid inhaling spore dust."
          ],
        },
      ],
    },
    {
      id: 5,
      title: "Workshop",
      icon: icon5,
      details: [
        {
          heading: "Identification, Handling & Preparation",
          points: [
            "- Examine collected specimens (visual only).",
            "- Use field guides to confirm ID features (gills, pores, stems, spore colours).",
            "- Compare edible vs poisonous mushrooms side-by-side (e.g. chanterelle vs false chanterelle).",
            "- Demonstrate cleaning, storage, and cooking preparation techniques.",
            "- Discuss flavour profiles and safe cooking methods for common edible fungi."
          ],
        },
      ],
    },
    {
      id: 6,
      title: "Recap, Q&A and Wrap-Up",
      icon: icon6,
      details: [
        {
          points: [
            "- Review the roles of fungi in woodland health.",
            "- Summarise responsible foraging principles and key trees to recognise for fungal associations.",
            "- Provide a take-home summary sheet of safe species, lookalikes, and sustainable practice tips.",
            "- Gather feedback, offer future course discounts, and group photo opportunity (optional)."
          ],
        },
      ],
    },
  ]
};

// FIELDCRAFT COURSES with PRICES
const fieldcraftCourses = [
  {
    id: 1,
    title: "Beginner Fieldcraft Course",
    description: "Survival Skills • Basic Training",
    modules: "Classroom & Field",
    objective: "Essential skills for one day and night in the field.",
    price: "£75 per person",
    image: beginnerImg,
    category: "Fieldcraft",
    level: "Beginner",
    details: {
      objective: "Be competent in packing and using the required kit needed to survive for one day and night in the field.",
      classroomModules: [
        {
          title: "Kit",
          items: ["What to pack and how to pack it"]
        },
        {
          title: "Clothing",
          items: [
            "What to wear and how to layer",
            "Managing wet vs dry clothing",
            "When to use waterproofs",
            "Zipped pockets and organization"
          ]
        },
        {
          title: "Footwear",
          items: [
            "Choosing correct footwear",
            "Foot care and changing socks",
            "Using talcum powder"
          ]
        },
        {
          title: "Body Care",
          items: [
            "Managing hypothermia – signs and actions",
            "Recognising frostbite",
            "Managing overheating – signs and actions"
          ]
        },
        {
          title: "Responsibilities",
          items: [
            "Leave no trace",
            "Help others on the trail"
          ]
        }
      ],
      fieldModules: [
        "Instructor-led short nav exercise",
        "On-track navigation as a group"
      ],
      kitRequired: "Compass, OS Map 297, map case, ruler, pencil, protractor, waterproofs, hat, gloves, etc.",
      sectionNames: {
        objective: "Objective",
        classroomModule: "Classroom Module",
        fieldModule: "Field Module",
        kitRequired: "Kit Required"
      }
    }
  },
  {
    id: 2,
    title: "Advanced Fieldcraft Course",
    description: "Real World • Survival Skills",
    modules: "Classroom & Field",
    objective: "Survival skills for multi-day challenges and emergency conditions.",
    price: "£120 per person",
    image: advancedImg,
    category: "Fieldcraft",
    level: "Advanced",
    details: {
      objective: "Be competent in using kit and knowledge to survive for multiple days and nights in the field, even in survival situations.",
      classroomModules: [
        {
          title: "Kit & Survival Preparation:",
          items: [
            "Survival kit essentials and tins",
            "Survival mnemonic:",
            "Size up the situation",
            "Undue haste makes waste",
            "Remember where you are",
            "Vanquish fear",
            "Improvise",
            "Value life",
            "Act like the natives",
            "Learn the basics"
          ]
        },
        {
          title: "Shelter",
          items: [
            "Types: lean-to, teepee, underground",
            "Using ready-made shelters (caves, barns)"
          ]
        },
        {
          title: "Water",
          items: [
            "Using natural sources safely",
            "Filtration tablets, sock filtration, boiling",
            "Upstream checks and improvised collection (stone pit or plastic bag method)"
          ]
        },
        {
          title: "Warmth & Fire",
          items: [
            "Maintaining body temperature",
            "Fire building and maintenance"
          ]
        },
        {
          title: "Food",
          items: [
            "Cooking over fire",
            "Foraging basics and resource gathering"
          ]
        },
        {
          title: "Emergency Navigation",
          items: [
            "Using stars (Orion, Polaris)",
            "Using the moon",
            "Using prevailing winds"
          ]
        },
        {
          title: "Injuries & First Aid",
          items: [
            "Self-administering injury care",
            "Caring for others in the field"
          ]
        },
        {
          title: "Reaching Safety & Communications",
          items: [
            "Finding local help",
            "Communication methods without signal"
          ]
        }
      ],
      fieldModules: [
        {
          title: "Hands-On Survival Training",
          items: [
            "Water: Filtration, boiling, natural collection",
            "Shelter: Building lean-tos, insulation, drying kit",
            "Warmth: Starting and maintaining fire",
            "Food: Cooking and foraging practice",
            "Scenario Training: Extended stay simulation"
          ]
        }
      ],
      kitRequired: "This course transforms participants into self-sufficient outdoor survivors, capable of maintaining warmth, hydration, shelter, and safety in any condition, day or night.",
      sectionNames: {
        objective: "Objective",
        classroomModule: "Classroom Module",
        fieldModule: "Field Module",
        kitRequired: "Kit Required"
      }
    }
  }
];

// NAVIGATION COURSES with PRICES
const navigationCourses = [
  {
    id: 1,
    title: "Beginner Navigation Course",
    description: "Group navigation • Instructor-led • Learn fundamentals and teamwork",
    modules: "Classroom & Field",
    objective: "Build basic map reading skills, understand grid references, bearings, and follow routes confidently.",
    price: "£65 per person",
    image: navBasicImg,
    category: "Navigation",
    level: "Basic",
    details: {
      objective: "Understand mapping basics, bearings, and follow pre-planned routes confidently.",
      classroomModules: [
        "Correct mapping and scales",
        "Folding & waterproofing maps",
        "Grid magnetic angle and calculations",
        "Bearings & compass use",
        "Route plotting and visualisation"
      ],
      fieldModules: [
        "Instructor-led short nav exercise",
        "On-track navigation as a group",
      ],
      kitRequired: "Compass, OS Map 297, map case, ruler, pencil, protractor, waterproofs, hat, gloves, etc.",
      sectionNames: {
        objective: "Objective",
        classroomModule: "Classroom Topics",
        fieldModule: "Field Training",
        kitRequired: "Kit Required"
      }
    }
  },
  {
    id: 2,
    title: "Advanced Navigation Course",
    description: "Individual navigation • Student-led • router.push like a pro with confidence ",
    modules: "Classroom & Field",
    objective: "Master advanced techniques, resection, night navigation, and survival-based wayfinding.",
    price: "£95 per person",
    image: navAdvancedImg,
    category: "Navigation",
    level: "Advanced",
    details: {
      objective: "router.push individually in poor visibility or survival conditions using advanced techniques.",
      classroomModules: [
        "Speed, distance, and time",
        "Route selection & contour reading",
        "Seasonal & group considerations",
        "Route cards"
      ],
      fieldModules: [
        "Resections (with/without features)",
        "Pacing and bearings",
        "Lost & man-down routines",
        "Day and night nav exercises",
        "Emergency navigation using stars, winds, and moon"
      ],
      kitRequired: "Compass, map, waterproof case, route card, ruler, protractor, stationery.",
      sectionNames: {
        objective: "Objective",
        classroomModule: "Classroom Topics",
        fieldModule: "Field Training",
        kitRequired: "Kit Required"
      }
    }
  }
];

// FIRST AID COURSES with PRICES
const firstAidCourses = [
  {
    id: 1,
    title: "Beginner First Aid Course",
    description: "Essential First Aid • Classroom Based Learning",
    modules: "Classroom & Field",
    objective: "Learn to handle outdoor emergencies with confidence, from assessing incidents to managing injuries and stabilizing casualties until help arrives.",
    price: "£60 per person",
    image: firstAidBasicImg,
    category: "First Aid",
    level: "Basic",
    details: {
      objectives: [
        {
          main: "Build confidence in responding to common outdoor first aid situations such as:",
          subpoints: [
            "Hypothermia",
            "Sprains",
            "Exhaustion",
            "Dehydration",
            "Fractures",
            "Concussion",
          ],
        },
        {
          main: "Learn essential life-saving skills relevant to hiking and outdoor environments",
        },
        {
          main: "Understand how to assess and manage an incident safely",
        },
        {
          main: "Gain the knowledge to stabilise a casualty until professional help arrives",
        },
        {
          main: "Prepare hikers and guides to meet Hike Yorkshire's safety standards",
        },
      ],
      classroomModules: [
        "Notebook and pen",
        "Comfortable clothing suitable for light practical exercises",
        "Personal water bottle and snacks",
        "Any personal first aid items for discussion (optional)",
        "All other training materials and demonstration equipment are provided",
      ],
      fieldModules: [
        "Primary survey: DRABC (Danger, Response, Airway, Breathing, Circulation)",
        "How to call for help and communicate effectively with emergency services",
        "Basic CPR and recovery position",
        "Managing bleeding, cuts, and grazes",
        "Recognising and treating shock and fainting",
        "Minor burns, blisters, and insect bites",
        "Managing sprains, strains, and minor fractures",
        "Common hiking-related conditions: heat exhaustion, hypothermia, dehydration",
        "Contents of a personal first aid kit and how to use them",
        "Staying calm and managing stress in an emergency"
      ],
      kitRequired: "By the end of this half-day classroom course, participants will be ready to respond effectively to common first aid situations in the outdoors.",
      sectionNames: {
        objective: "Objectives",
        classroomModule: "Kit List",
        fieldModule: "Topics Covered",
        kitRequired: "Outcome"
      }
    }
  },
  {
    id: 2,
    title: "Advanced First Aid Course",
    description: "Real World • Survival Skills",
    modules: "Classroom & Field",
    objective: "Turn first aid knowledge into real-world action with hands-on outdoor scenarios that build confidence, teamwork, and decision-making in remote environments.",
    price: "£110 per person",
    image: firstAidAdvancedImg,
    category: "First Aid",
    level: "Advanced",
    details: {
      objectives: [
        {
          main: "Apply classroom first aid knowledge in real outdoor scenarios",
        },
        {
          main: "Build decision-making skills in remote and unpredictable environments",
        },
        {
          main: "Learn to improvise with limited equipment in the field",
        },
        {
          main: "Practice teamwork and leadership during simulated hiking emergencies",
        },
        {
          main: "Gain confidence managing incidents far from immediate help"
        }
      ],
      classroomModules: [
        "Full hiking gear (boots, waterproofs, backpack, etc.)",
        "Personal first aid kit (supplied or your own)",
        "Warm layers and gloves for casualty simulations",
        "Notebook, pencil, and small torch/headlamp",
        "Food, drink, and any personal medication",
      ],
      fieldModules: [
        "Scene assessment and casualty triage in outdoor environments",
        "Managing incidents in remote locations and poor weather",
        "Improvised splints and stretchers using hiking equipment",
        "Managing fractures, dislocations, and head injuries",
        "Recognising altitude sickness, exhaustion, and cold-weather injuries",
        "Long-term casualty care: keeping someone safe for several hours",
        "Evacuation planning and communication without mobile signal",
        "Group management and psychological first aid in the field",
        "Realistic outdoor scenarios and guided debrief sessions"
      ],
      kitRequired: "This full-day practical course takes place in the Yorkshire Dales, combining realistic wilderness simulations with expert guidance. Participants finish equipped with the skills and confidence to handle emergencies in true hiking conditions, bridging the gap between theory and real-life adventure.",
      sectionNames: {
        objective: "Objectives",
        classroomModule: "Kit List",
        fieldModule: "Topics Covered",
        kitRequired: "Outcome"
      }
    }
  }
];

export default function Courses() {
  const [activeCategory, setActiveCategory] = useState("Fieldcraft");
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItemForBooking, setSelectedItemForBooking] = useState(null);
  const [showForagingActivities, setShowForagingActivities] = useState(false);
  // Components (keep these as imports if any)
// import Something from "somewhere";

// ========== COURSE IMAGES ==========


  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    setSelectedCourse(null);
    setShowForagingActivities(false);
  };

  const handleBookNow = (item) => {
    setSelectedItemForBooking(item);
    setIsModalOpen(true);
  };

  const getCoursesForCategory = (category) => {
    switch (category) {
      case "Fieldcraft": return fieldcraftCourses;
      case "Navigation": return navigationCourses;
      case "First Aid": return firstAidCourses;
      case "Foraging": return [foragingCourse]; // Return foraging as single card
      default: return [];
    }
  };

  const getSectionName = (course, section) => {
    return course?.details?.sectionNames?.[section] ||
      getDefaultSectionName(section);
  };

  const getDefaultSectionName = (section) => {
    const defaults = {
      objective: "Objective",
      classroomModule: "Classroom Module",
      fieldModule: "Field Module",
      kitRequired: "Kit Required"
    };
    return defaults[section] || section;
  };

  return (
    <div className="w-full">
      <Navbar />
     

      {/* ===== HERO SECTION ===== */}
      <div
        className="w-full h-[500px] bg-cover bg-center relative"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="absolute inset-0"></div>
        <div className="flex flex-col justify-center items-center h-full relative text-white text-center px-4">
          <h1 className="text-4xl md:text-5xl font-[Raleway] font-semibold mb-4">
            Build Confidence for the Outdoors
          </h1>
          <p className="text-lg font-['Nunito_Sans'] md:text-xl max-w-2xl">
            Learn practical navigation, safety, and survival skills from our
            experienced guides and take your next adventure further.
          </p>
        </div>
      </div>

      {/* ===== COURSES SECTION ===== */}
      <div className="max-w-6xl mx-auto px-5 py-10">
        <h2 className="text-[40px] font-[Raleway] text-center text-[#C56441]">Courses</h2>
        <p className="mt-2 font-['Nunito_Sans'] text-[16px] text-center text-[#434343] max-w-3xl mx-auto">
          Learning new skills is the best way to fully enjoy and appreciate the wild side of Yorkshire.
          Taught by ex military professionals, our practical seminars are designed to teach new and
          essential competencies that will greatly improve your outdoors experience.
        </p>

        <p className="mt-2 font-['Nunito_Sans'] text-[16px] text-center text-[#434343] max-w-3xl mx-auto">Make a request and we will get back to you with course availability.
        </p>

        {/* CATEGORY TABS */}
        <div className="flex justify-center gap-2 mt-6 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`px-4 py-2 rounded-xl border transition font-[Raleway] ${activeCategory === cat
                ? "bg-[#C56441] text-white border-[#C56441]"
                : "border-gray-400 text-gray-700 hover:bg-gray-100"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ================= COURSE CARDS FOR ALL CATEGORIES ================= */}
        {(activeCategory !== "Foraging" || (activeCategory === "Foraging" && !showForagingActivities)) && !selectedCourse && (
          <div className="flex flex-wrap gap-5 justify-center mt-10">
            {getCoursesForCategory(activeCategory).map((course) => (
              <div
                key={course.id}
                className="rounded-2xl shadow-lg w-full max-w-md p-4 bg-white flex flex-col"
              >
                <img
                  src={course.image}
                  className="rounded-2xl w-full h-40 object-cover mb-3"
                  alt={course.title}
                />
                <h3 className="font-[Raleway] font-semibold text-[18px] leading-[30px] tracking-normal text-[#C56441]">
                  {course.title}
                </h3>
                <p className="font-['Nunito_Sans'] font-medium text-[15px] leading-[20px] tracking-normal text-[#434343] mt-1">
                  {course.description}
                </p>

                <div className="mt-3 space-y-3 flex-1">
                  <div>
                    <p className="font-['Nunito_Sans'] font-medium text-[16px] leading-[20px] text-[#434343]">
                      Modules:
                    </p>
                    <p className="font-['Nunito_Sans'] font-normal text-[14px] leading-[20px] text-[#6A6A6A]">
                      {course.modules}
                    </p>
                  </div>
                  <div>
                    <p className="font-['Nunito_Sans'] font-medium text-[16px] leading-[20px] text-[#434343]">Objectives:</p>
                    <p className="font-['Nunito_Sans'] font-normal text-[14px] leading-[20px] mt-1 text-[#6A6A6A]">{course.objective}</p>
                  </div>
                </div>

                {/* Price and Book Now Button */}
                <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-200">
                  <p className="text-green-700 font-['Nunito_Sans'] font-bold text-[18px] leading-[27px]">
                    {course.price}
                  </p>
                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        if (activeCategory === "Foraging") {
                          setShowForagingActivities(true);
                        } else {
                          setSelectedCourse(course);
                        }
                      }}
                      className="px-3 py-2 rounded-lg font-['Nunito_Sans'] bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm"
                    >
                      View Details
                    </button>
                    <button
                      onClick={() => handleBookNow(course)}
                      className="px-3 py-2 rounded-lg font-['Nunito_Sans'] bg-[#C56441] hover:bg-[#a85632] text-white text-sm"
                    >
                      Request Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ================= FORAGING ACTIVITIES (SINGLE COLUMN IN CENTER) ================= */}
        {activeCategory === "Foraging" && showForagingActivities && (
          <div className="mt-10">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-['Nunito_Sans'] font-bold text-[24px] leading-[30px] text-[#C56441]">
                Foraging Course Activities
              </h3>
              <button
                onClick={() => setShowForagingActivities(false)}
                className="px-4 py-2 font-[Raleway] rounded-lg bg-gray-200 hover:bg-gray-300"
              >
                Back to Courses
              </button>
            </div>

            {/* Foraging Activities - Single Column in Center */}
            <div className="flex justify-center">
              <div className="w-full max-w-2xl space-y-4">
                {foragingCourse.activities.map((act) => (
                  <div
                    key={act.id}
                    className="p-4 rounded-xl shadow-sm border border-gray-200 bg-white w-full"
                  >
                    <p className="font-['Nunito_Sans'] font-bold text-[18px] leading-[28px] text-[#434343] mb-2">
                      Activity {act.id}
                    </p>

                    <div className="flex items-center gap-3 mb-3">
                      {/* <img
                        src={act.icon}
                        alt="icon"
                        className="w-12 h-12 rounded-full"
                      /> */}
                      <div className="flex-1">
                        <h3 className="font-['Raleway'] font-normal text-[15px] leading-[22px] text-[#C56441]">
                          {act.title}
                        </h3>
                        <p className="font-['Nunito_Sans'] font-medium text-[13px] leading-[18px] text-[#434343] mt-1">
                          {act.time}
                        </p>
                      </div>
                    </div>

                    <div className="mt-3 text-[#555] text-[13px] leading-[20px] space-y-2">
                      {act.details.map((section, index) => (
                        <div key={index}>
                          {section.heading && (
                            <p className="font-['Nunito_Sans'] font-semibold text-[16px] leading-[27px] tracking-[0%] text-[#C56441] mt-2">
                              {section.heading}
                            </p>
                          )}
                          {section.points && (
                            <ul className="list-none pl-0 space-y-1 mt-1">
                              {section.points.map((point, idx) => (
                                <li
                                  key={idx}
                                  className="font-['Nunito_Sans'] font-semibold text-[14px] leading-[25px] tracking-[0%] text-[#616161]"
                                >
                                  {point}
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                    </div>
                    
                    {/* Removed individual price and book button from here */}
                  </div>
                ))}
                
                {/* Single Book Now Button at Bottom */}
                <div className="flex justify-between items-center mt-8 p-4 bg-white rounded-xl shadow-sm border border-gray-200">
                  <p className="text-green-700 font-['Nunito_Sans'] font-bold text-[18px] leading-[27px]">
                    {foragingCourse.price}
                  </p>
                  <div className="flex gap-3">
                    <button
                      onClick={() => setShowForagingActivities(false)}
                      className="px-4 py-2 font-[Raleway] rounded-lg bg-gray-200 hover:bg-gray-300"
                    >
                      Back to Courses
                    </button>
                    <button
                      onClick={() => handleBookNow(foragingCourse)}
                      className="px-4 py-2 font-[Raleway] rounded-lg bg-[#C56441] hover:bg-[#a85632] text-white"
                    >
                      Book Course
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================= COURSE DETAILS FOR FIELDCRAFT, NAVIGATION, FIRST AID ================= */}
        {(activeCategory === "Fieldcraft" || activeCategory === "Navigation" || activeCategory === "First Aid") &&
          selectedCourse && (
            <div className="mt-10 max-w-3xl mx-auto">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-['Nunito_Sans'] font-bold text-[24px] leading-[30px] text-[#C56441]">
                  {selectedCourse.title}
                </h3>
                <button
                  onClick={() => setSelectedCourse(null)}
                  className="px-4 py-2 font-[Raleway] rounded-lg bg-gray-200 hover:bg-gray-300"
                >
                  Back to Courses
                </button>
              </div>

              {/* COURSE DETAILS SECTIONS */}
              <div className="space-y-6">
                {/* Objective Section */}
                <div className="rounded-xl p-4 shadow-lg bg-white">
                  <p className="font-[Raleway] font-semibold text-[18px] leading-[30px] tracking-normal text-[#C56441] mb-3">
                    {getSectionName(selectedCourse, "objective")}
                  </p>
                  <div className="pl-2 space-y-3">
                    {selectedCourse.details.objectives ? (
                      <ul className="list-disc pl-5 space-y-2">
                        {selectedCourse.details.objectives.map((point, index) => (
                          <li
                            key={index}
                            className="font-['Nunito_Sans'] font-medium text-[16px] leading-[20px] text-[#6B6B6B]"
                          >
                            {point.main}
                            {point.subpoints && (
                              <ul className="list-disc pl-5 mt-1 space-y-1">
                                {point.subpoints.map((sub, subIndex) => (
                                  <li
                                    key={subIndex}
                                    className="font-['Nunito_Sans'] font-medium text-[16px] leading-[25px] text-[#6B6B6B]"
                                  >
                                    {sub}
                                  </li>
                                ))}
                              </ul>
                            )}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="font-['Nunito_Sans'] font-medium text-[16px] leading-[30px] text-[#6B6B6B]">
                        {selectedCourse.details.objective}
                      </p>
                    )}
                  </div>
                </div>

                {/* Classroom Module Section */}
                <div className="rounded-xl p-4 shadow-lg bg-white">
                  <p className="font-[Raleway] font-semibold text-[18px] leading-[30px] tracking-normal text-[#C56441] mb-3">
                    {getSectionName(selectedCourse, "classroomModule")}
                  </p>
                  <ul className="pl-2 space-y-3">
                    {selectedCourse.details.classroomModules.map((module, index) => {
                      if (module && typeof module === "object" && module.title && module.items) {
                        return (
                          <li key={index}>
                            <p className="font-['Nunito_Sans'] font-medium text-[16px] leading-[30px] tracking-normal text-[#6B6B6B] underline underline-offset-[2px]">
                              {module.title}:
                            </p>
                            <ul className="list-disc pl-5 space-y-1">
                              {module.items.map((item, itemIndex) => (
                                <li
                                  key={itemIndex}
                                  className="font-['Nunito_Sans'] font-medium text-[16px] leading-[25px] text-[#6B6B6B]"
                                >
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </li>
                        );
                      } else if (typeof module === "string") {
                        return (
                          <li
                            key={index}
                            className="font-['Nunito_Sans'] font-medium text-[16px] leading-[20px] text-[#6B6B6B] list-disc ml-5"
                          >
                            {module}
                          </li>
                        );
                      } else {
                        return null;
                      }
                    })}
                  </ul>
                </div>

                {/* Field Module Section */}
                <div className="rounded-xl p-4 shadow-lg bg-white">
                  <p className="font-[Raleway] font-semibold text-[18px] leading-[30px] tracking-normal text-[#C56441] mb-3">
                    {getSectionName(selectedCourse, "fieldModule")}
                  </p>
                  <div className="space-y-3">
                    {Array.isArray(selectedCourse.details.fieldModules) &&
                      selectedCourse.details.fieldModules.map((module, index) => (
                        <div key={index}>
                          {typeof module === "object" && module.title && module.items && (
                            <>
                              <p className="font-['Nunito_Sans'] font-medium text-[16px] leading-[30px] tracking-normal text-[#6B6B6B]">
                                {module.title}
                              </p>
                              <ul className="list-disc pl-5 space-y-1">
                                {module.items.map((point, i) => (
                                  <li
                                    key={i}
                                    className="font-['Nunito_Sans'] font-medium text-[16px] leading-[25px] text-[#6B6B6B]"
                                  >
                                    {point}
                                  </li>
                                ))}
                              </ul>
                            </>
                          )}
                          {typeof module === "string" && (
                            <ul className="list-disc pl-5">
                              <li className="font-['Nunito_Sans'] font-medium text-[16px] leading-[25px] text-[#6B6B6B]">
                                {module}
                              </li>
                            </ul>
                          )}
                        </div>
                      ))}
                  </div>
                </div>

                {/* Kit Required Section */}
                <div className="rounded-xl p-4 shadow-lg bg-white">
                  <p className="font-[Raleway] font-semibold text-[18px] leading-[30px] tracking-normal text-[#C56441] mb-3">
                    {getSectionName(selectedCourse, "kitRequired")}
                  </p>
                  <p className="font-['Nunito_Sans'] font-medium text-[16px] leading-[30px] tracking-normal text-[#6B6B6B]">
                    {selectedCourse.details.kitRequired}
                  </p>
                </div>

                <div className="flex justify-between mt-8">
                  <button
                    onClick={() => setSelectedCourse(null)}
                    className="px-4 py-2 font-[Raleway] rounded-lg bg-gray-200 hover:bg-gray-300"
                  >
                    Back to Courses
                  </button>
                  <button
                    onClick={() => handleBookNow(selectedCourse)}
                    className="px-4 py-2 font-[Raleway] rounded-lg bg-[#C56441] hover:bg-[#a85632] text-white"
                  >
                    Book This Course
                  </button>
                </div>
              </div>
            </div>
          )}
      </div>

      {/* Booking Modal */}
      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        course={selectedItemForBooking}
      />
    </div>
  );
}