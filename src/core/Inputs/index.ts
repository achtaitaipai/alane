import { inputsNames } from './inputTypes'

const keysJustPressed: Map<string, number> = new Map()
const keysPressed: Map<string, boolean> = new Map()

export function startListeningInputs() {
  document.addEventListener('keydown', (e) => _handleInputDown(e.code))
  document.addEventListener('keyup', (e) => _handleInputUp(e.code))
  document.addEventListener('mousedown', () => _handleInputDown('Mouse'))
  document.addEventListener('mouseup', () => _handleInputUp('Mouse'))
}

function _handleInputDown(code: string) {
  if (!keysPressed.get(code)) keysJustPressed.set(code, 1)
  keysPressed.set(code, true)
}

function _handleInputUp(code: string) {
  keysPressed.set(code, false)
}

export function keyBoardInputsUpdate() {
  for (const [key, value] of keysJustPressed.entries()) {
    keysJustPressed.set(key, Math.max(value - 1, 0))
  }
}

export function isJustPressed(code: inputsNames) {
  const value = keysJustPressed.get(code) ?? 0
  return value > 0
}

export function isPressed(code: inputsNames) {
  return keysPressed.get(code) ?? false
}
