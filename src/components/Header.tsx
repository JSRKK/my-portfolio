import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { MenuIcon, XIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const sections = ["home", "about", "skills", "projects", "contact"];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const menuItemsRef = useRef<HTMLButtonElement[]>([]);

  useEffect(() => {
    if (isMenuOpen) {
      // Animate menu background
      gsap.to(menuRef.current, {
        duration: 0.5,
        opacity: 1,
        ease: "power3.out",
      });

      // Animate menu items
      gsap.fromTo(
        menuItemsRef.current,
        {
          x: 50,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.5,
          ease: "power3.out",
        }
      );
    } else {
      // Animate menu closing
      gsap.to(menuRef.current, {
        duration: 0.5,
        opacity: 0,
        ease: "power3.in",
      });
    }
  }, [isMenuOpen]);

  function handleScroll(to: string) {
    gsap.to(window, {
      duration: 2,
      scrollTo: { y: to, offsetY: 70 },
      ease: "power3.inOut",
    });
    setIsMenuOpen(false);
  }

  return (
    <header className="flex justify-between items-center p-4 md:p-[16px_32px] fixed top-0 left-0 right-0 bg-bg-color z-50 bg-black-2">
      <div className="text-xl md:text-2xl font-bold text-primary text-shadow">
        Frontend Developer
      </div>
      <nav className="hidden md:block">
        {sections.map((section) => (
          <button
            key={section}
            onClick={() => handleScroll(`#${section}`)}
            className="text-primary hover:text-white hover:text-shadow ml-4 transition duration-300 font-medium">
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </button>
        ))}
      </nav>
      <div className="md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-primary">
          <MenuIcon />
        </button>
      </div>
      <div
        ref={menuRef}
        className={cn("fixed inset-0 bg-black-2 z-40 md:hidden", {
          hidden: !isMenuOpen,
        })}>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="absolute top-4 right-4 text-primary z-50">
          <XIcon />
        </button>
        <div className="flex flex-col items-center justify-center w-full h-full gap-y-2">
          {sections.map((section, index) => (
            <button
              key={section}
              ref={(el) => {
                if (el) {
                  menuItemsRef.current[index] = el;
                }
              }}
              onClick={() => handleScroll(`#${section}`)}
              className="text-primary hover:text-white hover:text-shadow my-2 text-xl transition duration-300 font-medium translate-x-[50px]">
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Header;
