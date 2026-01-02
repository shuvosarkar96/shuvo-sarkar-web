"use client"
import { useState } from "react"
import HoverText from "./hoverText"

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="relative">
      <div className="flex items-start justify-between">
        
        {/* Left info section */}
        <div className="flex flex-col md:flex-row md:space-x-20 lg:space-x-8 xl:space-x-40">
          <div>
            <p>Based in</p>
            <p>Gwangju, South Korea</p>
          </div>

          <div className="hidden lg:flex md:space-x-20 lg:space-x-8 xl:space-x-40">
            <HoverText
              href="mailto:shuvo.sarkar.official@gmail.com"
              label="shuvo.sarkar.official@gmail.com"
              title="Say hello or anything"
            />

            <HoverText
              href="#"
              title="Switch to"
              label="Comfort mode"
              onClick={() => console.log("Switched to comfort mode")}
            />
          </div>  
        </div>

        {/* Desktop Navigation (hidden on mobile) */}
        <nav className="hidden lg:flex space-x-4 xl:space-x-8">
          <a href="#about" className="hover:text-black transition">ABOUT</a>
          <a href="#experience" className="hover:text-black transition">EXPERIENCE</a>
          <a href="#projects" className="hover:text-black transition">PROJECTS</a>
          <a href="#contact" className="hover:text-black transition">CONTACT</a>
        </nav>

        {/* Mobile MENU button */}
        <button 
          className="lg:hidden font-medium underline underline-offset-4"
          onClick={() => setOpen(true)}
        >
          MENU
        </button>
      </div>

      {/* Mobile Full Screen Menu */}
      {open && (
        <div className="fixed inset-0 z-50 bg-white flex flex-col px-7 py-7 overflow-hidden">

          {/* Close button */}
          <div className="flex justify-end">
            <button
              className="font-medium underline underline-offset-4"
              onClick={() => setOpen(false)}
            >
              CLOSE
            </button>
          </div>

          <div className="flex flex-col justify-between md:flex-row md:justify-between md:items-start md:px-20 h-full">

            {/* Navigation */}
            <div className="mt-16 flex flex-col space-y-8 md:space-y-16 text-4xl font-medium">
              <a onClick={() => setOpen(false)} href="#about">ABOUT</a>
              <a onClick={() => setOpen(false)} href="#experience">EXPERIENCE</a>
              <a onClick={() => setOpen(false)} href="#projects">PROJECTS</a>
              <a onClick={() => setOpen(false)} href="#contact">CONTACT</a>
            </div>

            {/* Bottom section */}
            <div className="w-full md:w-fit md:mt-16 flex flex-col items-end md:items-start gap-4 md:gap-8 text-right md:text-left">
              <HoverText
                label="shuvo.sarkar.official@gmail.com"
                title="Say hello"
                href="mailto:shuvo.sarkar.official@gmail.com"
              />
              <HoverText
                title="Switch to"
                label="Comfort Mode"
                onClick={() => console.log("Switched!")}
              />
            </div>

          </div>

        </div>
      )}
    </header>
  )
}
