angular.module('ngSimplySocial.mainNav', [])

.directive("ssMainNav", function() {
	return {
		restrict: "A",
		scope: {
			selection:"="
		},
		templateUrl: 'directives/main-nav.tpl.html',
		link: function(scope, element, attrs) {

			scope.changeContentSelection = function(content) {
				scope.selection.content = content;
			};

			scope.changeFormatSelection = function(format) {
				scope.selection.format = format;
			};

			document.getElementById('all').focus();
		}
	};
});

