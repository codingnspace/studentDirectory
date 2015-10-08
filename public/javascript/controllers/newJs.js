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
