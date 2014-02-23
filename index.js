var through = require('through'),
    gutil = require('gulp-util'),
    File = gutil.File,
    PluginError = gutil.PluginError,
    crypto = require('crypto');

module.exports = function(data){
  var manifest = data;

  return through(function(file) {
    if(file.isNull()) return;
    if(file.isStream()){
      return this.emit('error', new PluginError('gulp-sterno-manifest', 'Streams not supported'));
    }

    var key = '/' + file.path.replace(file.base, '');
    manifest[key] = crypto.createHash('md5').update(file.contents).digest('hex');
  }, function(){
    this.emit('data', new File({
      contents: new Buffer(JSON.stringify(manifest, null, 2)), path: './'
    }));
    this.emit('end');
  });
};
