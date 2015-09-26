angular.module( 'ngSoloists', [
  'ui.utils',
  'ui.select',
  'ui.router',
  'ui.bootstrap',
  'templates-app',
  'templates-common',
  'ngSoloists.home',
  'ngSoloists.header',
  'ngSoloists.hero',
  'ngSoloists.mainNav',
  'ngSoloists.userService',
  'ui.calendar',
  'uiGmapgoogle-maps'
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

