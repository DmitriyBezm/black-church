import React from 'react';
import { DEFAULT_ICON_COLOR } from './constants';

export function FacebookIcon({ className, fill = DEFAULT_ICON_COLOR }) {
  return (
    <svg className={className} width="8" height="18" viewBox="0 0 8 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 5.81102H5.28814V3.9685C5.28814 3.25984 5.76271 3.11811 6.0339 3.11811C6.37288 3.11811 7.9322 3.11811 7.9322 3.11811V0H5.28814C2.30508 0 1.69492 2.33858 1.69492 3.75591V5.81102H0V9H1.69492C1.69492 13.1102 1.69492 18 1.69492 18H5.28814C5.28814 18 5.28814 13.0394 5.28814 9H7.72881L8 5.81102Z" fill={fill} />
    </svg>
  );
}
