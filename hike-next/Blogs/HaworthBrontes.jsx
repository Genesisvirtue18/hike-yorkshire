import Navbar from "../Components/Navbar/Navbar";


export default function HaworthBrontes() {
  return (
    <main className="bg-white">

        <Navbar />
       

      {/* HERO */}
      <section className="bg-[#FAF7F3] mt-10 py-16 px-4 md:px-8">
        <div className="max-w-[900px] mx-auto text-center">
          <h1 className="font-[Raleway] font-semibold text-[28px] md:text-[36px] text-[#C56441] leading-tight">
            Haworth’s Literary Landscapes: Walking in the Footsteps of the Brontës
          </h1>
          <p className="mt-4 font-['Nunito_Sans'] text-[16px] md:text-[18px] text-gray-700">
            Follow the paths that inspired some of the world’s most powerful novels.
          </p>
        </div>
      </section>

      <section className="py-14 px-4 md:px-8">
        <div className="max-w-[900px] mx-auto space-y-14">

          {/* INTRO */}
          <p className="font-['Nunito_Sans'] text-[16px] md:text-[18px] leading-[30px] text-gray-700">
            Few places capture the imagination quite like Haworth. Perched on the edge of the
            Yorkshire moors, this windswept village is forever entwined with the lives and works
            of the Brontë sisters.
            <br /><br />
            A Haworth Brontë walk is more than a scenic hike it is a journey through the
            emotional landscapes of <em>Wuthering Heights</em>, <em>Jane Eyre</em>, and
            <em>The Tenant of Wildfell Hall</em>.
          </p>

          {/* VILLAGE */}
          <article>
            <h2 className="font-[Raleway] font-semibold text-[22px] text-[#C56441] mb-4">
              The Village of Haworth
            </h2>
            <p className="font-['Nunito_Sans'] leading-[30px] text-gray-700">
              Begin on Haworth’s steep cobbled main street, where the Brontë Parsonage still
              stands. Once their family home, it now houses manuscripts, letters, and personal
              belongings that reveal the sisters’ remarkable creativity.
              <br /><br />
              As you climb out of the village toward the moor, it’s easy to imagine Emily
              Brontë striding through the heather, finding solitude and inspiration in the wind.
            </p>
          </article>

          {/* MOORS */}
          <article>
            <h2 className="font-[Raleway] font-semibold text-[22px] text-[#C56441] mb-4">
              Across the Moors: Wuthering Heights
            </h2>
            <p className="font-['Nunito_Sans'] leading-[30px] text-gray-700">
              West of Haworth lie the wild moors of Brontë Country. The walk to Top Withens,
              believed to have inspired the Earnshaw home, crosses open heather, streams,
              and stone bridges.
              <br /><br />
              On misty days, the landscape feels hauntingly alive the same raw beauty that
              shaped Emily’s most powerful writing.
            </p>
          </article>

          {/* DETAILS */}
          <article>
            <h2 className="font-[Raleway] font-semibold text-[22px] text-[#C56441] mb-4">
              Walk Details & Highlights
            </h2>
            <ul className="list-disc pl-6 space-y-2 font-['Nunito_Sans'] text-gray-700">
              <li>Distance: 7 miles (11km) return</li>
              <li>Difficulty: Moderate</li>
              <li>Time: 3–4 hours</li>
              <li>Highlights: Top Withens, Brontë Waterfall, Haworth village</li>
            </ul>
          </article>

          {/* CTA */}
          <div className="bg-[#FFF6EE] rounded-2xl p-6 md:p-8">
            <h3 className="font-[Raleway] font-semibold text-[#C56441] text-[20px] mb-3">
              Experience Brontë Country with Hike Yorkshire
            </h3>
            <p className="font-['Nunito_Sans'] text-[16px] leading-[28px] text-gray-700">
              Our guided Haworth Brontë walk blends literature, history, and landscape into
              an unforgettable experience through one of the UK’s most inspiring settings.
            </p>
          </div>

        </div>
      </section>

    </main>
  );
}
