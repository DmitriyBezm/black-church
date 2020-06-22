import React from 'react';
import { DEFAULT_ICON_COLOR } from './constants';

export function EyeIcon({ className, fill = DEFAULT_ICON_COLOR }) {
  return (
    <svg className={className} width="28" height="19" viewBox="0 0 28 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M27.4168 9.5C27.4168 9.5 22.7502 18.4062 14.0002 18.4062C5.25016 18.4062 0.583496 9.5 0.583496 9.5C0.583496 9.5 5.25016 0.59375 14.0002 0.59375C22.7502 0.59375 27.4168 9.5 27.4168 9.5Z" stroke={fill} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 14.8438C16.8995 14.8438 19.25 12.4513 19.25 9.5C19.25 6.54873 16.8995 4.15625 14 4.15625C11.1005 4.15625 8.75 6.54873 8.75 9.5C8.75 12.4513 11.1005 14.8438 14 14.8438Z" stroke={fill} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
