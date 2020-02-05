import React from 'react'
import { Container, Carousel, Card, CardColumns } from 'react-bootstrap'
import CartContext from '../CartContext'
import Burj from '../images/burj.jpg'
import NYSE from '../images/ny-stock-exchange-2.jpg'
import SE from '../images/stockmarket.jpg'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item style={{ backgroundImage: `url(${NYSE})` }}>
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{ backgroundImage: `url(${SE})` }}>
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{ backgroundImage: `url(${Burj})` }}>
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <h1 className="my-5 text-center text-capitalize">Check out our full resort lineup</h1>
            <Container>
                <CardColumns>
                    <CartContext.Consumer>
                        {([resorts]) =>
                            resorts.map(({ id, imgUrl, heading, description }) =>
                                <Card>
                                    <Card.Img variant="top" src={imgUrl} />
                                    <Card.Body>
                                        <Card.Title>{heading}</Card.Title>
                                        <Card.Text className="text-truncate">{description}</Card.Text>
                                    </Card.Body>
                                    <Card.Footer className="text-center">
                                        <Link to={`/details/${id}`} className="btn btn-primary">View Resort</Link>
                                    </Card.Footer>
                                </Card>
                            )
                        }
                    </CartContext.Consumer>
                </CardColumns>
            </Container>
        </>
    )
}

export default Home;