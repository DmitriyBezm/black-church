const {
  override,
  addLessLoader,
  addWebpackAlias,
} = require('customize-cra');

const path = require('path');

module.exports = override(
  addWebpackAlias({
    src: path.resolve(__dirname, 'src/'),
    components: path.resolve(__dirname, 'src/components/'),
    images: path.resolve(__dirname, 'src/assets/images'),
    utils: path.resolve(__dirname, 'src/utils'),
    constants: path.resolve(__dirname, 'src/constants'),
  }),
  addLessLoader({
    javascriptEnabled: true,
  }),
);
