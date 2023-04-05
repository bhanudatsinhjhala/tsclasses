"use strict";
/*
 * Create a TypeScript class that represents a person with a name, age, and address.
 * Add methods to set and get each property.
 *
 */
class Person {
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
    getAddress() {
        return this.address;
    }
}
const johnPerson = new Person("John", 18, "Gurukul road, Ahmedabad - Gujarat");
console.log("\n john get name", johnPerson.getName());
console.log("\n john get age", johnPerson.getAge());
console.log("\n john get address", johnPerson.getAddress());
/*
 * Create a TypeScript class that represents a game with methods for starting, pausing, and ending the game.
 *
 */
class Game {
    constructor(playerOne, playerTwo) {
        this.playerOne = playerOne;
        this.playerTwo = playerTwo;
    }
    startGame() {
        return "Game has begin. Hurry Up!!!!";
    }
    pauseGame() {
        return "Game has stopped. Please take rest.";
    }
    endGame() {
        return "Hurray game has ended. You guess who won the game.";
    }
}
const myFirstGame = new Game("Bhanudatsinh", "Pratik");
setTimeout(() => {
    console.log("\n Start the Game ---", myFirstGame.startGame());
}, 2000);
setTimeout(() => {
    console.log("\n Pause the Game ---", myFirstGame.pauseGame());
}, 3000);
setTimeout(() => {
    console.log("\n End the Game ---", myFirstGame.endGame());
}, 4000);
/*
 * Create a TypeScript class that represents a weather app with methods for displaying the current temperature,
 * wind speed, and precipitation.
 *
 */
class Weather {
    constructor(temperature, windSpeed, percipitation) {
        this.temperature = temperature;
        this.windSpeed = windSpeed;
        this.percipitation = percipitation;
    }
    getTemperature() {
        return `Current temperature is ${this.temperature} deg C`;
    }
    getWindSpeed() {
        return `Wind is blowing at a speed of ${this.windSpeed} KpH`;
    }
    getPercipitation() {
        return `Today's weather is ${this.percipitation}%`;
    }
}
const weatherForecast = new Weather(55, 50, 3);
setTimeout(() => {
    console.log("\n Temperature ---", weatherForecast.getTemperature());
}, 5000);
setTimeout(() => {
    console.log("\n Wind Speed ---", weatherForecast.getWindSpeed());
}, 6000);
setTimeout(() => {
    console.log("\n Percipitation ---", weatherForecast.getPercipitation());
}, 7000);
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
class Shape {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }
    getName() {
        return `Shape name is ${this.name}`;
    }
}
class Rectangle extends Shape {
    constructor(length, breadth, name, color) {
        super(name, color);
        this.length = length;
        this.breadth = breadth;
    }
    getLength() {
        return `${this.name}'s length is ${this.length}`;
    }
    getArea() {
        return `${this.name}'s area is ${this.length * this.breadth}`;
    }
}
const firstRectangle = new Rectangle(5, 5, "first-rectangle", "blue");
console.log("firstRectangle --- ", firstRectangle.getArea());
