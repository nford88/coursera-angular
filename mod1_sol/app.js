(function() {

  'use strict';

  angular.module('LunchCheck', []).

  controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {
    $scope.box = ''; //user's input box
    $scope.outMessage = ''; //output message

    $scope.checkIfTooMuch = function() {
      //check if input is empty
      if($scope.box.length === 0) {
        $scope.outMessage = 'Please enter data first!';
        $scope.style = 'text-danger';
        $scope.borderStyle = 'redborder';
      }else {
        //use split method to split the input lunch in the various items
        var items = $scope.box.split(',');
        //check the number of items to return the apppropriate message
        $scope.outMessage = items.length > 3 ? 'Too much!' : 'Enjoy!';
        $scope.style = 'text-success';
        $scope.borderStyle = 'greenborder';
    }};

  };

})();
