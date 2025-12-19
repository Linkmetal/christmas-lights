export class LightsGrid {
  private grid: boolean[][]

  private TURNED_OFF = false

  private TURNED_ON = true

  constructor() {
    this.grid = Array.from(new Array(1000), () => Array.from(new Array(1000), () => this.TURNED_OFF))
  }

  turnOn(xFirstCoordinate: number, yFirstCoordinate: number, xSecondCoordinate: number, ySecondCoordinate: number) {
    const xFirstPointOfArea = xFirstCoordinate <= xSecondCoordinate ? xFirstCoordinate : xSecondCoordinate
    const yFirstPointOfArea = yFirstCoordinate <= ySecondCoordinate ? yFirstCoordinate : ySecondCoordinate

    const xSecondPointOfArea = xFirstCoordinate > xSecondCoordinate ? xFirstCoordinate : xSecondCoordinate
    const ySecondPointOfArea = yFirstCoordinate > ySecondCoordinate ? yFirstCoordinate : ySecondCoordinate

    for (let i = xFirstPointOfArea; i <= xSecondPointOfArea; i++) {
      for (let j = yFirstPointOfArea; j <= ySecondPointOfArea; j++) {
        this.grid[i][j] = this.TURNED_ON
      }
    }
  }

  turnOff(xFirstCoordinate: number, yFirstCoordinate: number, xSecondCoordinate: number, ySecondCoordinate: number) {
    throw Error
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
