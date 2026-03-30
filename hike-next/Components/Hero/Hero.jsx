"use client"
import { useRouter } from "next/navigation";


export default function Hero() {
      const router = useRouter();

  return (
    
    <div>
      {/* Hero Banner */}
      <div
        className="relative h-[60vh] md:h-[90vh]  flex items-start justify-center bg-cover bg-top"
        style={{ backgroundImage: "url(/assets/Hero/hero-image.webp)" }}
      >
        <div className="absolute inset-0 bg-black/10"></div>

     <div
  className="
    relative z-10 text-center text-white px-6
    flex flex-col items-center
    pt-25 sm:pt-30 md:pt-30 lg:pt-25
  "
>
  <p  className="font-[Raleway] font-bold text-2xl sm:text-3xl md:text-5xl lg:text-6xl leading-tight mb-1">
    Tradition On Every Trail
  </p>

  <p
    className="
      font-['Nunito_Sans']
      text-sm sm:text-base md:text-lg lg:text-2xl
      leading-snug max-w-[600px]
      mb-3
    "
  >
    Small Groups. Sustainable  Tours. Ex-military guides.
  </p>

  <button
onClick={() => router.push("/hikes")}
    className="mt-5 px-6 py-3 font-['Nunito_Sans'] font-semibold text-sm md:text-base
      bg-gradient-to-r from-[#C56441] to-[#F98B64] text-white rounded-full
      transition-all duration-300 hover:opacity-95 hover:scale-105 shadow-md"
  >
    Explore Now
  </button>
</div>

      </div>

    </div>
  );
}
