angular
  .module('outliner')
  .factory('User', UserFactory);

// Interacts with users via the backend API
function UserFactory(API, $http) {
  return {
    // Request to create a user
    create: function(newUser) {
      return $http.post(API + '/users', newUser);
    },
    get: function(id) {
      return $http.get(API + '/users/' + id);
    },
    getAll: function() {
      return $http.get(API + '/users/');
    },
    update: function(id, newData) {
      return $http.put(API + '/users/' + id, newData);
    },
    delete: function (id) {
      return $http.delete(API + '/users/' + id)
    }
  };
}
