import Slider from "../BgImageSlider";

export default function Div2() {
  return (
    <div className="relative h-full w-full min-h-[300px] p-2 sm:p-3 md:p-4 lg:p-6 flex flex-col justify-between overflow-hidden rounded-lg shadow-2xl shadow-purple-400">

      {/* BACKGROUND SLIDER */}
      <Slider startIndex={1}  delay={4500}/>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/60 z-[1]" />

      {/* CONTENT */}
      <div className="relative z-10 text-white">
        <h2 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-semibold mb-1 sm:mb-2 md:mb-3 lg:mb-4">
          Client Testimonials
        </h2>

        <p className="text-[10px] sm:text-xs md:text-sm italic mb-1 sm:mb-2">
          "SUMNEX TECH delivered a fast, scalable website that exceeded our
          expectations. The team was professional, responsive, and highly
          skilled."
        </p>

        <p className="text-[10px] sm:text-xs md:text-sm">
          — Mayank, Startup Founders
        </p>
      </div>
    </div>
  );
}
