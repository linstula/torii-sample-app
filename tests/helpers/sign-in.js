import Ember from 'ember';

var signInLinkSelector = "a:contains('Sign in')";

export default function(App) {
  return function() {
    var successReturnValue = {
      'access_token': 'dummy-token'
    };

    var toriiPopup = App.__container__.lookup('torii-service:popup');
    toriiPopup.open = function() {
      return Ember.RSVP.resolve(successReturnValue);
    };

    return click(signInLinkSelector);
  };
}
