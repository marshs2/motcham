var socialApp = angular.module('socialApp',['socialLogin']);

socialApp.controller('socialController',['$scope',function($scope){
  $scope.welcome ="Welcome to Angular";
}]);
