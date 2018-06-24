var app = angular.module('app', []);

app.controller
// angular.module('ng').filter('tel', function (){});
app.controller('phonebookCtrl', function($scope){
    $scope.currentPersonId = -1;
    $scope.phonebook = [];
    $scope.addNewPerson = function() {
      if ( $scope.name != '' ) {
        $scope.phonebook.push({
          name: $scope.name,
          phone: $scope.phone,
          email: $scope.email
        });
        $scope.name = '';
        $scope.phone = '';
        $scope.email = '';
      }
    }
    $scope.savePerson = function() {
      if( $scope.currentPersonId > -1 ){
        var id = $scope.currentPersonId;
        $scope.phonebook[id].name = $scope.name;
        $scope.phonebook[id].phone = $scope.phone;
        $scope.phonebook[id].email = $scope.email;
        $scope.name = '';
        $scope.phone = '';
        $scope.email = '';
        $scope.currentPersonId = -1;
      }
    }
    $scope.editPerson = function ( id ) {
      $scope.currentPersonId = id;
      $scope.name = $scope.phonebook[id].name;
      $scope.phone = $scope.phonebook[id].phone;
      $scope.email = $scope.phonebook[id].email;
    }
    $scope.deletePerson = function( id ) {
      $scope.phonebook.splice( id, 1 );
    }
  })