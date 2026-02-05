import { CONSTANTS } from "@/app/constant";
import SumnexTechMarquee from "./SumnexTechMarquee";

export default function About() {
  return (
    <section className="w-full h-full flex flex-col justify-center items-center md:mt-20 mt-10">
      <strong>
        <h1 className="text-5xl">About us </h1>
      </strong>
      <div className="flex items-center justify-center gap-2 max-w-7xl md:mt-20 mt-10">
        <p className="mx-4 my-5 md:my-10 md:max-w-7xl text-justify leading-relaxed text-base md:text-lg text-white">
          {CONSTANTS.ABOUT}
        </p>
      </div>
      <SumnexTechMarquee/>
      <strong>
        <h1 className="text-5xl md:mt-10">Our Team </h1>
      </strong>
      <div className="max-w-7xl md:grid grid-cols-2 gap-4 md:m-10 m-2">
        {/* fronted developer div*/}
        <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl hover:shadow-white transition mb-10 flex items-center justify-center">
          <div className="mr-20">
             <h3 className="md:text-4xl font-semibold mb-2 text-gray-800">
              <strong>Sumit Rauthan</strong>
            </h3>
            <h3 className="md:text-xl font-semibold mb-2 text-gray-800">
              <strong> Frontend Developer</strong>
            </h3>
            <p className="text-gray-600 mb-4 md:text-xl text-xs">
              Responsible for creating modern, responsive, and user-friendly
              interfaces that deliver a seamless user experience.
            </p>

            <ul className="text-sm text-gray-700 space-y-1 text-xs">
              <li>• HTML, CSS, JavaScript</li>
              <li>• React.js & Next.js</li>
              <li>• Tailwind CSS</li>
              <li>• Responsive & Mobile-First Design</li>
              <li>• UI/UX Implementation</li>
            </ul>
            <strong>
              <p className="text-xs text-gray-700 mt-4">
                Graduate – Graphic Era Hill University, Dehradun
              </p>
            </strong>
          </div>
          </div>

        {/* backend developer div */}
        <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl hover:shadow-white transition mb-10 flex items-center justify-center">          
          <div>
            <h3 className="md:text-4xl font-semibold mb-2 text-gray-800">
            <strong>Nimish Agarwal</strong>
          </h3>
          <h3 className="md:text-xl font-semibold mb-2 text-gray-800">
            <strong> Backend Developer</strong>
          </h3>
          <p className="text-gray-600 mb-4 md:text-xl text-xs">
            Handles server-side logic, databases, and application security to
            ensure smooth and scalable system performance.
          </p>

          <ul className="text-sm text-gray-700 space-y-1 text-xs">
            <li>• Node.js & Express.js</li>
            <li>• REST API Development</li>
            <li>• Database Management (MongoDB / SQL)</li>
            <li>• Authentication & Authorization</li>
            <li>• Performance & Security Optimization</li>
          </ul>
          <strong>
            <p className="text-xs text-gray-700 mt-4">
              Graduate – Graphic Era Hill University, Dehradun
            </p>
          </strong>
          </div>
        </div>
      </div>
    </section>
  );
}
