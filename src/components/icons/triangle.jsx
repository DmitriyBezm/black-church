import React from 'react';
import { DEFAULT_ICON_COLOR } from './constants';

export function TriangleIcon({ className, fill = DEFAULT_ICON_COLOR }) {
  return (
    <svg className={className} width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 9L0.937823 0.75L13.0622 0.749999L7 9Z" fill={fill} />
    </svg>
  );
}
