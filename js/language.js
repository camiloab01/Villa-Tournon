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
		 else
		 {
		 	loadLanguage("En");
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

    var BookingController = function($scope){ 
	
	$scope.childrenNotAllowed = false;

    	var room;
    	var numberDays;
    	var dayPrice;

        var today = new Date();
        var dd = today.getDate();
        var dd2 = today.getDate()+1;
        var mm = today.getMonth()+1;
        var yyyy = today.getFullYear();

        if(dd<10){
            dd='0'+dd;
        } 
        if(mm<10){
            mm='0'+mm;
        }

        var today = mm+'-'+dd+'-'+yyyy; 
        var tomorrow = mm+'-'+dd2+'-'+yyyy; 

        $scope.CheckInSelected = today;
        $scope.CheckOutSelected = tomorrow;
        
    	var url = location.search;

		room = $.query.get('room');
		var checkIn = $.query.get('checkIn');
		var checkOut = $.query.get('checkOut');
		var numberRooms = $.query.get('NumberRooms');

		$scope.NumberChildrenSelected = 0;
		$scope.NumberAdultsSelected = 1;
		
		if(room ===""){

			$scope.RoomSelected = $scope.RoomTittle = room = "Standard";
			$scope.NumberRoomsSelected = 1;
		}
		else{

			$scope.RoomSelected = $scope.RoomTittle = room;
			$scope.NumberRoomsSelected = numberRooms;
			$scope.CheckInSelected = checkIn;
			$scope.CheckOutSelected = checkOut;
		}

		setRoomOptions();
		setDaysNumber();
		updatePricing();

    	$scope.roomChanged = function(){ 

    		room = $scope.RoomSelected;
    		$scope.RoomTittle = room;

    		setRoomOptions();
    		updatePricing();
    	}

    	function setRoomOptions(){

    		switch(room){

    			case "Standard":
                    $scope.regPrice = 95;
                    $scope.twoPersonPrice = 110;
    				$scope.roomPath = "img/home_page/rooms/DSC_2648.jpg";
    				if($scope.NumberAdultsSelected == 1 || $scope.NumberAdultsSelected == undefined){
    					$scope.RoomPrice = dayPrice = 95;
    				}
    				else if($scope.NumberAdultsSelected==2){
    					$scope.RoomPrice = dayPrice = 110;
    				}
    				else if($scope.NumberAdultsSelected>2){
    					var additionalPerson = $scope.NumberAdultsSelected - 2;
    					$scope.RoomPrice = dayPrice = 110 + additionalPerson*20;
    				}
    				//$scope.features =["Wi-Fi","TV","GYM","Parking",$scope.SafetyBox,$scope.HairDryer];
    				$scope.AddPeople =["1","2"];
				$scope.childrenNotAllowed = false;
    				break;
    			case "Deluxe":
                    $scope.regPrice = 135;
                    $scope.twoPersonPrice = 160;
    				$scope.roomPath = "img/home_page/rooms/DSC_2157.jpg";
    				if($scope.NumberAdultsSelected==1|| $scope.NumberAdultsSelected == undefined){
    					$scope.RoomPrice = dayPrice = 135;
    				}
    				else if($scope.NumberAdultsSelected==2){
    					$scope.RoomPrice = dayPrice = 160;
    				}
    			//	$scope.features =["Wi-Fi","TV","GYM","Parking",$scope.SafetyBox,$scope.HairDryer, $scope.IronTable];
    				$scope.AddPeople =["1","2"];
				$scope.childrenNotAllowed = true;
    				break;
    			case "Superior":
                    $scope.regPrice = 125;
                    $scope.twoPersonPrice = 135;
    				$scope.roomPath = "img/home_page/rooms/DSC_2369.jpg";
    				if($scope.NumberAdultsSelected==1|| $scope.NumberAdultsSelected == undefined){
    					$scope.RoomPrice = dayPrice = 125;
    				}
    				else if($scope.NumberAdultsSelected==2){
    					$scope.RoomPrice = dayPrice = 135;
    				}
    				else if($scope.NumberAdultsSelected>2){
    					var additionalPerson = $scope.NumberAdultsSelected - 2;
    					$scope.RoomPrice = dayPrice = 135 + additionalPerson*25;
    				}
    				///$scope.features =["Wi-Fi","TV","GYM","Parking",$scope.SafetyBox,$scope.HairDryer, $scope.IronTable];
    				$scope.AddPeople =["1","2","3","4"];
				$scope.childrenNotAllowed = false;
    				break;
    		}

    	}

    	$scope.roomsNumberChange = function(){
    		updatePricing();

    	}

    	function updatePricing(){
    		$scope.GrandTotal = $scope.daysNumber*$scope.RoomPrice*$scope.NumberRoomsSelected;
    	}

    	$scope.dateChanged = function(){

    		setDaysNumber();

    		updatePricing();
    	}

    	function setDaysNumber(){

    		checkIn = $scope.CheckInSelected;
			checkOut = $scope.CheckOutSelected;

    		if(checkIn === "" || checkOut === "" || checkIn === undefined || checkOut === undefined){

    			$scope.daysNumber = 0;
    		}
    		else{

	    		var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds

				var checkInSplit = checkIn.split("-");
				var firstDate = new Date(checkInSplit[2], checkInSplit[0]-1, checkInSplit[1]);
				var checkOutSplit = checkOut.split("-");
				var secondDate = new Date(checkOutSplit[2], checkOutSplit[0]-1, checkOutSplit[1]);

				var numberDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)));

				$scope.daysNumber = numberDays;
    		}
    	}

    	$scope.adultsChanged = function(){

    		switch(room){

    			case "Standard":
    				if($scope.NumberAdultsSelected==1|| $scope.NumberAdultsSelected == undefined){
    					$scope.RoomPrice = dayPrice = 95;
    				}
    				else if($scope.NumberAdultsSelected==2){
    					$scope.RoomPrice = dayPrice = 110;
    				}
    				else if($scope.NumberAdultsSelected>2){
    					var additionalPerson = $scope.NumberAdultsSelected - 2;
    					$scope.RoomPrice = dayPrice = 110 + additionalPerson*20;
    				}
    				break;
    			case "Deluxe":
    				if($scope.NumberAdultsSelected==1|| $scope.NumberAdultsSelected == undefined){
    					$scope.RoomPrice = dayPrice = 135;
    				}
    				else if($scope.NumberAdultsSelected==2){
    					$scope.RoomPrice = dayPrice = 160;
    				}
    				break;
    			case "Superior":
    				if($scope.NumberAdultsSelected==1|| $scope.NumberAdultsSelected == undefined){
    					$scope.RoomPrice = dayPrice = 125;
    				}
    				else if($scope.NumberAdultsSelected==2){
    					$scope.RoomPrice = dayPrice = 135;
    				}
    				else if($scope.NumberAdultsSelected>2){
    					var additionalPerson = $scope.NumberAdultsSelected - 2;
    					$scope.RoomPrice = dayPrice = 135 + additionalPerson*25;
    				}
    				break;    		
    			}

    		updatePricing();
    	}
	
	}

    app.controller("BookingController", BookingController); 

    app.controller("LanguageController", LanguageController); 
	
}());