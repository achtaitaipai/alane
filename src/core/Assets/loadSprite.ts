import { assets, newId } from './datas'
import loadImage from './loadImage'

export default function loadSprite(url: string) {
  assets.numberOfAssetsToload++
  const id = newId()
  loadImage(url).then((image) => {
    assets.images.set(id, image)
    assets.numberOfAssetsLoaded++
  })
  return function () {
    return assets.images.get(id)!
  }
}
