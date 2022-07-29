import { alanBack, alanFront, alanSide } from '../loading'
import { AnimationData } from '../utils/AnimManager'

export const playerAnims: AnimationData = {
  left: {
    spritesheet: alanSide,
    anim: [0, 1, 2],
    flip: false,
  },
  right: {
    spritesheet: alanSide,
    anim: [0, 1, 2],
    flip: true,
  },
  bottom: {
    spritesheet: alanFront,
    anim: [0, 1, 2],
    flip: false,
  },
  top: {
    spritesheet: alanBack,
    anim: [0, 1, 2],
    flip: true,
  },
}
