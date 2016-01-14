/**
 * This is proto module.
 *
 * @module proto
 */
(function () {
  'use strict';

  angular
    .module('proto', [
      'ngNewRouter',
      'proto.config',
      'proto.components.home',
      'proto.components.about',
      'proto.components.contact'
    ])
    .controller('AppController', AppController);

  AppController.$routeConfig = [
    {path: '/',       redirectTo: '/home'},
    {path: '/home',    component: 'home'},
    {path: '/about',   component: 'about'},
    {path: '/contact', component: 'contact'}
  ];

  AppController.$inject = [];

  /**
   * AppController
   *
   * @class AppController
   * @main proto
   * @constructor
   */
  function AppController () {}
})();
