angular.module("StudentDirectory").controller('EditContactController',
function($http, $state,$stateParams){
  var vm = this;
  if(!$stateParams.id) return $state.go('Home');
  $http.get('https://studentdirectoy.firebaseio.com/'+ $stateParams.id + '/.json').success(function(res){
    vm.contact = res;
    console.log(res);
  })

  vm.editContact = function(){
    $http.put('https://studentdirectoy.firebaseio.com/' + $stateParams.id + '/.json', vm.contact).success(function(){
      $state.go('Home')
    })
  }
});
