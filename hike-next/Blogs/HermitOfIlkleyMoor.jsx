import Navbar from "../Components/NavBar/Navbar";


export default function HermitOfIlkleyMoor() {
  return (
    <main className="bg-white">

    <Navbar />
   
      {/* HERO */}
      <section className="bg-[#FAF7F3] mt-10 py-16 px-4 md:px-8">
        <div className="max-w-[900px] mx-auto text-center">
          <h1 className="font-[Raleway] font-semibold text-[28px] md:text-[36px] text-[#C56441] leading-tight">
            The Hermit of Ilkley Moor Job Senior
          </h1>
          <p className="mt-4 font-['Nunito_Sans'] text-[16px] md:text-[18px] text-gray-700">
            Discover the story of Ilkley Moor’s most famous recluse and the legend that lives on today.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-14 px-4 md:px-8">
        <div className="max-w-[900px] mx-auto space-y-14">

          {/* INTRO */}
          <p className="font-['Nunito_Sans'] text-[16px] md:text-[18px] leading-[30px] text-gray-700">
            High above the spa town of Ilkley lies Ilkley Moor a wild, windswept landscape
            steeped in myth, folklore, and history. Among its most enduring stories is that
            of <strong>Job Senior</strong>, better known as the Hermit of Ilkley Moor.
            <br /><br />
            In the mid-1700s, Job Senior retreated from society to live a solitary life on
            the edge of the moor near what is now White Wells Spa Cottage. Locally, he became
            known simply as “the Hermit” a man of quiet faith, simple habits, and gentle
            eccentricity.
          </p>

          {/* SECTION */}
          <article className="space-y-10">

            {/* LIFE ON THE MOOR */}
            <div>
              <h2 className="font-[Raleway] font-semibold text-[22px] text-[#C56441] mb-4">
                The Mysterious Hermit of Ilkley Moor
              </h2>
              <p className="font-['Nunito_Sans'] leading-[30px] text-gray-700">
                While little is known about Job Senior’s early life, it is believed he chose
                isolation to pursue reflection, self-sufficiency, and spiritual calm.
                <br /><br />
                Living in a small stone cottage, he tended a modest garden, drew water from
                a nearby spring, and welcomed the occasional visitor who made the steep climb
                onto the moor. To locals, he became a familiar and comforting presence
                in an otherwise harsh landscape.
              </p>
            </div>

            {/* WHITE WELLS */}
            <div>
              <h2 className="font-[Raleway] font-semibold text-[22px] text-[#C56441] mb-4">
                The Hermit’s Spring: White Wells
              </h2>
              <p className="font-['Nunito_Sans'] leading-[30px] text-gray-700">
                White Wells, above Ilkley, was developed in the 18th century as a cold-water spa.
                Visitors climbed the moor seeking health, purity, and fresh air and many
                encountered the kindly Hermit himself.
                <br /><br />
                Job Senior is said to have cared for the bath house and guided visitors to the
                spring. Over time, people made the journey as much to meet the Hermit as to
                take the waters, and stories of his warmth and wisdom spread throughout Wharfedale.
              </p>
            </div>

            {/* HERMIT INN */}
            <div>
              <h2 className="font-[Raleway] font-semibold text-[22px] text-[#C56441] mb-4">
                The Hermit Inn: A Pub with a Story
              </h2>
              <p className="font-['Nunito_Sans'] leading-[30px] text-gray-700">
                At the foot of the moor in Burley Woodhead stands a traditional Yorkshire pub
                with a curious name <strong>The Hermit Inn</strong>.
                <br /><br />
                Named in honour of Job Senior, the inn has welcomed walkers and locals since
                the early 19th century. Inside, rustic beams and stone walls echo the rugged
                landscape above, and tales of the Hermit are often shared over a pint.
                <br /><br />
                For many visitors, it’s the perfect stop before or after exploring White Wells,
                Cow and Calf Rocks, or the wider Ilkley Moor trails.
              </p>
            </div>

            {/* LEGACY */}
            <div>
              <h2 className="font-[Raleway] font-semibold text-[22px] text-[#C56441] mb-4">
                The Hermit’s Legacy
              </h2>
              <p className="font-['Nunito_Sans'] leading-[30px] text-gray-700">
                Job Senior passed away in the late 1700s, but his story remains woven into
                Ilkley’s identity  part history, part folklore.
                <br /><br />
                Today, hikers climbing to White Wells can still see a plaque commemorating
                the Hermit of Ilkley Moor. The sweeping views across Wharfedale remain much
                the same as those Job Senior would have known centuries ago.
              </p>
            </div>

          </article>

          {/* CTA */}
          <div className="bg-[#FFF6EE] rounded-2xl p-6 md:p-8">
            <h3 className="font-[Raleway] font-semibold text-[#C56441] text-[20px] mb-3">
              Visit Ilkley Moor with Hike Yorkshire
            </h3>
            <p className="font-['Nunito_Sans'] text-[16px] leading-[28px] text-gray-700">
              Our <strong>Ilkley Moor: History and Folklore Tour</strong> brings these stories to life.
              Visit White Wells, the Cow and Calf Rocks, and hear tales of Job Senior,
              Ilkley Moor Bah’t At, and other legends of the moor.
              <br /><br />
              End the walk with a well-earned pint at The Hermit Inn  raising a glass to the
              man whose solitude shaped Ilkley’s folklore.
            </p>

          
          </div>

        </div>
      </section>

    </main>
  );
}
