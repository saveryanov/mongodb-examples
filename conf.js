// Конфиг для подключения к базе данных
var host = "localhost";		// хост
var port = "27017";			// порт
var dbname = "exampleDb";	// имя базы данных

// Экспорт настроек
module.exports.host = host;
module.exports.port = port;
module.exports.dbname = dbname;
module.exports.getConnectionURI = function() {	// функция собирающая URI для подключения к БД
	return "mongodb://" + host + ":" + port + "/" + dbname;
}