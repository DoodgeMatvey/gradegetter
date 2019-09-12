var gulp = require('gulp');
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('less', function () {
    return gulp.src('src/less/styles.less')
        .pipe(less())
        .pipe(autoprefixer({ 
            cascade: false
        })) 
        .pipe(gulp.dest('public/css/')) 
});

gulp.task('watch', function () {
    gulp.watch("src/less/*.less", ['less']); 
    gulp.watch("public/index.html", ['less']); 
});

// Default task (runs at initiation: gulp --verbose)
gulp.task('default', ['watch']);