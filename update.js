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

// Подключение к exampleDb
MongoClient.connect("mongodb://localhost:27017/exampleDb", function(error, db) {
	if(!error) {
		// Создаем объект книги с key
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
		
		// Пример изменения поля объекта (документа)
		// insert объекта с key = 1
		db.collection('books').insert(docs, {w:1}, function(err, result) {
			// Изменение свежего объекта с key = 1
			db.collection('books').update(
				{key:1}, // массив полей по которым ищем (аналог SQL where). В нашем случае это key = 1
				{$set:{fieldtoupdate:"Содержимое поля после обновления"}}, 	// То что обновляем (аналог SQL set column1 = 'value1' ...), $set - операция (о них выше)
				{w:1}, 
				function(err, result) {
					console.log('Вывод результата изменения объекта с key = 1.');
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