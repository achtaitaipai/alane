import { alanBack, alanFront, alanSide } from '../../loading'
import { AnimationData } from '../../utils/AnimManager'

export const playerAnims: AnimationData = {
  left: {
    spritesheet: alanSide,
    anim: [1, 2, 3, 2],
    flip: false,
    idle: 0,
  },
  right: {
    spritesheet: alanSide,
    anim: [1, 2, 3, 2],
    flip: true,
    idle: 0,
  },
  bottom: {
    spritesheet: alanFront,
    anim: [0, 2],
    flip: false,
    idle: 1,
  },
  top: {
    spritesheet: alanBack,
    anim: [0, 2],
    flip: true,
    idle: 1,
  },
}
