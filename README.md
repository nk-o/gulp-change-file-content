# Gulp plugin allow modify file in .pipe

```javascript
const gulp = require( 'gulp' );
const changeFileContent = require( 'gulp-change-file-content' );

gulp.task( 'js', () => (
    gulp.src( 'app/**/*.js' )
        .pipe( changeFileContent( ( content, path, file ) => {
            const start = '(function (){\n';
            const end = '\n})()';

            return `${ start }${ content }${ end }`;
        } ) )
        .pipe( gulp.dest( 'build' ) )
) );
```
