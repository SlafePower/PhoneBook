// Подключение модулей
var express = require('express');
var fs = require('fs');
var upload = require('express-fileupload');

/**
 * Поля, характеризующие страницу телефонного справочника
 */
var html;
var css;
var panelCss;
var js;

// Создание сервера с помощью модуля Express
var app = express();

/**
 * Варианты пользовательских запросов
 */
  app.get('/', function(req,res) {res.sendFile(__dirname + '/index.html');});
  app.get('/style.css', function(req,res) {res.sendFile(__dirname + '/style.css');})
  app.get('/panelStyle.css', function(req,res) {res.sendFile(__dirname + '/panelStyle.css');})
  app.get('/jsmain.js', function(req,res) {res.sendFile(__dirname + '/jsmain.js');})

// Тело функции, выполняющееся после запуска сервера
app.listen(5000, function() {
  console.log('API app started');
})

// Информирование и текущем пользовательском запросе
app.post("/", (req, res) => {
  if(req.files) {
    console.log(req.files);
  }
})