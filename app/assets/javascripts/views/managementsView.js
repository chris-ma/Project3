'use strict';

var App = App || {};

(function(App) {
  App.ManagementsView = Backbone.View.extend({
    events: {
      'click .create-management': 'createManagement'
    },

    initialize: function() {
      App.managementsCollection.on("add", this.render, this);
    },

    render: function() {
      this.$el.html(
        HandlebarsTemplates['managements/index']({ managements: App.managementsCollection.toJSON() })
      );

      return this;
    },

    createManagement: function() {
      App.rootView.displayForm(App.ManagementForm);
    }
  });
})(App);
