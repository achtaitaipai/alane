import alanFrontUrl from '../../assets/alan-front.png'
import alanBackUrl from '../../assets/alan-back.png'
import alanSideUrl from '../../assets/alan-side.png'
import { loadSpriteSheet } from '../core'

export const alanSide = loadSpriteSheet(alanSideUrl, 1, 4)
export const alanFront = loadSpriteSheet(alanFrontUrl, 1, 3)
export const alanBack = loadSpriteSheet(alanBackUrl, 1, 3)
