angular.module( 'ngSoloists.createPost', [])


.controller( 'CreatePostCtrl', function CreatePostController($scope, $modalInstance) {
  // console.log('modal!');

  $scope.closeModal = function () {
      $modalInstance.close();
  };
});

