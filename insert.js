var MongoClient = require('mongodb').MongoClient;
﻿var conf = require('./conf');	// конфигурация подключения

// Подключение к базе данных exampleDb
MongoClient.connect(conf.getConnectionURI(), function(error, db) {
	if(!error) {
		// Создаем объекты книг
		a = { 
			title:"Война и мир", 
			authorSurname:"Толстой", 
			authorName:"Лев" 
		};
		b = { 
			title:"Спектр", 		
			authorSurname:"Лукьяненко", 
			authorName:"Сергей" 
		};
		c = { 
			title:"Черновик", 
			authorSurname:"Лукьяненко", 
			authorName:"Сергей" 
		};	
		
		// Сохранение объектов поштучно в коллекции books
		db.collection('books').insert(a);
		db.collection('books').insert(b);
		db.collection('books').insert(c, {w:1}, function(err, result) {		// так можно получить результат операции
			console.log('Вывод результата добавления одного объекта.');
			console.log(err);
			console.log(result);
			
			console.log('ID записи:');
			console.log(result.insertedIds);	// получить id вставленной записи (одной!)
		});	
		
		// Сохранение всех сразу
		var lotsOfBooks = [a, b, c];	// [{'hello':'doc3'}, {'hello':'doc4'}]
		db.collection('books').insert(lotsOfBooks, {w:1}, function(err, result) {
			console.log('Вывод результата добавления 3х объектов.');
			console.log(err);
			console.log(result);
			
			console.log('ID записей:');
			console.log(result.getInsertedIds());	// получить id вставленных записей (многих!)
		});
		
	} else {
		console.log("mongodb not connected");
	}
});