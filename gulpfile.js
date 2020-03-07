const gulp = require('gulp');
const autoprefixer=require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;

function styles() {
  return gulp.src('./src/css/style.css')
    .pipe(autoprefixer())
    .pipe(cleanCSS({
      compatibility: 'ie8',
      cascade: false,
    }))
    .pipe(gulp.dest('./build/css'))
}

function scripts() {
  return gulp.src('./src/js/*.js')
    .pipe(concat('script.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./build/js'))
}

function watch() {
  gulp.watch('./src/css/**/*.css', styles)
  gulp.watch('./src/js/main.js', scripts)
}

gulp.task('styles', styles);
gulp.task('scripts', scripts);
gulp.task('watch', watch);