import React from 'react'
import { useParams, Link } from 'react-router-dom';
import CartContext from '../context/CartContext'
import { Container, Row, Col, Pagination } from 'react-bootstrap';

const Details = () => {
    const { id } = useParams();

    const { products, cart, addProductToCart, removeProductFromCart } = React.useContext(CartContext);

    const res = products.find(res => res.id === Number(id));
    const cartItem = cart.find(r => r.product.id === Number(id));

    return (
        <Container>
            <Row>
                {res &&
                    <>
                        <Col md={12}><h1 className="text-center">{res.heading}</h1></Col>
                        <Col md={4}>
                            <img src={res.imgUrl} alt="loading..." className="w-100" />
                        </Col>
                        <Col md={2} className="mt-4 mt-md-0">
                            <Pagination className="justify-content-center">
                                <Pagination.Item onClick={() => removeProductFromCart(res.id)}>-</Pagination.Item>
                                <Pagination.Item>{cartItem ? cartItem.quantity : 0}</Pagination.Item>
                                <Pagination.Item onClick={() => addProductToCart(res)}>+</Pagination.Item>
                            </Pagination>
                        </Col>
                        <Col md={6}>
                            {res.description}
                        </Col>
                    </>
                }
            </Row>
            <Row>
                <Col md={12}>
                    <Link to="/" className="btn btn-secondary mt-4 mt-md-0">Go Back</Link>
                </Col>
            </Row>
        </Container>
    );
}

export default Details;