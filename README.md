# Portfolio

http://mattderrick.co.uk

## Development
- `npm install -g git+ssh://git@github.com/gulpjs/gulp.git#4.0`
- `npm install`
- `gulp build`
- `gulp serve` with `--release` option

## Deploy
- `git remote add dokku dokku@direct.mattderrick.co.uk:mattderrick.co.uk`
- `git push dokku master`

Set dokku to serve `dist` directory. SSH into box and run:
- `dokku config:set mattderrick.co.uk release=true`