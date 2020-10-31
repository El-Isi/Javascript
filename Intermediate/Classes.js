class Car {
    constructor(color) {
        this.color = color;
        this.isOn = false;
    }

    forward() {
        return 'Forward';
    }

    backward() {
        return 'Backward';
    }

    stop() {
        return 'Stop';
    }

    turnOn() {
        this.isOn = true;
        return 'The car is ON';
    }

    turnOff() {
        this.isOn = false;
        return 'The car is OFF';
    }

    getColor() {
        return this.color;
    }
}

const CarRed = new Car('red');
const CarBlue = new Car('blue');

console.log(CarRed.turnOn());

console.log('The car', CarRed.getColor(), 'is:', CarRed.forward());
console.log('The car', CarRed.getColor(), 'is:', CarRed.backward());
console.log('The car', CarRed.getColor(), 'is:', CarRed.stop());

console.log(CarRed.turnOff());
console.log('----------')
console.log(CarBlue.turnOn());

console.log('The car', CarBlue.getColor(), 'is:', CarBlue.forward());
console.log('The car', CarBlue.getColor(), 'is:', CarBlue.backward());
console.log('The car', CarBlue.getColor(), 'is:', CarBlue.stop());

console.log(CarBlue.turnOff());
