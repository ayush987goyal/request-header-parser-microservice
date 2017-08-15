var express = require('express');
var app = express();
var requestIp = require('request-ip');
var acceptLang = require('accept-language');
var useragent = require('express-useragent');

app.use(express.static('public'));

app.get('/', (req, res) => {
  var obj = {
    "ipaddress": requestIp.getClientIp(req),
    "language": req.headers["accept-language"],
    "software": useragent.parse(req.headers['user-agent'])["os"]
  }
  
  res.send(obj)
})



var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
