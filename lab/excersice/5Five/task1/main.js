"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var product_1 = require("./product");
var customer_1 = require("./customer");
var shoppingCart_1 = require("./shoppingCart");
var product1 = new product_1.Product(1, "Laptop", 80000);
var product2 = new product_1.Product(2, "Mouse", 500);
var customer = new customer_1.Customer(101, "Anjali");
var cart = new shoppingCart_1.ECommerceSystem.ShoppingCart(customer);
cart.addProduct(product1);
cart.addProduct(product2);
var order = cart.checkout();
document.getElementById("output").innerText =
    "Customer: ".concat(order.customer.name, ", Total: \u20B9").concat(order.getTotal());
