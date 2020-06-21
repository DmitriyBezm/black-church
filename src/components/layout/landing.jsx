import React from 'react';
import { TryForFree } from '../try-for-free';
import { Layout } from './layout';

export function Landing({ ...props }) {
  return (
    <Layout
      {...props}
      footer
      additional={(
        <TryForFree />
      )}
    />
  );
}
