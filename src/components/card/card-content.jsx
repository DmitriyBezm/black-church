import React from 'react';
import './styles.less';
import classNames from 'classnames';

export function CardContent({ children, className }) {
  return (
    <div className={classNames({
      [className]: className,
      card__content: true,
    })}
    >
      {children}
    </div>
  );
}
