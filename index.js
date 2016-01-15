var express = require('express');

var app = express();

var bunyan = require('bunyan');
var log = bunyan.createLogger({
  name: 'myapp',
  streams: [
    {
      level: 'info',
      path: '/opt/app/access.log'            // log INFO and above to stdout
    },
    {
      level: 'error',
      path: '/opt/app/error.log'  // log ERROR and above to a file
    }
  ]
});


app.get('/', function(req, res){
    res.send('Hello from inside a container!');
    log.info('hi');
});

app.listen(8181, function () {
    console.log('listening on 8181')
});

