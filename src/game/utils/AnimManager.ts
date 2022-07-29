import { Anim } from '../../core'

export type AnimationData = {
  [k: string]: {
    spritesheet: () => ImageBitmap[]
    anim: number[]
    flip: boolean
  }
}

export default class AnimManager {
  private _animComponent: Anim
  private _animations: AnimationData

  constructor(animComponent: Anim, animations: AnimationData) {
    this._animComponent = animComponent
    this._animations = animations
  }

  public set(key: string) {
    const animDatas = this._animations[key]
    if (animDatas) {
      this._animComponent.spriteSheet = animDatas.spritesheet
      this._animComponent.anim = animDatas.anim
      this._animComponent.flipX = animDatas.flip
    }
  }
}
