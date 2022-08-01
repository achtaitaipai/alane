export const assets = {
  images: new Map<number, HTMLImageElement>(),
  spriteSheets: new Map<number, ImageBitmap[]>(),
  numberOfAssetsToload: 0,
  numberOfAssetsLoaded: 0,
}

let _lastId = 0

export function newId() {
  return _lastId++
}
