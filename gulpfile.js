var gulp           = require('gulp'),
	browserSync    = require('browser-sync'),
	sass           = require('gulp-sass'),
	autoprefixer   = require('gulp-autoprefixer'),
	pug            = require('gulp-pug');



gulp.task('sass', function(){
	return gulp.src(['sass/*.sass', 'sass/*.scss'])
	.pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
	.pipe(autoprefixer('last 15 versions', {cascade:true}))
	.pipe(gulp.dest('css'))
	.pipe(browserSync.reload({stream: true}))
});

gulp.task('pug',['sass'],function(){
	return gulp.src('pug/*.pug')
	.pipe(pug({pretty: true}))
	.pipe(gulp.dest('./'))
	.pipe(browserSync.reload({stream: true}))
});

gulp.task('browser-sync', function(){
	browserSync({
		server: {
			baseDir: './'
		},
		notify: false		
	});
});

gulp.task('default',['browser-sync'], function(){
	gulp.watch('sass/*.sass', ['sass']);
	gulp.watch('./*.html', browserSync.reload);
	gulp.watch('pug/*.pug', ['pug']);
});


