import React from 'react';
import { DEFAULT_ICON_COLOR } from './constants';

export function CrossIcon({ className, fill = DEFAULT_ICON_COLOR }) {
  return (
    <svg className={className} width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M14 1.4L12.6 0L7 5.6L1.4 0L0 1.4L5.6 7L0 12.6L1.4 14L7 8.4L12.6 14L14 12.6L8.4 7L14 1.4Z" fill={fill} fillOpacity="0.54" />
    </svg>
  );
}
