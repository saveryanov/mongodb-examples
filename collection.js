﻿var MongoClient = require('mongodb').MongoClient;
﻿var conf = require('./conf');	// конфигурация подключения

// Подключение к базе данных exampleDb
MongoClient.connect(conf.getConnectionURI(), function(error, db) {
	// error - объект ошибки. если пустой, то все ок
	// db - объект для взаимодействия с базой
	if(!error) {  // Проверка на наличие ошибок
		console.log("mongodb connected"); 

		// Данная функция не создаст коллекцию пока Вы не добавите в нее первый документ
		db.collection('books', function(err, collection) {
			console.log(err);
		});
		
		// Опция {strict:true} позволяет получить ошибку если коллекции не существует.
		db.collection('books', {strict:true}, function(err, collection) {
			console.log(err);
		});
		
		// Данная команда создаст коллекцию перед созданием объекта коллекции. Если коллекция существует, то создавать ее заново не будет
		db.createCollection('books', function(err, collection) {
			console.log('Вывод результата createCollection:');
			console.log(err);
			console.log(collection);
		});
		
		// Опция {strict:true} позволяет получить ошибку если коллекция уже существует.
		db.createCollection('books', {strict:true}, function(err, collection) {
			console.log('Вывод результата createCollection:');
			console.log(err);
			console.log(collection);
		});
		
		// Для удобства использования collection() можно использовать следующую конструкцию:
		var collection = db.collection('books');
		
	} else {
		console.log("mongodb not connected");
	}
});

