angular.module('ngSoloists.mainNav', [])

.directive("ssMainNav", function() {
	return {
		restrict: "A",
		templateUrl: 'directives/main-nav.tpl.html',
		link: function(scope, element, attrs) {

			document.getElementById('all').focus();
		}
	};
});

