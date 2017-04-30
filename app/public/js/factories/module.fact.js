angular
  .module('outliner')
  .factory('Module', ModuleFactory);

// Interacts with Modules via the backend API abd keeps all instances of moduleController updated
function ModuleFactory(API, $http, $rootScope) {
  return {
    moduleTitle: "",
    moduleDescription:"",
    module: {},
    allModules: [],
    chosenModules: [],
    // Request to create a course
    create: function(newModule) {
      return $http.post(API + '/modules', newModule);
    },
    // // Request to get a single course
    // get: function(id) {
    //   return $http.get(API + '/courses/' + id);
    // },
    // Request to get all courses
    getAll: function() {
      return $http.get(API + '/modules');
    },
    
    // Provides module controller(s) with data to be shown on page
    getViewData: function() {
      return {
        moduleTitle: this.moduleTitle,
        moduleDescription: this.moduleDescription,
        module: this.module,
        allModules: this.allModules,
        chosenModules: this.chosenModules
      }
    }
  };
}