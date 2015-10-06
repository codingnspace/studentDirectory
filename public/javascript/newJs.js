angular.module("StudentDirectory", []).controller("MainController", function() {
//this is pointing to the controller vm stands for view model
  var vm = this;
  vm.contacts = [
      {name:'Maya Basquin', organization: 'Engineers Without Borders', major:'Industrial Engineering', email: 'mbasquin@gmail.com'},
      {name:'Summer Pearsons', organization: 'Society of Women Engineers', major:'Environmental Engineering', email:'summer90@gmail.com'},
      {name:'Will Smith', organization: 'Film Major Association', major:'Film', email:'williamsmith@yahoo.com'},
      {name:'Andrew Ivy', organization: 'Habitat for Humanity' ,major:'Marketing', email:'a_ivy@yahoo.com'},
      {name:'Janaye Radtke', organization: 'Student Government Association', major:'English', email:'janaye99@gmail.com'}
  ];

//vm.o = {};

  vm.startCreate = function() {
    vm.creatingUser = true;
  }

  vm.saveUser = function() {
    vm.creatingUser = false;
    var o = {};
    o.name = vm.studentName;
    o.organization = vm.studentOrganization;
    o.major = vm.studentMajor;
    o.email = vm.studentEmail;

    vm.contacts.push(o);

  //empty out values on save
    vm.studentName = '';
    vm.studentOrganization = '';
    vm.studentMajor = '';
    vm.studentEmail = '';
  }

  vm.deleteUser = function(user) {
    var index = vm.contacts.indexOf(user);
    vm.contacts.splice(index, 1);
  }
  vm.userEdit = function(user){
  //  vm.editingUser(user) === false;
  var index = vm.contacts.indexOf(user);

  console.log(user);
console.log(index);
  }

vm.checkUser = function(idx){

}
});
