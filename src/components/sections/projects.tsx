import Image from "next/image";
import HoverText from "../common/hoverText";
import ImageFrame from "../common/imageFrame";

export default function Projects() {
  return (
    <section className="md:min-h-screen md:flex md:items-center md:justify-center">
      <div className="py-12 md:py-20 lg:py-28">
        <h2 className="uppercase text-4xl md:text-5xl lg:text-7xl font-medium tracking-tight mb-6 md:mb-8">
          Projects
        </h2>

        <hr className="border-2 border-gray-200 mb-12" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
        
          {/* Left content */}
          <div className="lg:col-span-5">
            <h3 className="text-2xl font-medium">
              Compound Interest Calculator
            </h3>

            <p className="mt-2">
              Web Development, Design, Idea
            </p>

            <p className="mt-2">
              2024
            </p>

            {/* Mobile view image frame */}
            <div className="lg:hidden mt-6 full-bleed">
              <ImageFrame 
                images={[
                  "/images/projects/image.png",
                  "/images/projects/image.png"
                ]}
              />
            </div>

            <div className="mt-6 space-y-4 leading-relaxed">
              <p>
                This side project started from my personal interest in the effects
                of compound interest.
              </p>

              <p>
                My goal was to create a simple, user-friendly tool that hides all
                the complexity — something people could use regularly.
              </p>

              <p>
                The project was developed using TypeScript, React, Vite, and
                deployed on Cloudflare Pages.
              </p>
            </div>

            <HoverText
              href="#"
              label="Website.com 🡭"
              className="hidden md:block md:w-fit mt-6"
            />
          </div>

          {/* Right image frame */}
          <div className="hidden lg:block lg:col-span-7">
            <ImageFrame 
              images={[
                "/images/projects/image.png",
                "/images/projects/image.png"
              ]}
            />
          </div>

        </div>
      </div>
    </section>
  );
}