import Game from './Game'
import Actor from './Actor'
import Scene from './Scene'

export type ComponentConstructor<T extends Component> = new (
  ...args: any[]
) => T

export default class Component {
  protected _game: Game | null = null
  protected _actor: Actor | null = null
  protected _scene: Scene | null = null

  public start(actor: Actor) {
    this._actor = actor
    this._game = actor.game
    this._scene = actor.scene
  }

  public update(_: number) {}

  public beforeRemove() {}
}
