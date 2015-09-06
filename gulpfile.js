'use strict';

var gulp = require('gulp');
var build = require('./tasks/build');

require('./tasks/serve');
require('./tasks/editorconfig');

// I'm being lazy here. I will set up CI later but for now
// I am going to build on the same box that serves the site :/
gulp.task('heroku:', build);
