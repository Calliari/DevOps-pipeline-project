angular
  .module('outliner')
  .controller('BindingController', BindingController);


function BindingController($scope) {
  var self = this

  this.title = "title";
  this.aboutTitle = "aboutTitle";
  this.aboutBody = "aboutBody";
  this.aboutBodyQuotes = "aboutBodyQuotes";
  this.aboutBodyQuotedPerson = "aboutBodyQuotedPerson";
  this.iconOne = "iconOne";
  this.iconTwo = "iconTwo";
  this.iconThree = "iconThree";
  this.iconFour = "iconFour";
  this.iconFive = "iconFive";
  this.sellingPointIconOne = "sellingPointIconOne";
  this.sellingPointIconTwo = "sellingPointIconTwo";
  this.sellingPointIconThree = "sellingPointIconThree";
  this.sellingPointIconFour = "sellingPointIconFour";
  this.sellingPointIconFive = "sellingPointIconFive";
  this.sellingPointIconSix = "sellingPointIconSix";
  this.sellingPointIconSeven = "sellingPointIconSeven";
  this.sellingPointIconEight = "sellingPointIconEight";
  this.sellingPointTextOne = "sellingPointTextOne";
  this.sellingPointTextTwo = "sellingPointTextTwo";
  this.sellingPointTextThree = "sellingPointTextThree";
  this.sellingPointTextFour = "sellingPointTextFour";
  this.sellingPointTextFive = "sellingPointTextFive";
  this.sellingPointTextSix = "sellingPointTextSix";
  this.sellingPointTextSeven = "sellingPointTextSeven";
  this.sellingPointTextEight = "sellingPointTextEight";
  this.pageTwoTitle = "pageTwoTitle";

  self.showIconMenu = false;

  self.showIcons = function(){
    self.showIconMenu = !self.showIconMenu;
  };

  self.showSellingPointsMenu = false;

  self.showSellingPoints = function(){
    self.showSellingPointsMenu = !self.showSellingPointsMenu;
  };

  self.showAboutFieldsMenu = false;

  self.showAboutFields = function(){
    self.showAboutFieldsMenu = !self.showAboutFieldsMenu;
  };
  

}