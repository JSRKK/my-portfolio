import React from "react";
import { gsap } from "gsap";

function Header() {
  function handleScroll(to: string) {
    gsap.to(window, {
      duration: 2,
      scrollTo: { y: to, offsetY: 70 },
      ease: "power3.inOut",
    });
  }

  return (
    <header className="flex justify-between items-center p-[16px_32px] fixed top-0 left-0 right-0 bg-bg-color z-50 bg-black-2">
      <div className="text-2xl font-bold text-primary text-shadow">
        Frontend Developer
      </div>
      <nav>
        {["home", "about", "skills", "projects", "contact"].map((section) => (
          <button
            key={section}
            onClick={() => handleScroll(`#${section}`)}
            className="text-primary hover:text-white hover:text-shadow ml-4 transition duration-300 font-medium">
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </button>
        ))}
      </nav>
    </header>
  );
}

export default Header;
