var express = require('express');
var app = express();
app.set('port', process.env.PORT || 3300);
app.get('/', function (req, res) {
    res.send('mo running')
})
var server = app.listen(app.get('port'), function () {
    // console.log(`app running on port ${PORT}`);
    console.log('app running on port :' + app.get('port'));
});