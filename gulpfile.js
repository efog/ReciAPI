var gulp = require('gulp');
var eslint = require('gulp-eslint');

gulp.task('pre-commit', ['lint'], () => {
});
const lint = () => {
    return gulp.src(['**/*.js', '!node_modules/**'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
};
gulp.task('lint', lint);