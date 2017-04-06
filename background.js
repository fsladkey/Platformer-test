import config from './config';

export default class Background {
  constructor(image) {
    this.image = image;
  }

  draw(ctx) {
    ctx.drawImage(
      this.image,
      0,
      0,
      config.width,
      config.height
    )
  }
}
