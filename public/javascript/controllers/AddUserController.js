angular.module("StudentDirectory").controller('AddUserController',
function($http, $state, ContactFactory){
  var vm = this;
  vm.addContact = {};

  vm.saveUser = function(){
  //  $http.post('https://studentdirectoy.firebaseio.com/.json', vm.contact).success(function(){
//      $state.go('Home')
  //  })
ContactFactory.saveUser(vm.addContact).then(function(){
  $state.go("Home");
});
  }
})
