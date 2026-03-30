"use client";
import { useState } from "react";


export default function Team() {
    const [selectedMember, setSelectedMember] = useState(null);

    // Map skills to their icons
   const skillIcons = {
  Navigation: "/assets/Team/Icons/navigation.webp",
  History: "/assets/Team/Icons/history.webp",
  Geology: "/assets/Team/Icons/geology.webp",
  Foraging: "/assets/Team/Icons/foraging.webp",
  "Field Craft": "/assets/Team/Icons/fieldcraft.webp",
  "Route Selection": "/assets/Team/Icons/routeselection.webp",
  "First Aid": "/assets/Team/Icons/firstaid.webp",
  "Map Reading": "/assets/Team/Icons/mapreading.webp",
  Architecture: "/assets/Team/Icons/architecture.webp",
};

    // Helper function to get first sentence(s) of description
    const getPreviewText = (description) => {
        // Split by sentences (period followed by space)
        const sentences = description.split('. ');
        
        // Return first 1-2 sentences
        if (sentences.length >= 2) {
            return sentences.slice(0, 2).join('. ') + '.';
        }
        // If only one sentence or less, return first 100 chars
        return description.length > 100 
            ? description.substring(0, 100) + '...' 
            : description;
    };

    // Helper function to get the "Read More" text with link
    const getDescriptionWithReadMore = (description, member) => {
        const previewText = getPreviewText(description);
        const showReadMore = description.length > previewText.length;
        
        return (
            <>
                {previewText}
                {showReadMore && (
                    <>
                        {' '}
                        <button
                            onClick={() => setSelectedMember(member)}
                            className="text-[#C56441] font-semibold hover:underline text-[13px] sm:text-[14px] inline"
                        >
                            Read More
                        </button>
                    </>
                )}
            </>
        );
    };

    // Helper function to get role based on name
    const getRole = (name) => {
        return name === "Ryan" ? "CEO" : "Guide";
    };

const team = [
  {
    name: "Ryan",
    img: "/assets/Team/Ryan-1.webp",
    skills: ["Navigation", "History", "Foraging"],
    description:
      "Ryan spent six years in the Royal Marines and is an avid walker. He has led many multi day hikes in the UK, including in the Yorkshire Dales, Lake District, Dartmoor and Scottish Highlands. He has also led groups in Albania, Lebanon, Spain and Turkey. Ryan is passionate about hiking, foraging and the geology in his native Yorkshire and likes to incorporate those elements into his walks. He founded Hike Yorkshire to share this passion with others.",
  },
  {
    name: "David",
    img: "/assets/Team/David.webp",
    skills: ["Navigation", "Geology", "Field Craft"],
    description:
      "David spent 10 years in the Royal Marines, during which time he hiked all over the world, including in Antarctica. He is also an ocean rower and along with Sam has completed two Atlantic crossings and holds a rowing world record. David is a keen adventurer and has undertaken many multi-day hikes in the UK and abroad. He is from Yorkshire and is enthusiastic about sharing his home county with others. David is highly skilled in navigation and map reading, particularly on featureless terrain.",
  },
  {
    name: "Bonnie",
    img: "/assets/Team/Bonnie.webp",
    skills: ["Route Selection", "Foraging", "First Aid"],
    description:
      "Bonnie is the team scout and at just three years old has completed several multi day hikes and the Yorkshire three peaks. She provides entertainment on walks, taking a keen interest in wild swimming and foraging for leftovers. Bonnie provides route selection support for the team. In her spare time she enjoys sleeping and eating.",
  },
  {
    name: "Jimmy",
    img: "/assets/Team/jimmy.webp",
    skills: ["Route Selection", "Field Craft", "First Aid"],
    description:
      "Jimmy is a former Grenadier Guards PTI of 12 years who now runs Jim's Gym. He has undertaken extreme expeditions in countries such as Afghanistan, Kenya, Oman and Namibia, having crossed both the Wahabi Sands and the Namib Desert unsupported. Jimmy supports people of all ages and abilities through his personal training, leading groups on marathon length hikes and encouraging team spirit and a healthy lifestyle. In his spare time, Jimmy competes in ultramarathons and Ironman triathlons.",
  },
  {
    name: "Sam E",
    img: "/assets/Team/samE.webp",
    skills: ["First Aid", "History", "Map Reading"],
    description:
      "Sam E has just completed 12 years in the Royal Marines and is also a world-record-holding ocean rower, having crossed the Atlantic twice. Sam is an international kayaker, having raced in international races and placing competitively. He has hiked as far as Antarctica, where he led a military expedition with David. Sam learnt his skills on his native Dartmoor and loves to share his knowledge with groups of all abilities. As a man of the wilderness, he has specialist knowledge regarding flora and fauna.",
  },
  {
    name: "Andy",
    img: "/assets/Team/Andy.webp",
    skills: ["Architecture", "History", "Geology"],
    description:
      "Andy graduated UCL with a degree in archeology and worked as a professional archeologist. He ran history and architecture tours around London before moving to Yorkshire and teaching in schools. He organises archeological digs for schoolchildren and adults and also takes groups on educational walking tours in towns, villages and in the countryside. Andy keeps animals on his land and enjoys being outdoors during his spare time.",
  },
  {
    name: "Ben",
    img: "/assets/Team/BenP.webp",
    skills: ["First Aid", "Field Craft", "Map Reading"],
    description:
      "Ben grew up in the Yorkshire Dales and served as an officer in the British Army for eight years. He instructed recruits in soldiering skills such as fieldcraft, map reading, first aid and physical training as well as using those skills as a leader on deployments. Ben is a regular on the three peaks and enjoys walking his dog on the moors in Yorkshire.",
  },
  {
    name: "Roisin",
    img: "/assets/Team/RoisinE.webp",
    skills: ["Foraging", "Route Selection", "First Aid"],
    description:
      "Roisin combines her knowledge of foraging and wildlife with first aid expertise to guide educational and safe hikes. Roisin is a medical doctor and experienced multi-day hiker. Having lived in New Zealand, she has tackled some of the most beautiful scenery in the world and now enjoys exploring the four corners of the British Isles every weekend. Roisin is also a forager and takes care to understand and protect the environment around her. In her spare time Roisin runs up fells and goes wild swimming.",
  },
  {
    name: "Sam T",
    img: "/assets/Team/samT.webp",
    skills: ["Navigation", "Field Craft", "History"],
    description:
      "Sam served in the army for five years, followed by 10 years in the Royal Marines. During this time he practiced and used essential hiking skills such as navigation, route selection, first aid and fieldcraft. He is passionate about sharing this knowledge with others and particularly enjoys running courses for beginners with Hike Yorkshire. Sam loves to finish his hikes in a cosy pub by a log fire.",
  },
];

    return (
        <section className="py-5 mb-10 bg-gray-50">
            <div className="text-center mb-10 px-4">
                <h2 className="font-[Raleway] font-bold text-[28px] md:text-[30px] leading-[38px] md:leading-[44px] text-[#926A39]">
                    Meet The Team
                </h2>
                <p className="font-['Nunito_Sans'] font-normal text-[16px] md:text-[18px] leading-[28px] md:leading-[30px] text-[#434343] mt-2">
                    Meet the passionate guides who turn every hike into an adventure.
                </p>
            </div>

            {/* ========== MINI SKILLS SECTION ========== */}
            <div className="mt-5 px-4  sm:px-8">
                <h3 className="text-center font-[Raleway] font-semibold text-[18px] text-[#926A39] mb-3">
                    Our Skills
                </h3>

             <div
  className="
    grid grid-cols-3 sm:grid-cols-4 mt-5 md:grid-cols-5 gap-3 justify-center
    lg:flex lg:flex-nowrap lg:justify-center lg:gap-18
  "
>
  {Object.entries(skillIcons).map(([skill, icon]) => (
    <div
      key={skill}
      className="flex flex-col items-center hover:bg-gray-50 transition-all"
    >
      <img
        src={icon}
        alt={skill}
        className="w-6 h-6 object-contain mb-1 opacity-90"
      />
      <span className="font-['Nunito_Sans'] text-[10px] sm:text-[11px] text-[#2B2B2B] text-center leading-tight">
        {skill}
      </span>
    </div>
  ))}
</div>

            </div>

            {/* Team Grid */}
            <div className="grid grid-cols-1 mt-10 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center px-4 sm:px-10 md:px-20">
                {team.map((t) => (
                    <div
                        key={t.name}
                        className="bg-white rounded-[32px] shadow-md hover:shadow-xl transition-all duration-300 p-4 text-center mx-auto flex flex-col gap-2 w-full max-w-[360px]"
                    >
                        <div className="overflow-hidden rounded-[32px] h-[220px] sm:h-[250px] md:h-[280px] w-full">
                            <img
                                src={t.img}
                                alt={t.name}
                                className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                            />
                        </div>

                        <h3 className="font-['Nunito_Sans'] font-bold text-[18px] sm:text-[20px] leading-[28px] text-[#C56441]">
                            {t.name}
                        </h3>
                        <p className="font-[Raleway] text-[14px] text-gray-500 -mt-1">
                            {getRole(t.name)}
                        </p>

                        <div className="flex flex-wrap justify-center gap-1">
                            {t.skills.map((s) => (
                                <div
                                    key={s}
                                    className="flex items-center gap-1 px-1 py-1 rounded-full text-sm"
                                >
                                    <img src={skillIcons[s]} alt={s} className="w-3 h-3 object-contain" />
                                    <span className="font-['Nunito_Sans'] font-medium text-[12px] sm:text-[14px] leading-[20px] text-[#2B2B2B]">
                                        {s}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Text preview with integrated Read More link */}
                        <div className="">
                            <p className="font-['Nunito_Sans'] text-[12px] sm:text-[13px] text-gray-700 text-left">
                                {getDescriptionWithReadMore(t.description, t)}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {selectedMember && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-2 overflow-auto">
                    <div className="bg-white rounded-2xl w-full max-w-md sm:max-w-2xl p-4 relative flex flex-col md:flex-row gap-4 md:max-h-[90vh]">
                        {/* Close button */}
                        <button
                            onClick={() => setSelectedMember(null)}
                            className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-lg font-bold"
                        >
                            ×
                        </button>

                        {/* Left: Photo */}
                        <div className="w-full md:w-1/3 flex-shrink-0 flex justify-center">
                            <div className="w-full h-[220px] sm:h-[240px] md:h-full rounded-xl overflow-hidden">
                                <img
                                    src={selectedMember.img}
                                    alt={selectedMember.name}
                                    className="w-full h-full object-cover object-top"
                                />
                            </div>
                        </div>

                        {/* Right: Text (scroll only on desktop) */}
                        <div className="w-full md:w-2/3 flex flex-col gap-2 max-h-none md:overflow-y-auto md:max-h-[70vh]">
                            <h3 className="font-['Nunito_Sans'] font-bold text-[18px] sm:text-[20px] text-[#C56441]">
                                {selectedMember.name}
                            </h3>

                            <p className="font-['Nunito_Sans'] text-[14px] text-gray-500 -mt-1">
                                {getRole(selectedMember.name)}
                            </p>

                            <div className="flex flex-wrap gap-1">
                                {selectedMember.skills.map((s) =>
                                    skillIcons[s] ? (
                                        <div
                                            key={s}
                                            className="flex items-center gap-1 px-2 py-1 bg-gray-100 rounded-lg text-sm"
                                        >
                                            <img src={skillIcons[s]} alt={s} className="w-4 h-4" />
                                            <span className="font-['Nunito_Sans'] font-medium text-[12px] sm:text-[14px]">
                                                {s}
                                            </span>
                                        </div>
                                    ) : null
                                )}
                            </div>

                            <p className="font-['Nunito_Sans'] text-[12px] sm:text-[14px] text-gray-700 mt-1">
                                {selectedMember.description}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}