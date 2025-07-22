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

          <div>
            <p className="font-medium">Say hello or anything</p>
            <a
              href="mailto:shuvo.sarkar.official@gmail.com"
              className="inline-block relative group"
            >
              shuvo.sarkar.official@gmail.com
              <span className="block h-[1px] bg-gray-300 group-hover:bg-gray-800 transition-all duration-300 origin-left scale-x-100 group-hover:scale-x-100 mt-1 transform" />
              <span className="absolute bottom-0 left-0 g-g1px] w-full bg-gray-800 scale-x-0 group-hover:scale-x-100 transform transition-transform duration-300 origin-left" />
            </a>
          </div>

          <div>
            <p className="font-medium">Switch to</p>
            <button className="inline-block relative group">
              Comfort mode
              <span className="block h-[1px] bg-gray-300 group-hover:bg-gray-800 transition-all duration-300 origin-left scale-x-100 group-hover:scale-x-100 mt-1 transform" />
              <span className="absolute bottom-0 left-0 h-[1px] w-full bg-gray-800 scale-x-0 group-hover:scale-x-100 transform transition-transform duration-300 origin-left" />
            </button>
          </div>
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
