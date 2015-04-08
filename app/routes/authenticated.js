import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function() {
    var isAuthenticated = this.get('session.isAuthenticated');

    if (!isAuthenticated) {
      this.transitionTo('application');
    }
  }
});
