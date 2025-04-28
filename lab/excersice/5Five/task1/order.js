"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
var Order = /** @class */ (function () {
    function Order(customer, products) {
        this.customer = customer;
        this.products = products;
    }
    Order.prototype.getTotal = function () {
        return this.products.reduce(function (total, p) { return total + p.price; }, 0);
    };
    return Order;
}());
exports.Order = Order;
