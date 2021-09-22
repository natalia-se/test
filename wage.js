class Wage {
  constructor(day, startTime, endTime, hourlySalary) {
    this.day = day;
    this.startTime = startTime;
    this.endTime = endTime;
    this.hourlySalary = hourlySalary;

    this.maxHours = 12;
    this.extraHoursFrom = 8;
    this.normalSalary = 0;
    this.extraSalary = 0;
    this.weekendSalary = 0;
  }

  getTotalHours() {
    return this.endTime - this.startTime;
  }

  getExtraTimeHours() {
    if (this.getTotalHours() > this.extraHoursFrom) {
      return this.getTotalHours() - this.extraHoursFrom;
    } else {
      return 0;
    }
  }

  isWeekend() {
    return this.day === "Saturday" || this.day === "Sunday";
  }

  calculateWage() {
    if (this.isWeekend()) {
      this.normalSalary = this.getTotalHours() * this.hourlySalary;
      this.weekendSalary = this.normalSalary;
    } else {
      this.normalSalary = this.getTotalHours() * this.hourlySalary;
      this.extraSalary = this.getExtraTimeHours() * this.hourlySalary * 0.5;
    }
    return this.normalSalary + this.extraSalary + this.weekendSalary;
  }
}

const wage1 = new Wage("Monday", 8, 17, 200);
console.log(wage1.getTotalHours());

console.log(wage1.isWeekend());

console.log(wage1.calculateWage());
