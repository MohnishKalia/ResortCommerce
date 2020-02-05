import React from 'react'
import { useParams, Link } from 'react-router-dom';
import CartContext from '../CartContext'
import { Container, Row, Col, Pagination } from 'react-bootstrap';
import { Resort } from '../Items';

const Details = () => {
    const { id } = useParams();
    const [resorts, setResorts] = React.useContext(CartContext);
    const manip = (res: Resort, amt: number) => {
        if (res.quantity + amt < 0) return;
        setResorts(
            [
                {
                    imgUrl: res.imgUrl,
                    id: res.id,
                    heading: res.heading,
                    description: res.description,
                    quantity: res.quantity + amt
                }
                , ...resorts.filter(rese => rese.id.toString() !== id)
            ]
        )
    }

    return (
        <Container>
            <Row>
                {resorts.filter(res => res.id.toString() === id).map(res =>
                    <React.Fragment key={res.id}>
                        <Col md={12}><h1 className="text-center">{res.heading}</h1></Col>
                        <Col md={4}>
                            <img src={res.imgUrl} alt="loading..." className="w-100" />
                        </Col>
                        <Col md={2} className="mt-4 mt-md-0">
                            <Pagination className="justify-content-center">
                                <Pagination.Item onClick={() => manip(res, -1)}>-</Pagination.Item>
                                <Pagination.Item>{res.quantity}</Pagination.Item>
                                <Pagination.Item onClick={() => manip(res, 1)}>+</Pagination.Item>
                            </Pagination>
                        </Col>
                        <Col md={6}>
                            {res.description}
                        </Col>
                    </React.Fragment>
                )}
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