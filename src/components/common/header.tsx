"use client"
import { useState } from "react"
import HoverText from "./hoverText"

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="w-full py-6 relative">
      <div className="container mx-auto flex items-center justify-between">
        
        {/* Left info section */}
        <div className="flex flex-col md:flex-row md:space-x-12 font-medium text-gray-800">
          <div>
            <p>Based in</p>
            <p>Dhaka, Bangladesh</p>
          </div>

          <HoverText
            href="mailto:shuvo.sarkar.official@gmail.com"
            label="shuvo.sarkar.official@gmail.com"
            subText="Say hello or anything"
            className="hidden md:block"
          />

          <HoverText
            subText="Switch to"
            label="Comfort mode"
            onClick={() => console.log("Switched to comfort mode")}
            className="hidden md:block"
          />
        </div>

        {/* Desktop Navigation (hidden on mobile) */}
        <nav className="hidden md:flex space-x-6 font-medium text-gray-800">
          <a href="#about" className="hover:text-black transition">ABOUT</a>
          <a href="#experience" className="hover:text-black transition">EXPERIENCE</a>
          <a href="#projects" className="hover:text-black transition">PROJECTS</a>
          <a href="#contact" className="hover:text-black transition">CONTACT</a>
        </nav>

        {/* Mobile MENU button */}
        <button 
          className="md:hidden font-medium text-gray-800 underline underline-offset-4"
          onClick={() => setOpen(true)}
        >
          MENU
        </button>
      </div>

      {/* Mobile Full Screen Menu */}
      {open && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col p-7">

          <div className="flex justify-end">
            <button 
              className="font-medium underline underline-offset-4"
              onClick={() => setOpen(false)}
            >
              CLOSE
            </button>
          </div>

          <div className="mt-16 flex flex-col space-y-10 text-3xl font-medium">
            <a onClick={() => setOpen(false)} href="#about">ABOUT</a>
            <a onClick={() => setOpen(false)} href="#experience">EXPERIENCE</a>
            <a onClick={() => setOpen(false)} href="#projects">PROJECTS</a>
            <a onClick={() => setOpen(false)} href="#contact">CONTACT</a>
          </div>

          {/* Bottom section inside menu */}
          <div className="absolute bottom-10 left-7 flex justify-between w-[90%] text-sm font-medium">
            <HoverText 
              label="shuvo.sarkar.official@gmail.com"
              subText="Say hello"
              href="mailto:shuvo.sarkar.official@gmail.com"
            />
            <HoverText 
              subText="Switch to"
              label="Comfort Mode"
              onClick={() => console.log("Switched!")}
            />
          </div>
        </div>
      )}
    </header>
  )
}
