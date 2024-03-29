import React from 'react';
import { Typography } from '../typography';
import { Button } from '../button';
import './styles.less';

export function TryForFree() {
  return (
    <div className="try-for-free">
      <div className="container">
        <div className="row row--sm">
          <div className="column column--with-offsets column--flex">
            <Typography.H2 className="try-for-free__title">
              Try for free!
            </Typography.H2>
            <Typography.P
              className="try-for-free__note"
              brown
            >
              Black ChMS is a new church website builder and management software
              used to create high quality sites in minutes.
              Manage your entire church organization for one low monthly fee.
              No extra charges ever!
            </Typography.P>
          </div>
          <div className="column column--with-offsets column--flex">
            <div className="row row--justify-end row--sm try-for-free__buttons">
              <div className="column column--with-offsets try-for-free__button">
                <Button.SignUp />
              </div>
              <div className="column column--with-offsets try-for-free__button">
                <Button.Login />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
