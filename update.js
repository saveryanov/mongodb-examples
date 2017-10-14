/*
	Доступны следующие операции (для метода update):

	$inc - increment a particular value by a certain amount
	$set - set a particular value
	$unset - delete a particular field (v1.3+)
	$push - append a value to an array
	$pushAll - append several values to an array
	$addToSet - adds value to the array only if its not in the array already
	$pop - removes the last element in an array
	$pull - remove a value(s) from an existing array
	$pullAll - remove several value(s) from an existing array
	$rename - renames the field
	$bit - bitwise operations

*/
var MongoClient = require('mongodb').MongoClient;
﻿var conf = require('./conf');	// конфигурация подключения

// Подключение к базе данных exampleDb
MongoClient.connect(conf.getConnectionURI(), function(error, db) {
	if(!error) {
		// Создаем документы книг с key
		var docs = [{ 
			key: 1,		// поле идентификатор
			fieldtoupdate: "Содержимое поля при добавлении",	// поле которое будет изменено
			title:"Книга для update", 
			authorSurname:"Тестировщикович", 
			authorName:"Проверятор" 
		},
		{ 
			key: 2,		// поле идентификатор
			fieldtoupdate: "Содержимое поля при добавлении",	// поле которое не будет изменено, т.к. изменять будем только key = 1
			title:"Книга не для update", 
			authorSurname:"Тестировщикович", 
			authorName:"Проверятор" 
		}];
		
		// Пример изменения поля документа
		// insert документа с key = 1
		db.collection('books').insert(docs, {w:1}, function(err, result) {
			// Изменение свежего документа с key = 1
			db.collection('books').update(
				{key:1}, // массив полей по которым ищем (аналог SQL where). В нашем случае это key = 1
				{$set:{fieldtoupdate:"Содержимое поля после обновления"}}, 	// что делаем с документом (аналог SQL set column1 = 'value1' ...), $set - операция (о них выше)
				{w:1}, 	// {w:1} option the result parameter in the callback will return the value 1 indicating that 1 document was modified by the update statement.
				function(err, result) {
					console.log('Вывод результата изменения документа с key = 1.');
					console.log(err);
					console.log(result);
					
					console.log('Вывод результата result.message.documents.');
					console.log(result.message.documents);
				}
			);
		});
		
	} else {
		console.log("mongodb not connected");
	}
});