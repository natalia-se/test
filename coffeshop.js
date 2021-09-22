class Customer {
  constructor() {
    this.transaction = [];
    this.discountThreshold = 1000;
  }

  addTransaction(amount) {
    this.transaction.push(amount);
  }

  getTotalSpent() {
    let sum = 0;
    this.transaction.forEach((transaction) => {
      sum += transaction;
    });
  }

  isEligableForDiscount() {
    return this.getTotalSpent() >= this.discountThreshold;
  }
}

const customer1 = new Customer();
customer1.addTransaction(10);
customer1.addTransaction(100);
customer1.addTransaction(50);
customer1.addTransaction(10);

console.log(customer1.isEligableForDiscount());
console.log(customer1.getTotalSpent());
