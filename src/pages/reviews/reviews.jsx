import React from 'react';
import {
  Layout,
  Header,
  ActionText,
  Feedback,
} from 'components';
import { FEEDBACK_LIST } from 'constants';
import reviews from 'images/reviews.png';
import './styles.less';

export function Reviews() {
  return (
    <Layout.Landing
      className="reviews-page"
      header={(
        <Header withBorder />
      )}
    >
      <section className="reviews-page__intro">
        <div className="container">
          <div className="row row--sm-reverse row--justify-between">
            <div className="column column--with-offsets">
              <ActionText
                className="reviews-page__intro-text"
                title="Reviews of Black ChMS"
                buttonTitle="Try for free"
              />
            </div>
            <div className="column column--with-offsets">
              <img
                className="reviews-page__intro-img"
                src={reviews}
                alt="reviews"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="reviews-page__reviews">
        <div className="container">
          {FEEDBACK_LIST.map(({ id, feedback }) => (
            <Feedback.Wrap
              className="reviews-page__feedback"
              key={id}
            >
              <Feedback.Content
                {...feedback}
              />
            </Feedback.Wrap>
          ))}
        </div>
      </section>
    </Layout.Landing>
  );
}
