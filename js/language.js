// homeLanguage.js

(function() {
	
	var app = angular.module("home", [
		'LocalStorageModule'
		]);
	
	var LanguageController = function($scope, $location, localStorageService){ 

		var spanish;
		
		 if(localStorageService.length()>0)
		 {
			 spanish = localStorageService.get('spanish');

			 $scope.init = (spanish === 'true');

			 if(spanish === 'true')
			 {
			 	loadLanguage("Es");
			 }
			 else
			 {
			 	loadLanguage("En");
			 }
		 }

		 $scope.languageChanged = function() {

		     spanish = $scope.checkboxModel.value;
		     localStorageService.set('spanish', spanish);

		     if(spanish === true)
			 {
			 	loadLanguage("Es");
			 }
			 else
			 {
			 	loadLanguage("En");
			 }
		 }

		 function loadLanguage(language) {
		     $.ajax({
		        url: 'languages.xml',
		        success: function(xml) {
		            $(xml).find('translation').each(function(){
		                var id = $(this).attr('id');
		                var text = $(this).find(language).text();
		                $("." + id).html(text);
		            });
		        }
		     });
		 }   
	}
	
	app.config(function (localStorageServiceProvider) {	
		localStorageServiceProvider
			.setPrefix('hotelVillaTournon')
			.setStorageType('sessionStorage')	
    });

    app.controller("LanguageController", LanguageController); 
	
}());