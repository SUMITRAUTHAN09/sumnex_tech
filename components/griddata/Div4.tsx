import Slider from "../BgImageSlider";

export default function Div4() {
  return (
    <div className="relative h-full w-full min-h-[300px] p-2 sm:p-3 md:p-4 lg:p-6 flex flex-col justify-center overflow-hidden rounded-lg shadow-2xl shadow-yellow-400">

      {/* BACKGROUND SLIDER */}
      <Slider startIndex={3}  delay={4000}/>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/80 z-[1]" />

      {/* CONTENT */}
      <div className="relative z-10 text-white">
        <h2 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-semibold mb-1 sm:mb-2 md:mb-3">
          Experience
        </h2>

        <p className="text-[10px] sm:text-xs md:text-sm leading-relaxed">
          A skilled team of developers and designers with 1+ years of experience
          delivering high-quality web applications, scalable platforms, and
          business-focused digital solutions using modern technologies.
        </p>
      </div>

    </div>
  );
}
