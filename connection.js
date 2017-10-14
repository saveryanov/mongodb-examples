﻿var MongoClient = require('mongodb').MongoClient;
﻿var conf = require('./conf');	// конфигурация подключения

// Подключение к базе данных exampleDb
MongoClient.connect(conf.getConnectionURI(), function(error, db) {
	// error - объект ошибки. если пустой, то все ок
	// db - объект для взаимодействия с базой
	
	console.log(error);
	if(!error) {  // Проверка на наличие ошибок
		console.log("mongodb connected"); 
	} else {
		console.log("mongodb not connected");
	}
});

