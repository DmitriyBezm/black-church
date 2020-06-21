import React from 'react';
import classNames from 'classnames';
import { CardContent } from './card-content';
import './styles.less';

export function Card({ children, className }) {
  return (
    <div className={classNames({
      [className]: className,
      card: true,
    })}
    >
      {children}
    </div>
  );
}

Card.Content = CardContent;
