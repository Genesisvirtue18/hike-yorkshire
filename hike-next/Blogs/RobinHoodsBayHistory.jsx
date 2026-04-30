import Navbar from "../Components/Navbar/Navbar";


export default function RobinHoodsBayHistory() {
  return (
    <main className="bg-white">

        <Navbar />

      <section className="bg-[#FAF7F3] mt-10 py-16 px-4 md:px-8">
        <div className="max-w-[900px] mx-auto text-center">
          <h1 className="font-[Raleway] font-semibold text-[28px] md:text-[36px] text-[#C56441]">
            Robin Hood’s Bay: Yorkshire Smuggling Haven
          </h1>
        </div>
      </section>

      <section className="py-14 px-4 md:px-8">
        <div className="max-w-[900px] mx-auto space-y-14">

          <p className="font-['Nunito_Sans'] text-[16px] md:text-[18px] leading-[30px] text-gray-700">
            Tucked between steep cliffs on the North Yorkshire coast, Robin Hood’s Bay is a
            village shaped by salt, sea, and secrecy.
            <br /><br />
            Once a centre of smuggling, its narrow streets and hidden tunnels allowed contraband
            to flow unseen from ship to hearth.
          </p>

          <article>
            <h2 className="font-[Raleway] font-semibold text-[22px] text-[#C56441] mb-4">
              Smugglers and Secret Tunnels
            </h2>
            <p className="font-['Nunito_Sans'] leading-[30px] text-gray-700">
              In the 18th century, entire households took part in the “Free Trade.”
              Passageways beneath cottages connected the shore to cellars and inns,
              evading excise officers with ease.
            </p>
          </article>

          <article>
            <h2 className="font-[Raleway] font-semibold text-[22px] text-[#C56441] mb-4">
              The Walk: Whitby to Robin Hood’s Bay
            </h2>
            <p className="font-['Nunito_Sans'] leading-[30px] text-gray-700">
              This stunning coastal walk follows the Cleveland Way, offering sea views,
              seabirds, and wildflower meadows before descending into the historic harbour.
            </p>
          </article>

          <article>
            <h2 className="font-[Raleway] font-semibold text-[22px] text-[#C56441] mb-4">
              A Village of Stories
            </h2>
            <p className="font-['Nunito_Sans'] leading-[30px] text-gray-700">
              From shipwrecks to smuggling legends, Robin Hood’s Bay is a living museum where
              every alleyway tells a tale of survival and ingenuity.
            </p>
          </article>

        </div>
      </section>

    </main>
  );
}
