"use client";

import ArrowTopRight from "@/assets/icons/ArrowTopRight";
import HoverText from "../common/hoverText";
import ImageFrame from "../common/imageFrame";
import { useState } from "react";

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const projects = [
    {
      title: "Campus Helper Korea",
      category: "Web Development, Design, Idea",
      year: "2025",
      images: ["/images/projects/chk-1.png"],
      description: [
        "Campus Helper Korea is a student-focused platform I built during my first semester to simplify campus life for international students in Korea.",
        "I identified common student challenges and structured the solution around practical, easy-to-access features.",
        "I handled the full process—from concept and UX planning to UI design and frontend development—ensuring a clean, responsive, and user-friendly experience across devices.",
      ],
      link: "https://shuvosarkar96.github.io/campus-helper-korea/",
      linkLabel: "github.io/campus-helper-korea",
      imagePosition: "left",
      openInNewTab: false,
    },
    {
      title: "PulseTech Ltd.",
      category: "Web Development, Design, Idea",
      year: "2024",
      images: [
        "/images/projects/ptl.png",
        "/images/projects/ptl-figma.png",
      ],
      description: [
        "Right after joining Pulse Tech, I was tasked with giving their corporate website a fresh, modern look.",
        "I took care of the full process—rethinking the structure, designing the interface, and coding the frontend to make it faster and cleaner.",
        "The site was built with Next.js and optimized for performance across all screen sizes.",
      ],
      link: "https://pulsetechltd.com/",
      linkLabel: "www.pulsetechltd.com",
      imagePosition: "right",
      openInNewTab: false,
    },
    {
      title: "NirBazar - Local B2C Marketplace",
      category: "Web Development, Design",
      year: "2024",
      images: [
        "/images/projects/nirbazar-ad.jpg",
        "/images/projects/nirbazar.png",
      ],
      description: [
        "This project focused on building a simple marketplace for local sellers and everyday customers.",
        "The goal was to keep browsing and ordering clear and easy, with a strong focus on usability.",
        "It was developed with modern frontend tools and a fully responsive layout.",
      ],
      link: "https://nirbazar.com/all-products",
      linkLabel: "www.nirbazar.com",
      imagePosition: "left",
      openInNewTab: true,
    },
  ];
  const visibleProjects = showAll ? projects : projects.slice(0, 2);

  return (
    <section
      id="projects"
      className="md:min-h-screen md:flex md:items-center md:justify-center mt-20 md:mt-0"
    >
      <div className="py-12 md:py-20 lg:py-28">
        <h2 className="uppercase text-4xl md:text-5xl lg:text-7xl font-medium tracking-tight mb-6 md:mb-8">
          Projects
        </h2>

        <hr className="border-2 border-gray-200 mb-12 md:mb-20" />

        <div className="space-y-28">
          {visibleProjects.map((project, index) => {
            const isImageRight = project.imagePosition === "right";

            return (
              <div
                key={index}
                className="grid grid-cols-1 lg:grid-cols-12 gap-24 lg:gap-16 items-start"
              >
                {/* Image (Right on LG+) */}
                {isImageRight && (
                  <div className="hidden lg:block lg:col-span-7">
                    <ImageFrame images={project.images} />
                  </div>
                )}

                {/* Content */}
                <div className="lg:col-span-5">
                  <h3 className="text-2xl font-medium">
                    {project.title}
                  </h3>

                  <p className="mt-2 font-medium">
                    {project.category}
                  </p>

                  <p className="mt-2 font-medium">
                    {project.year}
                  </p>

                  {/* Mobile-only full bleed image */}
                  <div className="md:block lg:hidden mt-6 full-bleed md:mx-0 md:w-auto">
                    <ImageFrame images={project.images} />
                  </div>

                  <div className="mt-6 space-y-4 leading-relaxed">
                    {project.description.map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>

                  <HoverText
                    href={project.link}
                    label={
                      <span className="flex items-center gap-1">
                        {project.linkLabel}
                        <ArrowTopRight className="w-4 h-4" />
                      </span>
                    }
                    className="hidden md:block md:w-fit mt-6 font-medium"
                    openInNewTab={project.openInNewTab}
                  />
                </div>

                {/* Image (Left on LG+) */}
                {!isImageRight && (
                  <div className="hidden lg:block lg:col-span-7">
                    <ImageFrame images={project.images} />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* see more button */}
        {projects.length > 2 && (
          <div className="w-fit ml-auto flex items-center gap-3 mt-16 cursor-pointer select-none"
              onClick={() => setShowAll(prev => !prev)}
          >
            <span className="hover:font-medium transition-all">
              {showAll ? "See less" : "See more"}
            </span>
          </div>
        )}

      </div>
    </section>
  );
}
