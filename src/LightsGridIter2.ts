export class LightsGridIter2 {
  private grid: number[][]

  constructor() {
    this.grid = Array.from(new Array(1000), () => Array.from(new Array(1000), () => 0))
  }

  turnOn(xFirstCoordinate: number, yFirstCoordinate: number, xSecondCoordinate: number, ySecondCoordinate: number) {
    this.loopGrid(xFirstCoordinate, yFirstCoordinate, xSecondCoordinate, ySecondCoordinate, (value) => value + 1)
  }

  turnOff(xFirstCoordinate: number, yFirstCoordinate: number, xSecondCoordinate: number, ySecondCoordinate: number) {
    this.loopGrid(xFirstCoordinate, yFirstCoordinate, xSecondCoordinate, ySecondCoordinate, (value) => value - 1)
  }

  toggle(xFirstCoordinate: number, yFirstCoordinate: number, xSecondCoordinate: number, ySecondCoordinate: number) {
    this.loopGrid(xFirstCoordinate, yFirstCoordinate, xSecondCoordinate, ySecondCoordinate, (value) => value + 2)
  }

  private loopGrid(
    xFirstCoordinate: number,
    yFirstCoordinate: number,
    xSecondCoordinate: number,
    ySecondCoordinate: number,
    callback: (value: number) => number,
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
        count += cell
      }
    }
    return count
  }
}
