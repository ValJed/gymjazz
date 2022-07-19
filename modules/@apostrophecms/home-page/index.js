module.exports = {
  options: {
    label: 'Home Page'
  },
  fields: {
    add: {
      title: {
        label: 'Title',
        type: 'string',
        required: true
      },
      description: {
        label: 'Description',
        type: 'string',
        required: true
      },
      inscription_btn: {
        label: 'Inscription Button Text',
        type: 'string'
      },
      description_block: {
        type: 'area',
        options: {
          widgets: {
            description: {},
            list: {}
          }
        }
      },
      incription_block: {
        type: 'area',
        options: {
          widgets: {
            description: {},
            list: {}
          }
        }
      }
    }
  },
  group: {
    basics: {
      label: 'Basics',
      fields: [
        'title',
        'main'
      ]
    }
  }
};
