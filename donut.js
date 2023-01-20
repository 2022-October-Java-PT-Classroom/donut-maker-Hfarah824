export default class donutGame {
    constructor(){
        this.donutGameCount = 0
        this.autoClicker = 0
        this.autoClickerCost = 100
        this.donutMultiplier = 0
        this.donutMultiplierCost = 1
        this.donutMultiplierAmount = 1
    }
    resetGame() {
        this.donutGameCount = 0
        this.autoClicker = 0
        this.autoClickerCost = 100
        this.donutMultiplier = 0
        this.donutMultiplierCost = 10
        this.donutMultiplierAmount = 0
    }
    getdonutGameCount() {
        return this.donutGameCount;
    }
    getautoClicker() {;
        return this.autoClicker
    }
    getautoClickerCost() {
        return getautoClickerCost;
    }
    getdonutMultiplier() {
     return this.donutMultiplier;
    }
    getdonutMultiplierCost() {
      return this.donutMultiplierCost;
    }
    click() {
        this.donutGameCount += 1 * this.donutMultiplierAmount;
    }
    increaseAutoClickerCost() {
        this.autoClickerCost += this.autoClickerCost *0.1;
    }
    increaseMultiplierCost() {
        this.donutMultiplierCost += this.donutMultiplierCost *0.1;
    }
    increaseMultiplierAmount() {
        this.donutMultiplierAmount = Math.pow(1.2, this.donutMultiplierAmount)
    }
    buyAutoClicker() {
        if (this.donutGameCount >= this.autoClickerCost) {
            this.autoClicker += 1
            this.donutGameCount -= this.autoClickerCost
            this.increaseAutoClickerCost()
        }
        else alert("you don't have enough")
    }
    buyDonutMultiplier() {
        if (this.donutGameCount >= this.donutMultiplierCost) {
            this.donutMultiplier += 1
            this.donutGameCount -= this.donutMultiplierCost
            this.increaseMultiplierAmount()
        }
        else alert("you don't have enough")
    }
}