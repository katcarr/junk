Junk.ProductController = Ember.ObjectController.extend({
  actions: {
    delete: function() {
        this.get('model').destroyRecord();
    }
  }
});
