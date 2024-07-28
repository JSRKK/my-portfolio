import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { getAssetPrefix } from "@/lib/utils";

const projectsData = [
  {
    title: "MyCloud Fulfillment",
    description:
      "eveloped a comprehensive warehouse management and shipping system for e-commerce businesses in Southeast Asia. This system supports product management from various sales channels such as Lazada, Shopee, and consignment stores.",
    image: "/images/mycloud.jpeg",
    stats: {
      spineTingles: "98%",
      userSatisfaction: "4.5*",
    },
  },
  {
    title: "Mareads",
    description:
      "Created a platform for reading novels, comics, and e-books online, with a support system for writers and publishers.",
    image: "/images/mareads.jpg",
    stats: {
      conversionRate: "85%",
      customerRetention: "92%",
    },
  },
  {
    title: "G-BOOK",
    description:
      "Developed a digital platform to help teachers create intelligent teaching aids, reducing workload and increasing student understanding.",
    image: "/images/gbook.jpg",
    stats: {
      dataClarity: "96%",
      userEfficiency: "89%",
    },
  },
  {
    title: "AIMS DMS",
    description:
      "Developed an all-in-one document management system for efficient, organized, and secure document handling. This system helps elevate organizational productivity to new heights.",
    image: "/images/aims_dms.jpg",
    stats: {
      dataClarity: "96%",
      userEfficiency: "89%",
    },
  },
];

function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animation for the heading
      gsap.from(headingRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 50%",
          scrub: 1,
        },
      });

      // Animation for the projects
      projectRefs.current.forEach((project, index) => {
        gsap.from(project, {
          opacity: 0,
          y: 100,
          duration: 1,
          scrollTrigger: {
            trigger: project,
            start: "top 90%",
            end: "top 60%",
            scrub: 1,
          },
          delay: index * 0.2, // Stagger effect
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-10 px-4 lg:px-[170px]">
      <h2
        ref={headingRef}
        className="text-4xl font-bold mb-8 text-primary text-center">
        Featured Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectsData.map((project, index) => (
          <div
            key={index}
            ref={(el) => {
              if (el) {
                projectRefs.current[index] = el;
              }
            }}
            className="bg-black-1 rounded-lg overflow-hidden hover:shadow-lg hover:shadow-primary/10">
            <Image
              className="w-full h-48 object-cover"
              src={getAssetPrefix(project.image)}
              alt={project.title}
              width={300}
              height={200}
              quality={100}
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-primary">
                {project.title}
              </h3>
              <p className="text-sm">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
