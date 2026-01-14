import React from "react";

interface ArrowProps {
  className?: string;
}

const ArrowLeft: React.FC<ArrowProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    className={className}
    fill="currentColor"
  >
    <polygon points="12.718 4.707 11.305 3.292 2.585 12 11.305 20.707 12.718 19.292 6.417 13 20 13 20 11 6.416 11 12.718 4.707"/>
  </svg>
);

export default ArrowLeft;
