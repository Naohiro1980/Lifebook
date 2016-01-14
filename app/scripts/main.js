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
      'proto.components.contact',
      'proto.components.login',
      'proto.components.menu',
      'proto.components.camera',
      'proto.components.initialsetting'
    ])
    .controller('AppController', AppController);

  AppController.$routeConfig = [
    {path: '/',       redirectTo: '/login'},
    {path: '/home',    component: 'home'},
    {path: '/about',   component: 'about'},
    {path: '/contact', component: 'contact'},
    {path: '/login',   component: 'login'},
    {path: '/menu',   component: 'menu'},
    {path: '/camera',   component: 'camera'},
    {path: '/initialsetting',   component: 'initialsetting'}
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
