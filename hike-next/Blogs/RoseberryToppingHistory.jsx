import Navbar from "../Components/NavBar/Navbar";


export default function RoseberryToppingHistory() {
  return (
    <main className="bg-white">

        <Navbar />
       
      <section className="bg-[#FAF7F3] mt-10 py-16 px-4 md:px-8">
        <div className="max-w-[900px] mx-auto text-center">
          <h1 className="font-[Raleway] font-semibold text-[28px] md:text-[36px] text-[#C56441]">
            Roseberry Topping: Yorkshire’s Matterhorn
          </h1>
        </div>
      </section>

      <section className="py-14 px-4 md:px-8">
        <div className="max-w-[900px] mx-auto space-y-14">

          <p className="font-['Nunito_Sans'] text-[16px] md:text-[18px] leading-[30px] text-gray-700">
            Rising above the North York Moors, Roseberry Topping’s sharp profile has earned it
            the nickname “Yorkshire’s Matterhorn.”
            <br /><br />
            But this iconic hill is more than a viewpoint it’s a meeting place of Viking
            folklore, ancient geology, and maritime history.
          </p>

          <article>
            <h2 className="font-[Raleway] font-semibold text-[22px] text-[#C56441] mb-4">
              Viking Roots: Odin’s Hill
            </h2>
            <p className="font-['Nunito_Sans'] leading-[30px] text-gray-700">
              Once known as Othenesberg Odin’s Hill Roseberry Topping may have been a site
              of Viking ritual. Norse settlers honoured Odin here, drawn by its commanding view
              of land and sea.
            </p>
          </article>

          <article>
            <h2 className="font-[Raleway] font-semibold text-[22px] text-[#C56441] mb-4">
              Geology and Industry
            </h2>
            <p className="font-['Nunito_Sans'] leading-[30px] text-gray-700">
              Formed from Jurassic sandstone and shale, Roseberry’s distinctive shape was
              altered by ironstone mining in the early 20th century, leaving its famous
              asymmetrical summit.
            </p>
          </article>

          <article>
            <h2 className="font-[Raleway] font-semibold text-[22px] text-[#C56441] mb-4">
              Captain Cook’s Monument
            </h2>
            <p className="font-['Nunito_Sans'] leading-[30px] text-gray-700">
              Nearby stands the Captain Cook Monument, honouring the explorer who grew up
              beneath Roseberry’s slopes a fitting tribute to Yorkshire’s spirit of adventure.
            </p>
          </article>

        </div>
      </section>

    </main>
  );
}
