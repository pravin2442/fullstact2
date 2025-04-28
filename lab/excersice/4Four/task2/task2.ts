class Vehicle {
    brand: string;
    model: string;
    rentalPrice: number;

    constructor(brand: string, model: string, rentalPrice: number) {
        this.brand = brand;
        this.model = model;
        this.rentalPrice = rentalPrice;
    }

    display(): string {
        return `${this.brand} ${this.model}`;
    }
}

class Car extends Vehicle {
    numberOfSeats: number;

    constructor(brand: string, model: string, rentalPrice: number, numberOfSeats: number) {
        super(brand, model, rentalPrice);
        this.numberOfSeats = numberOfSeats;
    }

    calculateRental(days: number): number {
        return this.rentalPrice * days;
    }
}

class Bike extends Vehicle {
    engineCC: number;

    constructor(brand: string, model: string, rentalPrice: number, engineCC: number) {
        super(brand, model, rentalPrice);
        this.engineCC = engineCC;
    }

    calculateRental(days: number): number {
        return this.rentalPrice * days;
    }
}

function rentCar() {
    const car = new Car("Toyota", "Innova", 1500, 7);
    const total = car.calculateRental(3);
    document.getElementById("vehicleOutput")!.innerText =
        `Car: ${car.display()}, Seats: ${car.numberOfSeats}, 3 Days Rent: ₹${total}`;
}

function rentBike() {
    const bike = new Bike("Yamaha", "R15", 500, 155);
    const total = bike.calculateRental(2);
    document.getElementById("vehicleOutput")!.innerText =
        `Bike: ${bike.display()}, CC: ${bike.engineCC}, 2 Days Rent: ₹${total}`;
}
