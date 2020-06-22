import React from 'react';
import { DEFAULT_ICON_COLOR } from './constants';

export function CheckboxEmptyIcon({ className, fill = DEFAULT_ICON_COLOR }) {
  return (
    <svg className={className} width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.5" y="0.5" width="21" height="21" rx="2.5" stroke={fill} />
    </svg>
  );
}
