angular
  .module('outliner')
  .factory('Auth', AuthFactory)
  .run(function() {
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyAt9S8CzYVmi_hNrkt_Tkf2n3LhAOCHIMQ",
	    authDomain: "spartanoutliner.firebaseapp.com",
	    databaseURL: "https://spartanoutliner.firebaseio.com",
	    storageBucket: "spartanoutliner.appspot.com",
	    messagingSenderId: "750005830335"
    };
  	firebase.initializeApp(config);
  });

function AuthFactory($firebaseAuth) {
  return $firebaseAuth();
}
