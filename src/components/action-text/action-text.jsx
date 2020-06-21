import React from 'react';
import { Typography, Button } from 'components';
import classNames from 'classnames';
import './styles.less';

export function ActionText({
  title,
  text,
  buttonTitle,
  onButtonClick,
  className,
}) {
  return (
    <div className={classNames({ 'action-text': true, [className]: className })}>
      <Typography.H2 className="action-text__title">
        {title}
      </Typography.H2>
      {text && (
        <Typography.P className="action-text__text">
          {text}
        </Typography.P>
      )}
      {buttonTitle && (
        <Button
          className="action-text__button"
          onClick={onButtonClick}
        >
          {buttonTitle}
        </Button>
      )}
    </div>
  );
}
