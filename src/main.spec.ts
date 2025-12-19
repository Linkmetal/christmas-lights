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

    expect(lightsGrid.turnedOnLights()).toBe(250_000)
  })

  it("should handle complex sequence of operations", () => {
    const lightsGrid = new LightsGrid()

    lightsGrid.turnOn(887, 9, 959, 629)
    lightsGrid.turnOn(454, 398, 844, 448)
    lightsGrid.turnOff(539, 243, 559, 965)
    lightsGrid.turnOff(370, 819, 676, 868)
    lightsGrid.turnOff(145, 40, 370, 997)
    lightsGrid.turnOff(301, 3, 808, 453)
    lightsGrid.turnOn(351, 678, 951, 908)
    lightsGrid.toggle(720, 196, 897, 994)
    lightsGrid.toggle(831, 394, 904, 860)

    expect(lightsGrid.turnedOnLights()).toBe(230_022)
  })
})
