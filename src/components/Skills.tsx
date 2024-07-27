import React from "react";

const skills = [
  "HTML5 & CSS3",
  "JavaScript & TypeScript",
  "ReactJS & NextJS",
  "TailwindCSS",
  "Git & Version Control",
  "Responsive Web Design",
];

function Skills() {
  return (
    <section id="skills" className="py-10 px-[170px]">
      <h2 className="text-4xl mb-8 text-primary">Skills</h2>
      <div className="flex justify-center flex-wrap gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="w-fit p-[16px] bg-black-1 rounded-lg flex justify-center items-center text-lg text-white transition-all duration-300 hover:bg-primary hover:text-bg-color hover:scale-110 hover:rotate-3">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
