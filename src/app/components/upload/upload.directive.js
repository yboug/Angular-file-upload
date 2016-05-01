(function() {
  'use strict';

  angular
    .module('gemeoLoadOffre')
    .directive('loadbar', loadbar);

  /** @ngInject */
  function loadbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/upload/upload.html',
      scope: {
        creationDate: '='
      },
      controller: AppController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject*/
    function AppController(moment) {
      var vm = this;

      // "vm.creationDate" is available by directive option "bindToController: true"
      vm.relativeDate = moment(vm.creationDate).fromNow();
    }
  }

})();

