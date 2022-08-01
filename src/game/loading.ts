import alanFrontUrl from '../../assets/alan-front.png'
import alanBackUrl from '../../assets/alan-back.png'
import alanSideUrl from '../../assets/alan-side.png'
import fontUrl from '../../assets/font/pixel.ttf'
import jumpFxUrl from '../../assets/jumpfx.wav'
import { loadSpriteSheet, loadFont, loadSprite, loadAudio } from '../core'

export const alanSide = loadSpriteSheet(alanSideUrl, 4, 1)
export const alanFront = loadSpriteSheet(alanFrontUrl, 3, 1)
export const alanBack = loadSpriteSheet(alanBackUrl, 3, 1)
export const alanImg = loadSprite(alanFrontUrl)
export const jumpFx = loadAudio(jumpFxUrl)
loadFont(fontUrl, 'font')
