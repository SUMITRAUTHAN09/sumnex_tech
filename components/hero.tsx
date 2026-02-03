"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Hero() {
  const [currentWord, setCurrentWord] = useState(0);
  const [currentPhoto, setCurrentPhoto] = useState(0);

  const devWords = [
    "Web Experiences",
    "Scalable Apps",
    "Modern UI",
    "Clean Code",
    "Fast Websites",
    "Secure Systems",
    "Creative Solutions",
    "Digital Products",
  ];

  const photos = [
    { id: 1, label: "Web Development", src: "/image1.jpg" },
    { id: 2, label: "UI Design", src: "/image2.jpg" },
    { id: 3, label: "Coding Workspace", src: "/image3.jpg" },
  ];

  /* Word animation */
  useEffect(() => {
    const wordInterval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % devWords.length);
    }, 3000);
    return () => clearInterval(wordInterval);
  }, []);

  /* Photo animation */
  useEffect(() => {
    const photoInterval = setInterval(() => {
      setCurrentPhoto((prev) => (prev + 1) % photos.length);
    }, 4000);
    return () => clearInterval(photoInterval);
  }, []);

  return (
    <section
      id="home"
      className="w-full flex justify-center items-start lg:items-center mt-6 px-4"
    >
      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-10 gap-4 lg:aspect-[16/9]">
        {/* LEFT SECTION */}
        <div className="lg:col-span-7 bg-white rounded-2xl shadow-lg flex items-center p-6 sm:p-10 lg:p-16 shadow-lg shadow-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-4">
              We Build
            </h1>

            {/* Animated Developer Words */}
            <div className="h-16 sm:h-20 lg:h-24 mb-6 relative overflow-hidden">
              {devWords.map((word, index) => (
                <h2
                  key={index}
                  className={`absolute top-0 left-0 text-3xl sm:text-4xl lg:text-6xl font-bold text-blue-700 transition-all duration-1000 ease-in-out 
                    ${
                      currentWord === index
                        ? "opacity-100 translate-y-0"
                        : index < currentWord
                          ? "opacity-0 -translate-y-full"
                          : "opacity-0 translate-y-full"
                    }
                  `}
                >
                  {word}
                </h2>
              ))}
            </div>

            <p className="text-base sm:text-lg lg:text-xl text-gray-700 mb-6 leading-relaxed">
              We are a skilled web development team focused on delivering fast,
              scalable, and user-centric websites and applications using modern
              technologies. From concept to deployment, we work closely with
              clients to transform ideas into reliable, high-impact digital
              solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => {
                  document.getElementById("contact")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
                className="px-6 py-3 bg-black text-white hover:text-black rounded-full font-semibold hover:bg-white transition shadow-lg shadow-black cursor-pointer"
              >
                Connect With Us
              </button>
              <button className="px-6 py-3 border-black rounded-full font-semibold hover:bg-black transition text-black hover:text-white shadow-lg shadow-black cursor-pointer">
                <Link href="/about"> View Portfolio</Link>
              </button>
            </div>

            {/* Stats */}
            <div className="mt-8 flex gap-8">
              <div>
                <p className="text-2xl font-bold text-blue-700">5+</p>
                <p className="text-xs text-gray-600">Projects Completed</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-blue-700">1+</p>
                <p className="text-xs text-gray-600">Years Experience</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-blue-700">100%</p>
                <p className="text-xs text-gray-600">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SECTION – IMAGE SLIDER */}
        <div className="lg:col-span-3 bg-black rounded-2xl shadow-lg relative overflow-hidden min-h-[350px] shadow-lg shadow-white">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black" />

          <div className="relative h-full w-full">
            {photos.map((photo, index) => (
              <div
                key={photo.id}
                className={`
                  absolute inset-0
                  transition-all duration-1000 ease-in-out
                  ${
                    currentPhoto === index
                      ? "opacity-100 scale-100 z-10"
                      : "opacity-0 scale-95 z-0"
                  }
                `}
              >
                <div className="relative w-full h-full overflow-hidden rounded-2xl">
                  <Image
                    src={photo.src}
                    alt={photo.label}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {photos.map((_, index) => (
              <div
                key={index}
                className={`h-2 rounded-full transition-all ${
                  currentPhoto === index ? "w-6 bg-white" : "w-2 bg-white/40"
                }`}
              />
            ))}
          </div>

          {/* Decorative blur */}
          <div className="absolute top-6 right-6 w-20 h-20 bg-white/5 rounded-full blur-2xl" />
          <div className="absolute bottom-10 left-6 w-24 h-24 bg-white/5 rounded-full blur-3xl" />
        </div>
      </div>
    </section>
  );
}
