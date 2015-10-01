angular.module( 'ngSimplySocial.settings', ['ngSanitize'])

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
    name:"Caitlin Smith",
    email:"caitlindev@gmail.com",
    password:"Bunnies123",
    avatar:"assets/images/avatar-large.jpg",
    notifications:{
      favorites:true,
      mentioned:true,
      reply:true,
      follow:true
    },
    privacy:{
      tag:'public', //protected | private
      addLocation:true,
      findByEmail:true,
      tailorAds:true
    }
  };


  $scope.changeStatus = function(setting) {
    $scope.accountSettings.notifications[setting] = !$scope.accountSettings.notifications[setting];
  };
  
});