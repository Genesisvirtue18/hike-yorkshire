
export default function Strengths() {
    const strengths = [
        {
            title: "Ex-Military Guides",
            desc: "Experienced, disciplined, and safety-focused leaders you can trust.",
            icon: "/assets/icons/ex-militry.webp",
        },
        {
            title: "Sustainable Tourism",
            desc: "Explore responsibly while preserving Yorkshire’s natural beauty.",
            icon: "/assets/icons/sustainabletourism.webp",
        },
        {
            title: "Small Groups",
            desc: "Personalised experiences with space to learn and connect.",
            icon: "/assets/icons/smallgroups.webp",
        },
        {
            title: "Minibus Hire",
            desc: "Comfortable transport for group adventures across the Dales.",
            icon: "/assets/icons/minibus.webp",
        },
        {
            title: "Skills Courses",
            desc: "Learn navigation, first aid and essential outdoor techniques.",
            icon: "/assets/icons/skills.webp",
        },
        {
            title: "Walking Tours",
            desc: "Discover Yorkshire’s history, culture and landscapes up close.",
            icon: "/assets/icons/walking.webp",
        },
    ];

    return (
      <section id="strengths" className=" flex mb-10 justify-center">
  <div className="w-full max-w-7xl"> {/* ✅ limits width & centers */}
    
    {/* Title + Subtitle */}
    <div className="text-center mb-4 py-10 px-4 rounded-xl mx-auto">
      <h2 className="font-[Raleway] font-bold text-[28px] leading-[40px] text-center text-[#926A39]">
        Our Strengths. Your Adventure.
      </h2>
      <p className="font-['Nunito_Sans'] font-normal text-[18px] leading-[26px] text-center text-[#434343] mt-1">
        Expert-led, sustainable, and small-group experiences across the Yorkshire.
      </p>
    </div>

    {/* Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
  {strengths.map((item, index) => (
    <div key={index} className="flex flex-col items-center">
      <img
        src={item.icon}
        alt={item.title}
        className="w-16 h-16 rounded-full mb-3"
      />

      <h3 className="font-['Nunito_Sans'] font-bold text-base text-[#C56441]">
        {item.title}
      </h3>

      <p className="font-['Nunito_Sans'] text-sm text-[#434343] max-w-[180px] mt-1">
        {item.desc}
      </p>
    </div>
  ))}
</div>


  </div>
</section>

    );
}
