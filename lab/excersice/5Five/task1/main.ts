import { Product } from "./product";
import { Customer } from "./customer";
import { ECommerceSystem } from "./shoppingCart";

const product1 = new Product(1, "Laptop", 80000);
const product2 = new Product(2, "Mouse", 500);

const customer = new Customer(101, "Anjali");

const cart = new ECommerceSystem.ShoppingCart(customer);
cart.addProduct(product1);
cart.addProduct(product2);

const order = cart.checkout();

document.getElementById("output")!.innerText =
    `Customer: ${order.customer.name}, Total: ₹${order.getTotal()}`;
