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

const VIEWS = [
  {
    id: 3,
    previewSrc: loveWorld,
    link: CMS_IMAGE_IDS.LOVE_WORLD,
    title: 'Love World',
    theme: CmsPreview.Theme.RED,
    to: 'love-world',
  },
  {
    id: 4,
    previewSrc: samarithan,
    link: CMS_IMAGE_IDS.SAMARITHAN,
    title: 'The Good Samarithan',
    theme: CmsPreview.Theme.TURQUOISE,
  },
  {
    id: 0,
    previewSrc: deeperPreview,
    link: CMS_IMAGE_IDS.DEEPER,
    title: 'Deeper list',
    theme: CmsPreview.Theme.VIOLET,
  },
  {
    id: 1,
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
        <Header withBorder />
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
