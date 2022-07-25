const richTextOptions = require('../../lib/rich-text.js');

module.exports = {
  extend: '@apostrophecms/widget-type',
  fields: {
    add: {
      items: {
        label: 'Item',
        type: 'array',
        fields: {
          add: {
            title: {
              label: 'Title',
              type: 'string',
              requied: true
            },
            text: {
              label: 'Text',
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
      }
    }
  }
};
