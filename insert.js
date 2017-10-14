var MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect("mongodb://localhost:27017/exampleDb", function(err, db) {
  if(!err) {
    console.log("mongodb connected");
		
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
		
		// Сохранение в коллекции books
		db.collection('books').insert(a);
		db.collection('books').insert(b);
		db.collection('books').insert(c);

	
  } else {
    console.log("mongodb not connected");
  }
});