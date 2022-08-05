export default function _loadImageAsynchronously(src: string) {
  return new Promise<HTMLImageElement>((resolve, reject) => {
    let image = new Image()
    image.onload = () => resolve(image)
    image.onerror = reject
    image.src = src
  })
}
