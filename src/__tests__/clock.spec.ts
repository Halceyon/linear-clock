import { describe, expect, beforeEach, it } from "vitest";
import { Clock } from "../clock";

describe('clock', () => {
  let clockInstance: Clock;

  beforeEach(() => {
    clockInstance = new Clock();
  });

  it('should initialize with the current time', () => {
    const currentTime = new Date();
    expect(clockInstance.getTime()).to.deep.equal(currentTime);
  });

  it('should update the time every second', async () => {
    const initialTime = clockInstance.getTime();

    // sleep for 1 second
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const updatedTime = clockInstance.getTime();
    expect(updatedTime).to.be.greaterThan(initialTime);
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

