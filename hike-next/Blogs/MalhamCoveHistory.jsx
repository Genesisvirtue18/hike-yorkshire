import Navbar from "../Components/Navbar/Navbar";



export default function MalhamCoveHistory() {
  const RyanImg= "/assets/Team/Ryan-1.webp";

  return (
    <main className="bg-white">

        <Navbar />
     

      {/* HERO */}
      <section className="bg-[#FAF7F3] mt-10 py-16 px-4 md:px-8">
        <div className="max-w-[900px] mx-auto text-center">
          <h1 className="font-[Raleway] font-semibold text-[28px] md:text-[36px] text-[#C56441] leading-tight">
            Malham Cove: From Tropical Seas to Towering Waterfalls
          </h1>
          <p className="mt-4 font-['Nunito_Sans'] text-[16px] md:text-[18px] text-gray-700">
            Explore the geology, archaeology, and folklore behind one of the Yorkshire Dales’
            most iconic natural landmarks.
          </p>
        </div>
      </section>

      <section className="py-14 px-4 md:px-8">
        <div className="max-w-[900px] mx-auto space-y-14">

          {/* TOP TIP */}
         <div className="bg-[#FFF6EE] rounded-2xl p-4 md:p-6 flex flex-col md:flex-row gap-4 items-center">

  {/* Image */}
  <div className="flex-shrink-0">
    <img
      src={RyanImg}   // replace with Ryan image
      alt="Ryan"
      className="w-16 h-16 md:w-18 md:h-18 rounded-full object-cover border-2 border-white shadow-sm"
    />
  </div>

  {/* Text */}
  <div className="text-center md:text-left">
    <h3 className="font-[Raleway] font-semibold text-[#C56441] text-[16px] md:text-[17px] mb-1">
      Ryan’s top tip
    </h3>
    <p className="font-['Nunito_Sans'] text-[14px] md:text-[15px] text-gray-700 italic max-w-md leading-relaxed">
      “Malham is one of the few places in the Dales that can get really busy.
      Try to visit on a weekday.”
    </p>
  </div>

</div>


          {/* INTRO */}
          <p className="font-['Nunito_Sans'] text-[16px] md:text-[18px] leading-[30px] text-gray-700">
            Rising dramatically above the village of Malham, Malham Cove is one of the Yorkshire
            Dales’ most iconic landscapes. Its sweeping limestone amphitheatre has been carved
            over millennia by ancient seas, ice, and flowing water.
            <br /><br />
            A Malham Cove walk offers more than breathtaking views it is a journey through deep
            geological time, early human history, and folklore shaped by the landscape itself.
          </p>

          {/* GEOLOGY */}
          <article className="space-y-10">
            <div>
              <h2 className="font-[Raleway] font-semibold text-[22px] text-[#C56441] mb-4">
                The Geology of Malham Cove
              </h2>
              <p className="font-['Nunito_Sans'] leading-[30px] text-gray-700">
                Over 300 million years ago, this area lay beneath a warm, shallow tropical sea.
                The remains of marine organisms accumulated on the seabed, eventually forming
                thick layers of limestone.
                <br /><br />
                During the last Ice Age, powerful meltwater floods carved the sweeping curved cliff,
                while rainwater dissolved the limestone to create the famous pavement of clints
                and grikes at the top of the Cove.
              </p>
            </div>

            <div>
              <h3 className="font-[Raleway] font-semibold text-[20px] text-[#C56441] mb-3">
                A Living Landscape
              </h3>
              <p className="font-['Nunito_Sans'] leading-[30px] text-gray-700">
                Freeze-thaw weathering and rainfall continue to shape the Cove today. Mosses,
                wildflowers, and hardy plants thrive within the cracks, creating a unique blend
                of geology and life.
              </p>
            </div>
          </article>

          {/* HISTORY */}
          <article>
            <h2 className="font-[Raleway] font-semibold text-[22px] text-[#C56441] mb-4">
              Traces of History
            </h2>
            <p className="font-['Nunito_Sans'] leading-[30px] text-gray-700">
              Archaeological evidence from nearby caves suggests Neolithic settlement in the area.
              Later generations shaped the land through farming, leaving behind the dry-stone walls
              that define the Dales today.
            </p>
          </article>

          {/* FOLKLORE */}
          <article>
            <h2 className="font-[Raleway] font-semibold text-[22px] text-[#C56441] mb-4">
              Legends and Local Myths
            </h2>
            <p className="font-['Nunito_Sans'] leading-[30px] text-gray-700">
              Folklore speaks of giants shaping the land and hidden underground rivers flowing beneath
              the limestone. These stories add a magical layer to the dramatic cliffs towering above
              the valley.
            </p>
          </article>

          {/* WALKING */}
          <article>
            <h2 className="font-[Raleway] font-semibold text-[22px] text-[#C56441] mb-4">
              Planning Your Malham Cove Walk
            </h2>
            <ul className="list-disc pl-6 space-y-2 font-['Nunito_Sans'] text-gray-700">
              <li>Wear sturdy boots limestone can be slippery when wet</li>
              <li>Bring layers and water</li>
              <li>Start early to avoid crowds</li>
              <li>Combine with Janet’s Foss and Gordale Scar for a classic loop</li>
            </ul>
          </article>

          {/* CTA */}
          <div className="bg-[#FFF6EE] rounded-2xl p-6 md:p-8">
            <h3 className="font-[Raleway] font-semibold text-[#C56441] text-[20px] mb-3">
              Walk Through History with Hike Yorkshire
            </h3>
            <p className="font-['Nunito_Sans'] text-[16px] leading-[28px] text-gray-700">
              Our guided history walks explore Malham Cove where science meets story.
              Discover the Dales safely, knowledgeably, and with true Yorkshire spirit.
            </p>
          </div>

        </div>
      </section>

    </main>
  );
}
