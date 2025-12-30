import React from "react";

export interface HoverTextProps {
  title?: string;
  label: string;
  href?: string;
  onClick?: () => void;
  className?: string;
}

const HoverText: React.FC<HoverTextProps> = ({
  title,
  label,
  href,
  onClick,
  className = "",
}) => {
  const Wrapper: React.ElementType = href ? "a" : "button";

  return (
    <div className={`group inline-flex ${className}`}>
      <div className="flex flex-col">
        {/* Title ALWAYS above */}
        {title && <span>{title}</span>}

        {/* Clickable label */}
        <Wrapper
          href={href}
          onClick={onClick}
          className="inline-flex flex-col focus:outline-none"
        >
          <span>{label}</span>

          {/* Underline */}
          <span className="relative mt-1 h-0.5 w-full overflow-hidden">
            <span className="absolute inset-0 bg-neutral-400" />
            <span className="absolute inset-0 bg-neutral-700 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
          </span>
        </Wrapper>
      </div>
    </div>
  );
};

export default HoverText;
