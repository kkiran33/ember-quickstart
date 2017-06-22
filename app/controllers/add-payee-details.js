import Ember from 'ember';

export default Ember.Controller.extend({
  //needs : ['addPayeeTypeList'],
  // payee : {
  //   code : "IFT"
  // },
  //payeeType : null,
  //isG3payeeNote : false,
  showAddPayeeNotes: false,
  showHideAddPayeeText : "",
  // ThreatMetrix start
  //pageId: '8502',
  // ThreatMetrix end

  prepareController: function() {
    // this.payeeType = this.get('controllers').get('addPayeeTypeList').selectedPayeeType;
    // App.getSession().setOtpToken(null);
    // if(App.RouteHistory.previousRoute() !== 'addPayee.confirm'){
    //   this.payee = this.getAddPayeeInstance(this.payeeType);
    //   this.set('isG3payeeNote',false);
    // }
    //
    // if (this.payee instanceof App.VFSMerchant) {
    //   this.set('showLink', true);
    // } else {
    //   this.set('showLink', false);
    // }
    // if(App.RouteHistory.previousRoute() !== 'addPayee.confirm'){
    //   this.payee.reset();
    // }
    //
    // // reset every time user comes to this page
    // this.set("showAddPayeeNotes", false);
    // this.set('showHideAddPayeeText',App.i18n.getTranslations().get('move.addPayeeLinkReadMe'));
    //
    // // this.payee.init();
    // // ThreatMetrix start
    // var self = this;
    // if (this.payeeType.code !== 'ECO') {
    //   if (this.payeeType.code === 'BP') {
    //     BreezeUtils.genTMCloudScript(self);
    //     return;
    //   }
    //   if ((this.payeeType.code !== 'IBFT') || (this.payeeType.code === 'IBFT' && App.RouteHistory.previousRoute() === 'addPayee.confirm')) {
    //     self.showLoading();
    //     BreezeUtils.resetTmProfile();
    //     App.api_user.generateUniqueSessionId(function(e) {
    //       self.hideLoading();
    //       if (!self.hasError(e, false)) {
    //         BreezeUtils.genTMCloudScript(self);
    //       }
    //     });
    //   }
    //   // ThreatMetrix end
    // } else {
    //   // ALP Enhancement for ECO entry
    //   if (App.RouteHistory.previousRoute() !== 'addPayee.confirm') {
    //     self.showLoading();
    //     App.api_user.checkSession(function(e) {
    //       self.hideLoading();
    //       self.hasError(e, false);
    //     });
    //   }
    // }
  },

  getBankList: function() {
    // var self = this;
    // this.showLoading();
    // var bankSearchCriteria = {};
    // // ThreatMetrix start
    // BreezeUtils.resetTmProfile();
    // // ThreatMetrix end
    // App.api_payee.getBankListApi(bankSearchCriteria, function(e, banklist) {
    //   if (!self.hasError(e,false)) {
    //     self.bankList = banklist;
    //     self.payee.get('bankDropdownData').set('list',self.bankList);
    //   } else if ('ERR_SEC_ALP_REQUIRED' !== e.getErrorCode()) {
    //     var message = e.getCustomErrorMessage(e.getErrorCode());
    //     self.get('controllers').get('alert').showError(message);
    //   }
    //   self.hideLoading();
    //   // ThreatMetrix start
    //   if (!self.hasError(e, false)) {
    //     BreezeUtils.genTMCloudScript(self);
    //   }
    //   // ThreatMetrix end
    // });
  },

  continueAction: function() {
    // var self = this;
    // try {
    //   this.showLoading();
    //   this.validatepayee();
    //   this._acceptAddPayeeAPI(this.payee);
    // } catch (e) {
    //   this.hasError(e);
    // }
  },

  validatepayee : function() {
    // var errorObject = this.payee.validateAddPayee();
    //
    // if (errorObject !== null) {
    //   this.hideLoading();
    //   throw BreezeException.create(errorObject);
    // }

  },

  _acceptAddPayeeAPI: function() {
//     var self = this;
//     try {
// //            console.log('the payee details :::: '+this.payee.moduleName);
//
//
//       this.payee.moduleName = "detail";
// //            console.log('after assign the payee details :::: '+this.payee.moduleName);
//       if('BP' === this.payeeType.code) {
//         /*
//          App.api_payee.acceptBillPaymentPayee(payee, function(e) {
//          self._acceptCallback(e,payee);
//          });
//          */
//         this.transitionTo('addPayee.confirm', payee);
//       } else if ('IFT' === this.payeeType.code || 'IBFT' === this.payeeType.code) {
//         App.api_payee.acceptThridPartyPayee(payee, function(e) {
//           self._acceptCallback(e,payee);
//         });
//       } else if('POBCC' === this.payeeType.code) {
//         App.api_payee.acceptPayAnyCardPayee(payee, function(e) {
//           self._acceptCallback(e,payee);
//         });
//       } else if('ECO' === this.payeeType.code) {
//         App.api_payee.acceptEChequePayee(payee, function(e) {
//           self._acceptCallback(e,payee);
//         });
//       }
//     } catch (e) {
//       throw BreezeException.create(e);
//     }
  },

  _acceptCallback: function() {
    // if(!this.hasError(e, false)){
    //   this.transitionTo('addPayee.confirm', payeeObj);
    // }else {
    //   var message = e.getCustomErrorMessage(e.getErrorCode());
    //   this.get('controllers').get('alert').showError(message);
    //   this.hideLoading();
    // }
  },

  getAddPayeeInstance : function() {
  //   var payee , self = this;
  //   switch (payeeType.code) {
  //     case 'IFT':
  //       payee = App.ThirdPartyIFTPayee.create();
  //       payee.addPayeeInfo = payeeType;
  //       break;
  //     case 'POBCC':
  //       payee = App.OtherBankCreditCardPayee.create();
  //       payee.addPayeeInfo = payeeType;
  //       break;
  //     case 'IBFT':
  //       payee = App.ThirdPartyIBFTPayee.create();
  //       payee.init = this.getBankList();
  //       payee.addPayeeInfo = payeeType;
  //       break;
  //     case 'BP':
  //       if (App.RouteHistory.previousRoute() === 'addPayee.merchantList') {
  //         payee = App.Router.getParameter();
  //         payee.init = function(){};
  //         payee.addPayeeInfo = payeeType;
  //       }
  //       break;
  //     case 'ECO':
  //       payee = App.EChequePayee.create();
  //       payee.addPayeeInfo = payeeType;
  //       break;
  //   }
  //
  //   payee.moduleName = 'detail';
  //   return payee;
  }

});
