"use strict";
var _a;
class EmployeeManager {
    constructor() {
        this.employees = [];
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    getAllEmployees() {
        return this.employees;
    }
}
const employeeManager = new EmployeeManager();
function displayEmployees() {
    const employees = employeeManager.getAllEmployees();
    const tableBody = document.querySelector("#employee-table tbody");
    if (tableBody) {
        tableBody.innerHTML = '';
        employees.forEach((employee) => {
            const row = document.createElement('tr');
            row.innerHTML = `
        <td>${employee.id}</td>
        <td>${employee.name}</td>
        <td>${employee.department}</td>
      `;
            tableBody.appendChild(row);
        });
    }
}
(_a = document.getElementById('employee-form')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', (event) => {
    event.preventDefault();
    const id = Number(document.getElementById('id').value);
    const name = document.getElementById('name').value;
    const department = document.getElementById('department').value;
    if (!id || !name || !department) {
        alert('Please fill in all fields');
        return;
    }
    const newEmployee = { id, name, department };
    employeeManager.addEmployee(newEmployee);
    displayEmployees();
    const form = document.getElementById('employee-form');
    form.reset();
});
