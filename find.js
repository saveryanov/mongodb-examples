var MongoClient = require('mongodb').MongoClient;
﻿var conf = require('./conf');	// конфигурация подключения

// Подключение к базе данных exampleDb
MongoClient.connect(conf.getConnectionURI(), function(error, db) {
	if(!error) {
		// Создаем документы книг с key
		var docs = [{ 
			key: 1,		// поле идентификатор
			title:"Книга 1", 
			authorSurname:"Тестировщикович", 
			authorName:"Проверятор" 
		},
		{ 
			key: 2,		// поле идентификатор
			title:"Книга 2", 
			authorSurname:"Тестировщикович", 
			authorName:"Проверятор" 
		}];
		
		// Сохранение книг в коллекции books
		db.collection('books').insert(docs, {w:1}, function(err, result) {
			// find method does not execute the actual query. It builds an instance of Cursor that you then use to retrieve the data. 
			// This lets you manage how you retrieve the data from Mongo DB and keeps state about your current Cursor state on Mongo DB.
			
			// Вернет все документы в коллекции сразу:
			db.collection('books').find().toArray(function(err, items) {});
			// The function toArray might cause a lot of memory usage as it will instantiate all the document into memory before returning the final array of items. 
			// If you have a big resultset you could run into memory issues.
			
			// Способ лучше. Вывод с помощью потока stream (асинхронный вывод):
			// This is the preferred way if you have to retrieve a lot of data for streaming, as data is deserialized a data event is emitted.
			var stream = db.collection('books').find({key:{$ne:2}}).stream();	// $ne - NOT
			stream.on("data", function(item) {	// событие data
				console.log('Найден документ:');
				console.log(item);	// вывод документа
			});
			stream.on("end", function() {});	// событие - конец обработки потока данных
 
			// Если требуется получить всего один документ, то можно воспользоваться методом findOne()
			db.collection('books').findOne({key:1}, function(err, item) {
				console.log('Найден документ с findOne:');
				console.log(item);	// вывод документа
			});

		});
		
	} else {
		console.log("mongodb not connected");
	}
});