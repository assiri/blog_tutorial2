import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('blogs',{path:"/"}, function() {
    this.route('blog',{path:":blog_id"});
    this.route('new');
    this.route('edit', {path: ':blog_id/edit'});
  });
});


export default Router;
