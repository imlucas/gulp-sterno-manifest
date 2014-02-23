var manifest = require('./'),
    assert = require('assert'),
    gutil = require('gulp-util');

describe('gulp-sterno-manifest', function() {
  it('should work in buffer mode', function(done) {
    var stream = manifest({version: '0.0.1'});
    stream.on('data', function(manifestFile){
        var data = JSON.parse(manifestFile.contents);

        assert.equal(Object.keys(data).length, 3);
        assert(data['/app.html']);
        assert(data['/app.js']);
    });

    stream.on('end', done);

    stream.write(new gutil.File({
        contents: new Buffer('alert("yay");'),
        path: 'app.js'
    }));

    stream.write(new gutil.File({
        contents: new Buffer('<html></html'),
        path: 'app.html'
    }));
    stream.end();
  });
});
