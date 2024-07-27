import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);

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

      // Animation for the paragraph
      gsap.from(paragraphRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "top 40%",
          scrub: 1,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-10 px-4 lg:px-[170px]">
      <h2
        ref={headingRef}
        className="text-4xl font-bold mb-8 text-primary text-center">
        About Me
      </h2>
      <p ref={paragraphRef} className="max-w-3xl mx-auto text-xl">
        {`Working as a software developer has been a challenging and exciting
        journey for me. I have learned and developed my skills in creating
        innovative and valuable applications. Collaborating with knowledgeable
        and supportive teams has helped me grow and learn new things constantly.
        What I love most about software development is solving complex problems
        and seeing our work improve people's lives.`}
      </p>
    </section>
  );
}

export default About;
