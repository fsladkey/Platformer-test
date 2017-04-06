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
    const spritePos = this.currentSpritePos();
    console.log(this.animationIndex(), spritePos)
    ctx.drawImage(
      this.image,
      spritePos[1] * this.spriteWidth,
      spritePos[0] * this.spriteHeight,
      this.spriteWidth,
      this.spriteHeight,
      pos[1],
      pos[0],
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
      Math.floor(this.animationIndex() / this.sheetHeight / 3),
      this.animationIndex() % this.sheetWidth
    ];
  }

  animationIndex() {
    return this.currentAnimation()[this.animationFrame];
  }

  update() {
    // console.log(this.animationFrame, this.currentAnimation().length);
    this.animationFrame = (this.animationFrame + 1) % this.currentAnimation().length
  }
}
