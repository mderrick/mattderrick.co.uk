/* eslint-disable no-process-env, no-console */

'use strict';

var path = require('path');
var express = require('express');
var ms = require('ms');
var compression = require('compression');
var colors = require('colors/safe');
var app = express();

app.set('port', process.env.PORT || 6061);

app.use(compression());

app.use(express.static(
    path.join(__dirname, process.env.release ? '../dist' : '../src'),
    {maxAge: ms(process.env.release ? '30d' : 0)}
));

app.listen(app.get('port'), function() {
    console.log(colors.cyan('Server started: ') +
        'http://localhost:' + app.get('port'));
    console.log(colors.grey('Press \'ctrl + c\' to terminate server'));
});
