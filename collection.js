﻿var MongoClient = require('mongodb').MongoClient;

// Подключение к базе данных exampleDb
MongoClient.connect("mongodb://localhost:27017/exampleDb", function(error, db) {
	// error - объект ошибки. если пустой, то все ок
	// db - объект для взаимодействия с базой
	if(!error) {  // Проверка на наличие ошибок
		console.log("mongodb connected"); 

		// This function will not actually create a collection on the database until you actually insert the first document.
		db.collection('test', function(err, collection) {
			console.log(err);
		});
		
		// Notice the {strict:true} option. This option will make the driver check if the collection exists and issue an error if it does not.
		db.collection('test', {strict:true}, function(err, collection) {
			console.log(err);
		});
		
		// This command will create the collection on the Mongo DB database before returning the collection object. If the collection already exists it will ignore the creation of the collection.
		db.createCollection('test', function(err, collection) {
			console.log(err);
		});
		
		// The {strict:true} option will make the method return an error if the collection already exists.
		db.createCollection('test', {strict:true}, function(err, collection) {
			console.log(err);
		});
		
		
		// collection является объектом. для удобства можно использовать следующую конструкцию:
		var collection = db.collection('test');
		
	} else {
		console.log("mongodb not connected");
	}
});

