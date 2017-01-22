var express = require('express')
var app = express()
app.enable('trust proxy')

app.get('/', function (req, res) {
    res.send("Hello world");
})

app.get('/whoami', function (req, res) {
    var data = {
        ipaddress: req.ip,
        language: req.headers["accept-language"].split(",")[0],
        software: req.headers['user-agent'].split(")")[0].split("(")[1]
    }

    res.send(JSON.stringify(data));
})

app.listen(process.env.PORT || 8080, function () {
  console.log('Example app listening on port ' + process.env.PORT || 8080 + '!')
})