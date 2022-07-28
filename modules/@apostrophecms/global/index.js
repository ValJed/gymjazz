module.exports = {
  fields: {
    add: {
      footer_text: {
        label: 'Footer Text',
        type: 'string',
        required: true
      },
      footer_legalText: {
        label: 'Legal Notice Text',
        type: 'string',
        required: true
      },
      _legalPageLink: {
        label: 'Link to legal notice page',
        type: 'relationship',
        withType: '@apostrophecms/page',
        max: 1,
        builders: {
          project: {
            _url: 1
          }
        }
      }
    },
    group: {
      footer: {
        label: 'Footer',
        fields: [
          'footer_text',
          'footer_legalText',
          '_legalPageLink'
        ]
      }
    }
  }
};
