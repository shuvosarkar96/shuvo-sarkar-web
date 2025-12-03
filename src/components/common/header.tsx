'use client';
import HoverText from "./hoverText";

export default function Header() {
  return (
    <header className="w-full py-6">
      <div className="container mx-auto flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
        {/* Left info blocks */}
        <div className="flex flex-col md:flex-row md:space-x-12 font-medium text-gray-800">
          <div>
            <p className="">Based in</p>
            <p className="">Dhaka, Bangladesh</p>
          </div>

          <HoverText
            href="mailto:shuvo.sarkar.official@gmail.com"
            label="shuvo.sarkar.official@gmail.com"
            subText="Say hello or anything"
          />

          <HoverText
            subText="Switch to"
            label="Comfort mode"
            onClick={() => console.log("Switched to comfort mode")}
          />
        </div>

        {/* Navigation links */}
        <nav className="flex space-x-6 font-medium text-gray-800">
          <a href="#about" className="hover:text-black transition">ABOUT</a>
          <a href="#experience" className="hover:text-black transition">EXPERIENCE</a>
          <a href="#projects" className="hover:text-black transition">PROJECTS</a>
          <a href="#contact" className="hover:text-black transition">CONTACT</a>
        </nav>
      </div>
    </header>
  );
}
