import adventurer from './actors/adventurer';
import Background from './background'
import assets from './assets'

export default class Game {
  constructor() {
    // this.background = new Background(assets);
    this.actors = [adventurer];
  }

  tick() {
    this.actors.forEach(actor => actor.update());
  }
}
