angular.module('ngSimplySocial.userService', [])

.factory('UserService', ['$http', function($http) {

  var getUsers = function(success, error, data) {
    var req = $http.get("http://api.randomuser.me/")
    .success(success)
    .error(error);

    return req;
  };




  return {
    getUsers:getUsers
  };

}]);


