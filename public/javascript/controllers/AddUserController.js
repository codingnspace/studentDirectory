angular.module("StudentDirectory").controller('AddUserController',
function($http, $state){
  var vm = this;
  vm.contact = {};

  vm.saveUser = function(){
    $http.post('https://studentdirectoy.firebaseio.com/.json', vm.contact).success(function(){
      $state.go('Home')
    })
  }
})
