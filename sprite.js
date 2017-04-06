import { range } from './helpers'

export default class Sprite {
  constructor(image, spriteHeight, spriteWidth, sheetHeight, sheetWidth, animations = {}) {
    window.sprite = this;
    this.image = image;
    this.spriteHeight = spriteHeight;
    this.spriteWidth = spriteWidth;
    this.sheetHeight = sheetHeight;
    this.sheetWidth = sheetWidth;
    this.animations = Object.assign(
      {},
      Sprite.defaultAnimations(sheetHeight, sheetWidth),
      animations
    );
    this.currentAnimationName = Object.keys(this.animations)[0];
    this.animationFrame = 0;
  }

  static defaultAnimations(height, width) {
    return { all: range(0, height * width) };
  }

  draw(ctx, pos) {
    ctx.drawImage(
      this.image,
      this.currentSpritePos()[1] * this.spriteWidth,
      this.currentSpritePos()[0]  * this.spriteHeight,
      this.spriteWidth,
      this.spriteHeight,
      pos[0],
      pos[1],
      this.spriteWidth,
      this.spriteHeight,
    );
  }

  currentAnimation() {
    return this.animations[this.currentAnimationName];
  }

  currentSpritePos() {
    const len = this.animations.all.length;
    return [
      Math.floor(this.animationIndex() / this.sheetHeight),
      this.animationIndex() % this.sheetWidth
    ];
  }

  animationIndex() {
    return this.currentAnimation()[this.animationFrame];
  }

  update() {
    console.log(this.animationFrame, this.currentAnimation().length);
    this.animationFrame = (this.animationFrame + 1) % this.currentAnimation().length
  }
}
