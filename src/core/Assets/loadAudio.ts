import { assets } from './datas'

export default function loadAudio(url: string, volume?: number) {
  const audio = new Audio(url)
  audio.volume = volume ?? 1
  assets.numberOfAssetsToload++
  audio.addEventListener(
    'canplaythrough',
    () => {
      assets.numberOfAssetsLoaded++
    },
    false
  )
  return audio
}
