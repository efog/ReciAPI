var gulp = require('gulp');
var eslint = require('gulp-eslint');
var jasmine = require('gulp-jasmine');

gulp.task('pre-commit', ['lint', 'unit'], () => {
});
const lint = () => {
    return gulp.src(['**/*.js', '!node_modules/**'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
};
gulp.task('lint', lint);
const unit = () => {
    return gulp.src('spec/**-spec.js')
        .pipe(jasmine());
};
gulp.task('unit', unit);