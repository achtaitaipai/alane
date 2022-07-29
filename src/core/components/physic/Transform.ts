import Component from '../../Component'

export default class Position extends Component {
  public x: number
  public y: number
  public width: number = 0
  public height: number = 0
  constructor(x: number, y: number) {
    super()
    this.x = x
    this.y = y
  }
}
