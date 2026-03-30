import Navbar from "../Components/NavBar/Navbar";





export default function HikeSustainablyYorkshire() {
  const RyanImg ="/assets/Team/Ryan-1.webp";

  return (
    <main className="bg-white mt-10">
      <Navbar />
     

      {/* HERO */}
      <section className="bg-[#FAF7F3] font-[Raleway] py-16 px-4 md:px-8">
        <div className="max-w-[900px] mx-auto text-center">
          <h1 className="font-[Raleway] font-semibold text-[28px] md:text-[36px] text-[#C56441] leading-tight">
            Hike Sustainably in Yorkshire: Leave No Trace on the Moors
          </h1>
          <p className="mt-4 font-['Nunito_Sans'] text-[16px] md:text-[18px] text-gray-700">
            Practical sustainable hiking tips to protect the Yorkshire Dales, moors, and coastlines.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-14 px-4 md:px-8">
        <div className="max-w-[900px] mx-auto space-y-14">

          {/* INTRO */}
          <p className="font-['Nunito_Sans'] text-[16px] md:text-[18px] leading-[30px] text-gray-700">
            Yorkshire’s moors, dales and coastal trails are among the UK’s most memorable scenery.
            But with more people hitting the paths each year, <strong>sustainable hiking</strong> has
            never been more important.
            <br /><br />
            At Hike Yorkshire, we believe every walk should leave a positive mark on the land,
            on local communities, and on the people who follow your footsteps. Here’s how to enjoy
            eco hiking in Yorkshire while keeping our countryside wild and beautiful.
          </p>

          {/* RYAN TIP */}
          <div className="flex flex-col md:flex-row gap-6 items-center bg-[#FFF6EE] rounded-2xl p-6 md:p-8">

  {/* Image Section */}
  <div className="flex-shrink-0">
    <img
      src={RyanImg}
      alt="Ryan"
      className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover border-4 border-white shadow-md"
    />
  </div>

  {/* Text Section */}
  <div className="text-center md:text-left">
    <h3 className="font-[Raleway] font-semibold text-[#C56441] text-[18px] mb-2">
      Ryan’s top tip
    </h3>
    <p className="font-['Nunito_Sans'] text-[16px] text-gray-700 italic max-w-xl">
      “Always bring a zip-seal bag for your litter including fruit peel.
      Leave No Trace!”
    </p>
  </div>

</div>


          {/* SECTION */}
          <article className="space-y-10">

            {/* PLAN */}
            <div>
              <h2 className="font-[Raleway] font-semibold text-[22px] text-[#C56441] mb-4">
                Plan Your Route Responsibly
              </h2>
              <ul className="list-disc pl-6 space-y-3 font-['Nunito_Sans'] text-gray-700 leading-[28px]">
                <li>Use official OS maps and established footpaths to reduce erosion.</li>
                <li>Pick routes suitable for your group’s ability.</li>
                <li>Check access restrictions before heading out.</li>
                <li>Use public transport where possible.</li>
                <li>Check the weather and pack for the worst.</li>
              </ul>
              <p className="mt-4 text-sm text-gray-600">
                Tip: Planning helps reduce your carbon footprint while protecting fragile moorland.
              </p>
            </div>

            {/* LEAVE NO TRACE */}
            <div>
              <h2 className="font-[Raleway] font-semibold text-[22px] text-[#C56441] mb-4">
                Leave No Trace
              </h2>
              <ul className="list-disc pl-6 space-y-3 font-['Nunito_Sans'] text-gray-700 leading-[28px]">
                <li>Carry out everything you bring in including fruit peel.</li>
                <li>Use refillable bottles and reusable containers.</li>
                <li>Pick up stray litter to leave the trail better than you found it.</li>
              </ul>
              <p className="mt-4 text-sm text-gray-600">
                Pro tip: Do a quick “leave no trace sweep” before moving on.
              </p>
            </div>

            {/* WILDLIFE */}
            <div>
              <h2 className="font-[Raleway] font-semibold text-[22px] text-[#C56441] mb-4">
                Respect Wildlife and Livestock
              </h2>
              <ul className="list-disc pl-6 space-y-3 font-['Nunito_Sans'] text-gray-700 leading-[28px]">
                <li>Keep dogs on a short lead during nesting season (March–July).</li>
                <li>Do not disturb wildflowers or fungi.</li>
                <li>Keep noise levels low in sensitive habitats.</li>
              </ul>
              <p className="mt-4 text-sm text-gray-600">
                🦉 Yorkshire’s heather moors are one of Europe’s rarest habitats.
              </p>
            </div>

            {/* LOCAL */}
            <div>
              <h2 className="font-[Raleway] font-semibold text-[22px] text-[#C56441] mb-4">
                Support Local Communities
              </h2>
              <ul className="list-disc pl-6 space-y-3 font-['Nunito_Sans'] text-gray-700 leading-[28px]">
                <li>Use designated parking and avoid blocking access points.</li>
                <li>Support local pubs, cafés and shops.</li>
                <li>Choose local guides and accommodation.</li>
              </ul>
            </div>

            {/* PACK */}
            <div>
              <h2 className="font-[Raleway] font-semibold text-[22px] text-[#C56441] mb-4">
                Pack Smart, Hike Light
              </h2>
              <ul className="list-disc pl-6 space-y-3 font-['Nunito_Sans'] text-gray-700 leading-[28px]">
                <li>Map, compass and route notes</li>
                <li>Reusable water bottle</li>
                <li>Layered clothing</li>
                <li>Compact first aid kit</li>
                <li>Reusable snack containers</li>
              </ul>
            </div>

            {/* SHARE */}
            <div>
              <h2 className="font-[Raleway] font-semibold text-[22px] text-[#C56441] mb-4">
                Share, Educate, Inspire
              </h2>
              <ul className="list-disc pl-6 space-y-3 font-['Nunito_Sans'] text-gray-700 leading-[28px]">
                <li>Share responsible hiking tips using #EcoHikingYorkshire</li>
                <li>Join conservation or litter-pick days</li>
                <li>Learn new outdoor skills with Hike Yorkshire</li>
              </ul>
            </div>

          </article>

          {/* FINAL */}
          <div className="border-t pt-8">
            <p className="font-['Nunito_Sans'] text-[16px] leading-[30px] text-gray-700">
              Every small action adds up. By following Leave No Trace principles and supporting
              local communities, we can keep Yorkshire’s landscapes wild and welcoming for generations.
            </p>

            <p className="mt-4 font-['Nunito_Sans'] text-[16px] leading-[30px] text-gray-700">
              👉 Visit <strong>www.hikeyorkshire.com</strong> to explore guided hikes, foraging days,
              and eco-friendly outdoor experiences.
            </p>
          </div>

        </div>
      </section>

    </main>
  );
}
