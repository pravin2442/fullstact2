import { Product } from "./product";
import { Customer } from "./customer";
export class Order {
    constructor(public customer: Customer, public products: Product[]) {}

    getTotal(): number {
        return this.products.reduce((total, p) => total + p.price, 0);
    }
}
