import React, { Component } from 'react'

import {Jumbotron, Container, Row, Col, Image, Button} from 'react-bootstrap';
import './Home.css';


export default class Home extends Component {
    render() {
        return (
            <Container>
                <Jumbotron>
                    <h2>Welcome to My portfolio</h2>
                    <p>Test para</p>
                </Jumbotron>
            </Container>
        )
    }
}
