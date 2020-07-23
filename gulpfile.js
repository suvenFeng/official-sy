const gulp = require('gulp')
const rev = require('gulp-rev')
const del = require('del')

gulp.task(
    'clean',
    () => {
      return del('public')
    }
  )


  gulp.task(
    'copy-ico',
    gulp.series('clean'),
    () => {
      return gulp.src(['assets/favicon.ico'])
        .pipe(gulp.dest('public'))
    }
  )

  const assetsGlob = 'assets/**/*.@(css|js)'

  gulp.task(
    'build',
    gulp.series('clean', 'copy-ico'),
    () => {
      return gulp.src(assetsGlob)
        .pipe(rev())
        .pipe(gulp.dest('public'))
        .pipe(rev.manifest())
        .pipe(gulp.dest('./'))
    }
  )