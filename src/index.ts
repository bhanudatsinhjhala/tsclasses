/*
 * Create a TypeScript class that represents a person with a name, age, and address.
 * Add methods to set and get each property.
 *
 */

// class Person {
//   name: string;
//   age: number;
//   address: string;
//   constructor(name: string, age: number, address: string) {
//     this.name = name;
//     this.age = age;
//     this.address = address;
//   }

//   getName(): string {
//     return this.name;
//   }
//   getAge(): number {
//     return this.age;
//   }
//   getAddress(): string {
//     return this.address;
//   }
// }

// const johnPerson = new Person("John", 18, "Gurukul road, Ahmedabad - Gujarat");

// console.log("\n john get name", johnPerson.getName());
// console.log("\n john get age", johnPerson.getAge());
// console.log("\n john get address", johnPerson.getAddress());

/*
 * Create a TypeScript class that represents a game with methods for starting, pausing, and ending the game.
 *
 */

// class Game {
//   playerOne: string;
//   playerTwo: string;
//   constructor(playerOne: string, playerTwo: string) {
//     this.playerOne = playerOne;
//     this.playerTwo = playerTwo;
//   }

//   startGame(): string {
//     return "Game has begin. Hurry Up!!!!";
//   }
//   pauseGame(): string {
//     return "Game has stopped. Please take rest.";
//   }
//   endGame(): string {
//     return "Hurray game has ended. You guess who won the game.";
//   }
// }

// const myFirstGame = new Game("Bhanudatsinh", "Pratik");

// setTimeout(() => {
//   console.log("\n Start the Game ---", myFirstGame.startGame());
// }, 2000);
// setTimeout(() => {
//   console.log("\n Pause the Game ---", myFirstGame.pauseGame());
// }, 3000);

// setTimeout(() => {
//   console.log("\n End the Game ---", myFirstGame.endGame());
// }, 4000);

/*
 * Create a TypeScript class that represents a weather app with methods for displaying the current temperature,
 * wind speed, and precipitation.
 *
 */

// class Weather {
//   temperature: number;
//   windSpeed: number;
//   percipitation: number;

//   constructor(temperature: number, windSpeed: number, percipitation: number) {
//     this.temperature = temperature;
//     this.windSpeed = windSpeed;
//     this.percipitation = percipitation;
//   }

//   getTemperature(): string {
//     return `Current temperature is ${this.temperature} deg C`;
//   }
//   getWindSpeed(): string {
//     return `Wind is blowing at a speed of ${this.windSpeed} KpH`;
//   }
//   getPercipitation(): string {
//     return `Today's weather is ${this.percipitation}%`;
//   }
// }

// const weatherForecast = new Weather(55, 50, 3);

// setTimeout(() => {
//   console.log("\n Temperature ---", weatherForecast.getTemperature());
// }, 5000);

// setTimeout(() => {
//   console.log("\n Wind Speed ---", weatherForecast.getWindSpeed());
// }, 6000);

// setTimeout(() => {
//   console.log("\n Percipitation ---", weatherForecast.getPercipitation());
// }, 7000);

/*
 * Create a TypeScript interface that defines the properties and methods of a vehicle.
 * Implement the interface in classes that represent a car, truck, and motorcycle.
 *
 */

interface VehicleInterface {
  getName(): string;
  getMaxSpeed(): string;
  getEngine(): string;
  getPrice(): string;
}
class Vehicle implements VehicleInterface {
  name: string;
  color: string;
  maxSpeed: number;
  engine: number;
  price: number;

  constructor(
    name: string,
    maxSpeed: number,
    engine: number,
    price: number,
    color: string
  ) {
    this.name = name;
    this.maxSpeed = maxSpeed;
    this.engine = engine;
    this.price = price;
    this.color = color;
  }

  getName(): string {
    return `Vehicle name is ${this.name}`;
  }
  getColor(): string {
    return `Color of ${this.name} is ${this.color}`;
  }
  getMaxSpeed(): string {
    return `Vehicle's max speed is ${this.maxSpeed}`;
  }
  getEngine(): string {
    return `Vehicle engine detail is ${this.engine}`;
  }
  getPrice(): string {
    return `Vehicle price is ${this.price}`;
  }
}

class Car extends Vehicle {
  seats: number;
  nCapRating: number;
  carType: string;

  constructor(
    color: string,
    seats: number,
    nCapRating: number,
    carType: string,
    name: string,
    maxSpeed: number,
    engine: number,
    price: number
  ) {
    super(name, maxSpeed, engine, price, color);
    this.color = color;
    this.seats = seats;
    this.nCapRating = nCapRating;
    this.carType = carType;
  }

  getNCapRating(): string {
    return `N-cap rating of ${this.name} is ${this.nCapRating}`;
  }
}

const carTest = new Car(
  "blue",
  5,
  4,
  "Compat SUV",
  "XUV 500",
  220,
  1600,
  1500000
);

console.log("carTest rating ---- ", carTest.getNCapRating());
console.log("carTest name ---- ", carTest.getName());

class Truck extends Vehicle {
  loadCapacity: number;
  truckType: string;

  constructor(
    color: string,
    loadCapacity: number,
    truckType: string,
    name: string,
    maxSpeed: number,
    engine: number,
    price: number
  ) {
    super(name, maxSpeed, engine, price, color);
    this.loadCapacity = loadCapacity;
    this.truckType = truckType;
  }

  getLoadCapacity(): string {
    return `Load Capacity of ${this.name} is ${this.loadCapacity} tons`;
  }
}

const truckTest = new Truck(
  "brown",
  5,
  "dumper",
  "TATA Novus",
  110,
  2500,
  50_00_000
);

console.log("truckTest load capacity ---- ", truckTest.getLoadCapacity());

class motorcycle extends Vehicle {
  motorCycleType: string;

  constructor(
    color: string,
    motorCycleType: string,
    name: string,
    maxSpeed: number,
    engine: number,
    price: number
  ) {
    super(name, maxSpeed, engine, price, color);
    this.motorCycleType = motorCycleType;
  }

  getMotorCycleType(): string {
    return `${this.name} is ${this.motorCycleType} bike`;
  }
}

const motorCycle = new motorcycle("green", "sports", "KTM", 250, 250, 2_00_000);

console.log("motorCycle --- ", motorCycle.getMotorCycleType());
