angular.module( 'ngSimplySocial', [
  'ui.utils',
  'ui.router',
  'ui.bootstrap',
  'templates-app',
  'templates-common',
  'ngSimplySocial.settings',
  'ngSimplySocial.home',
  'ngSimplySocial.header',
  'ngSimplySocial.footer',
  'ngSimplySocial.hero',
  'ngSimplySocial.mainNav',
  'ngSimplySocial.createPost',
  'ngSimplySocial.userService',
  'wu.masonry',
  'ng.shims.placeholder'
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

