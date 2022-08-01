import { assets, newId } from './datas'
import loadImage from './loadImage'

export default function loadSpriteSheet(
  url: string,
  columns: number,
  rows: number
) {
  assets.numberOfAssetsToload++
  const id = newId()
  loadImage(url).then((imageEl) => {
    Promise.all(_sliceImage(imageEl, columns, rows)).then((images) => {
      assets.numberOfAssetsLoaded++
      assets.spriteSheets.set(id, images)
    })
  })
  return function () {
    return assets.spriteSheets.get(id)!
  }
}

function _sliceImage(image: HTMLImageElement, columns: number, rows: number) {
  const width = image.width / columns
  const height = image.height / rows
  const promises: Promise<ImageBitmap>[] = []
  for (let y = 0; y < image.height; y += height) {
    for (let x = 0; x < image.width; x += width) {
      promises.push(createImageBitmap(image, x, y, width, height))
    }
  }
  return promises
}
