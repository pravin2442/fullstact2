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
var Employee = /** @class */ (function () {
    function Employee(name, id) {
        this.name = name;
        this.id = id;
        this.salary = 0;
    }
    Employee.prototype.displayDetails = function () {
        return "Name: ".concat(this.name, ", ID: ").concat(this.id, ", Salary: \u20B9").concat(this.salary);
    };
    return Employee;
}());
var FullTimeEmployee = /** @class */ (function (_super) {
    __extends(FullTimeEmployee, _super);
    function FullTimeEmployee(name, id, monthlySalary) {
        var _this = _super.call(this, name, id) || this;
        _this.salary = monthlySalary;
        return _this;
    }
    return FullTimeEmployee;
}(Employee));
var PartTimeEmployee = /** @class */ (function (_super) {
    __extends(PartTimeEmployee, _super);
    function PartTimeEmployee(name, id, hoursWorked, hourlyRate) {
        var _this = _super.call(this, name, id) || this;
        _this.hoursWorked = hoursWorked;
        _this.hourlyRate = hourlyRate;
        _this.salary = _this.calculateSalary();
        return _this;
    }
    PartTimeEmployee.prototype.calculateSalary = function () {
        return this.hoursWorked * this.hourlyRate;
    };
    return PartTimeEmployee;
}(Employee));
function showFullTime() {
    var ft = new FullTimeEmployee("Ravi", 101, 40000);
    document.getElementById("empOutput").innerText = ft.displayDetails();
}
function showPartTime() {
    var pt = new PartTimeEmployee("Divya", 102, 80, 150);
    document.getElementById("empOutput").innerText = pt.displayDetails();
}
