import { Row, Col, Card, Button } from 'react-bootstrap';

export default () => {
    return <div style={{ marginBottom: '320px' }}>
        <h3>Projects</h3>
        <div style={{ color: "black" }}>
            <Col>
                <Row>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>Medical Interaction App</Card.Title>
                                <Card.Text>
                                    Patient, Doctor and Family member interactive portal
                                </Card.Text>
                                <Button onClick={() => window.open("https://github.com/neuhausm/CMProjectMedical_App")} variant="primary">Show</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>Monte Carlo</Card.Title>
                                <Card.Text>
                                    Integral Evaluation using the Monte Carlo Method
                                </Card.Text>
                                <Button onClick={() => window.open("www.https://github.com/neuhausm/MonteCarlo.com")} variant="primary">Show</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Col>
        </div>
    </div>
}