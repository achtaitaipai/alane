import { assets } from './datas'

export async function loadFont(fontUrl: string, name: string) {
  const font = new FontFace(name, `url(${fontUrl})`)
  assets.numberOfAssetsToload++
  await font.load()
  assets.numberOfAssetsLoaded++
  ;(document.fonts as any).add(font)
}
