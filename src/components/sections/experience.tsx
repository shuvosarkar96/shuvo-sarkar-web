import ExperienceItem from "../common/experienceItem";

export default function Experience() {
  return (
    <section id="experience" className="md:min-h-screen md:flex md:items-center md:justify-center mt-20 md:mt-0">
      <div className="py-12 md:py-20 lg:py-28">
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-medium tracking-tight mb-6 md:mb-8">
          EXPERIENCE
        </h2>

        <hr className="border-2 border-gray-200 mb-12 md:mb-20" />

        {/* Experience item */}
        <div className="space-y-28 ">
          <ExperienceItem
            companyName="PulseTech Ltd."
            companyTagline="Transforming healthcare with innovation"
            period="2024 — 2025"
            position="Jr. Software Engineer"
            location="Dhaka, Bangladesh"
            industry="Healthcare"
            website={{
              label: "www.pulsetechltd.com",
              href: "https://pulsetechltd.com/",
            }}
            description={[
              "As a Junior Frontend Developer & UI Designer at Pulse Tech, I worked on production web systems, including a B2B medicine supply platform and a pharmacy POS system, contributing to both UI design and frontend development used in real business operations.",
              "Alongside product work, I redesigned and developed the company’s own website as well as websites for partner companies. My focus was on creating clean, responsive layouts, improving user flows, and turning designs into practical, easy-to-use interfaces through close collaboration with the team.",
            ]}
          />

          <ExperienceItem
            companyName="Imperial Falcon"
            companyTagline="Software for growing businesses"
            period="2023 — 2024"
            position="Trainee Software Engineer"
            location="Dhaka, Bangladesh"
            industry="Software Development"
            website={{
              label: "www.imperialfalcon.org",
              href: "https://imperialfalcon.org/",
            }}
            description={[
              "I learned practical web development by working on 3+ startup projects, gaining hands-on experience with real service code and deployment workflows.",
              "I implemented admin dashboards and CRUD features using Angular and TypeScript, built responsive layouts and UI components with HTML, CSS, and JavaScript, and collaborated with planning, design, and backend teams across the full development lifecycle.",
            ]}
          />
        </div>
        

      </div>

        {/* Experience item */}
        {/* <article className="">
          <h3 className="text-2xl md:text-4xl lg:text-5xl font-medium mb-4 md:mb-8">PulseTech Ltd.</h3>

          <div className="flex flex-col md:grid md:grid-cols-2 lg:block gap-8 md:gap-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-16 2xl:gap-20 items-start">
              <div className="lg:col-span-3 xl:col-span-3 flex flex-col gap-2">
                <p className="">
                  Transforming healthcare with innovation
                </p>
                <p className="">2024 — 2025</p>
              </div>

              <dl className="hidden lg:flex lg:col-span-4 xl:col-span-4 flex-col gap-2">
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

              <div className="lg:col-span-5 xl:col-span-5 prose prose-sm max-w-none">
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
            </div>

            <dl className="flex lg:hidden lg:col-span-3 flex-col gap-2">
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
        </article> */}
    </section>
  );
}