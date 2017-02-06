var elixir = require('laravel-elixir');

elixir((mix) => {
  mix.sass([
    './node_modules/bulma/css/bulma.css',
    './node_modules/font-awesome/css/font-awesome.css'
  ], 'public/css/app.css');

  mix.copy('./node_modules/semantic-ui/src/themes/default/assets/fonts', 'public/css/themes/default/assets/fonts');
});
