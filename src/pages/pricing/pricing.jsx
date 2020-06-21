import React from 'react';
import {
  Layout,
  Header,
  Feedback,
  ActionText,
  List,
  Typography,
} from 'components';
import './styles.less';
import { FEEDBACK } from 'constants';
import { PRICING_OPTIONS_FIRST, PRICING_OPTIONS_LAST, FEATURE_LIST } from './constants';

export function Pricing() {
  return (
    <Layout.Landing
      className="pricing-page"
      header={(
        <Header withBorder />
      )}
    >
      <section className="pricing-page__intro">
        <div className="container">
          <ActionText
            className="pricing-page__intro-text"
            title="Start your black church’s amazing website and management portal for free!"
            text="Black ChMS is a new church website builder and management software used to create high quality sites in minutes. Manage your entire church organization for one low monthly fee. No extra charges ever!"
            buttonTitle="Try for free"
          />
        </div>
      </section>
      <section className="pricing-page__plan">
        <div className="container pricing-page__plan-container">
          <div className="row row--sm row--align-start pricing-page__plan-cost">
            <div className="pricing-page__price-wrap column column--with-offsets column--flex">
              <div className="pricing-page__price">
                <h1 className="pricing-page__price-title">$50</h1>
                <p className="pricing-page__price-text">per month</p>
              </div>
            </div>
            <div className="column column--with-offsets column--flex">
              <List
                className="pricing-page__options"
                data={PRICING_OPTIONS_FIRST}
              />
            </div>
            <div className="column column--with-offsets column--flex">
              <List
                className="pricing-page__options"
                data={PRICING_OPTIONS_LAST}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="pricing-page__features">
        <div className="container">
          <Typography.H2 className="pricing-page__features-title">
            Features
          </Typography.H2>
          <div className="pricing-page__features-list">
            {FEATURE_LIST.map(({ id, title, list }) => (
              <div className="pricing-page__features-feature" key={id}>
                <List
                  className="pricing-page__features-options"
                  title={title}
                  data={list}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="pricing-page__feedback">
        <div className="container">
          <Feedback actions {...FEEDBACK} />
        </div>
      </section>
    </Layout.Landing>
  );
}
