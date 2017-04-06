import assets from './assets';
import Renderer from './renderer';

assets.onLoad(() => {
  const Game = require('./game').default;
  const canvas = document.getElementById('canvas');
  const game = new Game();
  const renderer = new Renderer(canvas, game);
  renderer.run();
})

assets.load();
