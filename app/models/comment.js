import DS from 'ember-data';

export default DS.Model.extend({
  blog: DS.belongsTo('blog'),
  body: DS.attr('string')
});
