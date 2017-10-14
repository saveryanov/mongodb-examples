var MongoClient = require('mongodb').MongoClient;

// Подключение к exampleDb
MongoClient.connect("mongodb://localhost:27017/exampleDb", function(error, db) {
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
		
		// сначала сохраним книги
		db.collection('books').insert(docs, {w:1}, function(err, result) {
			// удаление книги с key = 1
			db.collection('books').remove({key:1});	
			
			// удаление книги с key = 2 и получением результата
			db.collection('books').remove({key:2}, {w:1}, function(err, result) { 
				console.log('Вывод результата удаления одного объекта.');
				console.log(err);
				console.log(result);
			});
			
			// удаление всех документов из коллекции
			db.collection('books').remove();	
		});
		
	} else {
		console.log("mongodb not connected");
	}
});