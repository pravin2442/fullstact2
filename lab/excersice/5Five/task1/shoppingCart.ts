import { Product } from "./product";
import { Customer } from "./customer";
import { Order } from "./order";

export namespace ECommerceSystem {
    export class ShoppingCart {
        private cart: Product[] = [];

        constructor(public customer: Customer) {}

        addProduct(product: Product): void {
            this.cart.push(product);
        }

        checkout(): Order {
            return new Order(this.customer, this.cart);
        }
    }
}
