import Ember from 'ember';
export default Ember.Route.extend({
// store: Ember.inject.service(),
model: function(params) {
  return this.store.findRecord('blog', params.blog_id);
},
actions:{
  updateBlog:function(model){
  var self=this;
  model.save().then(function(){
    self.transitionTo('blogs');
  });
},
deleteBlog:function(model){
var self=this;
model.destroyRecord().then(function(){
  self.transitionTo('blogs');
});
},
addComment:function(blog,body){
var self=this;
this.store.createRecord('comment',{blog:blog,body:body}).save().then(function(){
  self.transitionTo('blogs.blog', blog);
});
}

}

});
