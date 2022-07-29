export default function drawLoadingBar(
  ctx: CanvasRenderingContext2D,
  canvas: HTMLCanvasElement,
  progress: number
) {
  const width = canvas.width
  const height = canvas.height
  const XPADDING = width * 0.1
  const YHEIGHT = width * 0.1
  const FOREGROUNDCOLOR = '#ffffff'
  const BACKGROUNDCOLOR = '#000000'
  const LINEWIDTH = 2
  ctx.fillStyle = BACKGROUNDCOLOR
  ctx.fillRect(0, 0, width, height)
  ctx.fillStyle = FOREGROUNDCOLOR
  ctx.fillRect(
    XPADDING,
    height / 2 - YHEIGHT / 2 - LINEWIDTH,
    progress * (width - XPADDING * 2),
    YHEIGHT
  )
  ctx.strokeStyle = FOREGROUNDCOLOR
  ctx.lineWidth = LINEWIDTH
  ctx.strokeRect(
    XPADDING,
    height / 2 - YHEIGHT / 2 - LINEWIDTH,
    width - XPADDING * 2,
    YHEIGHT
  )
}
