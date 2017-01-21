(function () {
  'use strict';
  angular.module('app')
    .component('thing', {
      require: {
        layout: '^app'
      },
      controller: controller,
      templateUrl: '/js/thing/thing.template.html'
    });

    function controller() {
      const vm = this;

      vm.$onInit = onInit;

      function onInit() {
        console.log('thing initialized');
      }
    }
  }
)();
