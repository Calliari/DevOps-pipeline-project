angular
  .module('outliner')
  .controller('CourseController', CourseController);

function CourseController(Course, Auth, User, Module, CourseForm, $stateParams, $state, $http) {
  var self = this;



  self.allCourses = [];
  self.course = {};
  self.newCourse = {};
  self.courseType = {};

  // self.$on('$view.enter', function() {
  //    // Code you want executed every time view is opened
  //    console.log('Opened!')
  // })

  // CREATE COURSE CONTROLLER
  self.createCourse = function() {
    Course.create({
      // GET THE CURRENTLY SIGNED IN USER (TO BE PASSED IN AS THE CREATOR OF THIS COURSE)
      uid: Auth.$getAuth().uid,
      // GRAB ALL THE ENTERED DATA FROM THE FIELDS
      course: {
        courseType: self.newCourse.courseType,
        title: self.newCourse.title,
        aboutTitle: self.newCourse.aboutTitle,
        aboutBody: self.newCourse.aboutBody,
        aboutBodyQuotes: self.newCourse.aboutBodyQuotes,
        aboutBodyQuotedPerson: self.newCourse.aboutBodyQuotedPerson,
        iconOne: self.newCourse.iconOne,
        iconTwo: self.newCourse.iconTwo,
        iconThree: self.newCourse.iconThree,
        iconFour: self.newCourse.iconFour,
        iconFive: self.newCourse.iconFive,
        sellingPointIconOne: self.newCourse.sellingPointIconOne,
        sellingPointTextOne: self.newCourse.sellingPointTextOne,
        sellingPointIconTwo: self.newCourse.sellingPointIconTwo,
        sellingPointTextTwo: self.newCourse.sellingPointTextTwo,
        sellingPointIconThree: self.newCourse.sellingPointIconThree,
        sellingPointTextThree: self.newCourse.sellingPointTextThree,
        sellingPointIconFour: self.newCourse.sellingPointIconFour,
        sellingPointTextFour: self.newCourse.sellingPointTextFour,
        sellingPointIconFive: self.newCourse.sellingPointIconFive,
        sellingPointTextFive: self.newCourse.sellingPointTextFive,
        sellingPointIconSix: self.newCourse.sellingPointIconSix,
        sellingPointTextSix: self.newCourse.sellingPointTextSix,
        sellingPointIconSeven: self.newCourse.sellingPointIconSeven,
        sellingPointTextSeven: self.newCourse.sellingPointTextSeven,
        sellingPointIconEight: self.newCourse.sellingPointIconEight,
        sellingPointTextEight: self.newCourse.sellingPointTextEight,
        pageTwoTitle: self.newCourse.pageTwoTitle,
        creator: self.newCourse.creator,
        modules: CourseForm.chosenModules
      }
    }) 
    .then(function (course) {
      // THEN RESET THE COURSE OBJECT TO BE AN EMPTY OBJECT
      self.newCourse = {}
      // RETURN TO THE VIEW STATE 
      $state.go('view')
      // AND RESET THE FIELDS
      resetCourse()
    })
    // CATCH ANY ERRORS AND LOG THEM TO THE CONSOLE
    .catch(function(err) {
      console.log(err)
    })
  }

  // FUNCTION TO SHOW ALL COURSES FOR DROP DOWN SELECTION ON THE VIEW PAGE
  self.showCourses = function (args, isEdit) {
    courseType = args;
    // console.log(courseType);
    // GET ALL THE COURSES FROM THE DATA BASE
    Course.getByCourseType(courseType)
    .then(function(res) {
      // THEN PUT ALL THE COURSES INTO THE 'ALLCOURSES' ARRAY
      allCourses = res.data;
      // Make the course = to the latest entered course of that type
      self.course = res.data[0];
      if (isEdit) {
        self.newCourse = self.course
      }
    })
    // CATCH ANY ERRORS, THEN LOG THEM TO THE CONSOLE
    .catch(function(err) {
      console.log(err)
    })
  }
  self.showCourses($state.params.type);

  // FUNCTION TO RESET THE COURSE FIELD INPUTS TO BE EMPTY
  function resetCourse() {
    self.courseType = ""
    self.createDate = ""
    self.title = ""
    self.aboutTitle = ""
    self.aboutBody = ""
    self.aboutBodyQuotes = ""
    self.aboutBodyQuotedPerson = ""
    self.iconOne = ""
    self.iconTwo = ""
    self.iconThree = ""
    self.iconFour = ""
    self.iconFive = ""
    self.sellingPointIconOne = ""
    self.sellingPointTextOne = ""
    self.sellingPointIconTwo = ""
    self.sellingPointTextTwo = ""
    self.sellingPointIconThree = ""
    self.sellingPointTextThree = ""
    self.sellingPointIconFour = ""
    self.sellingPointTextFour = ""
    self.sellingPointIconFive = ""
    self.sellingPointTextFive = ""
    self.sellingPointIconSix = ""
    self.sellingPointTextSix = ""
    self.sellingPointIconSeven = ""
    self.sellingPointTextSeven = ""
    self.sellingPointIconEight = ""
    self.sellingPointTextEight = ""
    self.pageTwoTitle = ""
    self.creator = ""
  }

  self.reset = function() {
    $state.go('create', {}, { reload: true });
  }

  return self;

}


