import React from 'react';
import classNames from 'classnames';
import { Header } from '../header';
import { TryForFree } from '../try-for-free';
import { Footer } from '../footer';
import './styles.less';

export function Layout({ children, className }) {
  return (
    <div className={classNames({
      [className]: className,
      layout: true,
    })}
    >
      <Header />
      <main className="layout__content">
        {children}
      </main>
      <TryForFree />
      <Footer />
    </div>
  );
}
