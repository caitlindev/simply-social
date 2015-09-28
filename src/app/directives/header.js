angular.module('ngSoloists.header', [])

.directive("ssHeader", function($modal) {
	return {
		restrict: "A",
		scope: {
			searchQuery: "="
		},
		templateUrl: 'directives/header.tpl.html',
		link: function(scope, element, attrs) {

			scope.items = [
				{
					title:"Profile",
					url:"/profile"
				},{
					title:"Followers",
					url:"/followers"
				},{
					title:"Following",
					url:"/following"
				},{
					title:"Settings",
					url:"/settings"
				}
			];


			scope.createPost = function() {
				scope.modalInstance = $modal.open({
					templateUrl: 'home/create-post.tpl.html',
					controller: 'CreatePostCtrl',
					resolve: {}
				});

				scope.modalInstance.result.then(function (data) {
					// console.log('modal closed.');
				});
			};
		}
	};
});

