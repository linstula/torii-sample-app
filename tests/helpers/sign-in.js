import Ember from 'ember';

var registerAsyncHelper = Ember.Test.registerAsyncHelper;
var signInLinkSelector = "a:contains('Sign in')";

registerAsyncHelper('signIn', function(app) {
    var successReturnValue = {
      'access_token': 'dummy-token'
    };

    var toriiPopup = app.__container__.lookup('torii-service:popup');
    toriiPopup.open = function() {
      return Ember.RSVP.resolve(successReturnValue);
    };

    return click(signInLinkSelector);
});
