angular.module("StudentDirectory", []).controller("MainController", function($scope) {
  $scope.contacts = [
      {name:'Maya Basquin', organization: 'Engineers Without Borders', major:'Industrial Engineering', email: 'mbasquin@gmail.com'},
      {name:'Summer Pearsons', organization: 'Society of Women Engineers', major:'Environmental Engineering', email:'summer90@gmail.com'},
      {name:'Will Smith', organization: 'Film Major Association', major:'Film', email:'williamsmith@yahoo.com'},
      {name:'Andrew Ivy', organization: 'Habitat for Humanity' ,major:'Marketing', email:'a_ivy@yahoo.com'},
      {name:'Janaye Radtke', organization: 'Student Government Association', major:'English', email:'janaye99@gmail.com'}
  ];

//$scope.o = {};

  $scope.startCreate = function() {
    $scope.creatingUser = true;
  }

  $scope.saveUser = function() {
    $scope.creatingUser = false;
    var o = {};
    o.name = $scope.studentName;
    o.organization = $scope.studentOrganization;
    o.major = $scope.studentMajor;
    o.email = $scope.studentEmail;

    $scope.contacts.push(o);

  //empty out values on save
    $scope.studentName = '';
    $scope.studentOrganization = '';
    $scope.studentMajor = '';
    $scope.studentEmail = '';
  }

  $scope.deleteUser = function(user) {
    var index = $scope.contacts.indexOf(user);
    $scope.contacts.splice(index, 1);
  }
  $scope.userEdit = function(user){
  //  $scope.editingUser(user) === false;
  var index = $scope.contacts.indexOf(user);

  console.log(user);
console.log(index);
  }

$scope.checkUser = function(idx){

}
});
