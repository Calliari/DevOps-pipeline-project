angular
  .module('outliner')
  .factory('Course', CourseFactory);

// Interacts with courses via the backend API
function CourseFactory(API, $http) {
  return {
    // Request to create a course
    create: function(newCourse) {
      return $http.post(API + '/courses', newCourse);
    },
    // Request to get a single course
    get: function(id) {
      return $http.get(API + '/courses/' + id);
    },
    // Request to get all courses
    getAll: function() {
      return $http.get(API + '/courses');
    },
    // Request to get a course depending on it's course type
    getByCourseType: function(courseType) {
      return $http.get(API + '/courses/' + courseType);
    }
  };
}