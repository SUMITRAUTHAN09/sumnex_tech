import Slider from "../BgImageSlider";

export default function Div5() {
  return (
    <div className="relative h-full w-full min-h-[300px] p-2 sm:p-3 md:p-4 lg:p-6 flex flex-col justify-center overflow-hidden rounded-lg shadow-2xl shadow-blue-400">
    
          {/* BACKGROUND SLIDER */}
          <Slider startIndex={2}  delay={3000}/>
    
          {/* DARK OVERLAY */}
          <div className="absolute inset-0 bg-black/60 z-[1]" />
    
          {/* CONTENT */}
          <div className="relative z-10 text-white">
            <h2 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-2xl font-semibold mb-1 sm:mb-2 md:mb-3 lg:mb-4">
              Our Development Philosophy
            </h2>
    
            <p className="text-[10px] sm:text-xs md:text-sm leading-relaxed">
              We believe great digital products are built with clarity, performance,
              and purpose. Our approach combines clean architecture, modern
              technologies, and user-focused design to deliver scalable and reliable
              solutions that drive real business value.
            </p>
          </div>
    
        </div>
  );
}
