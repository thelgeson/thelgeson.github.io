app.controller("siteController", 
	function siteController($scope) {
	    $scope.firstName = "",
	    $scope.lastName = ""
	    $scope.mySwitch = false;
	    $scope.baby = false;
	    $scope.toggle = function(show_hide) {
	        $scope.mySwitch = show_hide;
	        if ($scope.mySwitch === false){
	          $scope.showbaby(false);
	        }
	    };
	    $scope.showbaby = function(show_hide) {
	        $scope.baby = show_hide;
	    };
});


