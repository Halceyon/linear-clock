import { describe, beforeEach, it } from "node:test";
import { clock } from "../clock";

describe('clock', () => {
  let clockInstance: clock;

  beforeEach(() => {
    clockInstance = new clock({
      onTick: () => {}
    });
  });

  it.only('should initialize with the current time', () => {
    const currentTime = new Date();
    expect(clockInstance.getTime()).to.deep.equal(currentTime);
  });

  it('should update the time every second', () => {
    const initialTime = clockInstance.getTime();

    cy.wait(1000);

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
});
function expect(arg0: Date) {
  throw new Error("Function not implemented.");
}

