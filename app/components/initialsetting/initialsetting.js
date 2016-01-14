/**
 * Initialsetting Components module.
 *
 * @module proto.components.initialsetting
 */
(function () {
  'use strict';

  angular
    .module('proto.components.initialsetting', [])
    .controller('InitialsettingController', InitialsettingController);

  InitialsettingController.$inject = [];

  /**
   * InitialsettingController
   *
   * @class InitialsettingController
   * @constructor
   */
  function InitialsettingController() {
    console.log('InitialsettingController Constructor');
  }

  /**
   * The controller activate makes it convenient to re-use the logic
   * for a refresh for the controller/View, keeps the logic together.
   *
   * @method activate
   */
  InitialsettingController.prototype.activate = function() {
    console.log('InitialsettingController activate Method');
  };

})();
