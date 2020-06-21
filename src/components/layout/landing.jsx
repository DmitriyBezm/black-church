import React from 'react';
import { Footer } from '../footer';
import { TryForFree } from '../try-for-free';
import { Layout } from './layout';

export function Landing({...props}) {
  return (
    <Layout
      {...props}
      footer={(
        <React.Fragment>
          <TryForFree />
          <Footer />
        </React.Fragment>
      )}
    />
  );
}
