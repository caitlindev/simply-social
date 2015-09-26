angular.module('ngSoloists.header', [])

.directive("ssHeader", function() {
	return {
		restrict: "A",
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
		}
	};
});

