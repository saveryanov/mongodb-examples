﻿var MongoClient = require('mongodb').MongoClient;

// Подключение к базе данных exampleDb
MongoClient.connect("mongodb://localhost:27017/exampleDb", function(error, db) {
	// error - объект ошибки. если пустой, то все ок
	// db - объект для взаимодействия с базой
	
	console.log(error);
	if(!error) {  // Проверка на наличие ошибок
		console.log("mongodb connected"); 
	} else {
		console.log("mongodb not connected");
	}
});

