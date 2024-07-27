import React from "react";

function Contact() {
  return (
    <section id="contact" className="py-10 px-[170px]">
      <h2 className="text-4xl mb-4 text-primary">Contact Information</h2>
      <ul className="list-disc list-inside">
        <li className="flex items-center gap-x-1">
          <p>Email:</p>
          <a href="mailto:seera.kaenkaew8@gmail.com">
            <span className="text-primary">seera.kaenkaew8@gmail.com</span>
          </a>
        </li>
        <li className="flex items-center gap-x-1">
          <p>LinkedIn:</p>
          <a href="https://linkedin.com/in/seeradeveloper" target="_blank">
            <span className="text-primary">linkedin.com/in/seeradeveloper</span>
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Contact;
