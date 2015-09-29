angular.module('ngSoloists.hero', [])

.directive("ssHero", function() {
	return {
		restrict: "A",
		scope: {
			selection:"="
		},
		templateUrl: 'directives/hero.tpl.html',
		link: function(scope, element, attrs) {

			
		}
	};
});

