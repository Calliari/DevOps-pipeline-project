var Course = require('../models/outline.js');
var User = require('../models/user.js');

// Create Course function
function createCourse(req, res) {
  User.findOne({uid: req.body.uid}, function (err, user) {
    if (err) return res.status(500).json(err)

    var newCourse = new Course(req.body.course)
    // newCourse.creator = user.email;
    newCourse.save(function(err) {
      if(err)  {
        console.log(err)
        return res.status(500).json(err)
      } else {
        res.status(200).json(newCourse)
      }
    });
    
  });
}

// Show Course
function showCourse(req, res) {
  Course
    .find({ 'courseType': req.params.courseType })
    .sort({'createDate': "descending"})
    .populate('module')
    .exec(function(err, courses) {
      if (err) {
        console.log(err)
        return res.status(500).json(err)
      } else {
        res.json(courses)
      }
    })
}


// Show all courses on search menu thing
function indexCourses(req, res) {
  Course.find({}, function (err, course) {
    if (err) {
      console.log(err)
      return res.status(500).json(err)
    }
    res.json({course:course})
  })
}
// ==========================================================
module.exports = {
  create: createCourse,
  show: showCourse,
  index: indexCourses
};