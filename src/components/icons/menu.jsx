import React from 'react';
import { DEFAULT_ICON_COLOR } from './constants';

export function MenuIcon({ fill = DEFAULT_ICON_COLOR, className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 18 12"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 2V0H18V2H0ZM0 7H18V5H0V7ZM0 12H18V10H0V12Z"
        fill={fill}
      />
    </svg>
  );
}
