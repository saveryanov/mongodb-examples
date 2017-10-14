// Конфиг для подключения к базе данных
var host = "localhost";		// хост
var port = "27017";			// порт
var dbname = "exampleDb";	// имя базы данных
var username = "";
var password = "";

// Экспорт настроек
module.exports.host = host;
module.exports.port = port;
module.exports.dbname = dbname;
module.exports.getConnectionURI = function() {	// функция собирающая URI для подключения к БД
	// Общий вид:
	// mongodb://[username:password@]host1[:port1][,host2[:port2],...[,hostN[:portN]]][/[database][?options]]
	var uri = "";
	uri += "mongodb://";
	if(username && password) {	// если есть логин и пароль то добавляем их в URI (опционально)
		uri += username + ":" + password + "@";
	}
	uri += host + ":" + port + "/" + dbname;	// добавляем хост, порт, имя базы
	return uri;
}

