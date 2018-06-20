import React from 'react';
import Hero from '../components/Hero';
import Container from '../components/Container';
import Row from "../components/Row";
import Col from "../components/Col";

const About = () =>
    <div>
        <Hero backgroundImage="https://i.imgur.com/qkdpN.jpg">
            <h1> Pupster </h1>
            <h2> They're the Good Boys and Girls</h2>
        </Hero>
        <Container style={{ marginTop: 30 }}>
            <Row>
                <Col size="md-12">
                    <h1> Welcome to Pupster!</h1>
                </Col>
            </Row>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
         non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
         </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
         non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
         </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
         non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
         </p>

        </Container>
    </div>


export default About;

