"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ECommerceSystem = void 0;
var order_1 = require("./order");
var ECommerceSystem;
(function (ECommerceSystem) {
    var ShoppingCart = /** @class */ (function () {
        function ShoppingCart(customer) {
            this.customer = customer;
            this.cart = [];
        }
        ShoppingCart.prototype.addProduct = function (product) {
            this.cart.push(product);
        };
        ShoppingCart.prototype.checkout = function () {
            return new order_1.Order(this.customer, this.cart);
        };
        return ShoppingCart;
    }());
    ECommerceSystem.ShoppingCart = ShoppingCart;
})(ECommerceSystem || (exports.ECommerceSystem = ECommerceSystem = {}));
