angular.module("StudentDirectory").controller("MainController", function($http,ContactFactory) {
//this is pointing to the controller o stands for view model
  var vm = this;
  //vm.test = ContactFactory.getTest();

vm.getContacts  =function (){
 ContactFactory.getContacts().then(function(contacts){
   vm.contacts = contacts;
 })
}
vm.getContacts();

vm.deleteUser = function(contact){
  ContactFactory.deleteUser(contact._id)
}
});

//  o.startCreate = function() {
  //  o.creatingUser = true;
  //}

  //o.saveUser = function() {

  //o.creatingUser = false;
   //o.contacts.push(o.newUser);
   //$http.post('https://studentdirectoy.firebaseio.com/.json',o.newUser).success(function(res) {
  //   o.getContacts();
  // });
   //o.newUser = {};
  //empty out values on save
  //  o.studentName = '';
//    o.studentOrganization = '';
//    o.studentMajor = '';
  //  o.studentEmail = '';
  //}
