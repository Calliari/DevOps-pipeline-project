angular
  .module('outliner')
  .controller('AuthController', AuthController);

/* Authorisation controller using firebase to track users credentials */

function AuthController(Auth, User, $scope, $state, $stateParams, $document, $rootScope) {
  var self = this;
  var _id = ""
  // self.newUserEmail = "";
  self.loggedIn = false;
  self.permission = false;
  self.allUsers = [];
  self.currentUser = {};

  // window.setInterval(function (user) {
  //   console.log(user)
  // }, 10000)

  // Check if user is logged in, set local storage to match
  self.checkLoggedIn = function() {
    return (localStorage.getItem("user")) ? true : false;
  };

  // Log-in function
  self.signIn = function() {
    Auth.$signInWithEmailAndPassword(self.email, self.password)
      .then(function() {
        self.loggedIn = true;
        localStorage.setItem("user", "true");
      })
      .catch(function(error) {
        self.error = error;
      });
  };

  //set user to obeject of user
  Auth.$onAuthStateChanged(function(user) {
    if (user) {
      self.user = user;

      // self.getUser();
    }
  });

  // Create a new user in firebase and database
  self.createUser = function() {
    self.password = "Richmond1";
    Auth.$createUserWithEmailAndPassword(self.email, self.password)
      .then(function(user) {
        User.create({
          uid: user.uid,
          email: user.email,
          firstname: self.firstname,
          lastname: self.lastname,
          permission: self.permission
        }).then(function(newUser) {
          self.sendEmail();
          self.resetCredentials();
          $state.go('users', {}, { reload: true });
          
        }).catch(function (err) { 
          console.log(err)
          self.err = err.err; 
        })
        
      }).catch(function(error) {
          self.error = error.message;
          console.log(self.error)
      });
  };

  // Send's users email to factory, which will be used to send password reset email to
  self.sendEmail = function() {
    self.success = 0;
    Auth.$sendPasswordResetEmail(self.email).then(function() {
      self.success = 1;
    }).catch(function(error) {
      self.success = 2;
    });
  };

  // Reset set data
  self.resetCredentials = function() {
    self.firstname = "";
    self.lastname = "";
    self.email = "";
    self.password = "";
    self.error = "";
  };

  // Sign out with firebase
  self.signOut = function() {
    Auth.$signOut();
    self.loggedIn = false;
    localStorage.removeItem("user");
    $state.go('index');
  };

  self.getUser = function(id) {
    console.log(id);
    User.get(id)
      .then(function(res) {
        self.selectedUser = res.data;
        self.permission = res.data.permission;
        _id = self.selectedUser._id;
      })
  };

  // Gets all users from the database
  self.getAllUsers = function() {
    User.getAll()
      .then(function(res){
        self.allUsers = res.data.users;
      })
      .catch(function(err){
        console.log(err);
      })
  };
  // Updates user in the database
  self.updateUser = function() {
    var id = self.selectedUser._id
    User.update(id, self.selectedUser)
    .catch(function(err) {
      console.log(err);
      self.err = err.err
    })
  }
  // Delete Users that are no longer needed from the database
  self.deleteUser = function() {
    var id = self.selectedUser._id
    User.delete(id, self.selectedUser)
    .catch(function(err) {
      console.log(err);
      self.err = err.err
    })
    $state.go('users', {}, { reload: true });
  }

  self.loggedIn = self.checkLoggedIn();
}
