import React from 'react';
import classNames from 'classnames';

export function createElement(element, {
  tag: Tag = 'div',
  attributes,
}) {
  function Component({
    children,
    className,
  }) {
    return (
      <Tag
        {...attributes}
        className={classNames({
          [className]: className,
          [element]: true,
        })}
      >
        {children}
      </Tag>
    );
  }

  Component.displayName = `element(${element.toUpperCase()})`;

  return Component;
}
