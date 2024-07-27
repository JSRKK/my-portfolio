import React from "react";
import { Mail, Linkedin, Github } from "lucide-react";

function Contact() {
  return (
    <section id="contact" className="py-10 px-[170px]">
      <h2 className="text-4xl font-bold mb-8 text-primary text-center">
        Contact
      </h2>
      <div className="flex justify-center items-center space-x-8">
        <a
          href="mailto:seera.kaenkaew8@gmail.com"
          className="flex items-center gap-2 text-primary hover:text-white transition duration-300 hover:scale-110 hover:rotate-3">
          <Mail size={24} />
          <span>Email</span>
        </a>
        <a
          href="https://www.linkedin.com/in/seera-kaenkaew-7735481a2"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-primary hover:text-white transition duration-300 hover:scale-110 hover:rotate-3">
          <Linkedin size={24} />
          <span>LinkedIn</span>
        </a>
        <a
          href="https://github.com/JSRKK"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-primary hover:text-white transition duration-300 hover:scale-110 hover:rotate-3">
          <Github size={24} />
          <span>GitHub</span>
        </a>
      </div>
    </section>
  );
}

export default Contact;
