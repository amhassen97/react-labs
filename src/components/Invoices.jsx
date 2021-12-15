import React from 'react';
import { Container, Row, Col, Card, Button, Form, Table } from 'react-bootstrap';
import Title from './Title';
import mockData from "../data/MOCK_DATA.json";
import InfoCard from './InfoCard';

const pageTitle = "All Invoices";

function add(accumulator, a) {
    return accumulator + a;
}



const Invoices = () => {

    const data = mockData;


    return (

        <>

            <Container fluid>

                <Title title={pageTitle} />


                <Row className='m-3'>
                    <Col>
                        <InfoCard cardTitle={"Outstanding"} cardSubtitle={"Outstanding"} amount={"1000"} />
                    </Col>

                    <Col >
                        <InfoCard cardTitle={"Due Within 30 Days"} cardSubtitle={"Due Within 30 Days"} amount={"1000"} />
                    </Col>

                    <Col>
                        <InfoCard cardTitle={"Due Today"} cardSubtitle={"Due Today"} amount={"1000"} />

                    </Col>

                    <Col>
                        <InfoCard cardTitle={"Total Overdue"} cardSubtitle={"Total Overdue"} amount={"1000"} />
                    </Col>

                </Row>


                <Row>
                    <Col>
                        <Card>


                            <Table>
                                <thead>
                                    <tr>
                                        <th>Date</th>
                                        <th>Invoice No</th>
                                        <th>Customer</th>
                                        <th>Status</th>
                                        <th>Due Date</th>
                                        <th>Amount</th>
                                        <th>Balance</th>
                                    </tr>
                                </thead>

                                <tbody>

                                    {data.map((x, i) => {


                                        return (

                                            <tr key={x.invoice_no}>
                                                <td>{new Date(x.date).toLocaleDateString()}</td>
                                                <td>{x.invoice_no}</td>
                                                <td>{x.customer}</td>
                                                <td>{x.status == 1 ? "Paid" : "Unpaid"}</td>
                                                <td>{new Date(x.due_date).toLocaleDateString()}</td>
                                                <td>R{x.amount}</td>
                                                <td>R{x.balance}</td>
                                            </tr>

                                        )
                                    })}



                                </tbody>

                            </Table>

                        </Card>
                    </Col>
                </Row>

            </Container>


        </>

    );
}

export default Invoices;