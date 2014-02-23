# gulp-sterno-manifest

[![build status](https://secure.travis-ci.org/imlucas/gulp-sterno-manifest.png)](http://travis-ci.org/imlucas/gulp-sterno-manifest)

generate a [sterno](http://github.com/imlucas/node-sterno) manifest when
deploying your app

```
var manifest = require('gulp-sterno-manifest');

gulp.task('manifest', function(){
  gulp.src('./.build/**/*')
    .pipe(manifest({
      version: '0.0.1'
    }))
    .pipe(gulp.dest('./.build/sterno-manifest.json'));
});


gulp.task('deploy', ['build', 'manifest', 'publishtoS3']);
```

## License

MIT
