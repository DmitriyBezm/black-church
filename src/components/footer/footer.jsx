import React from 'react';
import { Typography } from '../typography';
import { FOOTER_LINKS } from './constants';
import './styles.less';

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row row--align-start row--sm">
          {FOOTER_LINKS.map(({ links, section, id }) => (
            <ul className="footer__links column column--with-offsets" key={id}>
              <Typography.H6 className="footer__links-section" uppercase>
                {section}
              </Typography.H6>
              {links.map(({ id, title, url }) => (
                <li className="footer__link-item" key={id}>
                  <a className="footer__link" href={url}>
                    {title}
                  </a>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </footer>
  );
}
