/* File: gulpfile.js */

// grab our packages
var gulp   		= require('gulp'),
    jshint 		= require('gulp-jshint'),
    sass 		= require('gulp-sass'),
    sourcemaps 	= require('gulp-sourcemaps');

// define the default task and add the watch task to it
gulp.task('default', ['watch']);

// configure the jshint task
gulp.task('jshint', function() {
  return gulp.src('source/javascript/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

// configure Sass
gulp.task('build-css', function(){
	return gulp.src('source/scss/**/*.scss')
		.pipe(sourcemaps.init())	// Process the original sources
		.pipe(sass())
		.pipe(sourcemaps.write())	// Add the map to modified source
		.pipe(gulp.dest('public/assets/stylesheets'));
});

// configure which files to watch and what tasks to use on file changes
gulp.task('watch', function() {
  gulp.watch('source/javascript/**/*.js', ['jshint']);
  gulp.watch('source/scss/**/*.scss', ['build-css']);
});
