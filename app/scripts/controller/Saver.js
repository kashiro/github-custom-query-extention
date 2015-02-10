(function(exports) {
  'use strict';

  function Saver($button) {
    this.$button = $button;
    this._bind($button);
  }

  Saver.prototype._bind = function($button) {
    $button.on('click', $.proxy(this._onClickButton, this)); 
  };

  Saver.prototype._onClickButton = function() {
    var query = this._queryToObj(location.search)['q'];
  };

  Saver.prototype._queryToObj = function(query){
    var params, i = 0,
        q,kv,length,result = {};
  
    if(query === ''){
      return result;
    }
  
    query = query.replace(/^\?/, '');
    params = query.split('&');
    length = params.length;
  
    for (; i < length; i++) {
      q = params[i];
      kv = q.split('=');
      result[kv[0]] = decodeURIComponent(kv[1]);
    }
    return result;
  };

  // exports
  if(!exports.gcqe) {
    exports.gcqe = {};
  }
  if(!exports.gcqe.controller) {
    exports.gcqe.controller = {};
  }
  exports.gcqe.controller.Saver = Saver;

})(window);
