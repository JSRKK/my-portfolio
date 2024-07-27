import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  "HTML5 & CSS3",
  "JavaScript & TypeScript",
  "ReactJS & NextJS",
  "TailwindCSS",
  "Git & Version Control",
  "Responsive Web Design",
];

function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const skillRefs = useRef<(HTMLDivElement | null)[]>([]);

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

      // Animation for the skills
      skillRefs.current.forEach((skill, index) => {
        gsap.set(skill, {
          opacity: 0,
          scale: 0.5,
          rotation: gsap.utils.random(-20, 20),
        });

        gsap.to(skill, {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "bottom 70%",
            scrub: 1,
          },
          ease: "elastic.out(1, 0.5)",
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="py-10 px-4 lg:px-[170px]">
      <h2
        ref={headingRef}
        className="text-4xl font-bold mb-8 text-primary text-center">
        Skills
      </h2>
      <div className="flex justify-center flex-wrap gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            ref={(el) => {
              if (el) {
                skillRefs.current[index] = el;
              }
            }}
            className="w-fit p-[8px_16px] bg-black-1 rounded-lg flex justify-center items-center text-lg text-white hover:bg-primary hover:text-bg-color">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
