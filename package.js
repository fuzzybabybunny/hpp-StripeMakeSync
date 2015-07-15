Package.describe({
  name: 'hpp:stripe-makesync',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Make Stripe methods synchronous and return original errors.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/fuzzybabybunny/hpp-stripe-makesync',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({ 'stripe': '3.5.0' });

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.0');

  api.use('underscore', 'server');
  api.use('hpp:makesync', 'server');

  api.addFiles('stripemakesync.js', 'server');

  api.export('StripeMakeSync', 'server');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('hpp:stripemakesync');
  api.addFiles('stripemakesync-tests.js');
});