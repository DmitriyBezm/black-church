import React from 'react';
import { CheckIcon } from 'components/icons';
import classNames from 'classnames';
import { Typography } from '../typography';
import './styles.less';

export function List({
  title,
  data,
  className,
}) {
  return (
    <div className={classNames({ [className]: className, list: true })}>
      {title && (
        <Typography.H5
          uppercase
          className="list__title"
        >
          {title}
        </Typography.H5>
      )}
      <ul className="list__wrap">
        {data.map(({ id, title: listItem }) => (
          <li className="list__item row row--align-start" key={id}>
            <div className="column">
              <CheckIcon className="list__item-icon" />
            </div>
            <div className="column column--with-offsets">
              <Typography.P className="list__item-text">
                {listItem}
              </Typography.P>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
