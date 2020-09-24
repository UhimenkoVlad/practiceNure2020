const { src, dest, parallel, watch } = require('gulp');
const browserSyncLib = require('browser-sync').create();
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');

function browserSync() {
    browserSyncLib.init({
        server: { baseDir: './src/' },
    })
}

function startWatch () {
    watch(['src/**/*.js', '!src/**/*.min.js'], scripts);
    watch(['src/sass/**/*.sass', 'src/css/**/*.css' ,'!src/**/*.min.css'], style);
    watch('src/**/*.html').on('change', browserSyncLib.reload)
}

function scripts () {
    return src([
        './node_modules/jquery/dist/jquery.min.js',
        './dist/main.js'
    ])
        .pipe(concat('src.min.js'))
        .pipe(uglify())
        .pipe(dest('./src/dest/'))
        .pipe(browserSyncLib.stream())
}

function style() {
    return src([
        './src/sass/*.sass',
        './src/css/*.css'
    ])
        .pipe(sass())
        .pipe(concat('src.min.css'))
        .pipe(autoprefixer({overrideBrowserslist: ['last 10 version'], grid: true }))
        .pipe(cleanCSS(({ level: { 1: { specialComments: 0 } } })))
        .pipe(dest('./src/dest/'))
        .pipe(browserSyncLib.stream())
}

exports.b = browserSync;
exports.sc = scripts;
exports.w = startWatch;
exports.st = style;

exports.default = parallel(style, scripts, browserSync, startWatch);
