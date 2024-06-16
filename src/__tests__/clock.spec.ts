import { describe, expect, beforeEach, it } from 'vitest';
import { Clock } from '../Clock';

describe('clock', () => {
  let clockInstance: Clock;

  beforeEach(() => {
    clockInstance = new Clock();
  });

  it('should return the percentage of the day that has passed', () => {
    // 6:00 AM is 25% of the day
    clockInstance.time.setMinutes(0);
    clockInstance.time.setHours(6);
    expect(clockInstance.getPercentageOfDay()).to.equal(25);

    // 12:00 PM is 50% of the day
    clockInstance.time.setHours(12);
    expect(clockInstance.getPercentageOfDay()).to.equal(50);

    // 6:00 PM is 75% of the day
    clockInstance.time.setHours(18);
    expect(clockInstance.getPercentageOfDay()).to.equal(75);

    // 11:59 PM is 99.99% of the day
    clockInstance.time.setHours(23);
    clockInstance.time.setMinutes(59);
    expect(clockInstance.getPercentageOfDay()).to.be.closeTo(99.99, 0.1);
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
