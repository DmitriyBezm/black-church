import React from 'react';
import { DEFAULT_ICON_COLOR } from './constants';

export function ArrowIcon({ className, fill = DEFAULT_ICON_COLOR }) {
  return (
    <svg className={className} width="22" height="13" viewBox="0 0 22 13" fill="none">
      <path d="M15 11.75L21 6.5L15 1.25" stroke={fill} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M21 6.5H1" stroke={fill} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
