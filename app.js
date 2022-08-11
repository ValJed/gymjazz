require('dotenv').config();

require('apostrophe')({
  shortName: 'gymjazz',
  modules: {
    // Apostrophe module configuration
    // *******************************
    //
    // NOTE: most configuration occurs in the respective modules' directories.
    // See modules/@apostrophecms/page/index.js for an example.
    //
    // Any modules that are not present by default in Apostrophe must at least
    // have a minimal configuration here to turn them on: `moduleName: {}`
    // ***********************************************************************
    // `className` options set custom CSS classes for Apostrophe core widgets.
    //
    '@apostrophecms/seo': {},
    '@apostrophecms/rich-text-widget': {
      options: {
        className: 'apos-rich-text'
      }
    },
    '@apostrophecms/image-widget': {
      options: {
        className: 'apos-image-widget'
      }
    },
    // `asset` supports the project's webpack build for client-side assets.
    asset: {},
    // The project's first custom page type.
    'default-page': {},
    'list-widget': {},
    'text-widget': {},
    'map-widget': {},
    'block-widget': {},
    'contact-widget': {}
  }
});
