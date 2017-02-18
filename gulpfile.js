var gulp            = require('gulp');
	gulpLoadPlugins = require('gulp-load-plugins'),
	plugins         = gulpLoadPlugins(),
	browserSync    = require('browser-sync');



gulp.task('sass', function(){
	return gulp.src(['sass/*.sass', 'sass/*.scss'])
	.pipe(plugins.plumber()).on('error', plugins.sass.logError)
	.pipe(plugins.sass({outputStyle: 'expanded'}))
	.pipe(plugins.autoprefixer('last 15 versions', {cascade:true}))
	.pipe(plugins.plumber.stop())
	.pipe(gulp.dest('css'))
	.pipe(browserSync.reload({stream: true}))
});

gulp.task('pug',['sass'],function(){
	return gulp.src('pug/*.pug')
	.pipe(plugins.plumber())
	.pipe(plugins.pug({pretty: true}))
	.pipe(plugins.plumber.stop())
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
	gulp.watch('pug/*.pug', ['pug']);
	gulp.watch('sass/*.sass', ['sass']);
	gulp.watch('./script/*.js', browserSync.reload);
	gulp.watch('./*.html', browserSync.reload);
});


