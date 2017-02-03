var elixir = require('laravel-elixir');

elixir((mix) => {
  mix.sass('./node_modules/semantic-ui/dist/semantic.css', 'public/css');
});
