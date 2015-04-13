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

test('dashboard cannot be access while user is not authenticated', function(assert) {
  assert.expect(2);

  return visit('/dashboard')
    .then(function() {
      return assert.equal(currentURL(), '/', 'unauthenticated user is redirected to home page');
    })
    .then(signIn)
    .then(function() {
      return visit('/dashboard');
    })
    .then(function() {
      return assert.equal(currentURL(), '/dashboard', 'authenticated user can access dashboard');
    });
});
