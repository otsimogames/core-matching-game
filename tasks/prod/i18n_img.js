import config from '../config.js';
import gulp from 'gulp';
import util from 'gulp-util';
import imagemin from 'gulp-imagemin';

gulp.task('i18n_img:prod', () => {
    return gulp.src(config.paths.src.i18n_img)
        .pipe(imagemin())
        .pipe(gulp.dest(config.paths.builds.prod.i18n))
        .on('error', util.log);
});
