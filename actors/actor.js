export default class Actor {
  constructor({ pos, vel, sprite }) {
    this.pos = pos;
    this.vel = vel;
    this.sprite = sprite;
  }

  draw(ctx) {
    this.sprite.draw(ctx, this.pos);
  }

  update() {
    this.sprite.update()
  }
}
