import React from 'react';
import { Container, Row, Col, Card, Button, Form, Table } from 'react-bootstrap';
import Title from './Title';
import mockData from "../data/MOCK_DATA.json";

const pageTitle = "Financial Dashboard";

const Dashboard = () => {

    const data = mockData;

    const receivableData = data.map(x=>x.balance).slice(0, 10).reduce((a, b) => a + b, 0)

    const payableData = data.map(x=>x.balance).slice(10, 20).reduce((a, b) => a + b, 0)



    return (

        <>

            <Container fluid>

                <Title title={pageTitle} />


                <Row className='m-3'>
                    <Col>

                        <Card>

                            <Card.Header>
                                Total Receivables
                            </Card.Header>

                            <Card.Body>
                                


                               Total Receivable:  R <b>{receivableData}</b>


                                      



                            </Card.Body>

                        </Card>

                    </Col>

                    <Col xs={2}>
                    </Col>

                    <Col>
                        <Card>

                            <Card.Header>
                                Total Payables
                            </Card.Header>

                            <Card.Body>

                                Total Payable:  R <b>{payableData}</b>

                            </Card.Body>


                        </Card>
                    </Col>
                </Row>

            </Container>


        </>

    );
}

export default Dashboard;