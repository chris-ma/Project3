'use strict';

var App = App || {};

(function(App) {
  App.ManagementForm = Backbone.View.extend({
    events: {
      'click .save': 'saveManagement',
      'click .cancel': 'cancel',
      'submit form': 'preventSubmission'
    },

    render: function() {
      this.$el.html(
        HandlebarsTemplates['managements/form']()
      );

      return this;
    },

    saveManagement: function() {
      App.managementsCollection.create({
        name: this.$el.find("input[name='name']").val(),
        description: this.$el.find("input[name='description']").val(),
      });

      App.rootView.hideForm();
    },

   

    cancel: function() {
      App.rootView.hideForm();
    },

    preventSubmission: function(event) {
      event.preventDefault();
    }
  });
})(App);