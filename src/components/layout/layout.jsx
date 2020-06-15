import React from 'react';
import classNames from 'classnames';
import { Header } from '../header';
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
      <footer className="layout__footer">
        Footer
      </footer>
    </div>
  );
}
