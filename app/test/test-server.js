var chai = require('chai');
var chaiHttp = require('chai-http');
var app = require('../app');
var should = chai.should();
var expect = require('chai').expect;

var User = require('../models/user');
var Course = require('../models/outline');

chai.use(chaiHttp);

beforeEach(function() {
  it ('should sign in with the test user', function() {
    var request = chai.request(app);
    request
      .post('/')
      .set('Accept', 'application/x-www-form-urlencoded')
      .set('content-type', 'application/json')
      .send({
        email:"Test@Testy.com", 
        password:"Richmond1"
      })
      .end(function(err, res) {
        res.should.have.status(200);
      });
  });
});

// describe.skip 
it ('route which serves the view', function() {

  it ('should serve the layout.ejs page on /GET', function (done) {
    var request = chai.request(app);
    request
      .get('/')
      .end(function(err, res) {
        res.should.have.status(200);
        res.should.be.html;
    
        res.text.should.match(/Home/);
        done();
      }); 
  });
});

// describe.skip 
it ('interactions with the users', function () {

  it ('should retrieve an array of users on a /GET', function(done) {
    var request = chai.request(app);
    request
      .get('/api/users')
      .end(function(err, res) {
        res.should.be.json;
        res.should.have.status(200);
        res.text.should.match(/{"users":/);
        done();
      });
  });

  it ('should create a user on a /POST', function (done) {
    var request = chai.request(app);
    request
      .post('/api/users')
      .set('content-type', 'application/json')
      .send({
        uid:"t3st",
        email:"mocha@test.com",
        firstname:"Mocha",
        lastname:"Test",
        permission:true
      })
      .end(function(err, res) {
        res.should.be.json;
        res.should.have.status(201);
        User.findOne({"uid":"t3st"}, function(err, newUser) {
          chai.request(app)
          .get('/api/users/' + newUser._id)
          .end(function(err, res) {
            res.should.have.status(200);
            res.should.be.json;
            res.text.should.match(/Mocha/);
            User.findByIdAndRemove(newUser._id, function(err) {
              if(err) return console.log(err);
              done();
            });
          });
        });            
      });
  });

  it ('should get a single user on a /GET', function(done) {
    var request = chai.request(app);
    request
      .get('/api/users/58d6b977c25f9e47fa140104')
      .end(function(err, res) {
        res.should.be.json;
        res.should.have.status(200);
        res.text.should.match(/Stuart/);
        done();
      });
  });

  it ('should update a user on a /PUT', function(done) {
    var request = chai.request(app);
    request
      .post('/api/users')
      .set('content-type', 'application/json')
      .send({
        uid:"t3st",
        email:"mocha@test.com",
        firstname:"Mocha",
        lastname:"Test",
        permission:true
      })
      .end(function(err, res) {
        res.should.have.status(201);
        User.findOne({"uid":"t3st"}, function(err, newUser) {
          chai.request(app)
          .put('/api/users/' + newUser._id)
          .set('content-type', 'application/json')
          .send({
            lastname:"Chai"
          })
          .end(function(err, res) {
            res.should.have.status(204);
            User.findOne({"uid":"t3st"}, function(err, newUser) {
              chai.request(app)
              .get('/api/users/' + newUser._id)
              .end(function(err, res) {
                res.should.have.status(200);
                res.should.be.json;
                res.text.should.match(/Mocha/);
                User.findByIdAndRemove(newUser._id, function(err) {
                  if(err) return console.log(err);
                  done();
                });
              });
            });
          });
        });
      });
  });

  it ('should delete a user on a /DELETE', function(done) {
    var request = chai.request(app);
    request
      .post('/api/users')
      .set('content-type', 'application/json')
      .send({
        uid:"t3st",
        email:"mocha@test.com",
        firstname:"Mocha",
        lastname:"Test",
        permission:true
      })
      .end(function(err, res) {
        res.should.be.json;
        res.should.have.status(201);
        User.findOne({"uid":"t3st"}, function(err, newUser) {
          chai.request(app)
          .get('/api/users/' + newUser._id)
          .end(function(err, res) {
            res.should.have.status(200);
            User.findByIdAndRemove(newUser._id, function(err) {
              if(err) return console.log(err);
            });
            chai.request(app)
              .get('/api/users/' + newUser._id)
              .end(function(err, res) {
                res.should.have.status(200);
                res.should.be.json;   
                done();
              });
          });
        });
      });            
  })
});

// describe.skip 
it ('interactions with the courses', function () {

  it ('should get all course on a /GET', function (done) {
    var request = chai.request(app);
    request
      .get('/api/courses')
      .end(function(err, res) {
        res.should.be.json;
        res.should.have.status(200);
        res.text.should.match(/{"course":/);
        done();
      });
  });

  // it ('should create a course on a /POST', function (done) {
  //   var request = chai.request(app);
  //   request
  //     .post('/api/courses')
  //     .set('content-type', 'application/json')
  //     .send({
  //       courseType: "webdev",
  //       title: "test",
  //       aboutTitle: "test",
  //       aboutBody: "test",
  //       aboutBodyQuotes: "test",
  //       aboutBodyQuotedPerson: "test",
  //       pageTwoTitle: "test"
  //     })
  //     .end(function(err, res) {
  //       res.should.be.json;
  //       res.should.have.status(201);
  //       Course.findOne({"title":"test"}, function(err, newCourse) {
  //         chai.request(app)
  //         .get('/api/courses/' + newCourse._id)
  //         .end(function(err, res) {
  //           res.should.have.status(200);
  //           res.should.be.json;
  //           res.text.should.match(/test/);
  //           Course.findByIdAndRemove(newCourse._id, function(err) {
  //             if(err) return console.log(err);
  //             done();
  //           });
  //         });
  //       });            
  //     });
  // });
});

// describe.skip 
it ('interactions with the modules', function () {

  it ('should create a module on a /POST', function(done) {
    var request = chai.request(app);
    request
      .get('/api/modules')
      .end(function(err, res) {
        res.should.be.json;
        res.should.have.status(200);
        res.text.should.match(/{"modules":/);
        done();
      });
  });

  it ('should show all the modules on a /GET', function(done) {
    var request = chai.request(app);
    request
      .get('/api/modules')
      .end(function(err, res) {
        res.should.be.json;
        res.should.have.status(200);
        res.text.should.match(/{"modules":/);
        done();
      });
  });
});

// describe.skip 
it ('interactions with individual courses', function() {

  it ('should show all courses of a type on /GET', function(done) {
    var request = chai.request(app);
    request
      .get('/api/courses/sdet')
      .end(function(err, res) {
        res.should.be.json;
        res.should.have.status(200);
        res.text.should.match(/"courseType":"sdet"/);
        done();
      });
  });

});













