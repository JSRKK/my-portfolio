import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

function Hello() {
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
    <section ref={sectionRef} id="about" className="pt-20 pb-10 px-[170px]">
      <h2
        ref={headingRef}
        className="text-4xl font-bold mb-4 text-center text-primary">
        {`Hi! I'm Jay`}
      </h2>
      <p ref={paragraphRef} className="max-w-3xl mx-auto text-xl">
        {`I am a passionate software developer specializing in web application development. With over 5 years of experience in the industry, I am dedicated to building powerful and user-friendly applications that positively impact people's lives.`}
      </p>
    </section>
  );
}

export default Hello;
