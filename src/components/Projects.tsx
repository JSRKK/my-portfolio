import React from "react";
import Image from "next/image";

const projectsData = [
  {
    title: "MyCloud Fulfillment",
    description:
      "eveloped a comprehensive warehouse management and shipping system for e-commerce businesses in Southeast Asia. This system supports product management from various sales channels such as Lazada, Shopee, and consignment stores.",
    image: "/api/placeholder/300/200",
    stats: {
      spineTingles: "98%",
      userSatisfaction: "4.5*",
    },
  },
  {
    title: "Mareads",
    description:
      "Created a platform for reading novels, comics, and e-books online, with a support system for writers and publishers.",
    image: "/api/placeholder/300/200",
    stats: {
      conversionRate: "85%",
      customerRetention: "92%",
    },
  },
  {
    title: "G-BOOK",
    description:
      "Developed a digital platform to help teachers create intelligent teaching aids, reducing workload and increasing student understanding.",
    image: "/api/placeholder/300/200",
    stats: {
      dataClarity: "96%",
      userEfficiency: "89%",
    },
  },
  {
    title: "AIMS DMS",
    description:
      "Developed an all-in-one document management system for efficient, organized, and secure document handling. This system helps elevate organizational productivity to new heights.",
    image: "/api/placeholder/300/200",
    stats: {
      dataClarity: "96%",
      userEfficiency: "89%",
    },
  },
];

function Projects() {
  return (
    <section id="projects" className="py-10 px-[170px]">
      <h2 className="text-4xl mb-8 text-primary">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="bg-black-1 rounded-lg overflow-hidden transition-all duration-300 hover:translate-y-[-10px] hover:shadow-lg hover:shadow-primary/20">
            <Image
              src={project.image}
              alt={project.title}
              width={300}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-primary">
                {project.title}
              </h3>
              <p className="text-sm mb-4">{project.description}</p>
              <div className="flex justify-between text-xs text-secondary">
                {Object.entries(project.stats).map(([key, value], i) => (
                  <span key={i}>
                    {key}: {value}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
