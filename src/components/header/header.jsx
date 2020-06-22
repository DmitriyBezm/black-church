import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from 'constants';
import classNames from 'classnames';
import { Button } from '../button';
import { Menu } from '../menu';
import './styles.less';

export function Header({ withBorder, authorized = true }) {
  return (
    <header className={classNames({
      header: true,
      'header--with-border': withBorder,
    })}
    >
      <div className="header__content container row row--full-height row--justify-between">
        <div className="column row">
          <Link to="/" className="header__logo">
            Black ChMS
          </Link>
          <nav className="header__navigation row">
            <Link to={ROUTES.PRODUCTS} className="link header__link column column--with-offsets">
              Products
            </Link>
            <Link to={ROUTES.PRICING} className="link header__link column column--with-offsets">
              Pricing
            </Link>
            <Link to={ROUTES.LEARN} className="link header__link column column--with-offsets">
              Learn
            </Link>
          </nav>
        </div>
        <div className="row">
          {authorized
            ? (
              <React.Fragment>
                <div className="column column--with-offsets header__sign-buttons">
                  <Button.Action theme={Button.Theme.TEXT}>
                    Log Out
                  </Button.Action>
                </div>
                <div className="column column--with-offsets header__sign-buttons">
                  <Menu />
                </div>
              </React.Fragment>
            )
            : (
              <React.Fragment>
                <div className="column column--with-offsets header__sign-buttons">
                  <Button.SignUp className="header__button" />
                </div>
                <div className="column column--with-offsets header__sign-buttons">
                  <Button.Login className="header__button" />
                </div>
              </React.Fragment>
            )
          }
          <div className="header__menu-button">
            <Menu />
          </div>
        </div>
      </div>
    </header>
  );
}
