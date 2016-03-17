import config from '../config.js';
import browserSync from 'browser-sync';
import gulp from 'gulp';

gulp.task('serve', () => {
    browserSync({
        server: {
            baseDir: config.paths.builds.dev.root,
            routes: {
                "/node_modules": "node_modules"
            }
        }
    });
});
