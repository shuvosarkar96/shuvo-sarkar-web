import ArrowTopRight from "@/assets/icons/ArrowTopRight";
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
            
            {/* Right image frame (LG+) */}
            <div className="hidden lg:block lg:col-span-7">
              <ImageFrame 
                images={[
                  "/images/projects/ptl.png",
                  "/images/projects/ptl-figma.png"
                ]}
              />
            </div>

            {/* Left content */}
            <div className="lg:col-span-5">
              <h3 className="text-2xl font-medium">
                PulseTech Ltd.
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
                    "/images/projects/ptl.png",
                    "/images/projects/ptl-figma.png"
                  ]}
                />
              </div>

              <div className="mt-6 space-y-4 leading-relaxed">
                <p>
                  Right after joining Pulse Tech, I was tasked with giving their corporate website a fresh, modern look.
                </p>

                <p>
                  I took care of the full process—rethinking the structure, designing the interface, and coding the frontend to make it faster and cleaner.
                </p>

                <p>
                  The site was built with Next.js and optimized for performance across all screen sizes.
                </p>
              </div>

              <HoverText
                href="https://pulsetechltd.com/"
                label={
                  <span className="flex items-center gap-1">
                    www.pulsetechltd.com
                    <ArrowTopRight className="w-4 h-4" />
                  </span>
                }
                className="hidden md:block md:w-fit mt-6"
              />
            </div>

          </div>

          {/* 2nd Project Item */}
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
                    "/images/projects/nirbazar-ad.jpg",
                    "/images/projects/nirbazar.png"
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
                label={
                  <span className="flex items-center gap-1">
                    www.nirbazar.com
                    <ArrowTopRight className="w-4 h-4" />
                  </span>
                }
                className="hidden md:block md:w-fit mt-6"
                openInNewTab
              />
            </div>

            {/* Right image frame (LG+) */}
            <div className="hidden lg:block lg:col-span-7">
              <ImageFrame 
                images={[
                  "/images/projects/nirbazar-ad.jpg",
                  "/images/projects/nirbazar.png"
                ]}
              />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
