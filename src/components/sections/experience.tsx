import HoverText from "../common/hoverText";

export default function About() {
  return (
    <section className="md:min-h-screen md:flex md:items-center md:justify-center">
      <div className="py-12 md:py-20 lg:py-28">
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-medium tracking-tight mb-6 md:mb-8">
          EXPERIENCE
        </h2>

        <hr className="border-2 border-gray-200 mb-12" />

        {/* Experience item */}
        <article className="">
          <h3 className="text-2xl md:text-4xl lg:text-5xl font-medium mb-4 md:mb-8">PulseTech Ltd.</h3>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-24 items-start">
            {/* Company / year */}
            <div className="lg:col-span-4 flex flex-col gap-2">
              <p className="">
                Transforming healthcare with innovation
              </p>
              <p className="">2024 — 2025</p>
            </div>

            {/* Info - Desktop */}
            <dl className="hidden md:flex lg:col-span-3 flex-col gap-2">
              <div className="flex flex-row justify-between">
                <dt className="text-neutral-600">Position</dt>
                <dd className="">Jr. Software Engineer</dd>
              </div>

              <div className="flex flex-row justify-between">
                <dt className="text-neutral-600">Location</dt>
                <dd className="">Dhaka, Bangladesh</dd>
              </div>

              <div className="flex flex-row justify-between">
                <dt className="text-neutral-600">Industry</dt>
                <dd className="">Healthcare</dd>
              </div>

              <div className="flex flex-row justify-between">
                <dt className="text-neutral-600">Website</dt>
                <HoverText
                  href="https://pulsetechltd.com/"
                  label="www.pulsetechltd.com"
                  className="hidden md:block"
                />
              </div>
            </dl>

            {/* Description */}
            <div className="lg:col-span-5 prose prose-sm max-w-none">
              <p>
                As a member of the Frontend Foundations team working on the Online Bank,
                I develop customer-facing features and integrate the design system to
                ensure a seamless and accessible user experience.
              </p>

              <p className="mt-6">
                Starling Bank is an award-winning, digital challenger bank disrupting
                the financial services industry with its transparent and customer-focused
                approach to banking.
              </p>
            </div>

            {/* Info - Desktop */}
            <dl className="flex md:hidden lg:col-span-3 flex-col gap-2">
              <div className="flex flex-row justify-between">
                <dt className="text-neutral-600">Position</dt>
                <dd className="">Jr. Software Engineer</dd>
              </div>

              <div className="flex flex-row justify-between">
                <dt className="text-neutral-600">Location</dt>
                <dd className="">Dhaka, Bangladesh</dd>
              </div>

              <div className="flex flex-row justify-between">
                <dt className="text-neutral-600">Industry</dt>
                <dd className="">Healthcare</dd>
              </div>

              <div className="flex flex-row justify-between">
                <dt className="text-neutral-600">Website</dt>
                <HoverText
                  href="https://pulsetechltd.com/"
                  label="www.pulsetechltd.com"
                  className="hidden md:block"
                />
              </div>
            </dl>
          </div>
        </article>
      </div>
    </section>
  );
}