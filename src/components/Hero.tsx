import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate h1
      gsap.from(h1Ref.current, {
        scale: 1.5,
        opacity: 0,
        duration: 1.5,
        ease: "power4.out",
        delay: 0.3,
      });

      // Animate image
      gsap.from(imageRef.current, {
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out",
        delay: 0.8,
      });

      // Scroll-based animations
      gsap.to([h1Ref.current], {
        top: -300,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
      gsap.to([imageRef.current], {
        height: "1000px",
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="flex flex-col justify-center items-center text-center h-screen overflow-hidden relative">
      <h1
        ref={h1Ref}
        className="absolute top-1/2 -translate-y-1/2 text-secondary text-[250px] font-medium leading-[300px]">
        Frontend Developer
      </h1>
      <div
        ref={imageRef}
        className="absolute -bottom-[40px] w-[768px] h-[668px]">
        <Image
          className="object-cover object-top pointer-events-none"
          src="/images/mr-bone.png"
          alt="Mr bone"
          fill
          sizes="100vh"
          quality={100}
          priority
        />
      </div>
    </section>
  );
}

export default Hero;
