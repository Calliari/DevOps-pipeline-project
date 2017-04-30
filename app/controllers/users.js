var User = require('../models/user.js');
 
// Module used to send emails
var sendmail = require('sendmail')({
  silent: true
});

// Create User function for Admin
function createUser(req, res) {
  User.create(req.body, function(err, user) {
    if (err) console.log(err.message);
    if (err) return res.json({
      message: 'Could not create user',
      err: err
    });
  // Email sent once User is created
  sendmail({
    from: 'donotreply@spartaglobal.co',
    to: req.body.email,
    subject: 'Welcome to the Spartan Outliner',
    html: '<style>*{font-family: Verdana;}</style><div> Hi ' 
    + user.firstname
    +'<br /> Welcome to the Spartan Outliner!'
    +' Please follow the link that will be sent to you shortly and change your password from the default.'
    +'<br /> Without this change you will not be able to access your account.'
    +'<br /> <br />Kind regards, <br /> Sparta Global</div>'
  }, function(err, reply) {
    console.log(err && err.stack);
    console.dir(reply);
  });
  res.status(201).json(user);
  });
}

function indexUsers(req, res) {
  User.find({}, function (err, users) {
    if (err) {
      console.log(err)
      return res.status(500).json(err)
    }
    res.status(200).json({users:users})
  })
}

function showUser(req, res) {
  var id = req.params.id;
  User.findById(id, function(err, user) {
    console.log(user)
    if (err) {
      console.log(err)
      return res.status(500).json(err)
    }
    res.status(200).json(user)
  });
}

function deleteUser(req, res) {
  User.findByIdAndRemove(req.params.id , function(err, user) {
    if(err) return res.status(500).json({error: err.message});
    
    res.status(204).json({
      message: "succesful delete"
    });
  });
}

function updateUser(req, res) {
  console.log(req.body)
  User.findByIdAndUpdate( req.params.id, { $set:  req.body }, { new: true},  function(err , user){
      if(err) return res.status(500).json({error: err.message});
    
      res.status(204).json(user);
    }
  );
}

module.exports = {
  create: createUser,
  index: indexUsers,
  show: showUser,
  update: updateUser,
  delete: deleteUser
};