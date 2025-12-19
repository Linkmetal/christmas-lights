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

  it("should return 250.000 after turning quarter of the grid", () => {
    const lightsGrid = new LightsGrid()

    lightsGrid.turnOn(0, 0, 499, 499)

    expect(lightsGrid.turnedOnLights()).toBe(250_000)
  })

  it("should return 250.000 after turning quarter of the grid with reversed coordinates", () => {
    const lightsGrid = new LightsGrid()

    lightsGrid.turnOn(499, 499, 0, 0)

    expect(lightsGrid.turnedOnLights()).toBe(250_000)
  })

  it("should return 750.000 after turning off quarter of the grid", () => {
    const lightsGrid = new LightsGrid()

    lightsGrid.turnOn(0, 0, 999, 999)

    lightsGrid.turnOff(0, 0, 499, 499)

    expect(lightsGrid.turnedOnLights()).toBe(750_000)
  })

  it("should return 250.000 after toggling quarter of the grid", () => {
    const lightsGrid = new LightsGrid()

    lightsGrid.toggle(0, 0, 499, 499)

    expect(lightsGrid.turnedOnLights()).toBe(750_000)
  })
})
