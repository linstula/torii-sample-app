import Ember from 'ember';
import { test } from 'ember-qunit';
import { module } from 'qunit';
import startApp from '../helpers/start-app';

var App, container, signIn;

module('Integration - Sign in', {
  beforeEach: function() {
    App = startApp();
    signIn = App.testHelpers.signIn;
  },

  afterEach: function() {
    Ember.run(App, 'destroy');
  }
});

test('User can sign in', function(assert) {
  assert.expect(1);

  return visit('/')
    .then(signIn)
    .then(function() {
      return assert.equal(currentURL(), '/dashboard', 'user is redirected to dashboard after authenticating');
    });
});
