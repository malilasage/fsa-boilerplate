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

    controller.$inject = ['$http'];

    function controller($http) {
      const vm = this;

      vm.$onInit = onInit;
      vm.sendRequest = sendRequest;

      function onInit() {
        console.log('thing initialized');
      }

      function sendRequest() {
        $http.get('/api').then((res) => {
          // vm.response = res.data;
          console.log(res.data)
        })
      }

    }
  }
)();
