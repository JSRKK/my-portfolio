import Link from "next/link";

function Header() {
  return (
    <header className="flex justify-between items-center p-[16px_32px]">
      <div className="text-3xl font-bold text-primary text-shadow">MR. Jay</div>
      <nav>
        <Link
          href="#home"
          className="text-primary hover:text-white hover:text-shadow ml-4 transition duration-300">
          Home
        </Link>
        <Link
          href="#about"
          className="text-primary hover:text-white hover:text-shadow ml-4 transition duration-300">
          About
        </Link>
        <Link
          href="#skills"
          className="text-primary hover:text-white hover:text-shadow ml-4 transition duration-300">
          Skills
        </Link>
        <Link
          href="#projects"
          className="text-primary hover:text-white hover:text-shadow ml-4 transition duration-300">
          Projects
        </Link>
        <Link
          href="#contact"
          className="text-primary hover:text-white hover:text-shadow ml-4 transition duration-300">
          Contact
        </Link>
      </nav>
    </header>
  );
}

export default Header;
