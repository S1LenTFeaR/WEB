/* Модуль http используется для работы с node.js */
var http = require("http");
/* createServer() используется для создания сервера */
/* В качестве параметра listen() передается номер порта */
/* request: хранит информацию о запросе */
/* response: управляет отправкой ответа */
http.createServer(function (request, response) 
{
    console.log(request.headers);
    /* writeHead: добавляет в ответ статусный код и набор заголовков */
    response.writeHead(200, {"Content-Type": "text/plain; charset=utf-8"});
    /* write: пишет в поток ответа некоторое содержимое */
    response.write("Запрос получен.\n");
    /* 
        end: сигнализирует серверу, что заголовки и тело ответа установлены, 
        в итоге ответ отсылается клиента. Данный метод должен вызываться в каждом запросе 
    */
    response.end("Соединение завершено.");
}).listen(8888);
console.log("Старт");