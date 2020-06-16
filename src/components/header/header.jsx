import React from 'react';
import { Button } from '../button';
import './styles.less';

export function Header() {
  return (
    <header className="header">
      <div className="header__content container row row--full-height row--justify-between">
        <div className="column row">
          <a href="/" className="header__logo">
            Black ChMS
          </a>
          <nav className="header__navigation row">
            <a href="#" className="link header__link column column--with-offsets">
              Products
            </a>
            <a href="#" className="link header__link column column--with-offsets">
              Pricing
            </a>
            <a href="#" className="link header__link column column--with-offsets">
              Learn
            </a>
          </nav>
        </div>
        <div className="row">
          <div className="column column--with-offsets">
            <Button.Action
              className="header__button"
              theme={Button.Theme.WHITE}
              size={Button.Size.SMALL}
            >
              Sign Up Free
            </Button.Action>
          </div>
          <div className="column column--with-offsets">
            <Button
              className="header__button"
              size={Button.Size.SMALL}
            >
              Log In
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
