import alanFrontUrl from '../../assets/alan-front.png'
import alanBackUrl from '../../assets/alan-back.png'
import alanSideUrl from '../../assets/alan-side.png'
import fontUrl from '../../assets/font/pixel.ttf'
import { loadSpriteSheet } from '../core'
import { loadFont } from '../core/Assets'

export const alanSide = loadSpriteSheet(alanSideUrl, 4, 1)
export const alanFront = loadSpriteSheet(alanFrontUrl, 3, 1)
export const alanBack = loadSpriteSheet(alanBackUrl, 3, 1)
loadFont(fontUrl, 'font')
