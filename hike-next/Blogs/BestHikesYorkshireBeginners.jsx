import Navbar from "../Components/Navbar/Navbar";



export default function BestHikesYorkshireBeginners() {
  const RoisinEImg = "/src/assets/Team/RoisinE.webp";

  return (
    <main className="bg-white">
        <Navbar />

      {/* HERO */}
      <section className="bg-[#FAF7F3] mt-10 py-16 px-4 md:px-8">
        <div className="max-w-[900px] mx-auto text-center">
          <h1 className="font-[Raleway] font-semibold text-[28px] md:text-[36px] text-[#C56441] leading-tight">
            The 5 Best Hikes in Yorkshire for Beginners
          </h1>
          <p className="mt-4 font-['Nunito_Sans'] text-[16px] md:text-[18px] text-gray-700">
            Easy walking routes, gentle terrain, and rewarding views for new hikers.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-14 px-4 md:px-8">
        <div className="max-w-[900px] mx-auto space-y-14">

          {/* INTRO */}
          <p className="font-['Nunito_Sans'] text-[16px] md:text-[18px] leading-[30px] text-gray-700">
            Yorkshire is a walker’s paradise from rolling dales and wild moors to dramatic
            cliffs and stone-built villages. Whether you’re new to hiking or simply want a
            relaxed day outdoors, there are countless beginner-friendly trails to enjoy.
            <br /><br />
            Here are five of the <strong>best hikes in Yorkshire for beginners</strong>,
            complete with route details, terrain notes , OS map references and the best pubs
            to refuel in afterwards.
          </p>

          {/* ROISIN TIP */}
          <div className="bg-[#FFF6EE] rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-center">

  {/* Image */}
  <div className="flex-shrink-0">
    <img
      src={RoisinEImg}   // replace with Roisin image
      alt="Roisin"
      className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover border-4 border-white shadow-md"
    />
  </div>

  {/* Text */}
  <div className="text-center md:text-left">
    <h3 className="font-[Raleway] font-semibold text-[#C56441] text-[18px] mb-2">
      Roisin’s top tip
    </h3>
    <p className="font-['Nunito_Sans'] text-[16px] text-gray-700 italic max-w-xl">
      “Don’t overstretch yourself as a beginner enjoy an easy walk and build up
      gradually from there.”
    </p>
  </div>

</div>


          {/* HIKE 1 */}
          <article>
            <h2 className="font-[Raleway] font-semibold text-[22px] text-[#C56441] mb-3">
              Malham Cove & Gordale Scar Loop
            </h2>
            <ul className="font-['Nunito_Sans'] text-gray-700 space-y-1">
              <li><strong>Distance:</strong> 4.5 miles / 7 km</li>
              <li><strong>Height gain:</strong> c. 250 m</li>
              <li><strong>OS Map:</strong> OL2 Yorkshire Dales Southern & Western Areas</li>
              <li><strong>Terrain:</strong> Limestone paths, short rocky steps, gentle gradients</li>
              <li><strong>Time:</strong> 2–3 hours</li>
            </ul>
            <p className="mt-4 font-['Nunito_Sans'] leading-[28px] text-gray-700">
              Starting from the postcard village of Malham, this classic route takes in
              Janet’s Foss waterfall, the dramatic limestone gorge of Gordale Scar, and the
              iconic Malham Cove one of the best views in northern England.
            </p>
            <p className="mt-2 text-sm text-gray-600">
              🍻 Pub stop: The Lister Arms or The Buck Inn, Malham
            </p>
          </article>

          {/* HIKE 2 */}
          <article>
            <h2 className="font-[Raleway] font-semibold text-[22px] text-[#C56441] mb-3">
              Ilkley Moor Circular – Cow & Calf Rocks
            </h2>
            <ul className="font-['Nunito_Sans'] text-gray-700 space-y-1">
              <li><strong>Distance:</strong> 5 miles / 8 km</li>
              <li><strong>Height gain:</strong> c. 200 m</li>
              <li><strong>OS Map:</strong> OL21 South Pennines</li>
              <li><strong>Terrain:</strong> Moorland paths, gravel tracks, rocky outcrops</li>
              <li><strong>Time:</strong> 2–2.5 hours</li>
            </ul>
            <p className="mt-4 font-['Nunito_Sans'] leading-[28px] text-gray-700">
              A local favourite with wide-open views across Wharfedale, this route includes
              the famous Cow & Calf Rocks. Easy access from Ilkley train station makes it ideal
              for beginners and car-free walkers.
            </p>
            <p className="mt-2 text-sm text-gray-600">
              🍻 Pub stop: Cow & Calf Hotel or Bar T’ At, Ilkley
            </p>
          </article>

          {/* HIKE 3 */}
          <article>
            <h2 className="font-[Raleway] font-semibold text-[22px] text-[#C56441] mb-3">
              Aysgarth Falls & River Ure Trail
            </h2>
            <ul className="font-['Nunito_Sans'] text-gray-700 space-y-1">
              <li><strong>Distance:</strong> 2.5 miles / 4 km</li>
              <li><strong>Height gain:</strong> &lt; 100 m</li>
              <li><strong>OS Map:</strong> OL30 Yorkshire Dales Northern & Central Areas</li>
              <li><strong>Terrain:</strong> Easy riverside paths and stone steps</li>
              <li><strong>Time:</strong> 1.5–2 hours</li>
            </ul>
            <p className="mt-4 font-['Nunito_Sans'] leading-[28px] text-gray-700">
              This gentle riverside walk links the Upper, Middle and Lower Aysgarth Falls,
              made famous in Robin Hood: Prince of Thieves. Ideal for families and first-time hikers.
            </p>
            <p className="mt-2 text-sm text-gray-600">
              🍻 Pub stop: The George & Dragon, Aysgarth
            </p>
          </article>

          {/* HIKE 4 */}
          <article>
            <h2 className="font-[Raleway] font-semibold text-[22px] text-[#C56441] mb-3">
              Roseberry Topping via Newton under Roseberry
            </h2>
            <ul className="font-['Nunito_Sans'] text-gray-700 space-y-1">
              <li><strong>Distance:</strong> 2.2 miles / 3.5 km</li>
              <li><strong>Height gain:</strong> 320 m</li>
              <li><strong>OS Map:</strong> OL26 North York Moors Western Area</li>
              <li><strong>Terrain:</strong> Good paths with a steep final ascent</li>
              <li><strong>Time:</strong> 1.5–2 hours</li>
            </ul>
            <p className="mt-4 font-['Nunito_Sans'] leading-[28px] text-gray-700">
              Known as the “Yorkshire Matterhorn”, Roseberry Topping offers incredible views
              across the Cleveland Hills. Short but punchy, it’s a great first challenge.
            </p>
            <p className="mt-2 text-sm text-gray-600">
              🍻 Pub stop: The King’s Head Inn, Newton under Roseberry
            </p>
          </article>

          {/* HIKE 5 */}
          <article>
            <h2 className="font-[Raleway] font-semibold text-[22px] text-[#C56441] mb-3">
              Brimham Rocks & Nidderdale Ridge Walk
            </h2>
            <ul className="font-['Nunito_Sans'] text-gray-700 space-y-1">
              <li><strong>Distance:</strong> 3 miles / 5 km</li>
              <li><strong>Height gain:</strong> c. 150 m</li>
              <li><strong>OS Map:</strong> OL26 North York Moors Western Area</li>
              <li><strong>Terrain:</strong> National Trust paths with rocky sections</li>
              <li><strong>Time:</strong> 1.5–2 hours</li>
            </ul>
            <p className="mt-4 font-['Nunito_Sans'] leading-[28px] text-gray-700">
              Explore the surreal rock formations of Brimham Rocks and enjoy peaceful moorland
              paths in the Nidderdale AONB perfect for relaxed exploration and photography.
            </p>
            <p className="mt-2 text-sm text-gray-600">
              🍻 Pub stop: The Birch Tree Inn, Risplith or The Royal Oak, Pateley Bridge
            </p>
          </article>

          {/* TIPS */}
          <div>
            <h2 className="font-[Raleway] font-semibold text-[22px] text-[#C56441] mb-4">
              Tips for Beginner Hikers in Yorkshire
            </h2>
            <ul className="list-disc pl-6 font-['Nunito_Sans'] text-gray-700 space-y-2">
              <li>Check the weather conditions change quickly.</li>
              <li>Wear sturdy footwear and layered clothing.</li>
              <li>Carry a map and compass.</li>
              <li>Pack water, snacks and waterproofs.</li>
              <li>Follow the Countryside Code and Leave No Trace principles.</li>
            </ul>
          </div>

          {/* WHY HIKE YORKSHIRE */}
          <div className="border-t pt-8">
            <h2 className="font-[Raleway] font-semibold text-[22px] text-[#C56441] mb-4">
              Why Walk with Hike Yorkshire?
            </h2>
            <p className="font-['Nunito_Sans'] leading-[30px] text-gray-700">
              At Hike Yorkshire, we specialise in guided walks and outdoor skills courses for beginners.
              Our local guides help you explore safely while learning navigation, map reading and
              sustainable hiking skills.
              <br /><br />
              👉 Join a guided walk or skills day at <strong>www.hikeyorkshire.com</strong>.
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}
