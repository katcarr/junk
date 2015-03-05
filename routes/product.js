Junk.ProductRoute = Ember.Route.extend({

  renderTemplate: function() {
    this.render({ outlet: 'product' });
  }
});
