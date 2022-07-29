type CallBack<T> = (args: T) => void
type Listener<T> = { id: number; callBack: CallBack<T> }
export default class Observer<T> {
  private _listeners: Listener<T>[] = []
  private _id = 0

  public add(callBack: CallBack<T>) {
    this._listeners.push({
      id: this._id,
      callBack,
    })
    this._id++
    return this._id - 1
  }

  public remove(id: number) {
    this._listeners = this._listeners.filter((itm) => itm.id !== id)
  }

  public notify(args: T) {
    this._listeners.forEach((listener) => {
      listener.callBack(args)
    })
  }
}
