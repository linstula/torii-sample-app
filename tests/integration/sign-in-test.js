import Ember from 'ember';
import { test } from 'ember-qunit';
import { module } from 'qunit';
import startApp from '../helpers/start-app';
import signInUserHelper from '../helpers/sign-in';

var App, container, signInUser;

module('Integration - Sign in', {
  beforeEach: function() {
    App = startApp();
    signInUser = signInUserHelper(App);
  },

  afterEach: function() {
    Ember.run(App, 'destroy');
  }
});

test('User can sign in', function(assert) {
  assert.expect(1);

  return visit('/')
    .then(signInUser)
    .then(function() {
      return assert.equal(currentURL(), '/dashboard', 'user is redirected to dashboard after authenticating');
    });
});
