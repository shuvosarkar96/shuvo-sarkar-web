import React from "react";

interface HoverTextProps {
  label: string;               // The main text (e.g. email, "Comfort mode")
  subText?: string;            // Optional top label (e.g. "Say hello")
  href?: string;               // If present, renders an <a> tag
  onClick?: () => void;        // If present and href not provided, renders a <button>
  className?: string;          // Optional extra classes
}

const HoverText: React.FC<HoverTextProps> = ({
  label,
  subText,
  href,
  onClick,
  className = "",
}) => {
  const isLink = typeof href === "string";

  const Wrapper: React.ElementType = isLink ? "a" : "button";
  const wrapperProps = isLink
    ? { href }
    : { onClick: onClick ?? (() => {}) };

  return (
    <div className={`group inline-block cursor-pointer ${className}`}>
      {subText && (
        <p className="font-medium group-hover:text-gray-900 transition-colors duration-300">
          {subText}
        </p>
      )}
      <Wrapper
        {...wrapperProps}
        className="relative inline-block text-gray-800 group-hover:text-gray-900 transition-colors duration-300"
      >
        {label}
        <span className="block w-full h-[1.5px] bg-gray-300 mt-1 group-hover:bg-gray-800 transition-all duration-300" />
        <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-gray-800 scale-x-0 group-hover:scale-x-100 transform transition-transform duration-300 origin-left" />
      </Wrapper>
    </div>
  );
};

export default HoverText;
