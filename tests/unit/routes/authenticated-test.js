import {
  moduleFor,
  test
} from 'ember-qunit';

moduleFor('route:authenticated', {
});

test('the beforeModel hook calls transitionTo, passing in `application` when the session is not authenticated', function(assert) {
  assert.expect(1);

  var route = this.subject({
    session: {
      isAuthenticated: false
    },
    transitionTo: function(routeName) {
      assert.equal(routeName, 'application', 'transitionTo was called, passing in `application`');
    }
  });

  route.beforeModel();
});

test('the beforeModel hook does not call transitionTo if the session is authenticated', function(assert) {
  assert.expect(0);

  var route = this.subject({
    session: {
      isAuthenticated: true
    },
    transitionTo: function(routeName) {
      assert.ok(false, 'transitionTo was not called');
    }
  });

  route.beforeModel();
});
