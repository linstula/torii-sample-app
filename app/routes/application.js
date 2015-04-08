import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    signInWithGoogle: function(){
      var routeContext = this;

      this.get('session').open('google-oauth2-bearer')
      .then(function() {
        routeContext.transitionTo('dashboard');
      });
    },

    signOut: function(){
      this.get('session').close();
    }
  }
});
