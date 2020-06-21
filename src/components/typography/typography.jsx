import React from 'react';
import classNames from 'classnames';
import './styles.less';

const TAGS = {
  H1: 'h1',
  H2: 'h2',
  H3: 'h3',
  H4: 'h4',
  H5: 'h5',
  H6: 'h6',
  P: 'p',
  SPAN: 'span',
};

const LEVELS = {
  1: 'level-1',
  2: 'level-2',
  3: 'level-3',
  4: 'level-4',
  5: 'level-5',
  6: 'level-6',
};

function createTypography(Tag = TAGS.H1, defaultLevel) {
  const Component = function TypographyElement({
    children,
    second,
    className,
    level,
    brown,
    bold,
    normal,
    black,
    uppercase,
    primary,
  }) {
    const modifier = LEVELS[level || defaultLevel];
    return (
      <Tag className={
        classNames({
          [className]: className,
          typography: true,
          [`typography--${modifier}`]: modifier,
          'typography--family-second': second,
          'typography--brown': brown,
          'typography--bold': bold,
          'typography--normal': normal,
          'typography--black': black,
          'typography--primary': primary,
          'typography--uppercase': uppercase,
        })
      }
      >
        {children}
      </Tag>
    );
  };

  Component.displayName = `Typography(${Tag.toUpperCase()})`;
  return Component;
}

export const Typography = createTypography(TAGS.H1, 1);

Typography.H1 = createTypography(TAGS.H1, 1);
Typography.H2 = createTypography(TAGS.H2, 2);
Typography.H3 = createTypography(TAGS.H3, 3);
Typography.H4 = createTypography(TAGS.H4, 4);
Typography.H5 = createTypography(TAGS.H5, 5);
Typography.H6 = createTypography(TAGS.H6, 6);
Typography.P = createTypography(TAGS.P);
Typography.SPAN = createTypography(TAGS.SPAN);
