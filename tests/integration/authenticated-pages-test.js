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

test('dashboard cannot be access while user is not authenticated', function(assert) {
  assert.expect(1);

  return visit('/dashboard')
    .then(function() {
      return assert.equal(currentURL(), '/', 'unauthenticated user is redirected to home page');
    });
});

test('dashboard can be accessed when user has authenticated', function(assert) {
  assert.expect(1);

  return visit('/')
    .then(signInUser)
    .then(function() {
      return visit('/dashboard');
    })
    .then(function() {
      return assert.equal(currentURL(), '/dashboard', 'authenticated user can access dashboard');
    });
});
