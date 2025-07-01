import React from 'react';
import { parseIconClasses } from './parser';

interface IconWrapperProps {
  className?: string;
  children: React.ReactNode;
  svgProps?: React.SVGProps<SVGSVGElement>;
}

export function IconWrapper({
  className,
  children,
  svgProps = {},
}: IconWrapperProps) {
  const { containerClasses, svgClasses } = parseIconClasses(className);

  return (
    <span
      className={`inline-flex items-center justify-center ${containerClasses}`}
    >
      <svg
        role="img"
        className={`h-[1em] w-[1em] ${svgClasses}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...svgProps}
      >
        {children}
      </svg>
    </span>
  );
}
