import { TimeOfDay } from './TimeOfDay';

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

  /**
   * Gets the current hour.
   * @returns The current hour as a number.
   */
  getHour(): number {
    return this.time.getHours();
  }

  /**
   * Gets the percentage of the day that has passed.
   * @returns A number between 0 and 100 representing the percentage of the day that has passed.
   */
  getPercentageOfDay(): number {
    const totalMinutes = this.time.getHours() * 60 + this.time.getMinutes();
    return (totalMinutes / 1440) * 100;
  }

  /**
   * Get the hours for friendly display.
   * @returns An array of two numbers representing the start and end of the display hours.
   */
  getDisplayHours(timeOfDay: TimeOfDay): number[] {
    switch (timeOfDay) {
      case TimeOfDay.Morning:
        return [6, 12];
      case TimeOfDay.Afternoon:
        return [12, 17];
      case TimeOfDay.Evening:
        return [17, 22];
    }
  }
}
