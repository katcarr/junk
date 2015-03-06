Junk.Router.map(function() {
  this.resource('lots', {path: '/'}, function() {
    this.resource('new-lot');
  });
  this.resource('lot', {path: ':lot_id'}, function(){
    this.resource('new-product');
    this.resource('product', {path: ':product_id'});
  });
})
