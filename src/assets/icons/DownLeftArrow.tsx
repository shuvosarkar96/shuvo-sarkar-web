import * as React from "react";

type IconProps = React.SVGProps<SVGSVGElement>;

export default function DownLeftArrow({ width = 24, height = 24, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={width}
      height={height}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <polygon points="18.707 6.707 17.293 5.293 7 15.586 7 7 5 7 5 19 17 19 17 17 8.414 17 18.707 6.707" />
    </svg>
  );
}
