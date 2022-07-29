import Component, { ComponentConstructor } from './Component'
import Game from './Game'
import Actor from './Actor'
import PriorityQueue from './PriorityQueue'

export default class Scene {
  public inProgress = false
  private _actors: Actor[] = []
  private _toRemove: number[] = []
  public game: Game | null = null
  public background?: string | CanvasGradient | CanvasPattern
  public renderingQueue: PriorityQueue

  public onUpdate?: (deltaValue: number) => void

  constructor() {
    this.renderingQueue = new PriorityQueue()
  }

  public start(game: Game) {
    this.game = game
    this.inProgress = true
    for (const [_, actor] of this._actors.entries()) {
      actor.start(this)
    }
  }

  public update(dt: number) {
    this._drawBackground()
    for (const actor of this._actors.values()) {
      actor.update(dt)
    }
    if (this.onUpdate) this.onUpdate(dt)
    this.renderingQueue.update()
    if (this._toRemove.length) this._deleteActors()
  }

  private _drawBackground() {
    if (this.background && this.game) {
      this.game.ctx.fillStyle = this.background
      this.game.ctx.fillRect(0, 0, this.game.width, this.game.height)
    }
  }

  private _deleteActors() {
    const acors = this._actors.filter((actor) =>
      this._toRemove.includes(actor.id)
    )
    acors.forEach((actor) => actor.beforeRemove())
    this._actors = this._actors.filter(
      (actor) => !this._toRemove.includes(actor.id)
    )
    this._toRemove = []
  }

  public exit() {
    this._actors.forEach((actor) => actor.beforeRemove())
    this.inProgress = false
  }

  public add(...actors: Actor[]) {
    actors.forEach((actor) => {
      this._actors.push(actor)
      if (this.inProgress) actor.start(this)
    })
    return this
  }

  public remove(...actors: Actor[]) {
    actors.forEach((actor) => {
      this._toRemove.push(actor.id)
    })
  }

  public getAllByTags(...tags: string[]) {
    if (tags.length === 0) return [...this._actors]
    const results: Actor[] = []
    this._actors.forEach((actor) => {
      if (actor.includeAllTags(tags)) results.push(actor)
    })
    return results
  }

  public getAllByComponent<T extends Component>(
    Component: ComponentConstructor<T>
  ) {
    const results: Actor[] = []
    this._actors.forEach((actor) => {
      if (actor.get(Component)) results.push(actor)
    })
    return results
  }
}
