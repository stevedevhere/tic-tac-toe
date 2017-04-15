var   gulp = require('gulp'),
      // browserSync = require('browser-sync'),
      sass = require('gulp-sass'),
      notify = require('gulp-notify'),
      rename = require('gulp-rename'),
  		cleanCSS = require('gulp-clean-css'),
      autoprefixer = require('gulp-autoprefixer'),
      watch = require('gulp-watch');


gulp.task('watch', ['sass'], function() {
	gulp.watch('sass/**/*.scss', ['sass']);
	gulp.watch('**/*.html');
});

gulp.task('sass', function() {
	return gulp.src('sass/**/*.scss')
	.pipe(sass().on("error", notify.onError()))
	// .pipe(rename({suffix: '.min', prefix : ''}))
	.pipe(autoprefixer(['last 15 versions']))
	.pipe(cleanCSS())
	.pipe(gulp.dest('css/'))
});

gulp.task('default', ['watch']);
