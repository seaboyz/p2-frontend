import { Product } from "src/app/services/product.service";


export interface CartItem extends Product
{
    quantity: number
}
