const gulp         = require("gulp"),
      path         = require('path'),
      sass         = require('gulp-sass'),
      autoprefixer = require('gulp-autoprefixer'),
      cssmin       = require('gulp-cssmin'),
      rename       = require("gulp-rename"),
      browserSync  = require("browser-sync"),
      watch        = require('gulp-watch'),
      del          = require('del'),
      runSequence  = require('run-sequence');

/**
 * File Path
 */
const ROOT                = __dirname;
const SRC_PATH            = path.join(ROOT, './data');
const HTML_SRC_PATH       = path.join(SRC_PATH, 'html');
const SCSS_SRC_PATH       = path.join(SRC_PATH, 'scss');
const IMAGE_SRC_PATH      = path.join(SRC_PATH, 'img');
const HTML_SRC_FILES      = path.join(HTML_SRC_PATH, './**/*.html');
const HTML_SRC_INDEX_FILE = path.join(SRC_PATH, 'index.html');
const SCSS_SRC_FILES      = path.join(SCSS_SRC_PATH, './**/*.scss');
const IMAGE_SRC_FILES     = path.join(IMAGE_SRC_PATH, './**/*.{jpg,png,gif,ico}');

// public files
const PUBLIC_PATH            = path.join(ROOT, './public');
const HTML_PUBLIC_PATH       = path.join(PUBLIC_PATH, 'html');
const CSS_PUBLIC_PATH        = path.join(PUBLIC_PATH, 'css');
const IMAGE_PUBLIC_PATH      = path.join(PUBLIC_PATH, 'img');
const HTML_PUBLIC_FILES      = path.join(HTML_PUBLIC_PATH, './**/*.html');
const HTML_PUBLIC_INDEX_FILE = path.join(PUBLIC_PATH, 'index.html');
const CSS_PUBLIC_FILES       = path.join(CSS_PUBLIC_PATH, './**/*.css');
const IMAGE_PUBLIC_FILES     = path.join(IMAGE_PUBLIC_PATH, './**/*.{jpg,png,gif,ico}');


/**
 * Clean Task
 **/
gulp.task('public.clean', function() {
  del([PUBLIC_PATH + '/*'], { force: true });
});


/**
 * HTML Task
 **/
gulp.task('html.dist', function () {
  return gulp.src(HTML_SRC_FILES).pipe(gulp.dest(HTML_PUBLIC_PATH));
});

gulp.task('html.dist.index', function () {
  return gulp.src(HTML_SRC_INDEX_FILE).pipe(gulp.dest(PUBLIC_PATH));
});


/**
 * SASS, CSS Task
 **/
gulp.task('sass', function() {
  return gulp.src(SCSS_SRC_FILES)
    .pipe(sass({
      outputStyle: 'expanded'
    }).on('error', sass.logError))
    .pipe(gulp.dest(CSS_PUBLIC_PATH));
});

gulp.task('css.prefixer', function() {
  return gulp.src(CSS_PUBLIC_FILES)
    .pipe(autoprefixer({
      browsers: ['last 2 versions', 'ie 8', 'ios 5', 'android 2.3'],
      cascade: false
    }))
    .pipe(gulp.dest(CSS_PUBLIC_PATH));
});

gulp.task('css.min', function () {
  return gulp.src([
      CSS_PUBLIC_FILES,
      '!' + CSS_PUBLIC_PATH + '**/*min.css'
    ])
    .pipe(cssmin())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest(CSS_PUBLIC_PATH));
});


/**
 * Image Task
 **/
gulp.task('img.dist', function () {
  return gulp.src(IMAGE_SRC_FILES).pipe(gulp.dest(IMAGE_PUBLIC_PATH));
});


/**
 * watch Task
 **/
gulp.task('watch', function() {
  // html
  gulp.watch([HTML_SRC_FILES, HTML_PUBLIC_FILES], ['build.html']);

  // CSS,SASS
  gulp.watch([SCSS_SRC_FILES], ['build.css']);

  // Image
  gulp.watch([IMAGE_SRC_FILES], ['build.image']);
});

/**
 * Build Task
 **/
gulp.task('build.html', function(callback) {
  return runSequence(
    'html.dist',
    'html.dist.index',
    callback
  );
});

gulp.task('build.css', function(callback) {
  return runSequence(
    'sass',
    'css.prefixer',
    'css.min',
    callback
  );
});

gulp.task('build.image', function(callback) {
  return runSequence(
    'img.dist',
    callback
  );
});


/**
 * Browser Sync
 **/
gulp.task('browser-sync', function() {
  browserSync.init({
    files: [
      HTML_PUBLIC_INDEX_FILE,
      HTML_SRC_INDEX_FILE,
      CSS_PUBLIC_FILES,
      IMAGE_PUBLIC_FILES
    ],
    server: {
      baseDir: PUBLIC_PATH
    }
  });

  browserSync.reload();
});

/**
 * Default Task
 **/
gulp.task('default', function(callback) {
  runSequence(
    'public.clean',
    'build.html',
    'build.css',
    'build.image',
    'watch',
    'browser-sync',
    callback
  );
});
