(function() {
  'use strict';

  angular
    .module('load',['angularFileUpload'])
    .directive('loadbar', loadbar);

  /** @ngInject */
  function loadbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/upload/upload.html',
      scope: {
        uploader: '='
      },
      controller: AppController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject*/
    function AppController($scope,FileUploader) {

      $scope.uploader = new FileUploader({
        url: 'upload.php'
      });
      // "vm.creationDate" is available by directive option "bindToController: true"
      //vm.relativeDate = moment(vm.creationDate).fromNow();
      //vm.loadbar = new FileUploader();
    }
  }

})();

