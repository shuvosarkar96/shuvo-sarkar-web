

export default function About() {
  return (
    <section className="bg-white md:min-h-screen md:flex md:items-center md:justify-center">
      <div className="py-12 md:py-20 lg:py-28 w-full">
        <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6 md:mb-8">
          EXPERIENCE
        </h2>

        <hr className="border border-gray-200 mb-12" />

        {/* Experience item */}
        <article className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Company / year */}
          <div className="lg:col-span-3">
            <h3 className="text-2xl font-medium mb-2">Starling Bank</h3>
            <p className="text-sm text-gray-600 mb-4">
              Award winning digital bank
            </p>
            <p className="text-sm font-medium">2023 — 2025</p>
          </div>

          {/* Meta info */}
          <dl className="lg:col-span-4 grid grid-cols-2 gap-x-6 gap-y-4 text-sm">
            <div>
              <dt className="text-gray-500">Position</dt>
              <dd className="font-medium">Software Engineer</dd>
            </div>

            <div>
              <dt className="text-gray-500">Location</dt>
              <dd className="font-medium">London, United Kingdom</dd>
            </div>

            <div>
              <dt className="text-gray-500">Industry</dt>
              <dd className="font-medium">Banking</dd>
            </div>

            <div>
              <dt className="text-gray-500">Website</dt>
              <dd>
                <a
                  href="https://www.starlingbank.com"
                  className="border-b border-gray-300 inline-flex items-center gap-1"
                >
                  www.starlingbank.com ↗
                </a>
              </dd>
            </div>
          </dl>

          {/* Description */}
          <div className="lg:col-span-5 prose prose-sm max-w-none">
            <p>
              As a member of the Frontend Foundations team working on the Online Bank,
              I develop customer-facing features and integrate the design system to
              ensure a seamless and accessible user experience.
            </p>

            <p>
              Starling Bank is an award-winning, digital challenger bank disrupting
              the financial services industry with its transparent and customer-focused
              approach to banking.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}