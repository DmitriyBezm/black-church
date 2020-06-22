import React from 'react';
import { DEFAULT_ICON_COLOR } from './constants';

export function CheckboxIcon({ className, fill = DEFAULT_ICON_COLOR }) {
  return (
    <svg className={className} width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="1" y="1" width="20" height="20" rx="2" stroke={fill} strokeWidth="2" />
      <g clipPath="url(#clip0)">
        <path d="M5.271 11.5L10.146 15.7353L17.7293 7.26471" stroke={fill} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="13" height="9" fill="white" transform="translate(5 7)" />
        </clipPath>
      </defs>
    </svg>
  );
}
