import React from 'react';
import classNames from 'classnames';
import { Header } from '../header';
import { Footer } from '../footer';
import { Landing } from './landing';
import './styles.less';

export function Layout({
  children,
  className,
  header,
  footer,
}) {
  return (
    <div className={classNames({
      [className]: className,
      layout: true,
    })}
    >
      {header || <Header />}
      <main className="layout__content">
        {children}
      </main>
      {footer && (
        <Footer />
      )}
    </div>
  );
}

Layout.Landing = Landing;
