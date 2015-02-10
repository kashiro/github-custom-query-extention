(function(exports) {
  'use strict';

  function SaveButton(){
    this.$outer = $('#js-repo-pjax-container [role="search"]');
    this.insert();
  }
  SaveButton.prototype.insert = function(){
    this.$elm = $('<span class="button-ink">save current query</span>');
    this.$outer.append(this.$elm);
  };

  // exports
  if(!exports.gcqe) {
    exports.gcqe = {};
  }
  if(!exports.gcqe.view) {
    exports.gcqe.view = {};
  }
  exports.gcqe.view.SaveButton = SaveButton;

})(window);
