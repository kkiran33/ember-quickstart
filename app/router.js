import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('scientists');
  this.route('about');
  this.route('add-payee');
  this.route('addPayeeConfirm');
  this.route('addPayeeDetails');
  this.route('addPayeeMerchantList');
  this.route('addPayeeTypeList');
  this.route('addPayeeSummary');
});

export default Router;
