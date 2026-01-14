"use client";

import React from "react";
import { useTheme } from "next-themes";

export interface HoverTextProps {
  title?: string;
  label: string | React.ReactElement;
  href?: string;
  onClick?: () => void;
  className?: string;
  openInNewTab?: boolean;
  toggleTheme?: boolean;
}

const HoverText: React.FC<HoverTextProps> = ({
  title,
  label,
  href,
  onClick,
  className = "",
  openInNewTab = false,
  toggleTheme = false,
}) => {
  const { theme, setTheme } = useTheme();

  const handleClick = () => {
    if (toggleTheme) setTheme(theme === "dark" ? "light" : "dark");
    if (onClick) onClick();
  };

  return (
    <div className={`group inline-flex ${className}`}>
      <div className="flex flex-col">
        {title && (
          <span className="text-foreground dark:text-foreground">
            {title}
          </span>
        )}

        {href ? (
          <a
            href={href}
            onClick={handleClick}
            target={openInNewTab ? "_blank" : undefined}
            rel={openInNewTab ? "noopener noreferrer" : undefined}
            className="inline-flex flex-col focus:outline-none cursor-pointer"
          >
            <span className="text-foreground dark:text-foreground">{label}</span>
            <span className="relative mt-1 h-0.5 w-full overflow-hidden">
              <span className="absolute inset-0 bg-neutral-400 dark:bg-neutral-600" />
              <span className="absolute inset-0 bg-neutral-700 dark:bg-neutral-300 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
            </span>
          </a>
        ) : (
          <button
            onClick={handleClick}
            className="inline-flex flex-col focus:outline-none cursor-pointer"
          >
            <span className="text-foreground dark:text-foreground">{label}</span>
            <span className="relative mt-1 h-0.5 w-full overflow-hidden">
              <span className="absolute inset-0 bg-neutral-400 dark:bg-neutral-600" />
              <span className="absolute inset-0 bg-neutral-700 dark:bg-neutral-300 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
            </span>
          </button>
        )}
      </div>
    </div>
  );
};

export default HoverText;
