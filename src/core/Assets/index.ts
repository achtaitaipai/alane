import { assets } from './datas'
import loadSprite from './loadSprite'
import loadSpriteSheet from './loadSpriteSheet'
import { loadFont } from './loadFont'
import loadAudio from './loadAudio'

export { loadSprite, loadSpriteSheet, loadFont, loadAudio }

export function getProgress() {
  return assets.numberOfAssetsToload === 0
    ? 1
    : assets.numberOfAssetsLoaded / assets.numberOfAssetsToload
}
