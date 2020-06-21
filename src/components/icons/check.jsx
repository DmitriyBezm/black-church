import React from 'react';
import { DEFAULT_ICON_COLOR } from './constants';

export function CheckIcon({ className, fill = DEFAULT_ICON_COLOR }) {
  return (
    <svg className={className} width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M3.5 8L0 4.5L1.41 3.09L3.5 5.17L8.68 0L10.09 1.41L3.5 8Z" fill={fill} />
    </svg>
  );
}
