var socialApp = angular.module('socialApp',['socialLogin']);

socialApp.config(function(socialProvider){
  socialProvider.setGoogleKey("289530645943-225p39pv1hldnoeua6u814lk7dpense0.apps.googleusercontent.com");
});

socialApp.controller('socialController',['$rootScope','$scope',function($rootScope,$scope){
  $scope.welcome ="Welcome to Angular";

  $rootScope.$on('event:social-sign-in-success', function(event, userDetails){
    alert("Successful Login")
  })
}]);
