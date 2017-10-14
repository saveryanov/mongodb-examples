# mongodb-examples
Несколько примеров для работы с mongodb в node.js

* connection.js - подключение
* collection.js - работа с коллекциями (создание)
* insert.js - вставка данных
* update.js - изменение данных
* remove.js - удаление данных (документов)
* find.js - запросы/поиск документов

Файл conf.js содержит данные для подключения к базе данных (хост, порт, имя базы) и метод для формирования URI.

Для работы требуется модуль nodejs mongodb. Его установка доступна с помощью пакетного менеджера npm:
>npm install mongodb

Примеры запускаются следующей командой:
>node FILENAME.js