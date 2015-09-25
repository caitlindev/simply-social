angular.module('ngSoloists.header', [])

.directive("ssHeader", function($window, $http, $log) {
	return {
		restrict: "A",
		templateUrl: 'directives/header.tpl.html',
		link: function(scope, element, attrs) {
			console.log("blah");

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

			scope.status = {
				isopen: false
			};

			scope.toggleDropdown = function($event) {
				$event.preventDefault();
				$event.stopPropagation();
				scope.status.isopen = !scope.status.isopen;
			};
		}
	};
});

