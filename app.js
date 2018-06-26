
/**
 * Варианты рефлизации сервера
 */
// Подключение модуля http
// const http = require('http');
// const fs = require('fs');
var express = require('express');
var fs = require('fs');

// var html = fs.readFile(__dirname + '/index.html');
var css;
var panelCss;
var js;


var phoneBookData = [
  {
    'name' : "test"
  }
]
var app = express();
// Создание сервера
// const server = http.createServer();
  // server.on('request', (req, res) => {
  // console.log(req.url);
  // console.log(req.method);
  // console.log(req.headers);

  app.get('/', function(req,res) {
    // res.send('index.html');
    // var data = fs.writeFile('test.json', '{"test": 1321}', 'utf8');
    // res.send(data);
    res.send('hello')
  });

  app.get('/test', function(req,res) {
    // switch(req.url) {
    //   res.writeHead(200, {'Content-Type' : 'text/html'}) 
    //   case '/' : res.sendFile(__dirname + '/index.html'); break
    //   case '/style.css' :res.sendFile(__dirname + '/style.css'); break
    //   case '/panelStyle.css' :res.sendFile(__dirname + '/panelStyle.css'); break
    //   case '/jsmain.js' :res.sendFile(__dirname + '/jsmain.js');
  // }
  res.sendFile(__dirname + '/index.html');
  });
  app.get('/style.css', function(req,res) {res.sendFile(__dirname + '/style.css');})
  app.get('/panelStyle.css', function(req,res) {res.sendFile(__dirname + '/panelStyle.css');})
  app.get('/jsmain.js', function(req,res) {res.sendFile(__dirname + '/jsmain.js');})
  // Передача статуса кода и типа данных
//   res.writeHead(200, { 'Content-Type': 'file' });
//   res.end('../index.html');
// });

// server.on('request', (req, res) => {
//   // Передача статуса кода и типа данных
//   res.writeHead(200, { 'Content-Type': 'test/plain' })
//   res.end('Основы NodeJS');
// });


/**
 * Listener-ы
 */
// server.listen(5000, 'localhost', () =>{
//   console.log('Сервер работает')
// })
app.listen(5000, function() {
  console.log('API app started');
})