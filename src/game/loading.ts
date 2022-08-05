import alanBackUrl from '../../assets/alan-back.png'
import alanFrontUrl from '../../assets/alan-front.png'
import alanSideUrl from '../../assets/alan-side.png'
import fontUrl from '../../assets/font/pixel.ttf'
import jumpFxUrl from '../../assets/jumpfx.wav'
import keyUrl from '../../assets/key.png'
import heartUrl from '../../assets/heart.png'
import bitmapFontUrl from '../../assets/font.png'
import { loadAudio, loadFont, loadSprite, loadSpriteSheet } from '../core'
import Dialog from './utils/Dialog'
import { CELLSIZE, FULLWIDTH } from './settings'
import BitmapFont from '../core/utils/BitmapFont'

export const alanSide = loadSpriteSheet(alanSideUrl, 4, 1)
export const alanFront = loadSpriteSheet(alanFrontUrl, 3, 1)
export const alanBack = loadSpriteSheet(alanBackUrl, 3, 1)
export const keySprite = loadSprite(keyUrl)
export const heartSprite = loadSpriteSheet(heartUrl, 2, 1)
const fontSpriteSheet = loadSpriteSheet(bitmapFontUrl, 2, 13)
export const font = new BitmapFont(fontSpriteSheet, [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
])
export const jumpFx = loadAudio(jumpFxUrl)
loadFont(fontUrl, 'font')

export const dialogBox = new Dialog({
  x: FULLWIDTH - CELLSIZE * 8,
  paddingTop: 20,
  paddingBottom: 20,
  width: CELLSIZE * 8,
  nLines: 8,
})
