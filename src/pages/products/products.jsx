import React from 'react';
import {
  Layout,
  Header,
  ActionText,
  CmsPreview,
} from 'components';
import { CMS_IMAGE_IDS } from 'constants';
import './styles.less';

import deeperPreview from 'images/mockups/preview/deeper-life.jpg';
import exodusPreview from 'images/mockups/preview/exodus.jpg';
import loveWorld from 'images/mockups/preview/love-world.jpg';
import samarithan from 'images/mockups/preview/the-good-samarithan.jpg';
import living from 'images/mockups/preview/living-faith.jpg';
import peters from 'images/mockups/preview/ministries.jpg';

const VIEWS = [
  {
    id: 0,
    previewSrc: peters,
    link: CMS_IMAGE_IDS.PETERS_ROCK,
    title: 'Peter’s Rock Ministries',
    to: 'peters-rock',
    theme: CmsPreview.Theme.RED,
  },
  {
    id: 1,
    previewSrc: living,
    link: CMS_IMAGE_IDS.LIVING_FAITH,
    title: 'Living Faith',
    to: 'living-faith',
  },
  {
    id: 2,
    previewSrc: loveWorld,
    link: CMS_IMAGE_IDS.LOVE_WORLD,
    title: 'Love World',
    to: 'love-world',
    theme: CmsPreview.Theme.YELLOW,
  },
  {
    id: 3,
    previewSrc: samarithan,
    link: CMS_IMAGE_IDS.SAMARITHAN,
    title: 'The Good Samarithan',
    theme: CmsPreview.Theme.TURQUOISE,
  },
  {
    id: 4,
    previewSrc: deeperPreview,
    link: CMS_IMAGE_IDS.DEEPER,
    title: 'Deeper list',
    theme: CmsPreview.Theme.VIOLET,
  },
  {
    id: 5,
    previewSrc: exodusPreview,
    link: CMS_IMAGE_IDS.EXODUS,
    title: 'Exodus',
    theme: CmsPreview.Theme.BLUE,
  },
];

export function Products() {
  return (
    <Layout.Landing
      className="products-page"
      header={(
        <Header withBorder authorized />
      )}
    >
      <section className="products-page__intro">
        <div className="container">
          <ActionText
            className="products-page__intro-text"
            title="See our beautiful templates used by Black Churches Worldwide"
            buttonTitle="Try for free"
          />
        </div>
      </section>
      <section className="products-page__products">
        <div className="container">
          <div className="row row--wrap row--justify-between">
            {VIEWS.map(({ id, ...rest }) => (
              <div className="products-page__preview column column--flex column--with-offsets" key={id}>
                <CmsPreview {...rest} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout.Landing>
  );
}
