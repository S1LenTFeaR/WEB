//Подключение модулей
var gulp = require('gulp');
var less = require('gulp-less');
var imagemin = require('gulp-imagemin');
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var cssnano = require('gulp-cssnano');
var gulpIf = require('gulp-if');
//Задача компиляции less в css
gulp.task('less', function()
{
	return gulp.src('app/less/*.less')
	.pipe(less({}))
	.pipe(gulp.dest('app/css'))
});
//Просмотр измениний во всех less файлах
gulp.task('less:watch', function()
{
	gulp.watch('app/less/**/*.less', gulp.parallel('less'));
});
//Оптимизация изо
gulp.task('images', function()
{
	return gulp.src('app/images/**/*.+(png|jpg|jpeg|gif|svg)')
	.pipe(imagemin([
		imagemin.gifsicle({interlaced: true}),
		imagemin.mozjpeg({quality: 75, progressive: true}),
		imagemin.optipng({optimizationLevel: 5}),
		imagemin.svgo({
			plugins: [
				{removeViewBox: true},
				{cleanupIDs: false}
			]
		})
	]))
	.pipe(gulp.dest('dist/images'))
});
//Объединение js и css файлов в один
gulp.task('useref', function(){
	return gulp.src('app/*.html')
		.pipe(useref())
		.pipe(gulpIf('*.js', uglify()))
		.pipe(gulpIf('*.css', cssnano()))
		.pipe(gulp.dest('dist'))
});
//3 команды при помощи одной команды "glup"
gulp.task('default', gulp.series('less', 'images', 'useref'));