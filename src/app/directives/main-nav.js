angular.module('ngSoloists.mainNav', [])

.directive("ssMainNav", function() {
	return {
		restrict: "A",
		templateUrl: 'directives/main-nav.tpl.html',
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
		}
	};
});

