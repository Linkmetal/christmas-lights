import { describe, it, expect } from "vitest"
import { LightsGridIter2 } from "./LightsGridIter2"

describe("LightsGrid Iter 2", () => {
  it("should return 1 by turning brightness by 1", () => {
    const lightsGrid = new LightsGridIter2()

    lightsGrid.turnOn(0, 0, 0, 0)

    expect(lightsGrid.turnedOnLights()).toBe(1)
  })

  it("should return 2_000_000 by turning brightness by toggle", () => {
    const lightsGrid = new LightsGridIter2()

    lightsGrid.toggle(0, 0, 999, 999)

    expect(lightsGrid.turnedOnLights()).toBe(2_000_000)
  })
})
