var App = App || {};

(function(App){
App.Managements = Backbone.Collection.extend({
  url: "/api/managements",
  model: App.Management

});

App.managementsCollection = new App.Managements();

})(App);