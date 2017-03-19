var gulp = require('gulp'),
	babel = require('gulp-babel');

gulp.task('default', function() {
	gulp.src('practice/*.js')
		.pipe(babel())
		.pipe(gulp.dest('build'))
})

gulp.watch('default')