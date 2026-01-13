import HoverText from "../common/hoverText";

export default function About() {
  return (
    <section id="about" className="md:h-screen md:flex md:items-center md:justify-center">
      <div className="py-12 md:py-20 lg:py-28">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-medium tracking-tight mb-6 md:mb-8">
          ABOUT
        </h2>

        <hr className="border-2 border-gray-200 mb-12 md:mb-20" />

        {/* Desktop: grid with two columns; Mobile: stacked */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start md:auto-rows-fr">
          {/* Left large lead text */}
          <div className="md:col-span-7 h-full flex flex-col justify-between">
            <p className="text-2xl sm:text-3xl lg:text-4xl font-medium text-gray-800 leading-tight lg:leading-snug">
              I design and develop web applications that feel intuitive to use, with a focus on accessibility and real-world performance.
            </p>

            <div className="hidden md:flex flex-col lg:flex-row gap-8 lg:gap-2 xl:gap-16">
              <ul className="flex flex-col gap-1">
                <li>Frontend Development</li>
                <li>UI / UX Design</li>
              </ul>

              <div className="flex items-end justify-between lg:justify-start gap-2 xl:gap-16">
                <HoverText
                  href="mailto:shuvo.sarkar.official@gmail.com"
                  label="shuvo.sarkar.official@gmail.com"
                  title="Say hello or anything"
                  className="hidden md:block"
                />

                <HoverText
                  href="https://www.linkedin.com/in/shuvosarkarofficial"
                  label="Explore LinkedIn 🡭"
                  className="hidden md:block"
                />
              </div>

            </div>
          </div>


          {/* Right column paragraphs (on desktop spans cols 8-12) */}
          <div className="md:col-span-5 h-full">
            <div className="prose prose-sm max-w-none">
              <p className="mb-6">
                Self-taught frontend developer and UI/UX designer specializing in JavaScript, TypeScript, React, Next.js, and Angular. I&apos;m passionate about building digital products that solve real problems and make people&apos;s lives easier.
              </p>

              <p className="mb-6">
                I&apos;ve worked on various customer-facing platforms, always focusing on intuitive design and smooth performance. I approach every project by understanding user needs first, then translating that into clean, accessible interfaces.
              </p>

              <p className="mb-6">
                My bachelor&apos;s was in Business Administration, but I fell into coding and haven&apos;t looked back. Now I&apos;m doing my Master&apos;s in Software Convergence in South Korea.
              </p>

              <p className="mb-0">
                I&apos;m fluent in English and Bengali, and learning Korean. Working with people from different backgrounds keeps me growing—I always look forward to learning.
              </p>
            </div>
          </div>

          {/* Mobile only visible */}
          <div className="flex flex-col gap-2 text-right md:hidden">
            <ul className="flex flex-col">
              <li>Frontend Development</li>
              <li>UI / UX Design</li>
            </ul>

            <HoverText
              href="mailto:shuvo.sarkar.official@gmail.com"
              label="shuvo.sarkar.official@gmail.com"
              title="Say hello or anything"
              className="self-end text-right"
            />

            <HoverText
              href="https://www.linkedin.com/in/shuvosarkarofficial"
              label="Explore LinkedIn ↗"
              className="self-end text-right"
              openInNewTab
            />
          </div>
        </div>
      </div>
    </section>
  );
}