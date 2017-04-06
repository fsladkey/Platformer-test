import Actor from './actor';
import Sprite from '../sprite';
import assets from '../assets';
import { range } from '../helpers'
const Cop = new Actor({
  pos: [0, 0],
  vel: [0, 0],
  sprite: new Sprite(
    assets.get('cop'),
    42,
    33,
    11,
    13
  )
});

export default Cop;
