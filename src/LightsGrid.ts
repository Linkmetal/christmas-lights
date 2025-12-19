export class LightsGrid {
  private grid: boolean[][]

  private TURNED_OFF = false

  private TURNED_ON = true

  constructor() {
    this.grid = Array.from(new Array(1000), () => Array.from(new Array(1000), () => this.TURNED_OFF))
  }

  turnOn(xFirstCoordinate: number, yFirstCoordinate: number, xSecondCoordinate: number, ySecondCoordinate: number) {
    this.grid = Array.from(new Array(1000), () => Array.from(new Array(1000), () => this.TURNED_ON))
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
