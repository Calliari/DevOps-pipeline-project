angular
  .module('outliner')
  .controller('ModuleController', ModuleController);

function ModuleController(Course, Module, CourseForm, $stateParams, $state, $scope, $document, $rootScope){
	var self = this;

	self.moduleColours = {
		core: {colours: {dark: "#0B8EC8", light: "#34BEEF"}},

		certification: {colours: {dark: "#57A989", light: "#6CBE9D "}},

		specialist: {colours: {dark: "#EF7F4E", light: "#F2905E "}}
	}

	self.selectedColour = {};


	self.createModule = function() {
		Module.create({
			module: {
				title: self.newModule.moduleTitle,
				description: self.newModule.moduleDescription,
				colour: self.newModule.moduleColour
			}
		})
		.then(function(res) {
    	CourseForm.allModules.push(res.data);
    	console.log(res.data);
    	CourseForm.moduleTitle = "";
		CourseForm.moduleDescription = "";
		$rootScope.$broadcast("moduleData");
    	// console.log(self.allModules)
    })
		
    // CATCH ANY ERRORS AND LOG THEM TO THE CONSOLE
    .catch(function(err) {
      console.log(err)
    })
	}

	self.getModules = function() {
		Module.getAll()
			.then(function(res) {
				CourseForm.allModules = res.data.modules;
				console.log(Module.allModules)
				$rootScope.$broadcast("moduleData");
			})
	}

	self.selectModules = function(modules) {
		CourseForm.chosenModules = modules;
		$rootScope.$broadcast("moduleData");
	}

	self.selectColour = function(colour) {
		CourseForm.selectedColour = colour;
		
	}

	self.refreshData = function() {
		var moduleData = CourseForm.getViewData();
		self.moduleTitle = moduleData.moduleTitle;
		self.moduleDescription = moduleData.moduleDescription;
		self.module = moduleData.module;
		self.allModules = moduleData.allModules;
		self.chosenModules = moduleData.chosenModules;
		console.log(self);
	}	

	$rootScope.$on('moduleData', function() {
		console.log("eventing!")
		self.refreshData()
	});

	return self;
}