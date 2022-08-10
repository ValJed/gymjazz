module.exports = {
  apps: [ {
    name: 'gymjazz',
    script: 'npm run build && npm run start',
    watch: false,
    instance_var: 'INSTANCE_ID'
  } ],
  deploy: {
    production: {
      user: 'SSH_USERNAME',
      host: 'SSH_HOSTMACHINE',
      ref: 'origin/master',
      repo: 'GIT_REPOSITORY',
      path: 'DESTINATION_PATH',
      'pre-deploy-local': '',
      'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};
