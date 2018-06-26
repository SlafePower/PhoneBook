// Создание приложения, отвечающего за телефонный справочник и его функционал
var app = angular.module('app', []);

// Добавление контроллера телефонной книги
app.controller('phonebookCtrl', function($scope){

  document.getElementById('editPanel').hidden = true;
    $scope.currentPersonId = -1;
    $scope.phonebook = [];

    // Функция доавления нового контакта
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

    // Функция сохранения сформированного контакта
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

    // Функция изменения контакта
    $scope.editPerson = function ( id ) {
      document.getElementById('editPanel').hidden = false;
      $scope.currentPersonId = id;
      $scope.name = $scope.phonebook[id].name;
      $scope.phone = $scope.phonebook[id].phone;
      $scope.email = $scope.phonebook[id].email;
    }

    // Функция удаления контакта
    $scope.deletePerson = function( id ) {
      $scope.phonebook.splice( id, 1 );
    }

    // Функция включения режима редактирования телефонной книги
    $scope.editMode = function() {
      var panel = document.getElementById('editPanel');
      var button = document.getElementById('editButton')
      if (panel.hidden == true) {
        panel.hidden = false;
        button.innerText = "Сохранить";
      } else {
        // Неиспользуемый код отправки данных на серверную часть. Требует иной реализации

        // $http.get("test.json");
        // $scope.phonebook.forEach(element => {
        //   var jsonElement = (JSON.stringify(element));
        //   require('fs').writeFile('test.txt', jsonElement, (err) => {
        //     if (err) throw err;
        //   });
        // });
        // alert('It\'s saved!');
        // Здесь будет происходить оправка данных на сервер
        panel.hidden = true;
        button.innerText = "Изменить";
      }
    }
  })