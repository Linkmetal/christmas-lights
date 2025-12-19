export class LightsGrid {
  private grid: boolean[][]

  private TURNED_OFF = false

  private TURNED_ON = true

  constructor() {
    this.grid = Array.from(new Array(1000), () => Array.from(new Array(1000), () => this.TURNED_OFF))
  }

  turnOn(xFirstCoordinate: number, yFirstCoordinate: number, xSecondCoordinate: number, ySecondCoordinate: number) {
    this.loopGrid(xFirstCoordinate, yFirstCoordinate, xSecondCoordinate, ySecondCoordinate, () => this.TURNED_ON)
  }

  turnOff(xFirstCoordinate: number, yFirstCoordinate: number, xSecondCoordinate: number, ySecondCoordinate: number) {
    this.loopGrid(xFirstCoordinate, yFirstCoordinate, xSecondCoordinate, ySecondCoordinate, () => this.TURNED_OFF)
  }

  toggle(xFirstCoordinate: number, yFirstCoordinate: number, xSecondCoordinate: number, ySecondCoordinate: number) {
    this.loopGrid(xFirstCoordinate, yFirstCoordinate, xSecondCoordinate, ySecondCoordinate, (value) => !value)
  }

  private loopGrid(
    xFirstCoordinate: number,
    yFirstCoordinate: number,
    xSecondCoordinate: number,
    ySecondCoordinate: number,
    callback: (value: boolean) => boolean,
  ) {
    const xFirstPointOfArea = xFirstCoordinate <= xSecondCoordinate ? xFirstCoordinate : xSecondCoordinate
    const yFirstPointOfArea = yFirstCoordinate <= ySecondCoordinate ? yFirstCoordinate : ySecondCoordinate

    const xSecondPointOfArea = xFirstCoordinate > xSecondCoordinate ? xFirstCoordinate : xSecondCoordinate
    const ySecondPointOfArea = yFirstCoordinate > ySecondCoordinate ? yFirstCoordinate : ySecondCoordinate

    for (let i = xFirstPointOfArea; i <= xSecondPointOfArea; i++) {
      for (let j = yFirstPointOfArea; j <= ySecondPointOfArea; j++) {
        this.grid[i][j] = callback(this.grid[i][j])
      }
    }
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
