angular
	.module('outliner')
	.service("CourseForm", CourseForm);

function CourseForm() {
	var self = this;

	self.moduleTitle = "";
	self.moduleDescription = "";
	self.module = {};

	self.allModules = [];

	self.chosenModules = [];

	self.getViewData = function() {
		return {
			moduleTitle: self.moduleTitle,
			moduleDescription: self.moduleDescription,
			module: self.module,
			allModules: self.allModules,
			chosenModules: self.chosenModules
		}
	}
}