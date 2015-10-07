angular.module("StudentDirectory", ['ui.router']).config(function($stateProvider,
$urlRouterProvider){
  $stateProvider.state("Home", {
    url: "/",
    templateUrl: '/template/home.html'
  }).state('EditContact',{
    url: '/Contact/Edit/:id',
    templateUrl: '/template/editContact.html'
    // controller: 'EditContactController as vm (if you use this version can only have one controller per page) alternative is to put on html
  }).state('AddUser',{
    url:'/Contact/Add/',
    templateUrl: '/template/AddContact.html'
  })
  $urlRouterProvider.otherwise("/");
});
