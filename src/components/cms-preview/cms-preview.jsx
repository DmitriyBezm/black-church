import React from 'react';
import classNames from 'classnames';
import { ROUTES } from 'constants';
import { Card } from '../card';
import { Typography } from '../typography';
import { Button } from '../button';
import './styles.less';

const THEME = {
  TURQUOISE: 'turquoise',
  BLUE: 'blue',
  VIOLET: 'violet',
  RED: 'red',
  YELLOW: 'yellow',
};

export function CmsPreview({
  className,
  title,
  theme,
  previewSrc,
  link,
}) {
  return (
    <Card className={classNames({
      [className]: className,
      'cms-preview': true,
      [`cms-preview--theme-${theme}`]: theme,
    })}
    >
      <div className="cms-preview__cover">
        <img className="cms-preview__image" src={previewSrc} alt="cms-layout" />
      </div>
      <div className="cms-preview__name">
        <div className="column column--align-center column--flex">
          <Typography.H4
            className="cms-preview__title"
            second
            normal
          >
            {title}
          </Typography.H4>
          <Button
            theme={Button.Theme.OUTLINE}
            size={Button.Size.EXTRA_SMALL}
            to={`${ROUTES.PRODUCTS}/${link}`}
            target="_blank"
          >
            View
          </Button>
        </div>
      </div>
    </Card>
  );
}

CmsPreview.Theme = THEME;
