import config from '../config.js';
import gulp from 'gulp';

gulp.task('watch', () => {
    gulp.watch(config.paths.src.js + '**/*.js', ['js:dev'],{debounceDelay:1000});
    gulp.watch(config.paths.src.img, ['img:dev'],{debounceDelay:1000});
    gulp.watch(config.paths.src.data, ['data:dev'],{debounceDelay:1000});
    gulp.watch(config.paths.src.audio, ['audio:dev'],{debounceDelay:1000});
    gulp.watch(config.paths.src.i18n_img, ['i18n_img:dev'],{debounceDelay:1000});
    gulp.watch(config.paths.src.i18n_data, ['i18n_data:dev'],{debounceDelay:1000});
    gulp.watch(config.paths.src.general_data, ['general_data:dev'],{debounceDelay:1000});    
    gulp.watch(config.paths.src.root + '**/*.html', ['html:dev'],{debounceDelay:1000});
});
