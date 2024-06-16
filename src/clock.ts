/**
 * Represents a clock that keeps track of time and provides utility methods.
 */
export class Clock {
  time: Date;

  /**
   * Creates a new instance of the Clock class.
   * @param onTick - A callback function that will be called every second with the current time.
   */
  constructor() {
    this.time = new Date();
    setInterval(() => {
      this.time = new Date();
      this.onTick(this.time);
    }, 1000);
  }

  /**
   * A callback function that will be called every second with the current time.
   */
  onTick(time: Date) {
    // Do nothing by default
  }

  /**
   * Gets the current time.
   * @returns The current time as a Date object.
   */
  getTime() {
    return this.time;
  }

  getTimeOfDay(): TimeOfDay {
    if (this.isMorning()) {
      return 'morning';
    } else if (this.isAfternoon()) {
      return 'afternoon';
    } else {
      return 'evening';
    }
  }

  /**
   * Checks if the current time is in the morning (between 6 AM and 12 PM).
   * @returns True if the current time is in the morning, false otherwise.
   */
  isMorning() {
    return this.time.getHours() >= 6 && this.time.getHours() < 12;
  }

  /**
   * Checks if the current time is in the afternoon (between 12 PM and 6 PM).
   * @returns True if the current time is in the afternoon, false otherwise.
   */
  isAfternoon() {
    return this.time.getHours() >= 12 && this.time.getHours() < 18;
  }

  /**
   * Checks if the current time is in the evening (after 6 PM).
   * @returns True if the current time is in the evening, false otherwise.
   */
  isEvening() {
    return this.time.getHours() >= 18;
  }
}

export type TimeOfDay = 'morning' | 'afternoon' | 'evening';
