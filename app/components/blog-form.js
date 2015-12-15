import Ember from 'ember';
export default Ember.Component.extend({
  model: null,
  commetAdd:false,
  actions: {
    update: function() {
        this.sendAction('action', this.get('model'));
    },
    delete: function(){
      this.sendAction('deleteBlog', this.get('model'));
    },
    checkedAdd:function(){
      this.toggleProperty('commetAdd');
    },
    addCommet:function(bodyComment){
      this.sendAction('addComment', this.get('model'),bodyComment);
      this.set('commetAdd',false);
      this.set('bodyComment','');

    },
    delCommet:function(blogmodel,comment){
      var self=this;
      var url= "http://localhost:8000/bl/api/v4/comments/"+comment.get('id');
      Ember.$.ajax({url:url,type: "DELETE",contentType:'application/json',dataType: 'json'}).then(function(){
        blogmodel.get('comments').removeObject(comment);

      });



    }

  }
});
