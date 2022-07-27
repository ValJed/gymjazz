const richTextOptions = require('../../lib/rich-text.js');

module.exports = {
  extend: '@apostrophecms/widget-type',
  fields: {
    add: {
      title: {
        label: 'Title',
        type: 'string',
        required: true
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
      },
      buttons: {
        label: 'Buttons',
        type: 'array',
        fields: {
          add: {
            text: {
              label: 'Button Text',
              type: 'string',
              required: true
            },
            _files: {
              label: 'Link to File',
              type: 'relationship',
              withType: '@apostrophecms/file',
              max: 1
              // builders: {
              //   project: {
              //     _url: 1
              //   }
              // }
            }
          }
        }
      }
    }
  }
};
