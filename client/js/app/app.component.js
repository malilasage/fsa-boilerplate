(function () {
  'use strict';
  angular.module('app')
    .component('app', {
      controller: controller,
      templateUrl: 'js/app/app.template.html'
    })

    controller.$inject = ['$http']
    function controller ($http) {
      const vm = this;

      vm.$onInit = onInit

      function onInit () {
        console.log('app initialized');
      }
    }
}());
