import React from 'react';
import { createElement } from 'utils';
import { Header } from '../header';
import { Footer } from '../footer';
import { Landing } from './landing';
import { Root } from './root';
import './styles.less';

const THEME = {
  BG_PRIMARY_LIGHT: 'bg-primary-light',
};

const LayoutContent = createElement('layout__content', { tag: 'main' });
const ContentWrap = createElement('layout__wrapper', { tag: 'section' });

export function Layout({
  children,
  header,
  footer,
  additional,
  ...props
}) {
  return (
    <Root {...props}>
      {header || <Header />}
      <LayoutContent>
        {children}
      </LayoutContent>
      {additional}
      {footer && (
        <Footer />
      )}
    </Root>
  );
}

Layout.Root = Root;
Layout.Content = LayoutContent;
Layout.Wrapper = ContentWrap;

Layout.Landing = Landing;
Layout.Theme = THEME;
