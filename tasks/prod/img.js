import config from '../config.js';
import gulp from 'gulp';
import util from 'gulp-util';

gulp.task('img:prod', () => {
    return gulp.src(config.paths.src.img)
        .pipe(gulp.dest(config.paths.builds.prod.img))
        .on('error', util.log);
});
