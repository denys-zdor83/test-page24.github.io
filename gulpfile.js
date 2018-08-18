var gulp = require ('gulp');
var 	bs = require ('browser-sync');


gulp.task('default', function(){
	console.log('Привет я таск');
});


/*Browser Sync*/
gulp.task('server', function() {
    bs.init({
        server: {
            baseDir: "app/"
        }
    });
    gulp.watch("app/*.html").on('change', bs.reload);
    gulp.watch("app/**/*.css").on('change', bs.reload);
});