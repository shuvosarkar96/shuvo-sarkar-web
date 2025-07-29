import HoverText from "./hoverText";

export default function Header() {
  return (
    <header className="w-full px-4 py-6 border-b border-gray-200">
      <div className="container mx-auto flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
        {/* Left info blocks */}
        <div className="flex flex-col md:flex-row md:space-x-12 text-sm text-gray-800">
          <div>
            <p className="font-medium">Based in</p>
            <p className="text-gray-600">Dhaka, Bangladesh</p>
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
        <nav className="flex space-x-6 text-sm font-medium text-gray-800">
          <a href="#about" className="hover:text-black transition">ABOUT</a>
          <a href="#experience" className="hover:text-black transition">EXPERIENCE</a>
          <a href="#projects" className="hover:text-black transition">PROJECTS</a>
          <a href="#contact" className="hover:text-black transition">CONTACT</a>
        </nav>
      </div>
    </header>
  );
}
