import React from 'react'
import { Table, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import CartContext from '../CartContext'

const Cart = () => {
    const [resorts] = React.useContext(CartContext);
    return (
        <Container>
            <Table responsive="md">
                <thead>
                    <tr>
                        {['Resort', 'Description', 'Qty.'].map(title =>
                            <th key={title}>{title}</th>
                        )}
                    </tr>
                </thead>
                <tbody>
                    {resorts.map(({ heading, description, quantity }) =>
                        <React.Fragment key={heading}>
                            {quantity > 0 &&
                                <tr>
                                    <td>{heading}</td>
                                    <td className="text-truncate" style={{ maxWidth: '30vw' }}>{description}</td>
                                    <td>{quantity}</td>
                                </tr>
                            }
                        </React.Fragment>
                    )}
                </tbody>
            </Table>
            <Link to="/checkout" className="btn btn-secondary mt-3">Confirm and Checkout</Link>
        </Container>
    )
}

export default Cart;