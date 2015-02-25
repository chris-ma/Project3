var App = App || {};

(function(App) {
  App.Router = Backbone.Router.extend({
    routes: {
      '': 'campaigns',
      'campaigns': 'campaigns',
    },

    initialize: function() {
      App.rootView = new App.AppView();
      $("#app-container").html(App.rootView.render().el);

      $("nav a:not([data-backbone-navigation='false'])").on("click", function(event) {
        event.preventDefault();
        App.router.navigate($(this).attr("href"), { trigger: true });
      });
    },



    campaigns: function() {
      App.managementsCollection.fetch().then(function() {
        App.rootView.display(App.ManagementsView);
      });
    }
  });
  App.router = new App.Router();
})(App);