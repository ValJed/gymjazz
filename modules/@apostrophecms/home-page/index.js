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
            text: {},
            list: {}
          }
        }
      },
      incription_block: {
        type: 'area',
        options: {
          widgets: {
            text: {},
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
