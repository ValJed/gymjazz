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
      banner_img: {
        label: 'Banner Image',
        type: 'area',
        options: {
          max: 1,
          widgets: {
            '@apostrophecms/image': {}
          }
        }
      },
      content: {
        label: 'Page Content',
        type: 'area',
        options: {
          widgets: {
            block: {}
          }
        }
      }
    },
    group: {
      basics: {
        label: 'Basics',
        fields: [
          'title',
          'description',
          'inscription_btn',
          'banner_img',
          'content'
        ]
      }
    }
  }
};
