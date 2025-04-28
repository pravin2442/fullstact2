class Employee {
    name: string;
    id: number;
    salary: number;

    constructor(name: string, id: number) {
        this.name = name;
        this.id = id;
        this.salary = 0;
    }

    displayDetails(): string {
        return `Name: ${this.name}, ID: ${this.id}, Salary: ₹${this.salary}`;
    }
}

class FullTimeEmployee extends Employee {
    constructor(name: string, id: number, monthlySalary: number) {
        super(name, id);
        this.salary = monthlySalary;
    }
}

class PartTimeEmployee extends Employee {
    hoursWorked: number;
    hourlyRate: number;

    constructor(name: string, id: number, hoursWorked: number, hourlyRate: number) {
        super(name, id);
        this.hoursWorked = hoursWorked;
        this.hourlyRate = hourlyRate;
        this.salary = this.calculateSalary();
    }

    calculateSalary(): number {
        return this.hoursWorked * this.hourlyRate;
    }
}

function showFullTime() {
    const ft = new FullTimeEmployee("Ravi", 101, 40000);
    document.getElementById("empOutput")!.innerText = ft.displayDetails();
}

function showPartTime() {
    const pt = new PartTimeEmployee("Divya", 102, 80, 150);
    document.getElementById("empOutput")!.innerText = pt.displayDetails();
}
