Package.describe({
  name: 'mobylogix:react-accounts',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'React user accounts managment package.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/mobylogix/react-accounts',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use([
    'ecmascript',
    'react',
    'twbs:bootstrap',
    'kadira:flow-router',
    'fortawesome:fontawesome',
    'service-configuration',
    'check'
  ], 'client');

  api.addFiles([
    'client/stylesheets/style.css',
    'client/lib/init.js',
    'client/components/login.jsx',
    'client/components/register.jsx',
    'client/components/forgot-password.jsx',
    'client/components/reset-password.jsx'
  ], 'client');

  api.addFiles([
    'lib/accounts.js'
  ], 'server');

  api.export('Accounts', 'client');
});
