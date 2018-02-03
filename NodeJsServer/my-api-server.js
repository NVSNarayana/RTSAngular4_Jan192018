var http = require('http');
var PORT = 9999;
var server = http.createServer(function (req, res) {
    enableCORS(res);
    res.writeHead(200, { 'content-type': 'application/json' });
    if (req.method == "GET") {
        handleGetRequests(req, res);
    } else if (req.method == "POST") {
        handlePostRequest(req, res);
    }

    res.end();
});

server.listen(PORT, function () {
    console.log("server stated on port: " + PORT);
});

function handleGetRequests(req, res) {
    var arr = [];
    if (req.url == "/api/employees") {
        for (var i = 5001; i <= 5020; i++)
            arr.push({ Eno: i, Ename: "E" + i, Age: 20 });
    } else if (req.url == "/api/students") {
        for (var i = 1901; i <= 1920; i++)
            arr.push({ Sno: i, Sname: "E" + i, Age: 20 });
    }
    if (arr.length > 0)
        res.write(JSON.stringify(arr));
    else
        res.write("Please call api methods");
}

function handlePostRequest(req, res) {

}

function enableCORS(res) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
}


