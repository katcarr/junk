Junk.LotController = Ember.ObjectController.extend({
  actions: {
    delete: function() {
        this.get('model').destroyRecord();
    }
  }
});
