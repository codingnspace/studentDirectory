angular.module("StudentDirectory").factory('ContactFactory', function($http, $q){
  var o = { };

  o.getContacts = function() {
    var q = $q.defer();
    $http.get('https://studentdirectoy.firebaseio.com/.json').success(function(res) {
      var contacts = [];
      for(var prop in res) {
        res[prop]._id = prop;
        contacts.push(res[prop]);
      }
      q.resolve(contacts);
    });

    return q.promise;
  };

  o.saveUser = function(n){
    var q = $q.defer();
    $http.post('https://studentdirectoy.firebaseio.com/.json', n).success(function(){
      q.resolve();
    });
    return q.promise;
  }

  o.deleteUser = function(id) {
  $http.delete('https://studentdirectoy.firebaseio.com/' + id + '.json').success(function(){
    o.getContacts();
  });

  }

  return o;


})
