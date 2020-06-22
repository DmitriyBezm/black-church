import React from 'react';
import {
  Layout,
  Header,
  Typography,
} from 'components';
import { useParams } from 'react-router-dom';
import { CMS_IMAGE_IDS } from 'constants';

import deeperImage from 'images/mockups/deeper-life.jpg';
import exodusImage from 'images/mockups/exodus.jpg';
import loveWorldImage from 'images/mockups/love-world.jpg';
import samarithanImage from 'images/mockups/the-good-samarithan.jpg';
import './styles.less';

export const IMAGES = {
  [CMS_IMAGE_IDS.DEEPER]: deeperImage,
  [CMS_IMAGE_IDS.EXODUS]: exodusImage,
  [CMS_IMAGE_IDS.LOVE_WORLD]: loveWorldImage,
  [CMS_IMAGE_IDS.SAMARITHAN]: samarithanImage,
};

export function Product() {
  const { id } = useParams();
  const url = IMAGES[id];

  return (
    <Layout.Landing
      className="product-page"
      header={(
        <Header withBorder />
      )}
    >
      <section className="product-page__intro">
        {url
          ? <img className="product-page__img" src={url} alt="deeper" />
          : <Typography.H2 second>Not Found</Typography.H2>}
      </section>
    </Layout.Landing>
  );
}
