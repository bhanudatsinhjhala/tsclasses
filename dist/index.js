"use strict";
/*
 * Create a TypeScript class that represents a person with a name, age, and address.
 * Add methods to set and get each property.
 *
 */
class Vehicle {
    constructor(name, maxSpeed, engine, price, color) {
        this.name = name;
        this.maxSpeed = maxSpeed;
        this.engine = engine;
        this.price = price;
        this.color = color;
    }
    getName() {
        return `Vehicle name is ${this.name}`;
    }
    getColor() {
        return `Color of ${this.name} is ${this.color}`;
    }
    getMaxSpeed() {
        return `Vehicle's max speed is ${this.maxSpeed}`;
    }
    getEngine() {
        return `Vehicle engine detail is ${this.engine}`;
    }
    getPrice() {
        return `Vehicle price is ${this.price}`;
    }
}
class Car extends Vehicle {
    constructor(color, seats, nCapRating, carType, name, maxSpeed, engine, price) {
        super(name, maxSpeed, engine, price, color);
        this.color = color;
        this.seats = seats;
        this.nCapRating = nCapRating;
        this.carType = carType;
    }
    getNCapRating() {
        return `N-cap rating of ${this.name} is ${this.nCapRating}`;
    }
}
const carTest = new Car("blue", 5, 4, "Compat SUV", "XUV 500", 220, 1600, 1500000);
console.log("carTest rating ---- ", carTest.getNCapRating());
console.log("carTest name ---- ", carTest.getName());
class Truck extends Vehicle {
    constructor(color, loadCapacity, truckType, name, maxSpeed, engine, price) {
        super(name, maxSpeed, engine, price, color);
        this.loadCapacity = loadCapacity;
        this.truckType = truckType;
    }
    getLoadCapacity() {
        return `Load Capacity of ${this.name} is ${this.loadCapacity} tons`;
    }
}
const truckTest = new Truck("brown", 5, "dumper", "TATA Novus", 110, 2500, 5000000);
console.log("truckTest load capacity ---- ", truckTest.getLoadCapacity());
class motorcycle extends Vehicle {
    constructor(color, motorCycleType, name, maxSpeed, engine, price) {
        super(name, maxSpeed, engine, price, color);
        this.motorCycleType = motorCycleType;
    }
    getMotorCycleType() {
        return `${this.name} is ${this.motorCycleType} bike`;
    }
}
const motorCycle = new motorcycle("green", "sports", "KTM", 250, 250, 200000);
console.log("motorCycle --- ", motorCycle.getMotorCycleType());
