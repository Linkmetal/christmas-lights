import { describe, it, expect } from "vitest"
import { LightsGrid } from "./LightsGrid"

describe("LightsGrid", () => {
  it("should create a grid of 1000 x 1000 with everything turned off", () => {
    const lightsGrid = new LightsGrid()

    expect(lightsGrid.turnedOnLights()).toBe(0)
  })
})
