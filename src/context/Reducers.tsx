import { Resort } from '../Items';
import { Shop } from './CartContext'

const addProductToCart = (product: Resort, state: Shop): Shop => {
    const updatedCart = [...state.cart];
    const updatedItemIndex = updatedCart.findIndex(
        item => item.product.id === product.id
    );

    if (updatedItemIndex < 0) {
        updatedCart.push({ product, quantity: 1 });
    } else {
        const updatedItem = updatedCart[updatedItemIndex];
        updatedItem.quantity++;
        updatedCart[updatedItemIndex] = updatedItem;
    }
    return { ...state, cart: updatedCart };
};

const removeProductFromCart = (productId: number, state: Shop): Shop => {
    console.log('Removing product with id: ' + productId);
    const updatedCart = [...state.cart];
    const updatedItemIndex = updatedCart.findIndex(item => item.product.id === productId);

    const updatedItem = {
        ...updatedCart[updatedItemIndex]
    };
    updatedItem.quantity--;
    if (updatedItem.quantity <= 0) {
        updatedCart.splice(updatedItemIndex, 1);
    } else {
        updatedCart[updatedItemIndex] = updatedItem;
    }
    return { ...state, cart: updatedCart };
};

export type Action =
    | { type: "ADD_PRODUCT"; product: Resort }
    | { type: "REMOVE_PRODUCT"; productId: number };

const ShopReducer = (state: Shop, action: Action): Shop => {
    switch (action.type) {
        case 'ADD_PRODUCT':
            return addProductToCart(action.product, state);
        case 'REMOVE_PRODUCT':
            return removeProductFromCart(action.productId, state);
        default:
            console.error('Invalid action.')
            return state;
    }
};

export default ShopReducer;
