import React from "react";
import { Resort } from '../Items'
import { Action } from './Reducers'

export type Shop = {
    products: Resort[],
    cart: { product: Resort, quantity: number }[],
    addProductToCart: (product: Resort) => void,
    removeProductFromCart: (productId: number) => void,
}

export const CartContext = React.createContext<Shop>({
    products: [],
    cart: [],
    addProductToCart: product => { },
    removeProductFromCart: productId => { },
});

export default CartContext;