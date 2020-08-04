'use strict';

const through = require( 'through2' );

module.exports = function ( fn ) {
    return through.obj( function ( file, enc, cb ) {
        const contents = fn( String( file.contents ), file.path, file ) || file.contents;

        if ( true === file.isBuffer() ) {
            file.contents = new Buffer( contents );
        }

        cb( null, file );
    });
};
