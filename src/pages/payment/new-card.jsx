import React from 'react';
import {
  Card, Typography, Input, Button,
} from 'components';
import { useHistory } from 'react-router-dom';

export function NewCard() {
  const history = useHistory();

  return (
    <Card.Content>
      <form>
        <Typography.H4 className="payment-page__title" normal>
          Create new card
        </Typography.H4>
        <div className="row row--sm">
          <div className="payment-page__row column--with-offsets column--flex column column--col-2">
            <Input
              label="Card Number"
              placeholder="Enter Card Number"
            />
          </div>
          <div className="payment-page__row column--with-offsets column--flex column column--col-3">
            <Input
              label="Exp. Date"
              placeholder="Enter Exp Date"
              type="date"
            />
          </div>
          <div className="payment-page__row column--with-offsets column--flex column column--col-1">
            <Input
              label="CVC"
              placeholder="Enter CVC"
            />
          </div>
        </div>
        <div className="row row--sm">
          <div className="payment-page__row column--with-offsets column--flex column column--col-2">
            <Input
              label="First Name"
              placeholder="Enter First Name"
            />
          </div>
          <div className="payment-page__row column--with-offsets column--flex column column--col-2">
            <Input
              label="Last Name"
              placeholder="Enter Last Name"
            />
          </div>
        </div>
        <div className="row row--sm payment-page__buttons row--justify-between">
          <div className="column column--with-offsets">
            <Button.Action
              reverse
              theme={Button.Theme.WHITE}
              onClick={() => history.replace('?tab=method')}
            >
              Back
            </Button.Action>
          </div>
          <div className="column column--with-offsets">
            <Button>
              Create
            </Button>
          </div>
        </div>
      </form>
    </Card.Content>
  );
}
