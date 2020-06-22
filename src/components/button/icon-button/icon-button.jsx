import React from 'react';
import classNames from 'classnames';
import './styles.less';

export function IconButton({ className, children, onClick }) {
  return (
    <button
      className={
      classNames({
        [className]: className,
        'icon-button': true,
      })
    }
      onClick={onClick}
    >
      {children}
    </button>
  );
}
