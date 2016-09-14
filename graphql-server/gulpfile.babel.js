import gulp from 'gulp';
import gulpGraphQLSchema from 'gulp-graphql';

gulp.task('updateSchema', function() {
  return gulp.src('./src/schema.js')
    .pipe(gulpGraphQLSchema({
      json: true,
      graphql: false,
    })).on('error', console.log)
    .pipe(gulp.dest('../swpedia/'));
});

gulp.task('default', ['updateSchema']);
