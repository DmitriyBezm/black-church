import React from 'react';
import classNames from 'classnames';
import { Input } from '../input';
import './styles.less';

export function WithButton({
  onClick,
  className,
  icon: Icon,
  ...rest
}) {
  return (
    <div className={classNames({
      [className]: className,
      'input-with-button': true,
    })}
    >
      <Input
        className="input-with-button__field"
        {...rest}
      />
      {/* eslint-disable-next-line react/button-has-type */}
      <button
        className="input-with-button__button"
        onClick={onClick}
      >
        <Icon className="input-with-button__button-icon" />
      </button>
    </div>
  );
}
