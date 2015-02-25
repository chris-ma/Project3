var App = App || {};

(function(App){
  App.Management = Backbone.Model.extend({
    urlRoot: "/api/managements"

  });
})(App);