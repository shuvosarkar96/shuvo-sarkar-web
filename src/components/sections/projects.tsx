import HoverText from "../common/hoverText";
import ImageFrame from "../common/imageFrame";

export default function Projects() {
  return (
    <section id="projects" className="md:min-h-screen md:flex md:items-center md:justify-center mt-20 md:mt-0">
      <div className="py-12 md:py-20 lg:py-28">
        <h2 className="uppercase text-4xl md:text-5xl lg:text-7xl font-medium tracking-tight mb-6 md:mb-8">
          Projects
        </h2>

        <hr className="border-2 border-gray-200 mb-12 md:mb-20" />

        <div className="space-y-28">
          {/* 1st Project Item */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 lg:gap-16 items-start">
            
            {/* Left content */}
            <div className="lg:col-span-5">
              <h3 className="text-2xl font-medium">
                NirBazar - Local B2C Marketplace
              </h3>

              <p className="mt-2">
                Web Development, Design
              </p>

              <p className="mt-2">
                2024
              </p>

              {/* Mobile-only full bleed image */}
              <div className="md:block lg:hidden mt-6 full-bleed md:mx-0 md:w-auto">
                <ImageFrame 
                  images={[
                    "/images/projects/nirbazar.png",
                    "/images/projects/nirbazar-ad.jpg"
                  ]}
                />
              </div>

              <div className="mt-6 space-y-4 leading-relaxed">
                <p>
                  This project focused on building a simple marketplace for local sellers and everyday customers.
                </p>

                <p>
                  The goal was to keep browsing and ordering clear and easy, with a strong focus on usability.
                </p>

                <p>
                  It was developed with modern frontend tools and a fully responsive layout.
                </p>
              </div>

              <HoverText
                href="https://nirbazar.com/all-products"
                label="www.nirbazar.com 🡭"
                className="hidden md:block md:w-fit mt-6"
                openInNewTab
              />
            </div>

            {/* Right image frame (LG+) */}
            <div className="hidden lg:block lg:col-span-7">
              <ImageFrame 
                images={[
                  "/images/projects/nirbazar.png",
                  "/images/projects/nirbazar-ad.jpg"
                ]}
              />
            </div>

          </div>

          {/* 2nd Project Item */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 lg:gap-16 items-start">
            
            {/* Right image frame (LG+) */}
            <div className="hidden lg:block lg:col-span-7">
              <ImageFrame 
                images={[
                  "/images/projects/image.png",
                  "/images/projects/image.png"
                ]}
              />
            </div>

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

              {/* Mobile-only full bleed image */}
              <div className="md:block lg:hidden mt-6 full-bleed md:mx-0 md:w-auto">
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

          </div>
        </div>
      </div>
    </section>
  );
}
