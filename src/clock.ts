export class clock {
    time: Date;
    constructor({
        onTick
      }: { onTick: (time: Date) => void }) {
        this.time = new Date();
        this.time = new Date();
        setInterval(() => {
            this.time = new Date();
            onTick(this.time);
        }, 1000);
    }
    getTime() {
        return this.time;
    }

    isMorning() {
        return this.time.getHours() >= 6 && this.time.getHours() < 12;
    }

    isAfternoon() {
        return this.time.getHours() >= 12 && this.time.getHours() < 18;
    }

    isEvening() {
        return this.time.getHours() >= 18;
    }
}
