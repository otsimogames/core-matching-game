import config from '../config.js';
import gulp from 'gulp';
import util from 'gulp-util';
import jsonMinify from 'gulp-json-minify';
import replace from 'gulp-replace';

gulp.task('general_data:prod', () => {
    return gulp.src(config.paths.src.general_data)
        .pipe(jsonMinify())
        .pipe(replace(/,"meta":\{.*}$/, '}'))
        .pipe(gulp.dest(config.paths.builds.tmp.root))
        .on('error', util.log);
});
