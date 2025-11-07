import React from 'react';

interface LogoProps extends React.SVGProps<SVGSVGElement> {}

export const Logo = (props: LogoProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 483.72 168.29"
    fill="currentColor"
    {...props}
  >
    <polygon points="97.16 0 0 168.29 194.32 168.29 97.16 0" />
    <polygon points="241.86 168.29 339.02 0 144.7 0 241.86 168.29" />
    <polygon points="386.55 0 289.39 168.29 483.72 168.29 386.55 0" />
  </svg>
);