import { projects } from "@/data/projects";
import Image from "next/image";

export default function Projects() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center mb-12 text-white">
        Our Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-2xl  hover:shadow-2xl transition overflow-hidden shadow shadow-xl shadow-blue-300"
          >
            {/* Project Image */}
            <div className="relative w-full h-48">
              <Image
                src={project.image}
                alt={project.name}
                fill
                className="object-cover"
              />
            </div>

            {/* Project Content */}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {project.name}
              </h3>

              <p className="text-gray-600 text-sm mb-4">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Team */}
              <p className="text-xs text-gray-500">
                Team: {project.team.join(", ")}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
