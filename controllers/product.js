Junk.ProductController = Ember.ObjectController.extend({
  isSaved: false,
  actions: {
    delete: function() {
        this.get('model').destroyRecord();
    }
  }
});
