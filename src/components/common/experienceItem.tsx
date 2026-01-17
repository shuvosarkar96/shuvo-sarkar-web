import HoverText from "@/components/common/hoverText";

interface ExperienceItemProps {
  companyName: string;
  companyTagline: string;
  period: string;

  position: string;
  location: string;
  industry: string;

  website: {
    label: string;
    href: string;
  };

  description: string[];
}

export default function ExperienceItem({
  companyName,
  companyTagline,
  period,
  position,
  location,
  industry,
  website,
  description,
}: ExperienceItemProps) {
  return (
    <article>
      <h3 className="text-2xl md:text-4xl lg:text-5xl font-medium mb-4 md:mb-8">
        {companyName}
      </h3>

      <div className="flex flex-col md:grid md:grid-cols-2 lg:block gap-8 md:gap-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-16 2xl:gap-20 items-start">
          
          {/* Company / year */}
          <div className="lg:col-span-3 xl:col-span-3 flex flex-col gap-4 font-medium">
            <p>{companyTagline}</p>
            <p>{period}</p>
          </div>

          {/* Info - Desktop */}
          <dl className="hidden lg:flex lg:col-span-4 xl:col-span-4 flex-col gap-4">
            <div className="flex flex-row justify-between">
              <dt>Position</dt>
              <dd className="font-medium">{position}</dd>
            </div>

            <div className="flex flex-row justify-between">
              <dt>Location</dt>
              <dd className="font-medium">{location}</dd>
            </div>

            <div className="flex flex-row justify-between">
              <dt>Industry</dt>
              <dd className="font-medium">{industry}</dd>
            </div>

            <div className="flex flex-row justify-between">
              <dt>Website</dt>
              <HoverText
                href={website.href}
                label={website.label}
                className="hidden md:block font-medium"
                openInNewTab
              />
            </div>
          </dl>

          {/* Description */}
          <div className="lg:col-span-5 xl:col-span-5 prose prose-sm max-w-none">
            {description.map((paragraph, index) => (
              <p key={index} className={index > 0 ? "mt-6" : undefined}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Info - Mobile */}
        <dl className="flex lg:hidden lg:col-span-3 flex-col gap-2">
          <div className="flex flex-row justify-between">
            <dt>Position</dt>
            <dd className="font-medium">{position}</dd>
          </div>

          <div className="flex flex-row justify-between">
            <dt>Location</dt>
            <dd className="font-medium">{location}</dd>
          </div>

          <div className="flex flex-row justify-between">
            <dt>Industry</dt>
            <dd className="font-medium">{industry}</dd>
          </div>

          <div className="flex flex-row justify-between">
            <dt>Website</dt>
            <HoverText
              href={website.href}
              label={website.label}
              className="hidden md:block font-medium"
            />
          </div>
        </dl>
      </div>
    </article>
  );
}
