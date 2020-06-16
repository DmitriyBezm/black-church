import React from 'react';
import profile from 'images/profile.jpg';
import { Typography } from '../typography';
import { Button } from '../button';
import './styles.less';

const DEFAULT_PROPS = {
  title: 'Join our 1000+ happy black churches using Black ChMS',
  profileUrl: profile,
  username: 'Mikle P.',
  userPosition: 'Meeker United Methodist Church',
  message: `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat.
    Duis aute irure dolor in.
  `,
};

export function Feedback({
  profileUrl,
  userPosition,
  username,
  message,
  title,
}) {
  return (
    <div className="feedback">
      <Typography.H3 className="feedback__title">
        {title}
      </Typography.H3>
      <div className="row row--align-start">
        <div className="feedback__avatar">
          <img src={profileUrl} alt="profile" />
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
          <div className="row">
            <div className="column column--with-offsets">
              <Button>
                See more reviews
              </Button>
            </div>
            <div className="column column--with-offsets">
              <Button.Action theme={Button.Theme.WHITE}>
                Start on Instant Demo
              </Button.Action>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Feedback.defaultProps = DEFAULT_PROPS;
