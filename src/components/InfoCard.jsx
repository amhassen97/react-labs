import React from 'react';
import {Card } from 'react-bootstrap';


const InfoCard = ({ cardTitle, cardSubtitle, amount }) => {
    return (


        <>

            <Card>

                <Card.Header>
                    {cardTitle}
                </Card.Header>

                <Card.Body>

                    <h3>
                        R{amount}
                    </h3>

                    {cardSubtitle}





                </Card.Body>


            </Card>

        </>

    );
}

export default InfoCard;