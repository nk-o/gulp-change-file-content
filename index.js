'use strict';

const through = require( 'through2' );

module.exports = function ( fn ) {
    return through.obj( function ( chunk, enc, callback ) {
        const contents = fn( String( chunk.contents ), chunk.path, chunk ) || chunk.contents;
        const modifiedChunk = chunk.clone();

        if ( true === chunk.isBuffer() ) {
            modifiedChunk.contents = new Buffer.from( contents );
        }

        callback( null, modifiedChunk );
    } );
};
