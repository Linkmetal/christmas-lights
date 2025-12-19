import { describe, it, expect } from "vitest"
import { myFunction } from "./main.js"

class LightsGrid {
  turnedOnLights() {
    return 0
  }
}

describe("LightsGrid", () => {
  it("should create a grid of 1000 x 1000 with everything turned off", () => {
    const lightsGrid = new LightsGrid()

    expect(lightsGrid.turnedOnLights()).toBe(0)
  })
})
