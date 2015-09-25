angular.module( 'ngSoloists.home', [])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'home', {
    url: '/home',
    views: {
      "main": {
        controller: 'HomeCtrl',
        templateUrl: 'home/home.tpl.html'
      }
    },
    data:{ pageTitle: 'Home' }
  });
})

.controller( 'HomeCtrl', function HomeController($scope, UserService) {

  $scope.userServiceCall = {
    success: function(data, status, headers, config) {
      console.log(data);
    },
    error: function(data, status, headers, config) {
      // console.log(status);
    }
  };

  
  $scope.userData = [
    {
      id:0,
      firstName:"Rene",
      lastName:"Davidson",
      email:"rene.davidson68@example.com",
      phone:"(957)-633-1372",
      favoriteFood:"Italian",
      jobTitle:"Graphic Designer",
      headline:"I'm in town for my sister's wedding!",
      headerImg:"assets/restaurant_images/RestaurantWeek5.jpg",
      location: {
        city:"Sacramento",
        state:"Oklahoma",
        street:"5387 Miller ave",
        zip:"60488"
      }
    }
  ];
});

