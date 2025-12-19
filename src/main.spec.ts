import { describe, it, expect } from "vitest"
import { LightsGrid } from "./LightsGrid"

describe("LightsGrid", () => {
  it("should create a grid of 1000 x 1000 with everything turned off", () => {
    const lightsGrid = new LightsGrid()

    expect(lightsGrid.turnedOnLights()).toBe(0)
  })

  it("should return 1.000.000 after turning on all lights", () => {
    const lightsGrid = new LightsGrid()

    lightsGrid.turnOn(0, 0, 999, 999)

    expect(lightsGrid.turnedOnLights()).toBe(1_000_000)
  })
})
