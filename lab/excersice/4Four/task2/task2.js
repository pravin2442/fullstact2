var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehicle = /** @class */ (function () {
    function Vehicle(brand, model, rentalPrice) {
        this.brand = brand;
        this.model = model;
        this.rentalPrice = rentalPrice;
    }
    Vehicle.prototype.display = function () {
        return "".concat(this.brand, " ").concat(this.model);
    };
    return Vehicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(brand, model, rentalPrice, numberOfSeats) {
        var _this = _super.call(this, brand, model, rentalPrice) || this;
        _this.numberOfSeats = numberOfSeats;
        return _this;
    }
    Car.prototype.calculateRental = function (days) {
        return this.rentalPrice * days;
    };
    return Car;
}(Vehicle));
var Bike = /** @class */ (function (_super) {
    __extends(Bike, _super);
    function Bike(brand, model, rentalPrice, engineCC) {
        var _this = _super.call(this, brand, model, rentalPrice) || this;
        _this.engineCC = engineCC;
        return _this;
    }
    Bike.prototype.calculateRental = function (days) {
        return this.rentalPrice * days;
    };
    return Bike;
}(Vehicle));
function rentCar() {
    var car = new Car("Toyota", "Innova", 1500, 7);
    var total = car.calculateRental(3);
    document.getElementById("vehicleOutput").innerText =
        "Car: ".concat(car.display(), ", Seats: ").concat(car.numberOfSeats, ", 3 Days Rent: \u20B9").concat(total);
}
function rentBike() {
    var bike = new Bike("Yamaha", "R15", 500, 155);
    var total = bike.calculateRental(2);
    document.getElementById("vehicleOutput").innerText =
        "Bike: ".concat(bike.display(), ", CC: ").concat(bike.engineCC, ", 2 Days Rent: \u20B9").concat(total);
}
