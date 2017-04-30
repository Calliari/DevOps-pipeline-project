angular
  .module('outliner', ['ui.router', 'ui.materialize', 'firebase', 'akoenig.deckgrid'])
  .constant('API', '/api')
  .config(MainRouter)
  // .run(AuthCatcher);


// checks if there is an authorized user whenever the state is changed
// function AuthCatcher ($rootScope, $state) {
//   $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
//     if (error === "AUTH_REQUIRED") $state.go('authrequired');
// });

//   $rootScope.$on('$stateChangeSuccess', function() {
//     document.body.scrollTop = document.documentElement.scrollTop = 0;
//     $('#mobileNavModal').modal('hide');
//   });
// }

// Main Router for Angular that controls the display of different states
function MainRouter($stateProvider, $urlRouterProvider) {
  // var authRequired = {
  //     currentAuth: function (Auth) {
  //         return Auth.$requireSignIn();
  //     }
  // };

  $stateProvider
    .state('index', {
      url: '/',
      templateUrl: '/states/index.html'
    })
    .state('view', {
      url: '/view/:type',
      templateUrl: '/states/view.html'
    })
    .state('passwordreset', {
      url: '/passwordreset',
      templateUrl: '/states/passwordreset.html'
    })
    .state('users', {
      url: '/users',
      templateUrl: '/states/users.html'
    })
    .state('create', {
      url: '/create',
      templateUrl: '/states/create.html'
    })
  // Else, display index
  $urlRouterProvider.otherwise('/');
}