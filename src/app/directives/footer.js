angular.module('ngSoloists.footer', [])

.directive("ssFooter", function($modal) {
	return {
		restrict: "A",
		scope: {
			searchQuery: "="
		},
		templateUrl: 'directives/footer.tpl.html',
		link: function(scope, element, attrs) {

			
		}
	};
});

