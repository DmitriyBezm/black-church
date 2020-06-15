import React from 'react';
import { ArrowIcon } from 'components/icons';
import classNames from 'classnames';
import { Button } from '../button';
import './styles.less';

export function ActionButton({
  children,
  className,
  ...props
}) {
  return (
    <Button
      {...props}
      className={
        classNames({
          [className]: className,
          'action-button': true,
        })
      }
    >
      <span className="action-button__text">{children}</span>
      <ArrowIcon className="action-button__icon" />
    </Button>
  );
}
