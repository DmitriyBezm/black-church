import React from 'react';
import classNames from 'classnames';
import { Card } from '../card';
import { Typography } from '../../typography';
import './styles.less';

export function CardWithTabs({
  className,
  tabs = [],
  content = {},
  active,
  footer,
}) {
  const first = Object.keys(content);
  const component = content[active || first] || {};

  return (
    <Card className={classNames({
      [className]: className,
      'card-with-tabs': true,
    })}
    >
      <div className="card-with-tabs__head">
        {tabs.map(({ title, id, onClick }) => (
          <div
            key={id}
            onClick={onClick}
            className={
            classNames({
              'card-with-tabs__tab': true,
              'card-with-tabs__tab--active': active === id,
            })
          }
          >
            <Typography.SPAN
              light
              level={6}
            >
              {title}
            </Typography.SPAN>
          </div>
        ))}
      </div>
      <div className="card-with-tabs__content">
        {component && (
          component
        )}
      </div>
      {footer && (
        <div className="card-with-tabs__footer">
          {footer}
        </div>
      )}
    </Card>
  );
}
