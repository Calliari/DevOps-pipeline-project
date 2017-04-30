angular
	.module('outliner')
	.directive('module', moduleDirective)

function moduleDirective() {
	return{
		restrict: 'E',
		replace: true,
		templateUrl: 'js/directives/module.dir.html',
		scope:{ 
			// = @ &
			title: '=',
			description: '=', 
		}
		// ,link: function(scope,element, attrs){
		// 	scope.showSkills = false;
		// 	scope.toggleSkills = function(){
		// 		scope.showSkills = !scope.showSkills;
		// 	}

		// 	if(scope.gender !== 'male'){
		// 		angular.element(element).addClass('female');
		// 	}
		// }
	}
}