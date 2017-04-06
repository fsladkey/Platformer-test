import config from "./config";

export default class Renderer {
  constructor(canvas, game) {
    this.canvas = canvas;
    this.game = game;
    canvas.style.width = `${config.dimensions.width}px`;
    canvas.style.height = `${config.dimensions.height}px`;
    this.ctx = canvas.getContext("2d");
    window.ctx = this.ctx;
    this.tick = this.tick.bind(this);
  }

  draw() {
    this.game.background && this.game.background.draw(this.ctx);
    this.game.actors.forEach(actor => actor.draw(this.ctx));
  }

  run() {
    this.tick()
  }

  tick() {
    this.ctx.clearRect(0, 0, config.dimensions.width, config.dimensions.height)
    this.draw();
    this.game.tick();
    setTimeout(this.tick, 500);
  }
}
