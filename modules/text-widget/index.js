const richTextOptions = require('../../lib/rich-text.js');

module.exports = {
  extend: '@apostrophecms/widget-type',
  fields: {
    add: {
      title: {
        label: 'Title',
        type: 'string'
      },
      content: {
        label: 'Text Content',
        type: 'area',
        options: {
          max: 1,
          widgets: {
            '@apostrophecms/rich-text': richTextOptions
          }
        }
      }
    }
  }
};
