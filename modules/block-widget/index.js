module.exports = {
  extend: '@apostrophecms/widget-type',
  fields: {
    add: {
      image: {
        label: 'Background Image',
        type: 'area',
        options: {
          max: 1,
          widgets: {
            '@apostrophecms/image': {}
          }
        }
      },
      content: {
        label: 'Content',
        type: 'area',
        options: {
          widgets: {
            text: {},
            list: {}
          }
        }
      },
      isRegistrationBlock: {
        label: 'Is Registration Block?',
        type: 'boolean',
        def: false
      }
    }
  }
};
