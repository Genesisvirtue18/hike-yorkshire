import Navbar from "../Components/Navbar/Navbar";



export default function BoltonAbbeyToBardenTower() {
  const AndyImg = "/assets/Team/Andy.webp";

  return (
    <main className="bg-white">
        <Navbar />
     

      {/* HERO */}
      <section className="bg-[#FAF7F3] mt-10 py-16 px-4 md:px-8">
        <div className="max-w-[900px] mx-auto text-center">
          <h1 className="font-[Raleway] font-semibold text-[28px] md:text-[36px] text-[#C56441] leading-tight">
            Bolton Abbey to Barden Tower: Hiking Yorkshire’s Monastic Past
          </h1>
          <p className="mt-4 font-['Nunito_Sans'] text-[16px] md:text-[18px] text-gray-700">
            A historic riverside walk through medieval ruins, legends, and timeless countryside.
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
      “The monks left some fascinating wood and stone carvings behind
      keep your eyes peeled in The Strid woods.”
    </p>
  </div>

</div>

          {/* INTRO */}
          <p className="font-['Nunito_Sans'] text-[16px] md:text-[18px] leading-[30px] text-gray-700">
            Few places capture the soul of the Yorkshire Dales like the stretch of the River Wharfe
            between Bolton Abbey and Barden Tower. This peaceful walk blends history, legend,
            and natural beauty in a landscape shaped by monks and medieval lords.
          </p>

          {/* ABBEY */}
          <article>
            <h2 className="font-[Raleway] font-semibold text-[22px] text-[#C56441] mb-4">
              The Story of Bolton Abbey
            </h2>
            <p className="font-['Nunito_Sans'] leading-[30px] text-gray-700">
              Founded in 1154 by Augustinian monks, Bolton Priory thrived for nearly four centuries.
              Despite the Dissolution of the Monasteries, the Priory Church survived and remains
              a living place of worship today.
            </p>
          </article>

          {/* RIVER */}
          <article>
            <h2 className="font-[Raleway] font-semibold text-[22px] text-[#C56441] mb-4">
              The Riverside Path to Barden Tower
            </h2>
            <p className="font-['Nunito_Sans'] leading-[30px] text-gray-700">
              Following the River Wharfe, the trail passes through peaceful meadows and woodland.
              The Strid, a narrow and powerful gorge, adds drama and mystery to the route.
            </p>
          </article>

          {/* BARDEN */}
          <article>
            <h2 className="font-[Raleway] font-semibold text-[22px] text-[#C56441] mb-4">
              Barden Tower: Power and Perseverance
            </h2>
            <p className="font-['Nunito_Sans'] leading-[30px] text-gray-700">
              Built in the 15th century, Barden Tower became home to Lady Anne Clifford, who
              famously restored her family’s estates. The ruins remain a powerful reminder of
              medieval ambition and resilience.
            </p>
          </article>

          {/* TIPS */}
          <article>
            <h2 className="font-[Raleway] font-semibold text-[22px] text-[#C56441] mb-4">
              Hiking Tips and Highlights
            </h2>
            <ul className="list-disc pl-6 space-y-2 font-['Nunito_Sans'] text-gray-700">
              <li>Route length: 6 miles (return)</li>
              <li>Difficulty: Easy to moderate</li>
              <li>Time: 3–4 hours</li>
              <li>Wear sturdy footwear riverside paths can be muddy</li>
            </ul>
          </article>

          {/* CTA */}
          <div className="bg-[#FFF6EE] rounded-2xl p-6 md:p-8">
            <h3 className="font-[Raleway] font-semibold text-[#C56441] text-[20px] mb-3">
              A Walk Through Time with Hike Yorkshire
            </h3>
            <p className="font-['Nunito_Sans'] text-[16px] leading-[28px] text-gray-700">
              Our guided Bolton Abbey to Barden Tower walk reveals hidden stories most visitors miss.
              Walk with local guides who bring Yorkshire’s monastic past to life.
            </p>
          </div>

        </div>
      </section>

    </main>
  );
}
