import { describe, expect, beforeEach, it } from "vitest";
import { Clock } from "../clock";

describe('clock', () => {
  let clockInstance: Clock;

  beforeEach(() => {
    clockInstance = new Clock();
  });

  it('should correctly determine if it is morning', () => {
    const morningTime = new Date();
    morningTime.setHours(8);
    clockInstance.time = morningTime;

    expect(clockInstance.isMorning()).to.be.true;
  });

  it('should correctly determine if it is afternoon', () => {
    const afternoonTime = new Date();
    afternoonTime.setHours(14);
    clockInstance.time = afternoonTime;

    expect(clockInstance.isAfternoon()).to.be.true;
  });

  it('should correctly determine if it is evening', () => {
    const eveningTime = new Date();
    eveningTime.setHours(20);
    clockInstance.time = eveningTime;

    expect(clockInstance.isEvening()).to.be.true;
  });

  it('should trigger the onTick callback every second', async () => {
    let tickCount = 0;
    clockInstance.onTick = () => {
      tickCount++;
    };

    // sleep for 3 seconds with 100ms extra to allow time for the tick
    await new Promise((resolve) => setTimeout(resolve, 3100));

    expect(tickCount).to.equal(3);
  });
});

