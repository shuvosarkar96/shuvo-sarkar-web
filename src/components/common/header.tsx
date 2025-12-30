"use client"
import { useState } from "react"
import HoverText from "./hoverText"

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="relative">
      <div className="flex items-center justify-between">
        
        {/* Left info section */}
        <div className="flex flex-col md:flex-row md:space-x-20 lg:space-x-40">
          <div>
            <p>Based in</p>
            <p>Dhaka, Bangladesh</p>
          </div>

          <div className="hidden md:flex md:space-x-20 lg:space-x-40">
            <HoverText
              href="mailto:shuvo.sarkar.official@gmail.com"
              label="shuvo.sarkar.official@gmail.com"
              title="Say hello or anything"
            />

            <HoverText
              title="Switch to"
              label="Comfort mode"
              onClick={() => console.log("Switched to comfort mode")}
            />
          </div>  
        </div>

        {/* Desktop Navigation (hidden on mobile) */}
        <nav className="hidden md:flex space-x-6">
          <a href="#about" className="hover:text-black transition">ABOUT</a>
          <a href="#experience" className="hover:text-black transition">EXPERIENCE</a>
          <a href="#projects" className="hover:text-black transition">PROJECTS</a>
          <a href="#contact" className="hover:text-black transition">CONTACT</a>
        </nav>

        {/* Mobile MENU button */}
        <button 
          className="md:hidden font-medium underline underline-offset-4"
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

          {/* Navigation */}
          <div className="mt-16 flex flex-col space-y-8 text-4xl font-medium">
            <a onClick={() => setOpen(false)} href="#about">ABOUT</a>
            <a onClick={() => setOpen(false)} href="#experience">EXPERIENCE</a>
            <a onClick={() => setOpen(false)} href="#projects">PROJECTS</a>
            <a onClick={() => setOpen(false)} href="#contact">CONTACT</a>
          </div>

          {/* Bottom section */}
          <div className="mt-auto w-full max-w-full flex flex-col items-end gap-4 text-right">
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
      )}
    </header>
  )
}
