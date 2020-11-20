import React, { Component } from 'react'

import {Jumbotron, Container, Row, Col} from 'react-bootstrap';
import './Home.css';

// there it is. I'll remove unused imports for now
// just use Row
// yeah I was testing
export default class Home extends Component {
    render() {
        return (
            <Container>
                <Jumbotron className="padding-top-md bg-gray">
                    <Row>
                        <Col className="col-4 "> 
                            <img className="profile-photo float-right" src="/assets/photos/profile-photo.jpg" alt="profile"/>
                        </Col>
                        <Col>
                            <h4 className="orange-light">Full-stack Engineer</h4>
                            <h5 className="md-font light-gray"><strong>Based in US, I'm both an engineer and an artist</strong></h5>
                            <p className="sm-font light-gray">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd.</p>

                            <p className="sm-font orange-light">
                            P: +1 (000) 111 2222
                            <br/>E: email@gmail.com
                            </p> 
                        </Col>
                    </Row>
                </Jumbotron>

                <Row>
                    <Col>
                    <h2 className="orange-light">About Me</h2>
                    <p className="sm-font light-gray">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd.</p>
                    <p className="sm-font light-gray float-right">Let's achieve together!</p>
                    </Col>
                    <Col>
                    <h1 className="fnt-pacifico orange-light float-right">Want More?</h1>
                    </Col>
                </Row>
            </Container>
        )
    }
}
