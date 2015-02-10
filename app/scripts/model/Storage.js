(function(exports) {
  'use strict';

  var key = 'storesjp-campaign';

  Storage = function() {};
  Storage.prototype._setItem = function(key, flag) {
      var data = this._getData();
      data[key] = flag;
      try{
          localStorage.setItem(this.key, JSON.stringify(data));
      }catch(e){
          // e.g. private browse mode on iPhone
      }
  },
  Storage.prototype._getItem = function(key) {
      var data = this._getData();
      return !!data[key];
  },
  Storage.prototype._getData = function() {
      var data;
      try{
          data = localStorage.getItem(this.key);
          data = data ? JSON.parse(data) : {};
      }catch(e){
          // e.g. private browse mode on iPhone
          data = {};
      }
      return data;
  }

  // exports
  if(!exports.gcqe) {
    exports.gcqe = {};
  }
  if(!exports.gcqe.model) {
    exports.gcqe.model = {};
  }
  exports.gcqe.model.Storage;

})(window);
