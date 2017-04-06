import Actor from './actor';
import Sprite from '../sprite';
import assets from '../assets';
import { range } from '../helpers'
const Adventurer = new Actor({
  pos: [0, 0],
  vel: [0, 0],
  sprite: new Sprite(
    assets.get('adventurer'),
    110,
    80,
    3,
    9
  )
});

export default Adventurer;
