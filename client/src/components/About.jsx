import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const About =()=> {
    return (
        <>
        <Container style={{marginTop: "50px"}}>
            <h1>Where we are</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur delectus dolorem quaerat est molestias, debitis eius officiis? Error alias nostrum repellat earum esse aliquam molestias, culpa possimus ratione laudantium blanditiis!</p>
             <h1>Our Speciality</h1>
             <Row>
                <Col md={6}>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat iusto at reiciendis! Saepe repudiandae nostrum atque! Porro cumque iste voluptate delectus eius soluta sit vel, ex ullam officia perferendis, facere dolorum? .</p>
                </Col>
                <Col md={6}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ipsa dignissimos aliquid eum nihil velit. Soluta reprehenderit nesciunt corrupti libero iure enim aperiam, quibusdam, sint minus beatae unde officiis nostrum?</p>
                </Col>
             </Row>
             <Row>
                <h1>Our Cheif</h1>
                <Col md={3}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi quos quis laboriosam velit. Necessitatibus provident alias dolores quia. Dolor ullam dolores voluptatum nobis officia quo perferendis quibusdam culpa possimus nam.
                </Col>
                <Col md={3}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi quos quis laboriosam velit. Necessitatibus provident alias dolores quia. Dolor ullam dolores voluptatum nobis officia quo perferendis quibusdam culpa possimus nam.
                </Col>
                <Col md={3}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi quos quis laboriosam velit. Necessitatibus provident alias dolores quia. Dolor ullam dolores voluptatum nobis officia quo perferendis quibusdam culpa possimus nam.
                </Col>
                <Col md={3}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi quos quis laboriosam velit. Necessitatibus provident alias dolores quia. Dolor ullam dolores voluptatum nobis officia quo perferendis quibusdam culpa possimus nam.
                </Col>
                <Col md={3}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi quos quis laboriosam velit. Necessitatibus provident alias dolores quia. Dolor ullam dolores voluptatum nobis officia quo perferendis quibusdam culpa possimus nam.
                </Col>
             </Row>
        </Container>
        </>
    );
};

export default About;