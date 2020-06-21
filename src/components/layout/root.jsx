import React from 'react';
import classNames from 'classnames';

export function Root({
  children,
  className,
  theme,
}) {
  return (
    <div className={classNames({
      [className]: className,
      layout: true,
      [`layout--${theme}`]: theme,
    })}
    >
      {children}
    </div>
  );
}
