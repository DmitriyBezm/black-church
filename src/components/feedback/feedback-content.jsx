import React from 'react';
import { Typography } from '../typography';
import { Button } from '../button';

export function FeedbackContent({
  userPosition,
  username,
  message,
  actions,
  profileUrl,
}) {
  return (
    <div className="row row--align-start row--sm">
      <div className="feedback__avatar">
        <img className="feedback__avatar-img" src={profileUrl} alt="profile" />
      </div>
      <div className="feedback__content">
        <Typography.H6
          className="feedback__content-title"
          brown
          normal
        >
          <Typography.SPAN
            className="feedback__username"
            bold
          >
            {username}
          </Typography.SPAN>
          {' '}
          {userPosition}
        </Typography.H6>
        <Typography.P className="feedback__message">
          {message}
        </Typography.P>
        {actions && (
        <div className="row row--sm feedback__buttons">
          <div className="column column--with-offsets">
            <Button className="feedback__button">
              See more reviews
            </Button>
          </div>
          <div className="column column--with-offsets">
            <Button.Action theme={Button.Theme.WHITE} className="feedback__button">
              Start on Instant Demo
            </Button.Action>
          </div>
        </div>
        )}
      </div>
    </div>
  );
}
