import React from 'react';
import { DEFAULT_ICON_COLOR } from './constants';

export function CopyIcon({ className, fill = DEFAULT_ICON_COLOR }) {
  return (
    <svg className={className} width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.5 0.5H1.5C0.947715 0.5 0.5 0.947715 0.5 1.5V18.5C0.5 19.0523 0.947715 19.5 1.5 19.5H14.5C15.0523 19.5 15.5 19.0523 15.5 18.5V1.5C15.5 0.947715 15.0523 0.5 14.5 0.5Z" stroke={fill} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M17.5 4.5H18.5C18.7652 4.5 19.0196 4.60537 19.2072 4.79291C19.3947 4.98044 19.5 5.23478 19.5 5.5V22.5C19.5 22.7652 19.3947 23.0196 19.2072 23.2071C19.0196 23.3946 18.7652 23.5 18.5 23.5H5.5C5.23478 23.5 4.98038 23.3946 4.79285 23.2071C4.60531 23.0196 4.5 22.7652 4.5 22.5V21.5" stroke={fill} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
