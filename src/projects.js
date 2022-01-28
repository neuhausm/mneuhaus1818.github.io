import {Row, Col, Card, Button} from 'react-bootstrap';

export default () => {
    return <div style={{marginBottom: '320px'}}>
        <h3>Projects</h3>
        <div style={{color: "black"}}>
            <Col>
                <Row>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>Project 1</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on
                                </Card.Text>
                                <Button onClick={() => window.open("www.google.com")} variant="primary">Show</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>Project 2</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on
                                </Card.Text>
                                <Button  onClick={() => window.open("www.google.com")} variant="primary">Show</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>Project 3</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on
                                </Card.Text>
                                <Button  onClick={() => window.open("www.google.com")} variant="primary">Show</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col />
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>Project 4</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on
                                </Card.Text>
                                <Button  onClick={() => window.open("www.google.com")} variant="primary">Show</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>Project 5</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on
                                </Card.Text>
                                <Button  onClick={() => window.open("www.google.com")} variant="primary">Show</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col />
                </Row>
            </Col>
        </div>
    </div>
}