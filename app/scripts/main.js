(function() {
  'use strict';
  var saveButton = new gcqe.view.SaveButton(),
      $button = saveButton.$elm;
  new gcqe.controller.Saver($button);
})();
