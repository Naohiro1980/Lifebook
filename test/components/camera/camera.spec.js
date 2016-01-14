(function() {
  'use strict';

  describe('Controller: CameraController', function() {

    beforeEach(module('proto.components.camera'));

    var CameraController;

    beforeEach(inject(function($controller) {
      CameraController = $controller('CameraController');
    }));

    describe('CameraController', function() {
      it('Test Case', function() {
        CameraController.activate();
      });
    });
  });
})();
