import React from 'react';
import { DEFAULT_ICON_COLOR } from './constants';

export function BinIcon({ className, fill = DEFAULT_ICON_COLOR }) {
  return (
    <svg className={className} width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.5 3.5H19.5" stroke={fill} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8.31 0.5H11.69C12.3026 0.5 12.8902 0.743374 13.3234 1.17658C13.7566 1.60979 14 2.19735 14 2.81V3.5H6V2.81C6 2.19735 6.24337 1.60979 6.67658 1.17658C7.10979 0.743374 7.69735 0.5 8.31 0.5V0.5Z" stroke={fill} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 7.5V19.5" stroke={fill} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 7.5V19.5" stroke={fill} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 7.5V19.5" stroke={fill} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14.15 23.5H5.85999C5.08966 23.501 4.34847 23.2056 3.78998 22.675C3.23149 22.1445 2.8985 21.4194 2.85999 20.65L2 3.5H18L17.14 20.65C17.1016 21.4177 16.77 22.1412 16.2136 22.6715C15.6573 23.2018 14.9186 23.4984 14.15 23.5V23.5Z" stroke={fill} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
