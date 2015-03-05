Junk.Product = DS.Model.extend({
  name: DS.attr(),
  image: DS.attr(),
  lot: DS.belongsTo('lot', {async: true})
});
