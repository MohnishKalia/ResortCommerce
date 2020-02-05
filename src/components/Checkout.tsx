import React from 'react'
import { Container, Form, Button, Dropdown, DropdownButton } from 'react-bootstrap'
const Checkout = () => {
    const [ph, setPh] = React.useState(123_456_7890);
    return (
        <Container>
            <Form>
                <Form.Group>
                    <Form.Label>Phone Number:{' '}{ph}</Form.Label>
                    <Form.Control type="range" min={100_000_0000} max={999_999_9999} onChange={(event: React.FormEvent<HTMLInputElement>) => setPh(event.currentTarget.valueAsNumber)} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>What is your age?</Form.Label>
                    <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                        {Array(100).fill(0).map((_, idx) => idx).map(i =>
                            <Dropdown.Item>{i}</Dropdown.Item>
                        )}
                    </DropdownButton>
                </Form.Group>
                <Form.Group>
                    <Form.Check label="I understand that there is no actual transaction here" />
                </Form.Group>
                <Form.Group>
                    <Form.Check label="I get that none of this data is tangible to input and should be taken as a joke" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Phone # Again</Form.Label>
                    <Form.Control type="password" min={1000000000} max={9999999999} />
                </Form.Group>
            </Form>
            <Button variant="primary">"""Pay"""</Button>
        </Container>
    )
}

export default Checkout;