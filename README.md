# Gulp plugin allow modify file in .pipe

```javascript
const gulp = require( 'gulp' );

gulp.task( 'js', () => {
    const changeFileContent = require( 'gulp-change-file-content' );

    return gulp
        .src( 'app/**/*.js' )
        .pipe( changeFileContent( ( content, path, file ) => {
            const start = '(function (){\n';
            const end = '\n})()';

            return `${ start }${ content }${ end }`;
        } ) )
        .pipe( gulp.dest( 'build' ) );
} );
```
