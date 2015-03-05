Junk.LotController = Ember.ObjectController.extend({
  actions: {
    delete: function() {
        this.get('model').destroyRecord();
    },
    deleteProduct: function(product){
      var lot = this.get('model');
      lot.get("products").removeObject(product);
      lot.save();
      product.destroyRecord();
    }
  }
});
