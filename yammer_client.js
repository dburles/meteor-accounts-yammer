Meteor.loginWithYammer = function (options, callback) {
  var credentialRequestCompleteCallback = Accounts.oauth.credentialRequestCompleteHandler(callback);
  Yammer.requestCredential(options, credentialRequestCompleteCallback);
};
