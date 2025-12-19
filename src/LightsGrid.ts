export class LightsGrid {
  private grid: boolean[][]

  constructor() {
    this.grid = Array.from(new Array(1000), () => Array.from(new Array(1000), () => false))
  }

  turnOn(xFirstCoordinate: number, yFirstCoordinate: number, xSecondCoordinate: number, ySecondCoordinate: number) {
    this.grid = Array.from(new Array(1000), () => Array.from(new Array(1000), () => true))
  }

  turnedOnLights() {
    let count = 0
    for (const row of this.grid) {
      for (const cell of row) {
        if (cell) count++
      }
    }
    return count
  }
}
