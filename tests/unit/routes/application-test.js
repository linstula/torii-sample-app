import Ember from 'ember';
import Session from 'torii/session';
import {
  moduleFor,
  test
} from 'ember-qunit';

moduleFor('route:application', 'Unit: routes/application', {
  beforeEach: function() {
    var container = this.container;
    container.register('torii:session', Session);
    container.injection('route', 'session', 'torii:session');
  }
});

test('`signInWithGoogle` action calls `transitionTo` when `session.open` resolves', function(assert) {
  assert.expect(1);

  var route = this.subject({
    transitionTo: function(routeName) {
      assert.equal(routeName, 'dashboard', 'transitionTo was called, passing in `dashboard`');
    }
  });

  route.set('session.open', function() { return Ember.RSVP.resolve(); });

  route.send('signInWithGoogle');
});

test('`signInWithGoogle` does not called `transitionTo` if `session.open` rejects', function(assert) {
  assert.expect(0);

  var route = this.subject({
    transitionTo: function(routeName) {
      assert.ok(false, '`transitionTo` was not called');
    }
  });

  route.set('session.open', function() { return Ember.RSVP.reject(); });

  route.send('signInWithGoogle');
});
