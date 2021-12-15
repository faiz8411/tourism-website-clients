import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import './Features.css'

const Features = () => {
    return (
        <div className='mt-5'>
            <h2>this is features</h2>
            <CardGroup>
                <Card>
                    <Card.Img variant="top" src="https://i.ibb.co/TYQhLZz/drangarnir-faroe-islands-l.jpg" />

                </Card>
                <Card>
                    <Card.Img variant="top" className='fareo-Images' src="https://i.ibb.co/d4fHyrx/5cd9522593a1526fee255ea4-jfif.jpg" />
                    <Card.Body>
                        <Card.Title>Fareo island</Card.Title>
                        <Card.Text className='fareo-island'>
                            The Faroe Islands is a self-governing archipelago, part of the Kingdom of Denmark. It comprises 18 rocky, volcanic islands between Iceland and Norway in the North Atlantic Ocean, connected by road tunnels, ferries, causeways and bridges. Hikers and bird-watchers are drawn to the islands’ mountains, valleys and grassy heathland, and steep coastal cliffs that harbor thousands of seabirds.
                        </Card.Text>
                    </Card.Body>

                </Card>
                <Card>
                    <Card.Img variant="top" src="https://i.ibb.co/bgf91M0/pexels-photo-3278215.jpg" />

                </Card>
            </CardGroup>
        </div>
    );
};

export default Features;