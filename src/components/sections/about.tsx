export default function About() {
  return (
    <section className="bg-white text-gray-900">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-20 lg:py-28">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extralight tracking-tight mb-6 md:mb-8">
          ABOUT
        </h2>

        <hr className="border-gray-200 mb-8" />

        {/* Desktop: grid with two columns; Mobile: stacked */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left large lead text (on desktop spans cols 1-7) */}
          <div className="lg:col-span-7">
            <p className="text-2xl sm:text-3xl md:text-4xl font-medium leading-tight md:leading-snug max-w-2xl">
              Over the years, I have worked on customer-facing products with a strong focus on excellent user experience and accessibility
            </p>

            {/* Footer area (under the big lead text on mobile, bottom-left on desktop) */}
            <div className="mt-10 md:mt-12">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:space-x-10 gap-6">
                <div className="flex flex-col space-y-2">
                  <span className="text-sm font-medium">Product Development</span>
                  <span className="text-sm">UX/UI &amp; Design</span>
                </div>

                <div className="flex flex-col">
                  <span className="text-sm font-medium">Say hello</span>
                  <a
                    href="mailto:privet.dev@pm.me"
                    className="text-sm pb-1 border-b border-gray-300 inline-block w-max"
                  >
                    privet.dev@pm.me
                  </a>
                </div>

                <div className="flex flex-col">
                  <span className="text-sm">&nbsp;</span>
                  <a
                    href="#"
                    className="text-sm pb-1 border-b border-gray-300 inline-block w-max"
                    aria-label="Explore LinkedIn"
                  >
                    Explore LinkedIn ↗
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right column paragraphs (on desktop spans cols 8-12) */}
          <div className="lg:col-span-5">
            <div className="prose prose-sm max-w-none text-gray-700">
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
        </div>
      </div>
    </section>
  );
}