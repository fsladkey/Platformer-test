import cop from './actors/cop';
import Background from './background'
import assets from './assets'

export default class Game {
  constructor() {
    // this.background = new Background(assets);
    this.actors = [cop];
  }

  tick() {
    this.actors.forEach(actor => actor.update());
  }
}
