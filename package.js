Package.describe({
  summary: "Accounts service for Yammer accounts"
});

Package.on_use(function(api) {
  api.use('accounts-base', ['client', 'server']);
  api.use('accounts-oauth', ['client', 'server']);
  api.use('yammer', ['client', 'server']);

  // v0.6.5
  // Export Accounts (etc) to packages using this one.
  api.imply('accounts-base', ['client', 'server']);
  api.use('yammer', ['client', 'server']);

  api.add_files(['yammer_login_button.css'], 'client');

  api.add_files('yammer_common.js', ['client', 'server']);
  api.add_files('yammer_server.js', 'server');
  api.add_files('yammer_client.js', 'client');
});
