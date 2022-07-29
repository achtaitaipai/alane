import Component, { ComponentConstructor } from './Component'
import Game from './Game'
import Scene from './Scene'

export default class Actor {
  public _components: Component[] = []
  public readonly id: number
  public game: Game | null = null
  public scene: Scene | null = null

  public tags: string[] = []

  public onUpdate?: (dt: number) => void

  private static _id = 0

  private static _newId() {
    this._id++
    return this._id
  }

  constructor(...tags: string[]) {
    this.id = Actor._newId()
    if (tags) this.tags = tags
  }

  public add(...components: Component[]) {
    components.forEach((component) => {
      this._components.push(component)
    })
    return this
  }

  public remove<T extends Component>(Component: ComponentConstructor<T>) {
    const index = this._components.findIndex(
      (component) => component instanceof Component
    )
    this._components[index]?.beforeRemove()
    this._components = this._components.filter(
      (component) => !(component instanceof Component)
    )
  }

  public get<T extends Component>(
    Component: ComponentConstructor<T>
  ): T | null {
    const component = this._components.find(
      (component) => component instanceof Component
    )
    if (component && component instanceof Component) return component
    return null
  }

  public destroy() {
    this.scene?.remove(this)
  }

  public start(scene: Scene) {
    this.scene = scene
    this.game = scene.game
    this._components.forEach((component) => component.start(this))
  }

  public update(dt: number) {
    this._components.forEach((component) => component.update(dt))
    if (this.onUpdate) this.onUpdate.bind(this)(dt)
  }

  public beforeRemove() {
    this._components.forEach((component) => component.beforeRemove())
  }

  public includeAllTags(tags: string[]) {
    for (const tag of tags) {
      if (!this.tags.includes(tag)) return false
    }
    return true
  }
}
