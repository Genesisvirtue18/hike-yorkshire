import Navbar from "../Components/NavBar/Navbar";



export default function BestCampsitesYorkshireDales() {
  const DavidImg = "/assets/Team/David.webp";

  return (
    <main className="bg-white">
      <Navbar />
     
      {/* HERO */}
      <section className="bg-[#FAF7F3] mt-10 py-16 px-4 md:px-8">
        <div className="max-w-[900px] mx-auto text-center">
          <h1 className="font-[Raleway] font-semibold text-[28px] md:text-[36px] text-[#C56441] leading-tight">
            The 5 Best Campsites in the Yorkshire Dales
          </h1>
          <p className="mt-4 font-['Nunito_Sans'] text-[16px] md:text-[18px] text-gray-700">
            Riverside pitches, wild moorland views, and hiker-friendly campsites in the heart of the Dales.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-14 px-4 md:px-8">
        <div className="max-w-[900px] mx-auto space-y-14">

          {/* INTRO */}
          <p className="font-['Nunito_Sans'] text-[16px] md:text-[18px] leading-[30px] text-gray-700">
            There’s nothing quite like waking to the sound of curlews, the smell of damp grass,
            and sunlight spilling across a Dales valley. Camping in the
            <strong> Yorkshire Dales National Park</strong> brings you closer to nature and
            some of the UK’s most iconic walking routes, including the Dales Way, the Three Peaks,
            and Malham Cove.
            <br /><br />
            Whether you’re hiking solo, travelling with family, or joining a guided adventure,
            these five campsites offer the perfect base to rest, refuel, and reconnect with the landscape.
          </p>

          {/* DAVID TIP */}
          {/* DAVID TIP */}
          <div className="bg-[#FFF6EE] rounded-2xl p-4 md:p-6 flex flex-col md:flex-row gap-4 items-center">

            {/* Image */}
            <div className="flex-shrink-0">
              <img
                src={DavidImg}   // replace with David image
                alt="David"
                className="w-16 h-16 md:w-18 md:h-18 rounded-full object-cover border-2 border-white shadow-sm"
              />
            </div>

            {/* Text */}
            <div className="text-center md:text-left">
              <h3 className="font-[Raleway] font-semibold text-[#C56441] text-[16px] md:text-[17px] mb-1">
                David’s top tip
              </h3>
              <p className="font-['Nunito_Sans'] text-[14px] md:text-[15px] text-gray-700 italic max-w-md leading-relaxed">
                “Always ring ahead. I’ve arrived at campsites after a long day of walking to find
                them at capacity and not taking anyone else in!”
              </p>
            </div>

          </div>


          {/* CAMPSITE 1 */}
          <article>
            <h2 className="font-[Raleway] font-semibold text-[22px] text-[#C56441] mb-2">
              1. Gordale Scar Campsite, Malham
            </h2>
            <p className="text-sm text-gray-600 mb-3">
              <strong>Best for:</strong> Adventurous hikers and nature photographers
            </p>
            <p className="font-['Nunito_Sans'] leading-[30px] text-gray-700">
              Set beneath towering limestone cliffs, Gordale Scar Campsite is one of the most
              atmospheric places to camp in the Dales. Just minutes from Janet’s Foss and
              Malham Cove, it’s a dream base for classic Yorkshire walks.
              <br /><br />
              Facilities are simple fresh water, toilets, and open fields but the dramatic
              scenery makes this wild-style camping at its best.
            </p>
            <p className="mt-2 text-sm text-gray-600">
              Nearby: Malham Tarn, The Lister Arms, Malham village shop<br />
              Tip: Arrive early on summer weekends  it fills fast.
            </p>
          </article>

          {/* CAMPSITE 2 */}
          <article>
            <h2 className="font-[Raleway] font-semibold text-[22px] text-[#C56441] mb-2">
              2. Usha Gap Camping & Caravan Site, Muker (Swaledale)
            </h2>
            <p className="text-sm text-gray-600 mb-3">
              <strong>Best for:</strong> Families and riverside camping
            </p>
            <p className="font-['Nunito_Sans'] leading-[30px] text-gray-700">
              This peaceful, family-run campsite sits beside the River Swale on a working sheep farm.
              Dry-stone walls, hay meadows, and open views make it a classic Dales experience.
              <br /><br />
              Walkers on the Pennine Way and local routes to Keld and Thwaite will find excellent
              facilities including showers, toilets, and a small shop selling local produce.
            </p>
            <p className="mt-2 text-sm text-gray-600">
              Nearby: Muker tea room, Buttertubs Pass, Swaledale Museum<br />
              Tip: Visit in June or July for spectacular wildflower meadows.
            </p>
          </article>

          {/* CAMPSITE 3 */}
          <article>
            <h2 className="font-[Raleway] font-semibold text-[22px] text-[#C56441] mb-2">
              3. Holme Farm Campsite, Horton-in-Ribblesdale
            </h2>
            <p className="text-sm text-gray-600 mb-3">
              <strong>Best for:</strong> Yorkshire Three Peaks walkers
            </p>
            <p className="font-['Nunito_Sans'] leading-[30px] text-gray-700">
              Perfectly placed for tackling Pen-y-ghent, Whernside, and Ingleborough,
              Holme Farm is a favourite with Three Peaks challengers.
              <br /><br />
              The village location means easy access to pubs, cafés, and the train station,
              while the friendly atmosphere makes it ideal for swapping summit stories.
            </p>
            <p className="mt-2 text-sm text-gray-600">
              Nearby: Ribblehead Viaduct, Settle–Carlisle Railway, Pen-y-ghent Café<br />
              Tip: Bring earplugs — it’s lively during peak challenge season.
            </p>
          </article>

          {/* CAMPSITE 4 */}
          <article>
            <h2 className="font-[Raleway] font-semibold text-[22px] text-[#C56441] mb-2">
              4. Wood Nook Caravan & Camping Park, Threshfield
            </h2>
            <p className="text-sm text-gray-600 mb-3">
              <strong>Best for:</strong> Comfort and convenience
            </p>
            <p className="font-['Nunito_Sans'] leading-[30px] text-gray-700">
              Located in Wharfedale near Grassington, Wood Nook blends countryside calm
              with modern comforts. Expect spotless facilities, hot showers, and sweeping views
              across rolling farmland.
              <br /><br />
              Ideal for walkers who want nature by day and cosy pubs by night.
            </p>
            <p className="mt-2 text-sm text-gray-600">
              Nearby: Linton Falls, Grass Wood, Grassington village<br />
              Tip: Book early this is one of the Dales’ most popular sites.
            </p>
          </article>

          {/* CAMPSITE 5 */}
          <article>
            <h2 className="font-[Raleway] font-semibold text-[22px] text-[#C56441] mb-2">
              5. Kettlewell Camping, Upper Wharfedale
            </h2>
            <p className="text-sm text-gray-600 mb-3">
              <strong>Best for:</strong> Walkers and cyclists
            </p>
            <p className="font-['Nunito_Sans'] leading-[30px] text-gray-700">
              One of the most scenic village campsites in the Dales, Kettlewell Camping gives
              access to Great Whernside, Buckden Pike, and long sections of the Dales Way.
              <br /><br />
              With modern showers, fire pits, and excellent pubs nearby, it’s perfect for
              multi-day walkers and guided groups.
            </p>
            <p className="mt-2 text-sm text-gray-600">
              Nearby: Starbotton, Buckden Pike, Upper Wharfedale Heritage Trail<br />
              Tip: Great for group bookings and guided hikes.
            </p>
          </article>

          {/* FINAL */}
          <div className="border-t pt-8">
            <p className="font-['Nunito_Sans'] text-[16px] leading-[30px] text-gray-700">
              From riverside meadows to dramatic limestone valleys, camping in the Yorkshire Dales
              offers something for every kind of outdoor adventurer.
              <br /><br />
              At Hike Yorkshire, our guides know these valleys inside out and can help you plan
              the perfect walking and camping experience.
              <br /><br />
              👉 Ready to start your Dales adventure? Join a guided trek or contact us to plan
              your custom route.
            </p>
          </div>

        </div>
      </section>

    </main>
  );
}
