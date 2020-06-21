import React from 'react';
import { createElement } from 'utils';
import { Typography } from '../typography';
import { FeedbackContent } from './feedback-content';
import './styles.less';

const Wrap = createElement('feedback');

export function Feedback({
  title,
  className,
  ...rest
}) {
  return (
    <Wrap>
      <div className="feedback__inner">
        <Typography.H3 className="feedback__title">
          {title}
        </Typography.H3>
        <FeedbackContent
          {...rest}
        />
      </div>
    </Wrap>
  );
}

Feedback.Wrap = Wrap;
Feedback.Content = FeedbackContent;
