import React from 'react'
import { Container, Form, Button, Dropdown, DropdownButton } from 'react-bootstrap'
const Checkout = () => {
    const [ph, setPh] = React.useState(1234567890);
    const fakePay = () => {
        const supportedInstruments = [{
            supportedMethods: ['basic-card'],
            data: {
                supportedNetworks: [
                    'diners', 'jcb', 'unionpay'
                ]
            }
        }];

        // Checkout details
        const details = {
            displayItems: [{
                label: 'Mr. Snugglepuffs\' amount',
                amount: { currency: 'USD', value: '65.00' }
            }, {
                label: 'Life insurance savings',
                amount: { currency: 'GBP', value: '-15.00' }
            }],
            total: {
                label: 'Total due',
                amount: { currency: 'RUB', value: '55.00' }
            }
        };

        // 1. Create a `PaymentRequest` instance
        const request = new PaymentRequest(supportedInstruments, details);

        // 2. Show the native UI with `.show()`
        request.show()
            .then(result => result.complete('fail'));
    }
    return (
        <Container>
            <Form>
                <Form.Group>
                    <Form.Label>Phone Number:{' '}{ph}</Form.Label>
                    <Form.Control type="range" min={1000000000} max={9999999999} onChange={(event: React.FormEvent<HTMLInputElement>) => setPh(event.currentTarget.valueAsNumber)} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>What is your age?</Form.Label>
                    <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                        {Array(100).fill(0).map((_, idx) => idx).map(i =>
                            <Dropdown.Item key={i}>{i}</Dropdown.Item>
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
            <Button variant="primary" onClick={() => fakePay()}>"""Pay"""</Button>
        </Container>
    )
}

export default Checkout;