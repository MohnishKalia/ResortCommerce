import React from 'react'
import { Pagination } from 'react-bootstrap'
import CartContext from '../context/CartContext';
const ResortQuantity: React.FC<{ resId: number }> = ({ resId }) => {
    const { products, cart, addProductToCart, removeProductFromCart } = React.useContext(CartContext);

    const cartItem = cart.find(r => r.product.id === resId);
    const res = products.find(res => res.id === resId)!;

    return (
        <Pagination className="justify-content-center">
            <Pagination.Item onClick={() => removeProductFromCart(resId)}>-</Pagination.Item>
            <Pagination.Item>{cartItem ? cartItem.quantity : 0}</Pagination.Item>
            <Pagination.Item onClick={() => addProductToCart(res)}>+</Pagination.Item>
        </Pagination>
    );
}

export default ResortQuantity;