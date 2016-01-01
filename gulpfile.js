var gulp = require("gulp"),
    path = require('path'),
    compass = require('gulp-compass'),
    cssmin = require('gulp-cssmin'),
    connect = require('gulp-connect'),
    watch = require('gulp-watch'),
    clean = require('gulp-clean'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    typescript = require('gulp-tsc'),
    tsd = require('gulp-tsd'),
    bower = require('gulp-bower'),
    server = require('gulp-express'),
    plumber = require('gulp-plumber'),
    stripDebug = require('gulp-strip-debug'),
    del = require('del'),
    runSequence = require('run-sequence');

var uglifySaveLicense = require('uglify-save-license');

var SOURCE_DIR = 'data',
    RELEASE_DIR = 'public';

var htmlFiles = [ SOURCE_DIR + '/html/**/*.html' ];
var tsFiles = [ SOURCE_DIR + '/ts/**/*.ts' ];
var imgFiles = [ SOURCE_DIR + '/img/**/*.{jpg,png,gif}' ];
var scssFiles = [ SOURCE_DIR + '/scss/**/*.scss' ];
var jsFiles = [
    SOURCE_DIR + '/js/**/*.js',
    '!data/js/contrib/**/*.js'
];


// Clean File
gulp.task('clean-dir', function() {
    del([RELEASE_DIR + '/*'], {force: true});
});
gulp.task('clean-ts', function(cb) {
    del([RELEASE_DIR + '/**/*.ts'], {force: true}, cb);
});

// compass
gulp.task('compass', function() {
    return gulp.src(scssFiles)
        .pipe(plumber())
        .pipe(compass({
           style: 'compressed',
           specify: SOURCE_DIR + '/scss/style.scss',
           css: RELEASE_DIR + '/css',
           sass: SOURCE_DIR + '/scss',
           imagesDir: RELEASE_DIR + '/img'
       }));
});

gulp.task('copy-html', function () {
    gulp.src(htmlFiles).pipe(gulp.dest(RELEASE_DIR + '/html'));
    gulp.src(SOURCE_DIR + '/index.html').pipe(gulp.dest(RELEASE_DIR));
});

gulp.task('copy-js', function () {
    gulp.src([
            SOURCE_DIR + '/js/' + '**/*.js',
            '!' + SOURCE_DIR + '/js/' + '**/libs/*.js',
            '!' + SOURCE_DIR + '/js/' + '**/contrib/*.js'
    ]).pipe(gulp.dest( RELEASE_DIR + '/js/' ));
});

gulp.task('copy-img', function () {
    gulp.src([
            SOURCE_DIR + '/img/' + '**/*.{jpg,png,gif,ico}'
    ]).pipe(gulp.dest( RELEASE_DIR + '/img/' ));
});

// Copy Dir
gulp.task('copy-dir', function () {
    gulp.src([
            RELEASE_DIR + '/**/*.*',
            '!' + RELEASE_DIR + '/js/**/*.js',
            '!' + RELEASE_DIR + '/html/**/*.*',
            '!' + RELEASE_DIR + '/**/*.ts'
    ]).pipe(gulp.dest( RELEASE_DIR + '/' ));
});


// JavaScript uglify
gulp.task('uglify-contrib', function () {
    gulp.src([
            SOURCE_DIR + '/js/contrib/underscore.js',
            SOURCE_DIR + '/js/contrib/angular.js',
            SOURCE_DIR + '/js/contrib/angular-resource.js',
            SOURCE_DIR + '/js/contrib/angular-sanitize.js'
    ])
        .pipe(uglify())
        .pipe(concat('contrib.js'))
        .pipe(gulp.dest(RELEASE_DIR + '/js/'));
});


gulp.task('cssmin', function () {
    gulp.src(RELEASE_DIR + '/*.css')
        .pipe(cssmin())
        .pipe(gulp.dest(RELEASE_DIR + '/css/'));
});

// typescript
gulp.task('typescript', function () {
    gulp.src([
            SOURCE_DIR + '/ts/**/*.ts'
    ])
        .pipe(plumber())
        .pipe(typescript({ removeComments: true, module: 'commonjs' }))
        .pipe(gulp.dest(RELEASE_DIR + '/js/'));
});


gulp.task('tsd', function () {
    tsd({
        command: 'reinstall',
        config: './tsd.json'
    }, callback);
});

// ファイル更新監視
gulp.task('watch', function() {
    // compass
    gulp.watch([scssFiles],['compass']);
    // js
    gulp.watch([jsFiles],['copy-js']);
    // typescript
    gulp.watch([tsFiles],['build-typescript']);
    // html
    gulp.watch([htmlFiles],['copy-html']);
    gulp.watch(SOURCE_DIR + '/index.html',['copy-html']);
    // img
    gulp.watch([imgFiles],['copy-img']);
});

/**
 * Gulp Server
 **/
gulp.task('server', ['connect'], function() {
    gulp.watch([
      SOURCE_DIR + '/**/*.*'
    ]).on('change', function(changedFile) {
      gulp.src(changedFile.path).pipe(connect.reload());
    });
});
gulp.task('connect', function() {
    connect.server({
        root: [__dirname + '/public/'],
        port: 8088,
        livereload: true
    });
    console.log('Server started: http://localhost:8088');
});

// Build Task
gulp.task('build-ui', ['compass']);
gulp.task('build-typescript', ['typescript']);
gulp.task('build-javascript', ['copy-js', 'uglify-contrib']);

// All task
gulp.task('default', function(callback) {
    runSequence(
        'clean-dir',
        'copy-html',
        'copy-img',
        'compass',
        'build-ui',
        'build-typescript',
        'build-javascript',
        'watch',
        'server',
        callback
    );
});