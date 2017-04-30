var mongoose = require('mongoose');

var CourseSchema = new mongoose.Schema ({
  courseType: {
    type: String,
    required: true
  },
  createDate: {
    type: Date
  },
  title: {
    type: String,
    required: true
  },
  aboutTitle: {
    type: String,
    required: true
  },
  aboutBody: {
    type: String,
    required: true
  },
  aboutBodyQuotes: {
    type: String,
    required: true
  },
  aboutBodyQuotedPerson: {
    type: String,
    required: true
  },
  iconOne: {
    type: String
  },  
  iconTwo: {
    type: String
  },
  iconThree: {
    type: String
  },
  iconFour: {
    type: String
  },
  iconFive: {
    type: String
  },
  sellingPointIconOne: {
    type: String
  },
  sellingPointTextOne: {
    type: String
  },
  sellingPointIconTwo: {
    type: String
  },
  sellingPointTextTwo: {
    type: String
  },
  sellingPointIconThree: {
    type: String
  },
  sellingPointTextThree: {
    type: String
  },
  sellingPointIconFour: {
    type: String
  },
  sellingPointTextFour: {
    type: String
  },
  sellingPointIconFive: {
    type: String
  },
  sellingPointTextFive: {
    type: String
  },
  sellingPointIconSix: {
    type: String
  },
  sellingPointTextSix: {
    type: String
  },
  sellingPointIconSeven: {
    type: String
  },
  sellingPointTextSeven: {
    type: String
  },
  sellingPointIconEight: {
    type: String
  },
  sellingPointTextEight: {
    type: String
  },
  pageTwoTitle: {
    type: String,
    required: true
  },
  updatedAt: {
    type: Date
  },
  modules: [{
    type: mongoose.Schema.Types.ObjectId, 
    ref: "Module"
  }],
  creator: {
    type: String
    // required: true
  }
});

CourseSchema.pre('save', function(next){
  now = new Date();
  this.updatedAt = now;
  if ( !this.createDate ) {
    this.createDate = now;
  }
  next();
});


module.exports = mongoose.model('Course', CourseSchema);