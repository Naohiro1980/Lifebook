/**
 * Menu Components module.
 *
 * @module proto.components.menu
 */
(function () {
  'use strict';

  angular
    .module('proto.components.menu', [])
    .controller('MenuController', MenuController);

  MenuController.$inject = [];

  /**
   * MenuController
   *
   * @class MenuController
   * @constructor
   */
  function MenuController() {
    console.log('MenuController Constructor');
  }

  /**
   * The controller activate makes it convenient to re-use the logic
   * for a refresh for the controller/View, keeps the logic together.
   *
   * @method activate
   */
  MenuController.prototype.activate = function() {
    console.log('MenuController activate Method');
    vm = this;
  };

  /**
   * Angular ViewModel
   *
   * @property vm
   * @type {Object}
   */
  var vm;
})();
