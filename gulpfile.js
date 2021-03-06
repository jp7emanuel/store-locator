var elixir = require('laravel-elixir');

elixir((mix) => {
  mix.sass([
    './src/assets/sass/app.scss',
    './node_modules/font-awesome/css/font-awesome.css',
    './node_modules/sweetalert/dev/sweetalert.scss',
    './node_modules/react-geosuggest/module/geosuggest.css',
  ], 'public/css/app.css');

  mix.copy('./node_modules/semantic-ui/src/themes/default/assets/fonts', 'public/css/themes/default/assets/fonts');
});
