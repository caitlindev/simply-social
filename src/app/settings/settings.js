angular.module( 'ngSoloists.settings', ['ngSanitize'])

.config(function config( $stateProvider, $urlRouterProvider ) {
  $stateProvider.state( 'settings', {
    url: '/settings',
    views: {
      "main": {
        controller: 'SettingsCtrl',
        templateUrl: 'settings/settings.tpl.html'
      }
    },
    data:{ pageTitle: 'Settings' }
  });
})

.controller( 'SettingsCtrl', function SettingsController($scope) {

  $scope.accountSettings = {
    name:"",
    email:"",
    password:"",
    password2:""
  };
  
});