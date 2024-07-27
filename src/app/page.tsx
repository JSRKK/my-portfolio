"use client";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  return (
    <div className="w-full h-full">
      <Header />
      <main className="max-w-[1366px] mx-auto">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="text-center py-8 mt-16 bg-accent-color">
        <p>&copy; 2024 Mr. Bone Designs. All rights reserved.</p>
        <p>Bringing structure to the digital world since 2010</p>
      </footer>
    </div>
  );
}
