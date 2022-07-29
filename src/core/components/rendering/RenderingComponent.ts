import Component from '../../Component'

export default class RenderingComponent extends Component {
  public layer = 1

  public update(dt: number): void {
    super.update(dt)
    this._scene?.renderingQueue.add(this.render.bind(this), this.layer)
  }

  public render(): void {}
}
