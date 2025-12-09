import React from "react";

interface HoverTextProps {
  label: string;
  subText?: string;
  href?: string;
  onClick?: () => void;
  className?: string;
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

  return (
    <div className={`group block cursor-pointer ${className}`}>
      {subText && (
        <p className="">
          {subText}
        </p>
      )}

      <Wrapper
        {...(isLink ? { href } : { onClick })}
        className="relative inline-block"
      >
        {label}

        {/* Underline base */}
        <span className="block w-full h-[1.5px] bg-gray-400 mt-1 group-hover:bg-gray-800 transition-all duration-300" />

        {/* Animated underline */}
        <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-gray-800 scale-x-0 group-hover:scale-x-100 transform transition-transform duration-300 origin-left" />
      </Wrapper>
    </div>
  );
};

export default HoverText;
