angular.module( 'ngSoloists', [
  'ui.utils',
  'ui.router',
  'ui.bootstrap',
  'templates-app',
  'templates-common',
  'ngSoloists.settings',
  'ngSoloists.home',
  'ngSoloists.header',
  'ngSoloists.footer',
  'ngSoloists.hero',
  'ngSoloists.mainNav',
  'ngSoloists.createPost',
  'ngSoloists.userService',
  'wu.masonry'
])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider ) {
  $urlRouterProvider.otherwise( '/home' );
})

.run( function run () {

})

.controller( 'AppCtrl', function AppCtrl ( $scope, $location ) {
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    
  });
});

