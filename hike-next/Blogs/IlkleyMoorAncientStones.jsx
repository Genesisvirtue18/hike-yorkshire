import Navbar from "../Components/NavBar/Navbar";



export default function IlkleyMoorAncientStones() {
  const AndyImg = "/assets/Team/Andy.webp";

  return (
    <main className="bg-white">

        <Navbar />

      {/* HERO */}
      <section className="bg-[#FAF7F3] mt-10 py-16 px-4 md:px-8">
        <div className="max-w-[900px] mx-auto text-center">
          <h1 className="font-[Raleway] font-semibold text-[28px] md:text-[36px] text-[#C56441] leading-tight">
            Walking Through Time: The Ancient Stones and Rock Art of Ilkley Moor
          </h1>
          <p className="mt-4 font-['Nunito_Sans'] text-[16px] md:text-[18px] text-gray-700">
            Discover prehistoric carvings, Bronze Age monuments, and folklore on one of
            Yorkshire’s most historic walking landscapes.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-14 px-4 md:px-8">
        <div className="max-w-[900px] mx-auto space-y-14">

          {/* INTRO */}
          <p className="font-['Nunito_Sans'] text-[16px] md:text-[18px] leading-[30px] text-gray-700">
            Ilkley Moor rises above the town of Ilkley in West Yorkshire, forming a landscape
            of rolling heather, rocky outcrops, and wide panoramic views. While it is loved
            for its natural beauty, the moor is also one of Britain’s most important prehistoric
            landscapes.
            <br /><br />
            Ancient rock carvings, Bronze Age stone circles, and burial cairns reveal evidence
            of human activity stretching back thousands of years. Whether you’re a casual
            walker or an archaeology enthusiast, hiking Ilkley Moor offers a rare chance to
            connect with both nature and the distant past.
          </p>

          {/* ANDY TIP */}
          <div className="bg-[#FFF6EE] rounded-2xl p-4 md:p-6 flex flex-col md:flex-row gap-4 items-center">

  {/* Image */}
  <div className="flex-shrink-0">
    <img
      src={AndyImg}   // replace with Andy image
      alt="Andy"
      className="w-16 h-16 md:w-18 md:h-18 rounded-full object-cover border-2 border-white shadow-sm"
    />
  </div>

  {/* Text */}
  <div className="text-center md:text-left">
    <h3 className="font-[Raleway] font-semibold text-[#C56441] text-[16px] md:text-[17px] mb-1">
      Andy’s top tip
    </h3>
    <p className="font-['Nunito_Sans'] text-[14px] md:text-[15px] text-gray-700 italic max-w-md leading-relaxed">
      “Stand inside the Twelve Apostles and imagine the thousands of pagan rituals
      that may have taken place here throughout history.”
    </p>
  </div>

</div>


          {/* ROCK ART */}
          <article>
            <h2 className="font-[Raleway] font-semibold text-[22px] text-[#C56441] mb-4">
              Prehistoric Carvings and Rock Art
            </h2>
            <p className="font-['Nunito_Sans'] leading-[30px] text-gray-700 mb-4">
              Ilkley Moor is famous for its cup-and-ring marks among the oldest artistic
              expressions in Britain. These carvings, etched into exposed gritstone, date
              from the Neolithic to Bronze Age periods (c. 3000–1500 BCE).
            </p>
            <ul className="list-disc pl-6 font-['Nunito_Sans'] text-gray-700 space-y-2">
              <li><strong>Cup marks:</strong> Small depressions carved into stone surfaces.</li>
              <li><strong>Ring marks:</strong> Concentric circles surrounding cup marks.</li>
              <li><strong>Grooves and lines:</strong> Linear carvings with uncertain meaning.</li>
            </ul>
            <p className="mt-4 font-['Nunito_Sans'] text-gray-700 leading-[30px]">
              Interpretations range from ceremonial symbols and territorial markers to
              astronomical or calendrical tools. Spotting them often requires slowing down
              and looking carefully among moss and lichen-covered rock.
            </p>
          </article>

          {/* BRONZE AGE */}
          <article>
            <h2 className="font-[Raleway] font-semibold text-[22px] text-[#C56441] mb-4">
              Bronze Age Monuments
            </h2>
            <p className="font-['Nunito_Sans'] leading-[30px] text-gray-700 mb-4">
              Scattered across Ilkley Moor are visible remnants of Bronze Age life, offering
              insight into early human societies and belief systems.
            </p>
            <ul className="list-disc pl-6 font-['Nunito_Sans'] text-gray-700 space-y-2">
              <li><strong>Stone circles:</strong> Likely ceremonial gathering sites.</li>
              <li><strong>Burial cairns:</strong> Low stone mounds marking ancient graves.</li>
              <li><strong>Standing stones:</strong> Possible boundary or ritual markers.</li>
            </ul>
            <p className="mt-4 font-['Nunito_Sans'] text-gray-700 leading-[30px]">
              Many monuments blend seamlessly into the landscape. Walkers should avoid
              climbing on stones and respect these fragile structures.
            </p>
          </article>

          {/* FOLKLORE */}
          <article>
            <h2 className="font-[Raleway] font-semibold text-[22px] text-[#C56441] mb-4">
              Folklore and Legends
            </h2>
            <p className="font-['Nunito_Sans'] leading-[30px] text-gray-700 mb-4">
              Ilkley Moor’s archaeological importance is matched by its rich folklore, adding
              mystery and imagination to every walk.
            </p>
            <ul className="list-disc pl-6 font-['Nunito_Sans'] text-gray-700 space-y-2">
              <li>
                <strong>The Cow and Calf Rocks:</strong> Linked to legends of the giant Rombald.
              </li>
              <li>
                <strong>Hauntings:</strong> Stories of spirits lingering among ancient stones.
              </li>
              <li>
                <strong>Gatherings:</strong> Historic meeting places for trade and rituals.
              </li>
            </ul>
          </article>

          {/* PLANNING */}
          <article>
            <h2 className="font-[Raleway] font-semibold text-[22px] text-[#C56441] mb-4">
              Planning Your Archaeology Walk
            </h2>
            <ul className="list-disc pl-6 font-['Nunito_Sans'] text-gray-700 space-y-2">
              <li><strong>Difficulty:</strong> Moderate, with uneven ground and rocky paths.</li>
              <li><strong>Height gain:</strong> Approx. 200–300 m on popular loops.</li>
              <li><strong>OS map:</strong> Explorer OL2 – Yorkshire Dales.</li>
              <li><strong>Gear:</strong> Sturdy boots, waterproofs, water and snacks.</li>
              <li><strong>Guided walks:</strong> Offer deeper insight into archaeology.</li>
            </ul>
          </article>

          {/* RESPONSIBLE */}
          <article>
            <h2 className="font-[Raleway] font-semibold text-[22px] text-[#C56441] mb-4">
              Responsible Archaeology Hiking
            </h2>
            <ul className="list-disc pl-6 font-['Nunito_Sans'] text-gray-700 space-y-2">
              <li>Do not touch carvings  oils cause erosion.</li>
              <li>Avoid climbing on cairns or stone circles.</li>
              <li>Stay on marked paths.</li>
              <li>Leave no trace.</li>
              <li>Photograph without moving stones or plants.</li>
            </ul>
          </article>

          {/* FINAL */}
          <div className="border-t pt-8">
            <p className="font-['Nunito_Sans'] text-[16px] leading-[30px] text-gray-700">
              Walking Ilkley Moor is more than a hike it’s a journey through thousands of
              years of human history. By hiking responsibly, we help preserve these ancient
              stories for future generations.
            </p>
            <p className="mt-4 font-['Nunito_Sans'] text-[16px] leading-[30px] text-gray-700">
              👉 Join Hike Yorkshire for guided archaeology walks and outdoor learning
              experiences on Ilkley Moor.
            </p>
          </div>

        </div>
      </section>

    </main>
  );
}
