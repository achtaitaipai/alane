import { assets, newId } from './datas'
import _loadImageAsynchronously from './loadImage'

export default function loadSprite(url: string) {
  assets.numberOfAssetsToload++
  const id = newId()
  _loadImageAsynchronously(url).then((image) => {
    assets.images.set(id, image)
    assets.numberOfAssetsLoaded++
  })
  return function () {
    return assets.images.get(id)!
  }
}
