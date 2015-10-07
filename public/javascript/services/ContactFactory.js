angular.module("StudentDirectory").factory('ContactFactory', function(){
  var o = {
    name: 'Pearl',
  };
  
  o.getName = function(){
    return 'Pearl';
  };
  return o;
})
