import config from '../config.js';
import gulp from 'gulp';
import util from 'gulp-util';

gulp.task('general_data:dev', () => {
    return gulp.src(config.paths.src.general_data)
        .pipe(gulp.dest(config.paths.builds.dev.root))
        .on('error', util.log);
});
