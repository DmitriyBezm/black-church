import React from 'react';
import classNames from 'classnames';
import './styles.less';

export function InputWrap({
  className,
  error,
  warning,
  disabled,
  readonly,
  focused,
  children,
  label,
}) {
  return (
    <div
      className={classNames({
        [className]: className,
        input: true,
        'input--focus': focused,
        'input--error': error,
        'input--warning': warning,
        'input--disabled': disabled,
        'input--readonly': readonly,
      })}
    >
      <span className="input__label">{label}</span>
      <div className="input__field">
        {children}
      </div>
    </div>
  );
}
