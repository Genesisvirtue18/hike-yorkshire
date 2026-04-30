import Navbar from "../Components/Navbar/Navbar";



export default function WildCampingYorkshireRules() {
  const JimmyImg="/assets/Team/jimmy.webp";

  return (
    <main className="bg-white">
      <Navbar />
     

      {/* HERO */}
      <section className="bg-[#FAF7F3] mt-10 py-16 px-4 md:px-8">
        <div className="max-w-[900px] mx-auto text-center">
          <h1 className="font-[Raleway] font-semibold text-[28px] md:text-[36px] text-[#C56441] leading-tight">
            Wild Camping in Yorkshire: What’s Legal, Where You Stand, and How to Do It Right
          </h1>
          <p className="mt-4 font-['Nunito_Sans'] text-[16px] md:text-[18px] text-gray-700">
            Understand the rules of wild camping in Yorkshire and how to camp responsibly.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-14 px-4 md:px-8">
        <div className="max-w-[900px] mx-auto space-y-14">

          {/* INTRO */}
          <p className="font-['Nunito_Sans'] text-[16px] md:text-[18px] leading-[30px] text-gray-700">
            There’s nothing quite like waking up to mist rolling across the Yorkshire Dales or
            hearing curlews calling over the moors. Wild camping captures a real sense of freedom,
            but it also comes with responsibilities.
            <br /><br />
            In this guide, we explain the legal position on wild camping in Yorkshire, how to camp
            responsibly, and how following <strong>Leave No Trace UK</strong> principles helps
            protect these landscapes for future generations.
          </p>

          {/* JIMMY TIP */}
         <div className="bg-[#FFF6EE] rounded-2xl p-4 md:p-6 flex flex-col md:flex-row gap-4 items-center">

  {/* Image */}
  <div className="flex-shrink-0">
    <img
      src={JimmyImg}
      alt="Jimmy"
      className="w-16 h-16 md:w-18 md:h-18 rounded-full object-cover border-2 border-white shadow-sm"
    />
  </div>

  {/* Text */}
  <div className="text-center md:text-left">
    <h3 className="font-[Raleway] font-semibold text-[#C56441] text-[16px] md:text-[17px] mb-1">
      Jimmy’s top tip
    </h3>
    <p className="font-['Nunito_Sans'] text-[14px] md:text-[15px] text-gray-700 italic max-w-md">
      “Unpack your tent at last light, and pack back up at first light.”
    </p>
  </div>

</div>


          {/* LEGALITY */}
          <article>
            <h2 className="font-[Raleway] font-semibold text-[22px] text-[#C56441] mb-4">
              Is Wild Camping Legal in Yorkshire?
            </h2>
            <p className="font-['Nunito_Sans'] leading-[28px] text-gray-700">
              In short <strong>not without permission</strong>.
              <br /><br />
              Across England, including Yorkshire, wild camping is technically illegal without
              landowner consent. This applies even in national parks such as the Yorkshire Dales
              and the North York Moors, where much of the land is privately owned.
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2 font-['Nunito_Sans'] text-gray-700">
              <li>Responsible, discreet camping is often tolerated in remote upland areas.</li>
              <li>Arriving late, leaving early, and leaving no trace reduces the chance of issues.</li>
              <li>You can still be asked to move on if permission hasn’t been granted.</li>
            </ul>
            <p className="mt-4 font-['Nunito_Sans'] text-gray-700">
              Wild camping in Yorkshire is a privilege not a right and one we all need to protect.
            </p>
          </article>

          {/* GOLDEN RULES */}
          <article>
            <h2 className="font-[Raleway] font-semibold text-[22px] text-[#C56441] mb-4">
              Responsible Wild Camping: The Golden Rules
            </h2>

            <ol className="list-decimal pl-6 space-y-4 font-['Nunito_Sans'] text-gray-700 leading-[28px]">
              <li>
                <strong>Ask for permission where possible.</strong> Farmers and landowners often
                appreciate a polite request.
              </li>
              <li>
                <strong>Camp late, leave early.</strong> Pitch after sunset and pack up at dawn.
              </li>
              <li>
                <strong>Use a small, low-impact setup.</strong> Neutral-coloured tents, 1–2 maximum.
              </li>
              <li>
                <strong>No campfires.</strong> Fires are the leading cause of moorland wildfires.
              </li>
              <li>
                <strong>Take all waste home.</strong> Including food scraps, fruit peel and toilet paper.
              </li>
              <li>
                <strong>Stay quiet and invisible.</strong> Respect wildlife, livestock and other walkers.
              </li>
              <li>
                <strong>Leave no trace.</strong> Restore grass and ground before leaving.
              </li>
            </ol>
          </article>

          {/* LEAVE NO TRACE */}
          <article>
            <h2 className="font-[Raleway] font-semibold text-[22px] text-[#C56441] mb-4">
              Understanding the Leave No Trace Principles
            </h2>
            <ul className="list-disc pl-6 space-y-3 font-['Nunito_Sans'] text-gray-700 leading-[28px]">
              <li>Plan ahead and prepare.</li>
              <li>Travel and camp on durable surfaces.</li>
              <li>Dispose of waste properly.</li>
              <li>Leave what you find.</li>
              <li>Minimise campfire impact.</li>
              <li>Respect wildlife.</li>
              <li>Be considerate of others.</li>
            </ul>
            <p className="mt-4 font-['Nunito_Sans'] text-gray-700">
              At Hike Yorkshire, these principles are taught and practised on every wild camping course.
            </p>
          </article>

          {/* GEAR */}
          <article>
            <h2 className="font-[Raleway] font-semibold text-[22px] text-[#C56441] mb-4">
              Gear Tips for Responsible Wild Camping
            </h2>
            <ul className="list-disc pl-6 space-y-2 font-['Nunito_Sans'] text-gray-700 leading-[28px]">
              <li>Lightweight tent (under 1.5 kg) in neutral colours</li>
              <li>3-season sleeping bag and insulated mat</li>
              <li>Compact stove (gas or spirit burner only)</li>
              <li>2L water bottle or filter system</li>
              <li>Map and compass</li>
              <li>Small zip-seal rubbish bag</li>
              <li>Headtorch with red-light mode</li>
            </ul>
          </article>

          {/* WHEN NOT TO CAMP */}
          <article>
            <h2 className="font-[Raleway] font-semibold text-[22px] text-[#C56441] mb-4">
              When You Shouldn’t Wild Camp
            </h2>
            <ul className="list-disc pl-6 space-y-2 font-['Nunito_Sans'] text-gray-700 leading-[28px]">
              <li>During periods of high wildfire risk</li>
              <li>On working farmland or near livestock</li>
              <li>Near popular viewpoints or car parks</li>
              <li>On SSSIs without explicit permission</li>
            </ul>
          </article>

          {/* ALTERNATIVES */}
          <article>
            <h2 className="font-[Raleway] font-semibold text-[22px] text-[#C56441] mb-4">
              Legal & Ethical Alternatives
            </h2>
            <p className="font-['Nunito_Sans'] leading-[28px] text-gray-700">
              Backpacker-friendly and eco-run campsites offer a legal way to experience
              wild-style camping while practising Leave No Trace principles  ideal for beginners
              or multi-day treks.
            </p>
          </article>

          {/* FINAL */}
          <div className="border-t pt-8">
            <p className="font-['Nunito_Sans'] leading-[30px] text-gray-700">
              Wild camping in Yorkshire is one of the purest ways to experience its landscapes 
              but it’s built on trust. Camp discreetly, responsibly, and sustainably to preserve
              access for future explorers.
            </p>
            <p className="mt-4 font-['Nunito_Sans'] leading-[30px] text-gray-700">
              👉 Learn more or join a course at <strong>www.hikeyorkshire.com</strong>.
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}
