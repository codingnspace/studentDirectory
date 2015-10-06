angular.module("StudentDirectory", []).controller("MainController", function($http) {
//this is pointing to the controller vm stands for view model
  var vm = this;
  //vm.contacts = [
    // {name:'Maya Basquin', organization: 'Engineers Without Borders', major:'Industrial Engineering', email: 'mbasquin@gmail.com'},
      //{name:'Summer Pearsons', organization: 'Society of Women Engineers', major:'Environmental Engineering', email:'summer90@gmail.com'},
      //{name:'Will Smith', organization: 'Film Major Association', major:'Film', email:'williamsmith@yahoo.com'},
      //{name:'Andrew Ivy', organization: 'Habitat for Humanity' ,major:'Marketing', email:'a_ivy@yahoo.com'},
    //  {name:'Janaye Radtke', organization: 'Student Government Association', major:'English', email:'janaye99@gmail.com'}
  //];

  vm.newUser = {};

  vm.getContacts = function() {
    $http.get('https://studentdirectoy.firebaseio.com/.json').success(function(res) {
      vm.contacts = [];
      for(var prop in res) {
        res[prop]._id = prop;
        vm.contacts.push(res[prop]);
      }
    });
  }
  vm.getContacts();

  vm.startCreate = function() {
    vm.creatingUser = true;
  }

  vm.saveUser = function() {
  //  vm.o.name = vm.studentName;
//    vm.o.organization = vm.studentOrganization;
//    vm.o.major = vm.studentMajor;
  //  vm.o.email = vm.studentEmail;
  vm.creatingUser = false;
   vm.contacts.push(vm.newUser);
   $http.post('https://studentdirectoy.firebaseio.com/.json',vm.newUser).success(function(res) {
     vm.getContacts();
   });
   vm.newUser = {};
  //empty out values on save
  //  vm.studentName = '';
//    vm.studentOrganization = '';
//    vm.studentMajor = '';
  //  vm.studentEmail = '';
  }

  vm.deleteUser = function(user) {
  //  var index = vm.contacts.indexOf(user);
  //  vm.contacts.splice(index, 1);
  $http.delete('https://studentdirectoy.firebaseio.com/' + user._id + '.json').success(function(){
    vm.getContacts();
  });

  }
  vm.userEdit = function(user){
  //  vm.editingUser(user) === false;
  var index = vm.contacts.indexOf(user);

  }

vm.checkUser = function(idx){

}
});
