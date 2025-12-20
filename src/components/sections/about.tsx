import HoverText from "../common/hoverText";

export default function About() {
  return (
    <section className="bg-white md:h-screen md:flex md:items-center md:justify-center">
      <div className="py-12 md:py-20 lg:py-28">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6 md:mb-8">
          ABOUT
        </h2>

        <hr className="border-2 border-gray-200 mb-12" />

        {/* Desktop: grid with two columns; Mobile: stacked */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start lg:auto-rows-fr">
          {/* Left large lead text */}
          <div className="lg:col-span-7 h-full flex flex-col justify-between">
            <p className="text-2xl sm:text-3xl md:text-4xl font-medium text-gray-800 leading-tight md:leading-snug">
              Over the years, I have worked on customer-facing products with a strong focus on excellent user experience and accessibility
            </p>

            <div className="hidden md:flex items-end md:gap-8">
              <ul className="flex flex-col gap-1">
                <li>Frontend Development</li>
                <li>UI / UX Design</li>
              </ul>

              <HoverText
                href="mailto:shuvo.sarkar.official@gmail.com"
                label="shuvo.sarkar.official@gmail.com"
                subText="Say hello or anything"
                className="hidden md:block"
              />

              <HoverText
                href="#"
                label="Explore LinkedIn ↗"
                className="hidden md:block"
              />
            </div>
          </div>


          {/* Right column paragraphs (on desktop spans cols 8-12) */}
          <div className="lg:col-span-5 h-full">
            <div className="prose prose-sm max-w-none">
              <p className="mb-6">
                Self-taught software engineer with a strong knowledge of TypeScript, Swift, and Java. I am passionate about working on meaningful projects that have a positive impact on people's lives.
              </p>

              <p className="mb-6">
                I have hands-on experience working on high-traffic, customer-facing products and prioritize building clean, maintainable codebases that enable continuous improvement and scalability.
              </p>

              <p className="mb-6">
                I hold a Bachelor of Business Administration from Hult International Business School in London and an International Baccalaureate from Leysin American School in Switzerland.
              </p>

              <p className="mb-0">
                I am fluent in English and Russian and have experience working and studying in an international environment.
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
              subText="Say hello or anything"
              className="block"
            />

            <HoverText
              href="#"
              label="Explore LinkedIn ↗"
              className="block"
            />
          </div>
        </div>
      </div>
    </section>
  );
}