type renderMethod = () => void
type queueItem = { layer: number; render: renderMethod }

export default class PriorityQueue {
  private _queue: queueItem[] = []

  add(render: renderMethod, layer: number) {
    this._queue.push({ render, layer })
  }

  update() {
    this._queue = this._queue.sort((a, b) => a.layer - b.layer)
    while (this._queue.length > 0) {
      const todo = this._queue.shift()?.render
      if (todo) todo()
    }
  }

  clear() {
    this._queue = []
  }
}
